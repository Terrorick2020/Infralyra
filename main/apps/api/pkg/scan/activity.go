package scan

import (
	"time"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

type ifaceResult struct {
	stats IfaceStats
	err   error
}

func GetInterfacesActivity() ([]IfaceStats, error) {
	var results []IfaceStats

	devices, err := pcap.FindAllDevs()
	if err != nil {
		return results, err
	}

	ch := make(chan ifaceResult)
	defer close(ch)

	for _, dev := range devices {
		if len(dev.Addresses) == 0 {
			continue
		}

		dev := dev
		go func() {
			handle, err := pcap.OpenLive(dev.Name, 1600, true, pcap.BlockForever)
			if err != nil {
				ch <- ifaceResult{err: err}
				return
			}
			defer handle.Close()

			var bytesIn, bytesOut, packetsIn, packetsOut uint64
			mac := ""

			packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
			timeout := time.After(1 * time.Second)

		LOOP:
			for {
				select {
				case pkt := <-packetSource.Packets():
					if pkt == nil {
						continue
					}

					length := uint64(len(pkt.Data()))
					ethLayer := pkt.Layer(layers.LayerTypeEthernet)
					if ethLayer != nil {
						eth := ethLayer.(*layers.Ethernet)

						if mac == "" {
							mac = eth.SrcMAC.String()
						}

						if eth.SrcMAC.String() == mac {
							bytesOut += length
							packetsOut++
						} else {
							bytesIn += length
							packetsIn++
						}
					} else {
						bytesIn += length
						packetsIn++
					}

				case <-timeout:
					break LOOP
				}
			}

			ch <- ifaceResult{
				stats: IfaceStats{
					PCAPName:   dev.Name,
					BytesSent:  bytesOut,
					BytesRecv:  bytesIn,
					SentSpeed:  float64(bytesOut) / 1024.0,
					RecvSpeed:  float64(bytesIn) / 1024.0,
					PacketsIn:  packetsIn,
					PacketsOut: packetsOut,
				},
			}
		}()
	}

	count := 0
	for range devices {
		if len(devices[count].Addresses) == 0 {
			count++
			continue
		}
		res := <-ch
		if res.err == nil {
			results = append(results, res.stats)
		}
		count++
	}

	return results, nil
}
