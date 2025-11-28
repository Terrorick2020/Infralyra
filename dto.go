package scan

type ServiceInfo struct {
    Port     int
    Protocol string
    Product  string
    Version  string
    Banner   string
}

type TLSInfo struct {
    Version   string
    Cipher    string
    CommonName string
    Issuer     string
    ValidFrom  string
    ValidTo    string
}

type Device struct {
    IP       string
    MAC      string
    Alive    bool
    Hostname string

    OS        string
    OSTTL     int
    OSMethod  string

    Services  []ServiceInfo
    IoT       string
    SNMP      string
    MDNS      string
    SSDP      string

    TLS        *TLSInfo
    WebStack   string
}
