"use client";

import { useState, useEffect, useId } from 'react';
import type { InterfaceInfo, IfaceStats } from '.';

export const MOCK_INTERFACES: InterfaceInfo[] = [
  {
    pcapName: "\\Device\\NPF_{8C4A9B1D-1122-3344-5566-778899AABBCC}",
    description: "Loopback Interface",
    localName: "lo",
    mac: "00:00:00:00:00:00",
    mtu: 65536,
    index: 1,
    flags: ["broadcast", "loopback"],
    type: "loopback",
    ips: [{ ip: "127.0.0.1", netmask: "255.0.0.0" }]
  },
  {
    pcapName: "\\Device\\NPF_{A1B2C3D4-5566-7788-99AA-BBCCDDEEFF00}",
    description: "Intel I211 Gigabit Network Connection",
    localName: "eth0",
    mac: "A4:BB:6D:8F:12:3C",
    mtu: 1500,
    index: 2,
    flags: ["up", "broadcast", "multicast"],
    type: "ethernet",
    ips: [{ ip: "192.168.1.42", netmask: "255.255.255.0", broadcast: "192.168.1.255" }]
  },
  {
    pcapName: "\\Device\\NPF_{E5F6A7B8-9900-1122-3344-5566778899AA}",
    description: "Realtek RTL8822BE 802.11ac Wireless Adapter",
    localName: "wlan0",
    mac: "F0:2F:4B:9A:0C:1E",
    mtu: 1500,
    index: 3,
    flags: ["up", "broadcast", "multicast"],
    type: "wireless",
    ips: [{ ip: "10.0.0.15", netmask: "255.255.255.0", broadcast: "10.0.0.255" }]
  },
  {
    pcapName: "\\Device\\NPF_{11223344-5566-7788-99AA-BBCCDDEEFF01}",
    description: "Docker Bridge Network",
    localName: "docker0",
    mac: "02:42:AC:11:00:01",
    mtu: 1500,
    index: 4,
    flags: ["up", "broadcast", "multicast"],
    type: "bridge",
    ips: [{ ip: "172.17.0.1", netmask: "255.255.0.0" }]
  },
  {
    pcapName: "\\Device\\NPF_{99887766-5544-3322-1100-AABBCCDDEEFF}",
    description: "OpenVPN Tunnel Interface",
    localName: "tun0",
    mac: "",
    mtu: 1500,
    index: 5,
    flags: ["point-to-point", "multicast", "noarp"],
    type: "tunnel",
    ips: []
  }
];

export const generateInitialStats = (interfaces: InterfaceInfo[]): IfaceStats[] =>
  interfaces.map(iface => {
    const isActive = iface.flags?.includes("up");
    const baseSent = isActive ? Math.floor(Math.random() * 500_000_000) : 0;
    const baseRecv = isActive ? Math.floor(Math.random() * 1_200_000_000) : 0;
    
    return {
      pcapName: iface.pcapName,
      bytesSent: baseSent,
      bytesRecv: baseRecv,
      sentSpeedKbps: isActive ? Math.random() * 100 : 0,
      recvSpeedKbps: isActive ? Math.random() * 300 : 0,
      packetsIn: isActive ? Math.floor(Math.random() * 50_000) : 0,
      packetsOut: isActive ? Math.floor(Math.random() * 10_000) : 0
    };
  });

export function useNetworkData({ intervalMs = 1500, enableLive = true } = {}) {
  const idKey = useId();
  const [interfaces] = useState<InterfaceInfo[]>(MOCK_INTERFACES);
  const [stats, setStats] = useState<IfaceStats[]>(() => generateInitialStats(MOCK_INTERFACES));

  useEffect(() => {
    if (!enableLive) return;

    const timer = setInterval(() => {
      setStats(prev =>
        prev.map(s => {
          const iface = interfaces.find(i => i.pcapName === s.pcapName);
          const isActive = iface?.flags?.includes("up");

          if (!isActive) return s;

          const recvSpeed = Math.max(0, s.recvSpeedKbps + (Math.random() * 400 - 200));
          const sentSpeed = Math.max(0, s.sentSpeedKbps + (Math.random() * 200 - 100));
          
          return {
            ...s,
            recvSpeedKbps: recvSpeed,
            sentSpeedKbps: sentSpeed,
            bytesRecv: s.bytesRecv + Math.floor((recvSpeed * 1000 / 8) * (intervalMs / 1000)),
            bytesSent: s.bytesSent + Math.floor((sentSpeed * 1000 / 8) * (intervalMs / 1000)),
            packetsIn: s.packetsIn + Math.floor(Math.random() * 50),
            packetsOut: s.packetsOut + Math.floor(Math.random() * 30)
          };
        })
      );
    }, intervalMs);

    return () => clearInterval(timer);
  }, [enableLive, intervalMs, interfaces]);

  return { idKey, interfaces, stats };
}
