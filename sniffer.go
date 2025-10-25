package main

import (
	"fmt"
	"log"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

func main() {

	iface := "\\Device\\NPF_{9784300F-C2FF-48C5-BCAB-2BDCF0BB315A}"
	handle, err := pcap.OpenLive(iface, 1600, true, pcap.BlockForever)
	if err != nil {
		log.Fatal(err)
	}
	defer handle.Close()

	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
	for packet := range packetSource.Packets() {
		// Ethernet уровень
		ethernetLayer := packet.Layer(layers.LayerTypeEthernet)
		if ethernetLayer != nil {
			eth := ethernetLayer.(*layers.Ethernet)
			fmt.Printf("Ethernet: %s -> %s\n", eth.SrcMAC, eth.DstMAC)
		}

		// IP уровень
		ipLayer := packet.Layer(layers.LayerTypeIPv4)
		if ipLayer != nil {
			ip := ipLayer.(*layers.IPv4)
			fmt.Printf("IPv4: %s -> %s\n", ip.SrcIP, ip.DstIP)
		}

		// TCP уровень
		tcpLayer := packet.Layer(layers.LayerTypeTCP)
		if tcpLayer != nil {
			tcp := tcpLayer.(*layers.TCP)
			fmt.Printf("TCP: %d -> %d\n", tcp.SrcPort, tcp.DstPort)

			// Простейшая проверка на HTTP
			applicationLayer := packet.ApplicationLayer()
			if applicationLayer != nil {
				payload := applicationLayer.Payload()
				if len(payload) > 0 && (payload[0] == 'G' || payload[0] == 'P') {
					fmt.Printf("HTTP payload: %s\n", string(payload))
				}
			}
		}

		// UDP уровень
		udpLayer := packet.Layer(layers.LayerTypeUDP)
		if udpLayer != nil {
			udp := udpLayer.(*layers.UDP)
			fmt.Printf("UDP: %d -> %d\n", udp.SrcPort, udp.DstPort)
		}

		fmt.Println("-----")
	}
}

// import (
// 	"encoding/json"
// 	"fmt"
// 	"log"
// 	"net"

// 	"github.com/google/gopacket/pcap"
// )

// type IPAddress struct {
// 	IP      string `json:"ip"`
// 	Netmask string `json:"netmask,omitempty"`
// 	Broad   string `json:"broadcast,omitempty"`
// }

// type InterfaceInfo struct {
// 	PCAPName    string      `json:"pcap_name"`
// 	Description string      `json:"description,omitempty"`
// 	LocalName   string      `json:"local_name,omitempty"`
// 	MAC         string      `json:"mac,omitempty"`
// 	MTU         int         `json:"mtu,omitempty"`
// 	Index       int         `json:"index,omitempty"`
// 	Flags       []string    `json:"flags,omitempty"`
// 	Type        string      `json:"type,omitempty"`
// 	IPs         []IPAddress `json:"ips,omitempty"`
// }

// func main() {
// 	devices, err := pcap.FindAllDevs()
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	localIfs, err := net.Interfaces()
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	var result []InterfaceInfo

// 	for _, dev := range devices {
// 		info := InterfaceInfo{
// 			PCAPName:    dev.Name,
// 			Description: dev.Description,
// 		}

// 		// IP-адреса pcap
// 		var ips []IPAddress
// 		for _, addr := range dev.Addresses {
// 			ipAddr := IPAddress{
// 				IP: addr.IP.String(),
// 			}
// 			if addr.Netmask != nil {
// 				ipAddr.Netmask = addr.Netmask.String()
// 			}
// 			if addr.Broadaddr != nil {
// 				ipAddr.Broad = addr.Broadaddr.String()
// 			}
// 			ips = append(ips, ipAddr)

// 			// сопоставляем с локальным интерфейсом по IP
// 			for _, local := range localIfs {
// 				addrs, _ := local.Addrs()
// 				for _, a := range addrs {
// 					ip, _, err := net.ParseCIDR(a.String())
// 					if err != nil {
// 						continue
// 					}
// 					if ip.Equal(addr.IP) {
// 						info.LocalName = local.Name
// 						info.MAC = local.HardwareAddr.String()
// 						info.MTU = local.MTU
// 						info.Index = local.Index
// 						info.Flags = parseFlags(local.Flags)
// 						info.Type = detectType(local.Name, local.Flags)
// 					}
// 				}
// 			}
// 		}
// 		info.IPs = ips
// 		result = append(result, info)
// 	}

// 	jsonData, err := json.MarshalIndent(result, "", "  ")
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	fmt.Println(string(jsonData))
// }

// func parseFlags(f net.Flags) []string {
// 	var flags []string
// 	if f&net.FlagUp != 0 {
// 		flags = append(flags, "up")
// 	}
// 	if f&net.FlagBroadcast != 0 {
// 		flags = append(flags, "broadcast")
// 	}
// 	if f&net.FlagLoopback != 0 {
// 		flags = append(flags, "loopback")
// 	}
// 	if f&net.FlagPointToPoint != 0 {
// 		flags = append(flags, "point-to-point")
// 	}
// 	if f&net.FlagMulticast != 0 {
// 		flags = append(flags, "multicast")
// 	}
// 	return flags
// }

// func detectType(name string, f net.Flags) string {
// 	if f&net.FlagLoopback != 0 {
// 		return "loopback"
// 	}
// 	if name == "Ethernet" || name == "eth0" || name[:3] == "en" {
// 		return "ethernet"
// 	}
// 	if name == "Wi-Fi" || name[:2] == "wl" {
// 		return "wifi"
// 	}
// 	return "unknown"
// }


// import (
// 	"encoding/json"
// 	"fmt"
// 	"log"
// 	"time"

// 	"github.com/google/gopacket"
// 	"github.com/google/gopacket/layers"
// 	"github.com/google/gopacket/pcap"
// )

// type IfaceStats struct {
// 	Name       string  `json:"name"`
// 	BytesSent  uint64  `json:"bytes_sent"`
// 	BytesRecv  uint64  `json:"bytes_recv"`
// 	SentSpeed  float64 `json:"sent_speed_kbps"`
// 	RecvSpeed  float64 `json:"recv_speed_kbps"`
// 	PacketsIn  uint64  `json:"packets_in"`
// 	PacketsOut uint64  `json:"packets_out"`
// }

// func main() {
// 	devices, err := pcap.FindAllDevs()
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	handles := make(map[string]*pcap.Handle)
// 	defer func() {
// 		for _, h := range handles {
// 			h.Close()
// 		}
// 	}()

// 	macs := make(map[string]string)

// 	// Открываем интерфейсы и сохраняем MAC адрес
// 	for _, dev := range devices {
// 		if len(dev.Addresses) == 0 {
// 			continue
// 		}

// 		handle, err := pcap.OpenLive(dev.Name, 1600, true, pcap.BlockForever)
// 		if err != nil {
// 			continue
// 		}
// 		handles[dev.Name] = handle

// 		// Берём первый MAC из Ethernet пакетов
// 		macs[dev.Name] = ""
// 	}

// 	prevStats := make(map[string]IfaceStats)

// 	for {
// 		currStats := make(map[string]IfaceStats)

// 		for name, handle := range handles {
// 			var bytesIn, bytesOut, packetsIn, packetsOut uint64

// 			packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
// 			timeout := time.After(1 * time.Second)

// 		loop:
// 			for {
// 				select {
// 				case pkt := <-packetSource.Packets():
// 					if pkt == nil {
// 						continue
// 					}

// 					length := uint64(len(pkt.Data()))
// 					ethLayer := pkt.Layer(layers.LayerTypeEthernet)
// 					if ethLayer != nil {
// 						eth := ethLayer.(*layers.Ethernet)
// 						// Если src == интерфейс — это исходящий пакет
// 						// Если dst == интерфейс — входящий пакет
// 						if macs[name] == "" {
// 							// Первый пакет используем для определения MAC
// 							macs[name] = eth.SrcMAC.String()
// 						}

// 						if eth.SrcMAC.String() == macs[name] {
// 							bytesOut += length
// 							packetsOut++
// 						} else {
// 							bytesIn += length
// 							packetsIn++
// 						}
// 					} else {
// 						// Без Ethernet — считаем как входящий
// 						bytesIn += length
// 						packetsIn++
// 					}

// 				case <-timeout:
// 					break loop
// 				}
// 			}

// 			prev := prevStats[name]
// 			currStats[name] = IfaceStats{
// 				Name:       name,
// 				BytesSent:  bytesOut,
// 				BytesRecv:  bytesIn,
// 				SentSpeed:  float64(bytesOut-prev.BytesSent) / 1024.0,
// 				RecvSpeed:  float64(bytesIn-prev.BytesRecv) / 1024.0,
// 				PacketsIn:  packetsIn,
// 				PacketsOut: packetsOut,
// 			}

// 			prevStats[name] = currStats[name]
// 		}

// 		var results []IfaceStats
// 		for _, s := range currStats {
// 			results = append(results, s)
// 		}

// 		jsonData, _ := json.MarshalIndent(results, "", "  ")
// 		fmt.Println(string(jsonData))
// 	}
// }
