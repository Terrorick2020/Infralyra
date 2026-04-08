package scan

import (
	"net"

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
					ipAddr.Netmask = addr.Netmask.String()
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
	if f&net.FlagLoopback != 0 {
		return "loopback"
	}
	if name == "Ethernet" || name == "eth0" || name[:3] == "en" {
		return "ethernet"
	}
	if name == "Wi-Fi" || name[:2] == "wl" {
		return "wifi"
	}
	return "unknown"
}
