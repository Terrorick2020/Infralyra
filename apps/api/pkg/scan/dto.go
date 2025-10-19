package scan

type IPAddress struct {
	IP      string `json:"ip"`
	Netmask string `json:"netmask,omitempty"`
	Broad   string `json:"broadcast,omitempty"`
}

type InterfaceInfo struct {
	PCAPName    string      `json:"pcap_name"`
	Description string      `json:"description,omitempty"`
	LocalName   string      `json:"local_name,omitempty"`
	MAC         string      `json:"mac,omitempty"`
	MTU         int         `json:"mtu,omitempty"`
	Index       int         `json:"index,omitempty"`
	Flags       []string    `json:"flags,omitempty"`
	Type        string      `json:"type,omitempty"`
	IPs         []IPAddress `json:"ips,omitempty"`
}

type IfaceStats struct {
	PCAPName   string  `json:"pcap_name"`
	BytesSent  uint64  `json:"bytes_sent"`
	BytesRecv  uint64  `json:"bytes_recv"`
	SentSpeed  float64 `json:"sent_speed_kbps"`
	RecvSpeed  float64 `json:"recv_speed_kbps"`
	PacketsIn  uint64  `json:"packets_in"`
	PacketsOut uint64  `json:"packets_out"`
}
