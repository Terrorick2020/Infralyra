package scan

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
