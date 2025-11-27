package scanner

import "time"

type ServiceInfo struct {
	Port     int
	Protocol string
	Banner   string
	Version  string
}

type SNMPInterface struct {
    Index        int
    Name         string
    MAC          string
    MTU          int
    Speed        uint64
    AdminStatus  string
    OperStatus   string
}

type SNMPData struct {
    SysName        string
    SysDescr       string
    SysObjectID    string
    SysContact     string
    SysLocation    string
    Uptime         uint64

    Interfaces     []SNMPInterface
    SerialNumber   string
    Model          string
    Vendor         string
    Firmware       string
}

type HostInfo struct {
	IP       string
	MAC      string
	Vendor   string
	Hostname string
	Alive    bool

	// Fingerprinting
	OS         string
	OSAccuracy int
	TTL        int
	Latency    int64 // наносекунды
	Distance   int   // hop count (обычно 1)

	// Ports & services
	OpenPorts []int
	Services  map[int]ServiceInfo

	// Network metadata
	NetBIOSName string
	Workgroup   string
	SMBVersion  string
	SNMPInfo    SNMPData
	MDNS        []string
	UPnP        []string

	// Protocol banners
	HTTPBanner   string
	SSHBanner    string
	TLSSignature string

	// Device type guess
	DeviceType string

	// Extra
	FirstSeen time.Time
	LastSeen  time.Time
}
