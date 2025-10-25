package main

import (
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"sync"
	"time"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

// FlowStats хранит агрегированную информацию по flow
type FlowStats struct {
	FlowKey     string    `json:"flow_key"`
	Proto       string    `json:"proto"`        // TCP/UDP/ICMP
	AppProto    string    `json:"app_proto"`    // HTTP/DNS/TLS/QUIC/etc
	SrcMAC      string    `json:"src_mac,omitempty"`
	DstMAC      string    `json:"dst_mac,omitempty"`
	SrcIP       string    `json:"src_ip"`
	DstIP       string    `json:"dst_ip"`
	SrcPort     uint16    `json:"src_port,omitempty"`
	DstPort     uint16    `json:"dst_port,omitempty"`
	Packets     uint64    `json:"packets"`
	Bytes       uint64    `json:"bytes"`
	FirstSeen   time.Time `json:"first_seen"`
	LastSeen    time.Time `json:"last_seen"`
	Extra       string    `json:"extra,omitempty"` // e.g. DNS name or HTTP host
}

// Container for concurrent access
type FlowsStore struct {
	mu    sync.Mutex
	flows map[string]*FlowStats
}

func NewFlowsStore() *FlowsStore {
	return &FlowsStore{
		flows: make(map[string]*FlowStats),
	}
}

func (s *FlowsStore) Update(fs *FlowStats) {
	s.mu.Lock()
	defer s.mu.Unlock()
	key := fs.FlowKey
	existing, ok := s.flows[key]
	if !ok {
		// copy
		copy := *fs
		s.flows[key] = &copy
		return
	}
	// aggregate
	existing.Packets += fs.Packets
	existing.Bytes += fs.Bytes
	if fs.FirstSeen.Before(existing.FirstSeen) {
		existing.FirstSeen = fs.FirstSeen
	}
	if fs.LastSeen.After(existing.LastSeen) {
		existing.LastSeen = fs.LastSeen
	}
	// keep app proto / extra if present
	if existing.AppProto == "" && fs.AppProto != "" {
		existing.AppProto = fs.AppProto
	}
	if existing.Extra == "" && fs.Extra != "" {
		existing.Extra = fs.Extra
	}
	if existing.SrcMAC == "" && fs.SrcMAC != "" {
		existing.SrcMAC = fs.SrcMAC
	}
	if existing.DstMAC == "" && fs.DstMAC != "" {
		existing.DstMAC = fs.DstMAC
	}
}

func (s *FlowsStore) SnapshotAndReset() []*FlowStats {
	s.mu.Lock()
	defer s.mu.Unlock()
	out := make([]*FlowStats, 0, len(s.flows))
	for _, v := range s.flows {
		copy := *v
		out = append(out, &copy)
	}
	// optional: keep flows; here мы не удаляем, просто возвращаем snapshot
	return out
}

func main() {
	iface := "\\Device\\NPF_Loopback" // замените на свой
	snaplen := int32(65536)
	promisc := true
	timeout := pcap.BlockForever

	handle, err := pcap.OpenLive(iface, snaplen, promisc, timeout)
	if err != nil {
		log.Fatalf("OpenLive: %v", err)
	}
	defer handle.Close()

	// optional: фильтр, чтобы уменьшить шум
	// handle.SetBPFFilter("tcp or udp or icmp")

	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
	packets := packetSource.Packets()

	store := NewFlowsStore()

	// воркер по печати JSON каждые 5 сек
	go func() {
		t := time.NewTicker(5 * time.Second)
		for range t.C {
			snap := store.SnapshotAndReset()
			js, _ := json.MarshalIndent(snap, "", "  ")
			fmt.Println(string(js))
		}
	}()

	for pkt := range packets {
		now := time.Now()
		length := uint64(len(pkt.Data()))

		printPacketLayers(pkt)

		var srcMAC, dstMAC string
		if eth := pkt.Layer(layers.LayerTypeEthernet); eth != nil {
			e := eth.(*layers.Ethernet)
			srcMAC = e.SrcMAC.String()
			dstMAC = e.DstMAC.String()
		}

		// IPv4
		if ip4 := pkt.Layer(layers.LayerTypeIPv4); ip4 != nil {
			ip := ip4.(*layers.IPv4)
			// TCP
			if tcpL := pkt.Layer(layers.LayerTypeTCP); tcpL != nil {
				tcp := tcpL.(*layers.TCP)
				flowKey := fmtFlowKey(ip.SrcIP.String(), uint16(tcp.SrcPort), ip.DstIP.String(), uint16(tcp.DstPort), "TCP")
				appProto, extra := detectAppProtoFromTCP(tcp, pkt)
				fs := &FlowStats{
					FlowKey:   flowKey,
					Proto:     "TCP",
					AppProto:  appProto,
					SrcMAC:    srcMAC,
					DstMAC:    dstMAC,
					SrcIP:     ip.SrcIP.String(),
					DstIP:     ip.DstIP.String(),
					SrcPort:   uint16(tcp.SrcPort),
					DstPort:   uint16(tcp.DstPort),
					Packets:   1,
					Bytes:     length,
					FirstSeen: now,
					LastSeen:  now,
					Extra:     extra,
				}
				store.Update(fs)
				continue
			}
			// UDP
			if udpL := pkt.Layer(layers.LayerTypeUDP); udpL != nil {
				udp := udpL.(*layers.UDP)
				flowKey := fmtFlowKey(ip.SrcIP.String(), uint16(udp.SrcPort), ip.DstIP.String(), uint16(udp.DstPort), "UDP")
				appProto, extra := detectAppProtoFromUDP(udp, pkt)
				fs := &FlowStats{
					FlowKey:   flowKey,
					Proto:     "UDP",
					AppProto:  appProto,
					SrcMAC:    srcMAC,
					DstMAC:    dstMAC,
					SrcIP:     ip.SrcIP.String(),
					DstIP:     ip.DstIP.String(),
					SrcPort:   uint16(udp.SrcPort),
					DstPort:   uint16(udp.DstPort),
					Packets:   1,
					Bytes:     length,
					FirstSeen: now,
					LastSeen:  now,
					Extra:     extra,
				}
				store.Update(fs)
				continue
			}
			// ICMPv4
			if icmp := pkt.Layer(layers.LayerTypeICMPv4); icmp != nil {
				// icmp layer can be parsed for type/code
				flowKey := fmt.Sprintf("%s-%s-ICMP", ip.SrcIP.String(), ip.DstIP.String())
				fs := &FlowStats{
					FlowKey:   flowKey,
					Proto:     "ICMP",
					SrcMAC:    srcMAC,
					DstMAC:    dstMAC,
					SrcIP:     ip.SrcIP.String(),
					DstIP:     ip.DstIP.String(),
					Packets:   1,
					Bytes:     length,
					FirstSeen: now,
					LastSeen:  now,
				}
				store.Update(fs)
				continue
			}
		}

		// IPv6
		if ip6 := pkt.Layer(layers.LayerTypeIPv6); ip6 != nil {
			ip := ip6.(*layers.IPv6)
			// TCP
			if tcpL := pkt.Layer(layers.LayerTypeTCP); tcpL != nil {
				tcp := tcpL.(*layers.TCP)
				flowKey := fmtFlowKey(ip.SrcIP.String(), uint16(tcp.SrcPort), ip.DstIP.String(), uint16(tcp.DstPort), "TCP")
				appProto, extra := detectAppProtoFromTCP(tcp, pkt)
				fs := &FlowStats{
					FlowKey:   flowKey,
					Proto:     "TCP",
					AppProto:  appProto,
					SrcMAC:    srcMAC,
					DstMAC:    dstMAC,
					SrcIP:     ip.SrcIP.String(),
					DstIP:     ip.DstIP.String(),
					SrcPort:   uint16(tcp.SrcPort),
					DstPort:   uint16(tcp.DstPort),
					Packets:   1,
					Bytes:     length,
					FirstSeen: now,
					LastSeen:  now,
					Extra:     extra,
				}
				store.Update(fs)
				continue
			}
			// UDP
			if udpL := pkt.Layer(layers.LayerTypeUDP); udpL != nil {
				udp := udpL.(*layers.UDP)
				flowKey := fmtFlowKey(ip.SrcIP.String(), uint16(udp.SrcPort), ip.DstIP.String(), uint16(udp.DstPort), "UDP")
				appProto, extra := detectAppProtoFromUDP(udp, pkt)
				fs := &FlowStats{
					FlowKey:   flowKey,
					Proto:     "UDP",
					AppProto:  appProto,
					SrcMAC:    srcMAC,
					DstMAC:    dstMAC,
					SrcIP:     ip.SrcIP.String(),
					DstIP:     ip.DstIP.String(),
					SrcPort:   uint16(udp.SrcPort),
					DstPort:   uint16(udp.DstPort),
					Packets:   1,
					Bytes:     length,
					FirstSeen: now,
					LastSeen:  now,
					Extra:     extra,
				}
				store.Update(fs)
				continue
			}
		}
	}
}

// fmtFlowKey формирует ключ потока (симметричный? тут направленный)
func fmtFlowKey(srcIP string, srcPort uint16, dstIP string, dstPort uint16, proto string) string {
	return fmt.Sprintf("%s:%d-%s:%d-%s", srcIP, srcPort, dstIP, dstPort, proto)
}

// detectAppProtoFromTCP пытается угадать прикладной протокол по TCP
func detectAppProtoFromTCP(tcp *layers.TCP, pkt gopacket.Packet) (string, string) {
	// payload внутри TCP
	app := pkt.ApplicationLayer()
	payload := []byte(nil)
	if app != nil {
		payload = app.Payload()
	}

	// common ports
	dst := uint16(tcp.DstPort)
	src := uint16(tcp.SrcPort)

	// HTTP (plaintext)
	if dst == 80 || src == 80 || hasHTTPPrefix(payload) {
		host := extractHTTPHost(payload)
		return "HTTP", host
	}
	// HTTPS/TLS
	if dst == 443 || src == 443 || looksLikeTLSHandshake(payload) {
		// можно парсить ClientHello для SNI (опция)
		sni := extractSNI(payload)
		return "TLS", sni
	}
	// SSH
	if dst == 22 || src == 22 {
		return "SSH", ""
	}
	// SMTP/POP/IMAP common ports as example
	if dst == 25 || src == 25 {
		return "SMTP", ""
	}
	return "TCP", ""
}

// detectAppProtoFromUDP пытается угадать прикладной протокол по UDP
func detectAppProtoFromUDP(udp *layers.UDP, pkt gopacket.Packet) (string, string) {
	app := pkt.ApplicationLayer()
	payload := []byte(nil)
	if app != nil {
		payload = app.Payload()
	}
	fmt.Println(payload)
	dst := uint16(udp.DstPort)
	src := uint16(udp.SrcPort)

	// DNS
	if dst == 53 || src == 53 {
		// пробуем распарсить DNS
		if dnsLayer := pkt.Layer(layers.LayerTypeDNS); dnsLayer != nil {
			dns := dnsLayer.(*layers.DNS)
			// берем первое имя
			if len(dns.Questions) > 0 {
				return "DNS", string(dns.Questions[0].Name)
			}
		}
		return "DNS", ""
	}
	// QUIC (обычно UDP/443)
	if dst == 443 || src == 443 {
		return "QUIC/TLS", ""
	}
	// NTP
	if dst == 123 || src == 123 {
		return "NTP", ""
	}
	return "UDP", ""
}

// hasHTTPPrefix простая проверка на HTTP запрос
func hasHTTPPrefix(b []byte) bool {
	if len(b) < 4 {
		return false
	}
	prefix := strings.ToUpper(string(b[:4]))
	return prefix == "GET " || prefix == "POST" || prefix == "HEAD" || prefix == "PUT " || prefix == "DELE"
}

// looksLikeTLSHandshake проверка по первому байту TLS record (0x16 = Handshake)
func looksLikeTLSHandshake(b []byte) bool {
	// TLS Record: ContentType(1) = 0x16 for Handshake
	if len(b) < 1 {
		return false
	}
	return b[0] == 0x16
}

// extractHTTPHost пытается взять Host заголовок из HTTP payload (упрощенно)
func extractHTTPHost(b []byte) string {
	if len(b) == 0 {
		return ""
	}
	s := string(b)
	// ищем "Host:"
	idx := strings.Index(strings.ToLower(s), "\nhost:")
	if idx == -1 {
		// possible start of headers without preceding \n
		idx = strings.Index(strings.ToLower(s), "host:")
	}
	if idx != -1 {
		rest := s[idx:]
		parts := strings.SplitN(rest, "\r\n", 2)
		if len(parts) > 0 {
			line := strings.TrimSpace(parts[0])
			// line like "Host: example.com"
			parts2 := strings.SplitN(line, ":", 2)
			if len(parts2) == 2 {
				return strings.TrimSpace(parts2[1])
			}
		}
	}
	return ""
}

// extractSNI упрощённо пытается извлечь SNI из ClientHello payload (работает только если payload содержит ClientHello подряд)
func extractSNI(b []byte) string {
	// Полный парсер TLS ClientHello длинный — здесь простая heuristics:
	// ищем байтовую последовательность "server_name" внутри payload (extension name) и пытаемся извлечь строку после длины.
	// Это НЕ полностью корректно, но часто срабатывает.
	if len(b) < 5 {
		return ""
	}
	// quick check: TLS Handshake (0x16) then HandshakeType ClientHello (0x01)
	if b[0] != 0x16 {
		return ""
	}
	// naive search for "server_name" (0x00 0x00?) but easier: search ascii "server_name"
	idx := strings.Index(string(b), "server_name")
	if idx == -1 {
		return ""
	}
	// после "server_name" в реальном расширении идет структура с длинами; искать ближайший printable домен
	rest := b[idx+11:]
	// find sequence of printable chars with dot
	s := string(rest)
	// find first substring with dot and letters
	for i := 0; i < len(s); i++ {
		for j := i + 3; j < len(s) && j < i+256; j++ {
			sub := s[i:j]
			if strings.Contains(sub, ".") && isPrintable(sub) {
				// crude validation
				if len(sub) < 256 {
					return strings.Trim(sub, "\x00")
				}
			}
		}
	}
	return ""
}

func isPrintable(s string) bool {
	for i := 0; i < len(s); i++ {
		c := s[i]
		if c < 32 || c > 126 {
			return false
		}
	}
	return true
}

func printPacketLayers(packet gopacket.Packet) {
	fmt.Println("----- Новый пакет -----")

	var tcp *layers.TCP
	var udp *layers.UDP

	// Получаем TCP и UDP заранее, чтобы определить тип трафика
	if tcpLayer := packet.Layer(layers.LayerTypeTCP); tcpLayer != nil {
		tcp, _ = tcpLayer.(*layers.TCP)
	}
	if udpLayer := packet.Layer(layers.LayerTypeUDP); udpLayer != nil {
		udp, _ = udpLayer.(*layers.UDP)
	}

	// 🧩 Определение типа прикладного протокола (в самом начале)
	if tcp != nil {
		switch {
		case tcp.DstPort == 80 || tcp.SrcPort == 80:
			fmt.Println("Тип трафика: HTTP")
		case tcp.DstPort == 443 || tcp.SrcPort == 443:
			fmt.Println("Тип трафика: HTTPS (TLS)")
		case tcp.DstPort == 21 || tcp.SrcPort == 21:
			fmt.Println("Тип трафика: FTP")
		case tcp.DstPort == 25 || tcp.SrcPort == 25:
			fmt.Println("Тип трафика: SMTP")
		case tcp.DstPort == 22 || tcp.SrcPort == 22:
			fmt.Println("Тип трафика: SSH")
		}
	}

	if udp != nil {
		switch {
		case udp.DstPort == 53 || udp.SrcPort == 53:
			fmt.Println("Тип трафика: DNS")
		case udp.DstPort == 123 || udp.SrcPort == 123:
			fmt.Println("Тип трафика: NTP")
		case udp.DstPort == 67 || udp.SrcPort == 67 || udp.DstPort == 68 || udp.SrcPort == 68:
			fmt.Println("Тип трафика: DHCP")
		case udp.DstPort == 3478 || udp.SrcPort == 3478:
			fmt.Println("Тип трафика: STUN/WebRTC")
		}
	}

	// 1️⃣ Физический уровень
	if ethLayer := packet.Layer(layers.LayerTypeEthernet); ethLayer != nil {
		eth, _ := ethLayer.(*layers.Ethernet)
		fmt.Printf("Физический уровень: Ethernet\n  SrcMAC: %s\n  DstMAC: %s\n", eth.SrcMAC, eth.DstMAC)
	}

	// 2️⃣ Сетевой уровень
	if ip4Layer := packet.Layer(layers.LayerTypeIPv4); ip4Layer != nil {
		ip4, _ := ip4Layer.(*layers.IPv4)
		fmt.Printf("Сетевой уровень: IPv4\n  SrcIP: %s\n  DstIP: %s\n  Протокол: %s\n", ip4.SrcIP, ip4.DstIP, ip4.Protocol)
	} else if ip6Layer := packet.Layer(layers.LayerTypeIPv6); ip6Layer != nil {
		ip6, _ := ip6Layer.(*layers.IPv6)
		fmt.Printf("Сетевой уровень: IPv6\n  SrcIP: %s\n  DstIP: %s\n  Протокол: %s\n", ip6.SrcIP, ip6.DstIP, ip6.NextHeader)
	}

	// 3️⃣ Транспортный уровень
	if tcp != nil {
		fmt.Printf("Транспортный уровень: TCP\n  SrcPort: %d\n  DstPort: %d\n", tcp.SrcPort, tcp.DstPort)
	} else if udp != nil {
		fmt.Printf("Транспортный уровень: UDP\n  SrcPort: %d\n  DstPort: %d\n", udp.SrcPort, udp.DstPort)
	}

	// 4️⃣ Прикладной уровень
	app := packet.ApplicationLayer()
	if app != nil {
		payload := app.Payload()
		if len(payload) > 0 {
			fmt.Printf("Прикладной уровень (первые 50 байт):\n%s\n", string(payload[:min(len(payload), 50)]))
		}
	}

	fmt.Println("------------------------")
}
