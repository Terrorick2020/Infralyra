package scanner

import "net"

type Scanner struct {
	iface   *net.Interface
	network *net.IPNet
}
