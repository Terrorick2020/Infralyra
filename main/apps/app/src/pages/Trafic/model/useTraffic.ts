"use client";

import { useState, useId, useEffect } from 'react';
import type { PacketInfo } from ".";

export const MOCK_PACKETS: PacketInfo[] = [
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "00:1A:2B:3C:4D:5E", dstMAC: "FF:FF:FF:FF:FF:FF" },
    network: { version: "IPv4", srcIP: "192.168.10.1", dstIP: "192.168.0.1", protocol: "UDP" },
    transport: { proto: "UDP", srcPort: 5353, dstPort: 5353 },
    application: new Uint8Array([109, 68, 78, 83])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "00:1A:2B:3C:4D:5E", dstMAC: "A4:5E:60:12:34:56" },
    network: { version: "IPv4", srcIP: "192.168.10.2", dstIP: "8.8.8.8", protocol: "TCP" },
    transport: { proto: "TCP", srcPort: 51234, dstPort: 443 },
    application: new Uint8Array([22, 3, 1, 2, 0])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "AA:BB:CC:DD:EE:FF", dstMAC: "11:22:33:44:55:66" },
    network: { version: "IPv4", srcIP: "192.168.10.1", dstIP: "142.250.74.14", protocol: "TCP" },
    transport: { proto: "TCP", srcPort: 52344, dstPort: 80 },
    application: new Uint8Array([71, 69, 84, 32, 47, 32, 72, 84, 84, 80])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "12:34:56:78:9A:BC", dstMAC: "98:76:54:32:10:FE" },
    network: { version: "IPv4", srcIP: "192.168.10.4", dstIP: "1.1.1.1", protocol: "ICMP" },
    transport: { proto: "ICMP", srcPort: 0, dstPort: 0 },
    application: new Uint8Array([8, 0, 0, 0])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "DE:AD:BE:EF:00:01", dstMAC: "FF:FF:FF:FF:FF:FF" },
    network: { version: "IPv6", srcIP: "fe80::1", dstIP: "ff02::1", protocol: "ICMPv6" },
    transport: { proto: "ICMP", srcPort: 0, dstPort: 0 },
    application: new Uint8Array([128, 0, 0, 0])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "00:AA:BB:CC:DD:EE", dstMAC: "FF:EE:DD:CC:BB:AA" },
    network: { version: "IPv4", srcIP: "192.168.10.5", dstIP: "172.217.16.206", protocol: "TCP" },
    transport: { proto: "TCP", srcPort: 53000, dstPort: 443 },
    application: new Uint8Array([23, 3, 3, 0, 50])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "01:23:45:67:89:AB", dstMAC: "BA:98:76:54:32:10" },
    network: { version: "IPv4", srcIP: "192.168.0.6", dstIP: "224.0.0.251", protocol: "UDP" },
    transport: { proto: "UDP", srcPort: 5353, dstPort: 5353 },
    application: new Uint8Array([0, 0, 0, 0])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "FE:DC:BA:98:76:54", dstMAC: "12:34:56:78:9A:BC" },
    network: { version: "IPv4", srcIP: "192.168.10.1", dstIP: "93.184.216.34", protocol: "TCP" },
    transport: { proto: "TCP", srcPort: 54000, dstPort: 80 },
    application: new Uint8Array([80, 79, 83, 84, 32, 47])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "11:22:33:44:55:66", dstMAC: "66:55:44:33:22:11" },
    network: { version: "IPv4", srcIP: "192.168.10.7", dstIP: "192.168.0.255", protocol: "UDP" },
    transport: { proto: "UDP", srcPort: 68, dstPort: 67 },
    application: new Uint8Array([68, 72, 67, 80])
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "CA:FE:BA:BE:00:02", dstMAC: "DE:AD:BE:EF:00:02" },
    network: { version: "IPv4", srcIP: "192.168.10.6", dstIP: "151.101.1.69", protocol: "TCP" },
    transport: { proto: "TCP", srcPort: 55000, dstPort: 443 },
    application: new Uint8Array([22, 3, 3, 0, 100])
  }
];

export function formatDateTime(ts: number) {
  return new Date(ts).toLocaleString();
}

export function useTraffic() {
  const idKey = useId();
  const [packets, setPackets] = useState<PacketInfo[]>(MOCK_PACKETS);

  const asyncGetTrafic = async () => {
    setPackets(MOCK_PACKETS);
  }

  useEffect(() => {
    asyncGetTrafic();
  }, [])

  return { idKey, packets }
}