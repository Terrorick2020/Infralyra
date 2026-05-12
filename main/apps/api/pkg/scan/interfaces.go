package scan

import (
	"net"
	"strings"

	"github.com/google/gopacket/pcap"
)

func GetInterfacesList() ([]InterfaceInfo, error) {
	var result []InterfaceInfo

	devices, err := pcap.FindAllDevs()
	if err != nil {
		return result, err
	}

	localIfs, err := net.Interfaces()
	if err != nil {
		return result, err
	}

	type ifaceResult struct {
		info InterfaceInfo
		err  error
	}

	ch := make(chan ifaceResult)
	defer close(ch)

	count := 0
	for _, dev := range devices {
		dev := dev
		iface := dev
		go func() {
			info := InterfaceInfo{
				PCAPName:    iface.Name,
				Description: iface.Description,
			}

			var ips []IPAddress
			for _, addr := range iface.Addresses {
				ipAddr := IPAddress{
					IP: addr.IP.String(),
				}

				if addr.Netmask != nil {
					if addr.IP.To4() != nil {
						ipAddr.Netmask = addr.Netmask.String()
					} else {
						ones, _ := addr.Netmask.Size()
						ipAddr.Netmask = string(rune(ones + '0'))
					}
				}

				if addr.Broadaddr != nil {
					ipAddr.Broad = addr.Broadaddr.String()
				}
				ips = append(ips, ipAddr)

				for _, local := range localIfs {
					addrs, _ := local.Addrs()
					for _, a := range addrs {
						ip, _, err := net.ParseCIDR(a.String())
						if err != nil {
							continue
						}
						if ip.Equal(addr.IP) {
							info.LocalName = local.Name
							info.MAC = local.HardwareAddr.String()
							info.MTU = local.MTU
							info.Index = local.Index
							info.Flags = ParseFlags(local.Flags)
							info.Type = DetectType(local.Name, local.Flags)
						}
					}
				}
			}
			info.IPs = ips
			ch <- ifaceResult{info: info}
		}()
		count++
	}

	for i := 0; i < count; i++ {
		res := <-ch
		if res.err == nil {
			result = append(result, res.info)
		}
	}

	return result, nil
}

func ParseFlags(f net.Flags) []string {
	var flags []string
	if f&net.FlagUp != 0 {
		flags = append(flags, "up")
	}
	if f&net.FlagBroadcast != 0 {
		flags = append(flags, "broadcast")
	}
	if f&net.FlagLoopback != 0 {
		flags = append(flags, "loopback")
	}
	if f&net.FlagPointToPoint != 0 {
		flags = append(flags, "point-to-point")
	}
	if f&net.FlagMulticast != 0 {
		flags = append(flags, "multicast")
	}
	return flags
}

func DetectType(name string, f net.Flags) string {
	n := strings.ToLower(name)

	if f&net.FlagLoopback != 0 || n == "lo" || n == "loopback" || strings.HasPrefix(n, "lo:") {
		return "loopback"
	}

	if strings.HasPrefix(n, "veth") || strings.HasPrefix(n, "lxcbr") {
		return "veth"
	}

	if strings.Contains(strings.ToLower(n), "wireless") {
		return "wireless"
	}

	if strings.HasPrefix(n, "docker") || strings.HasPrefix(n, "br-") ||
		strings.HasPrefix(n, "virbr") || strings.HasPrefix(n, "br") ||
		strings.Contains(n, "bridge") {
		return "bridge"
	}

	if strings.HasPrefix(n, "tun") || strings.HasPrefix(n, "tap") ||
		strings.HasPrefix(n, "utun") || strings.HasPrefix(n, "tap") {
		return "tunnel"
	}

	if strings.HasPrefix(n, "wg") {
		return "wireguard"
	}

	if strings.HasPrefix(n, "ipsec") || strings.HasPrefix(n, "vti") {
		return "ipsec"
	}

	if strings.HasPrefix(n, "ppp") || strings.HasPrefix(n, "pptp") || strings.HasPrefix(n, "pppoe") {
		return "ppp"
	}

	if strings.Contains(n, ".") || strings.HasPrefix(n, "vlan") {
		if strings.Contains(n, ".") || (strings.HasPrefix(n, "vlan") && len(n) > 4) {
			return "vlan"
		}
	}

	if strings.HasPrefix(n, "bond") || strings.HasPrefix(n, "team") {
		return "bond"
	}

	if strings.HasPrefix(n, "macvlan") || strings.HasPrefix(n, "macvtap") {
		return "macvlan"
	}

	if strings.HasPrefix(n, "wlan") || strings.HasPrefix(n, "wlp") || strings.HasPrefix(n, "wlx") ||
		strings.HasPrefix(n, "wi-fi") || strings.HasPrefix(n, "wireless") ||
		strings.Contains(n, "802.11") {
		return "wireless"
	}

	if strings.HasPrefix(n, "wwan") || strings.HasPrefix(n, "cdc-wdm") ||
		strings.HasPrefix(n, "rmnet") || strings.HasPrefix(n, "ccmni") {
		return "cellular"
	}

	if strings.HasPrefix(n, "bnep") || strings.HasPrefix(n, "bt-pan") {
		return "bluetooth"
	}

	if strings.HasPrefix(n, "can") {
		return "can"
	}

	if strings.HasPrefix(n, "dummy") {
		return "dummy"
	}

	if strings.HasPrefix(n, "eth") || strings.HasPrefix(n, "enp") ||
		strings.HasPrefix(n, "ens") || strings.HasPrefix(n, "eno") ||
		strings.HasPrefix(n, "enx") || strings.HasPrefix(n, "ethernet") ||
		strings.Contains(n, "local area connection") ||
		(strings.HasPrefix(n, "en") && len(n) <= 4) {
		return "ethernet"
	}

	return "unknown"
}
