package scan

import (
	"net"

	"github.com/google/gopacket/pcap"
)

const (
	EmptyDeviceAreaVar string = "unknown"
)

type IPAddress struct {
	IP      string `json:"ip"`
	Netmask string `json:"netmask,omitempty"`
	Broad   string `json:"broadcast,omitempty"`
}

type InterfaceInfo struct {
	PCAPName    string      `json:"pcapName"`
	Description string      `json:"description,omitempty"`
	LocalName   string      `json:"localName,omitempty"`
	MAC         string      `json:"mac,omitempty"`
	MTU         int         `json:"mtu,omitempty"`
	Index       int         `json:"index,omitempty"`
	Flags       []string    `json:"flags,omitempty"`
	Type        string      `json:"type,omitempty"`
	IPs         []IPAddress `json:"ips,omitempty"`
}

type IfaceStats struct {
	PCAPName   string  `json:"pcapName"`
	BytesSent  uint64  `json:"bytesSent"`
	BytesRecv  uint64  `json:"bytesRecv"`
	SentSpeed  float64 `json:"sentSpeedKbps"`
	RecvSpeed  float64 `json:"recvSpeedKbps"`
	PacketsIn  uint64  `json:"packetsIn"`
	PacketsOut uint64  `json:"packetsOut"`
}

type PacketInfoEther struct {
	SrcMAC string `json:"srcMAC"`
	DstMAC string `json:"dstMAC"`
}

type PacketInfoNet struct {
	Version  string `json:"version"`
	SrcIP    string `json:"srcIP"`
	DstIP    string `json:"dstIP"`
	Protocol string `json:"protocol"`
}

type PacketInfoTrans struct {
	Proto   string `json:"proto"`
	SrcPort uint16 `json:"srcPort"`
	DstPort uint16 `json:"dstPort"`
}

type PacketInfo struct {
	Ethernet    PacketInfoEther `json:"ethernet"`
	Network     PacketInfoNet   `json:"network"`
	Transport   PacketInfoTrans `json:"transport"`
	Application []byte          `json:"application"`
}

type ServiceInfo struct {
	Port     int    `json:"port"`
	Protocol string `json:"protocol"`
	Product  string `json:"product"`
	Version  string `json:"version"`
	Banner   string `json:"banner"`
}

type TLSInfo struct {
	Version    string `json:"version"`
	Cipher     string `json:"cipher"`
	CommonName string `json:"commonName"`
	Issuer     string `json:"issuer"`
	ValidFrom  string `json:"valid_from"`
	ValidTo    string `json:"valid_to"`
}

type Device struct {
	IP       string `json:"ip"`
	MAC      string `json:"mac"`
	Alive    bool   `json:"alive"`
	Hostname string `json:"hostname"`

	OS       string `json:"os"`
	OSTTL    int    `json:"osTtl"`
	OSMethod string `json:"osMethod"`

	Services []ServiceInfo `json:"services"`

	IoT  string `json:"iot"`
	SNMP string `json:"snmp"`
	MDNS string `json:"mdns"`
	SSDP string `json:"ssdp"`

	TLS      *TLSInfo `json:"tls"`
	WebStack string   `json:"webStack"`
}

type DeviceWithIp struct {
	Device    Device          `json:"device"`
	Interface *pcap.Interface `json:"interface"`
	Net       *net.IPNet      `json:"net"`
}
