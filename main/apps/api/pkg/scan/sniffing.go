package scan

import (
	"fmt"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

func GetPacketsInfo(iface string, payloadLimit int) (<-chan PacketInfo, error) {
	snaplen := int32(65536)
	promisc := true
	timeout := pcap.BlockForever

	handle, err := pcap.OpenLive(iface, snaplen, promisc, timeout)
	if err != nil {
		return nil, fmt.Errorf("Ошибка при открытии интерфейса: %v", err)
	}

	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
	out := make(chan PacketInfo)

	go func() {
		defer handle.Close()
		defer close(out)

		for pkt := range packetSource.Packets() {
			var pi PacketInfo

			if eth := pkt.Layer(layers.LayerTypeEthernet); eth != nil {
				e := eth.(*layers.Ethernet)
				pi.Ethernet.SrcMAC = e.SrcMAC.String()
				pi.Ethernet.DstMAC = e.DstMAC.String()
			}

			if ip4 := pkt.Layer(layers.LayerTypeIPv4); ip4 != nil {
				ip := ip4.(*layers.IPv4)
				pi.Network.Version = "IPv4"
				pi.Network.SrcIP = ip.SrcIP.String()
				pi.Network.DstIP = ip.DstIP.String()
				pi.Network.Protocol = ip.Protocol.String()
			} else if ip6 := pkt.Layer(layers.LayerTypeIPv6); ip6 != nil {
				ip := ip6.(*layers.IPv6)
				pi.Network.Version = "IPv6"
				pi.Network.SrcIP = ip.SrcIP.String()
				pi.Network.DstIP = ip.DstIP.String()
				pi.Network.Protocol = ip.NextHeader.String()
			}

			if tcp := pkt.Layer(layers.LayerTypeTCP); tcp != nil {
				t := tcp.(*layers.TCP)
				pi.Transport.Proto = "TCP"
				pi.Transport.SrcPort = uint16(t.SrcPort)
				pi.Transport.DstPort = uint16(t.DstPort)
			} else if udp := pkt.Layer(layers.LayerTypeUDP); udp != nil {
				u := udp.(*layers.UDP)
				pi.Transport.Proto = "UDP"
				pi.Transport.SrcPort = uint16(u.SrcPort)
				pi.Transport.DstPort = uint16(u.DstPort)
			} else if icmp := pkt.Layer(layers.LayerTypeICMPv4); icmp != nil {
				pi.Transport.Proto = "ICMP"
			}

			if app := pkt.ApplicationLayer(); app != nil {
				data := app.Payload()
				if len(data) > payloadLimit {
					data = data[:payloadLimit]
				}
				pi.Application = data
			}

			out <- pi
		}
	}()

	return out, nil
}
