package scan

import (
	"crypto/tls"
	"encoding/binary"
	"errors"
	"fmt"
	"net"
	"strings"
	"time"

	"github.com/google/gopacket/pcap"
)

func GetScan(iface string) ([]DeviceWithIp, error) {
	subnet := getSubnet(iface)
	if subnet == nil {
		return []DeviceWithIp{}, errors.New("Подсеть не найдена")
	}

	ips := ipsInSubnet(subnet)
	devices := []DeviceWithIp{}

	for _, ip := range ips {
		device, err := scanIP(ip.String())
		if err != nil {
			continue
		}

		detInter, detNet := detectInterface(iface)

		devices = append(devices, DeviceWithIp{
			Device:    device,
			Interface: detInter,
			Net: detNet,
		})
	}
	
	return devices, nil
}

func getSubnet(ifaceName string) *net.IPNet {
	ifaces, _ := pcap.FindAllDevs()
	for _, iface := range ifaces {
		if iface.Name == ifaceName {
			for _, addr := range iface.Addresses {
				if ip := addr.IP.To4(); ip != nil && addr.Netmask != nil {
					return &net.IPNet{
						IP:   ip.Mask(addr.Netmask),
						Mask: addr.Netmask,
					}
				}
			}
		}
	}
	return nil
}

func ipsInSubnet(ipNet *net.IPNet) []net.IP {
	var ips []net.IP
	ip := ipNet.IP.Mask(ipNet.Mask)
	for ; ipNet.Contains(ip); incIP(ip) {
		tmp := make(net.IP, len(ip))
		copy(tmp, ip)
		ips = append(ips, tmp)
	}

	return ips
}

func incIP(ip net.IP) {
	for j := len(ip) - 1; j >= 0; j-- {
		ip[j]++
		if ip[j] != 0 {
			break
		}
	}
}

func scanIP(ip string) (Device, error) {
	dev := Device{
		IP:       ip,
		MAC:      EmptyDeviceAreaVar,
		Alive:    false,
		Hostname: EmptyDeviceAreaVar,
		OS:       EmptyDeviceAreaVar,
		IoT:      EmptyDeviceAreaVar,
		SNMP:     EmptyDeviceAreaVar,
		MDNS:     EmptyDeviceAreaVar,
		SSDP:     EmptyDeviceAreaVar,
		WebStack: EmptyDeviceAreaVar,
	}

	alive, ttl := ping(ip)

	if !alive {
		return Device{}, errors.New("Не существут ip")
	}


	dev.Alive = alive
	dev.OSTTL = ttl

	if !alive {
		return dev, nil
	}

	dev.OS, dev.OSMethod = detectOS(ttl)
	dev.Hostname = resolveHostname(ip)

	ports := []int{22, 80, 443, 445, 3306, 5432, 6379, 27017, 15672, 9200, 21, 25, 110, 143, 8080}

	for _, p := range ports {
		if portOpen(ip, p) {
			banner := grabBanner(ip, p)
			svc := parseService(p, banner)
			svc.Port = p
			dev.Services = append(dev.Services, svc)

			if p == 443 || p == 8443 {
				dev.TLS = grabTLS(ip, p)
			}

			if p == 80 || p == 8080 || p == 443 {
				ws := detectWeb(ip, p)
				if ws != "" {
					dev.WebStack = ws
				}
			}
		}
	}

	return dev, nil
}

func ping(ip string) (bool, int) {
	conn, err := net.DialTimeout("ip4:icmp", ip, time.Millisecond*500)
	if err != nil {
		return false, 0
	}
	defer conn.Close()

	msg := []byte{
		8, 0, 0, 0, 0, 0, 0, 0,
	}
	binary.BigEndian.PutUint16(msg[2:], checksum(msg))
	conn.SetDeadline(time.Now().Add(time.Second))
	_, err = conn.Write(msg)
	if err != nil {
		return false, 0
	}

	reply := make([]byte, 20+8)
	n, err := conn.Read(reply)
	if err != nil || n < 20 {
		return false, 0
	}

	ttl := int(reply[8])
	return true, ttl
}

func checksum(data []byte) uint16 {
	sum := 0
	for i := 0; i < len(data)-1; i += 2 {
		sum += int(binary.BigEndian.Uint16(data[i : i+2]))
	}
	return uint16(^sum)
}

func detectOS(ttl int) (string, string) {
	switch {
	case ttl >= 240:
		return "Windows", "ttl"
	case ttl >= 120:
		return "Linux", "ttl"
	default:
		return EmptyDeviceAreaVar, "ttl"
	}
}

func resolveHostname(ip string) string {
	names, err := net.LookupAddr(ip)
	if err != nil || len(names) == 0 {
		return EmptyDeviceAreaVar
	}
	return names[0]
}

func portOpen(ip string, port int) bool {
	conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", ip, port), time.Millisecond*300)
	if err != nil {
		return false
	}
	conn.Close()
	return true
}

func grabBanner(ip string, port int) string {
	conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", ip, port), time.Second)
	if err != nil {
		return ""
	}
	defer conn.Close()

	conn.SetReadDeadline(time.Now().Add(time.Second))
	buf := make([]byte, 512)
	n, _ := conn.Read(buf)
	return string(buf[:n])
}

func grabTLS(ip string, port int) *TLSInfo {
	conn, err := tls.Dial("tcp", fmt.Sprintf("%s:%d", ip, port), &tls.Config{InsecureSkipVerify: true})
	if err != nil {
		return &TLSInfo{}
	}
	defer conn.Close()

	state := conn.ConnectionState()
	if len(state.PeerCertificates) == 0 {
		return &TLSInfo{}
	}
	cert := state.PeerCertificates[0]

	return &TLSInfo{
		Version:    tls.VersionName(state.Version),
		Cipher:     tls.CipherSuiteName(state.CipherSuite),
		CommonName: cert.Subject.CommonName,
		Issuer:     cert.Issuer.CommonName,
		ValidFrom:  cert.NotBefore.String(),
		ValidTo:    cert.NotAfter.String(),
	}
}

func detectWeb(ip string, port int) string {
	conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", ip, port), time.Second)
	if err != nil {
		return ""
	}
	defer conn.Close()

	conn.Write([]byte("GET / HTTP/1.1\r\nHost: " + ip + "\r\n\r\n"))
	buf := make([]byte, 2048)
	conn.SetReadDeadline(time.Now().Add(time.Second))
	n, _ := conn.Read(buf)
	data := string(buf[:n])

	switch {
	case strings.Contains(data, "nginx"):
		return "nginx"
	case strings.Contains(data, "Apache"):
		return "apache"
	case strings.Contains(data, "IIS"):
		return "iis"
	case strings.Contains(data, "Jetty"):
		return "jetty"
	case strings.Contains(data, "Caddy"):
		return "caddy"
	}

	return EmptyDeviceAreaVar
}

func parseService(port int, banner string) ServiceInfo {
	s := ServiceInfo{Protocol: "tcp", Product: EmptyDeviceAreaVar, Version: EmptyDeviceAreaVar, Banner: banner}

	if strings.Contains(banner, "OpenSSH") {
		s.Product = "ssh"
	}
	if strings.Contains(banner, "MySQL") {
		s.Product = "mysql"
	}
	if strings.Contains(banner, "PostgreSQL") {
		s.Product = "postgres"
	}
	if strings.Contains(banner, "Redis") {
		s.Product = "redis"
	}

	return s
}

func detectInterface(ifaceName string) (*pcap.Interface, *net.IPNet) {
	ifaces, _ := pcap.FindAllDevs()

	for _, iface := range ifaces {
		if iface.Name != ifaceName {
			continue
		}

		if isVirtual(iface.Name) {
			return nil, nil
		}

		var bestNet *net.IPNet

		for _, addr := range iface.Addresses {
			ip := addr.IP

			if ip.To4() == nil {
				continue
			}

			if ip.IsLoopback() {
				continue
			}

			if ip.IsLinkLocalUnicast() {
				continue
			}

			if addr.Netmask == nil {
				continue
			}

			ipNet := &net.IPNet{
				IP:   ip.Mask(addr.Netmask),
				Mask: addr.Netmask,
			}

			ones, _ := addr.Netmask.Size()

			if ones == 32 {
				continue
			}

			if bestNet == nil || maskRank(ipNet) > maskRank(bestNet) {
				bestNet = ipNet
			}
		}

		if bestNet != nil {
			return &iface, bestNet
		}

		return nil, nil
	}

	return nil, nil
}

func isVirtual(name string) bool {
	name = strings.ToLower(name)
	return strings.Contains(name, "virtual") ||
		strings.Contains(name, "vmware") ||
		strings.Contains(name, "hyper-v") ||
		strings.Contains(name, "npcap loopback") ||
		strings.Contains(name, "loopback") ||
		strings.Contains(name, "docker") ||
		strings.Contains(name, "bridge") ||
		strings.Contains(name, "tap") ||
		strings.Contains(name, "tun")
}

func maskRank(ipNet *net.IPNet) int {
	ones, _ := ipNet.Mask.Size()
	return 32 - ones
}
