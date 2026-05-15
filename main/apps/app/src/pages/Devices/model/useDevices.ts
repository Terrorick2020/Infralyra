"use client";

import { useId, useState, useEffect } from "react";
import type { DeviceWithIp } from ".";

export const MOCK_DEVICES: DeviceWithIp[] = [
  // 1. Ubuntu PC
  {
    device: {
      ip: "192.168.1.10",
      mac: "00:1A:2B:3C:4D:10",
      alive: true,
      hostname: "personal-computer-01",

      os: "Ubuntu 22.04",
      osTtl: 64,
      osMethod: "TCP SYN",

      services: [
        {
          port: 22,
          protocol: "TCP",
          product: "OpenSSH",
          version: "9.0",
          banner: "SSH-2.0-OpenSSH_9.0",
        },
        {
          port: 631,
          protocol: "TCP",
          product: "CUPS",
          version: "2.4",
          banner: "IPP Printing",
        },
      ],

      iot: "",
      snmp: "disabled",
      mdns: "enabled",
      ssdp: "enabled",
      webStack: "nginx",
    },
    interface: {
      name: "eth0",
      description: "Ethernet",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 10]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 10]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 2. Windows laptop
  {
    device: {
      ip: "192.168.1.11",
      mac: "00:1A:2B:3C:4D:11",
      alive: true,
      hostname: "laptop-01",

      os: "Windows 11/10",
      osTtl: 128,
      osMethod: "ICMP Echo",

      services: [
        {
          port: 445,
          protocol: "TCP",
          product: "SMB",
          version: "3.1.1",
          banner: "Windows SMB",
        },
      ],

      iot: "",
      snmp: "disabled",
      mdns: "enabled",
      ssdp: "enabled",
      webStack: "IIS",
    },
    interface: {
      name: "wifi0",
      description: "Wi-Fi",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 11]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 11]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 3. Android phone
  {
    device: {
      ip: "192.168.1.20",
      mac: "AA:BB:CC:DD:EE:01",
      alive: true,
      hostname: "mobile-phone-01",

      os: "Android 14",
      osTtl: 64,
      osMethod: "ICMP",

      services: [],
      iot: "mobile",
      snmp: "disabled",
      mdns: "enabled",
      ssdp: "enabled",
      webStack: "",
    },
    interface: {
      name: "wlan0",
      description: "Wi-Fi",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 20]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 20]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  {
    device: {
      ip: "192.168.1.30",
      mac: "AA:BB:CC:DD:EE:02",
      alive: true,
      hostname: "iot-signal-sensor-01",

      os: "RTOS",
      osTtl: 255,
      osMethod: "ARP",

      services: [
        {
          port: 80,
          protocol: "TCP",
          product: "Embedded HTTP",
          version: "1.0",
          banner: "IoT Web UI",
        },
      ],

      iot: "sensor",
      snmp: "limited",
      mdns: "enabled",
      ssdp: "disabled",
      webStack: "lighttpd",
    },
    interface: {
      name: "eth0",
      description: "IoT Ethernet",
      flags: 4099,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 30]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 30]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 5. Network printer
  {
    device: {
      ip: "192.168.1.40",
      mac: "DE:AD:BE:EF:00:01",
      alive: true,
      hostname: "printer-01",

      os: "Embedded Linux",
      osTtl: 255,
      osMethod: "SNMP",

      services: [
        {
          port: 80,
          protocol: "TCP",
          product: "Web UI",
          version: "2.0",
          banner: "Printer Admin",
        },
        {
          port: 9100,
          protocol: "TCP",
          product: "JetDirect",
          version: "1.0",
          banner: "RAW Printing",
        },
      ],

      iot: "printer",
      snmp: "enabled",
      mdns: "enabled",
      ssdp: "enabled",
      webStack: "nginx",
    },
    interface: {
      name: "eth0",
      description: "Ethernet",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 40]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 40]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  {
    device: {
      ip: "192.168.1.41",
      mac: "DE:AD:BE:EF:00:02",
      alive: true,
      hostname: "scanner-01",

      os: "Embedded Linux",
      osTtl: 255,
      osMethod: "SNMP",

      services: [
        {
          port: 80,
          protocol: "TCP",
          product: "Scan Web UI",
          version: "1.3",
          banner: "Scanner Admin",
        },
      ],

      iot: "scanner",
      snmp: "enabled",
      mdns: "enabled",
      ssdp: "enabled",
      webStack: "lighttpd",
    },
    interface: {
      name: "eth0",
      description: "Ethernet",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 41]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 41]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 7. File server
  {
    device: {
      ip: "192.168.1.50",
      mac: "00:AA:BB:CC:DD:50",
      alive: true,
      hostname: "file-server-01",

      os: "Ubuntu Server 22.04",
      osTtl: 64,
      osMethod: "TCP SYN",

      services: [
        {
          port: 22,
          protocol: "TCP",
          product: "OpenSSH",
          version: "9.0",
          banner: "SSH",
        },
        {
          port: 445,
          protocol: "TCP",
          product: "Samba",
          version: "4.15",
          banner: "SMB File Share",
        },
        {
          port: 2049,
          protocol: "TCP",
          product: "NFS",
          version: "4",
          banner: "NFS Share",
        },
      ],

      iot: "",
      snmp: "enabled",
      mdns: "disabled",
      ssdp: "disabled",
      webStack: "nginx",
    },
    interface: {
      name: "eth0",
      description: "Server NIC",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 50]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 50]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 8. Web server (Debian)
  {
    device: {
      ip: "192.168.1.60",
      mac: "00:AA:BB:CC:DD:60",
      alive: true,
      hostname: "web-server-01",

      os: "Debian 12",
      osTtl: 64,
      osMethod: "TCP SYN",

      services: [
        {
          port: 80,
          protocol: "TCP",
          product: "nginx",
          version: "1.24",
          banner: "HTTP Server",
        },
        {
          port: 443,
          protocol: "TCP",
          product: "nginx",
          version: "1.24",
          banner: "HTTPS Server",
        },
      ],

      iot: "",
      snmp: "enabled",
      mdns: "disabled",
      ssdp: "disabled",
      webStack: "nginx + node",
    },
    interface: {
      name: "eth0",
      description: "Server NIC",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 60]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 60]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 9. Remote access server
  {
    device: {
      ip: "192.168.1.70",
      mac: "00:AA:BB:CC:DD:70",
      alive: true,
      hostname: "remote-access-server-01",

      os: "Debian 12",
      osTtl: 64,
      osMethod: "TCP SYN",

      services: [
        {
          port: 22,
          protocol: "TCP",
          product: "OpenSSH",
          version: "9.2",
          banner: "SSH VPN Gateway",
        },
        {
          port: 1194,
          protocol: "UDP",
          product: "OpenVPN",
          version: "2.6",
          banner: "VPN Service",
        },
      ],

      iot: "",
      snmp: "enabled",
      mdns: "disabled",
      ssdp: "disabled",
      webStack: "",
    },
    interface: {
      name: "eth0",
      description: "Server NIC",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 70]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 70]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },

  // 10. Gateway / router
  {
    device: {
      ip: "192.168.1.1",
      mac: "00:11:22:33:44:55",
      alive: true,
      hostname: "router",

      os: "RouterOS",
      osTtl: 255,
      osMethod: "ICMP",

      services: [
        {
          port: 80,
          protocol: "TCP",
          product: "Router UI",
          version: "1.0",
          banner: "Admin Panel",
        },
        {
          port: 53,
          protocol: "UDP",
          product: "DNS",
          version: "1.0",
          banner: "DNS Resolver",
        },
      ],

      iot: "gateway",
      snmp: "enabled",
      mdns: "enabled",
      ssdp: "enabled",
      webStack: "embedded",
    },
    interface: {
      name: "wan0",
      description: "Router WAN/LAN",
      flags: 4163,
      addresses: [
        {
          ip: new Uint8Array([192, 168, 1, 1]),
          netmask: new Uint8Array([255, 255, 255, 0]),
        },
      ],
    },
    net: {
      IP: new Uint8Array([192, 168, 1, 1]),
      Mask: new Uint8Array([255, 255, 255, 0]),
    },
  },
];

export function useDevices() {
  const idKey = useId();
  const [devices, setDevices] = useState<DeviceWithIp[]>([]);

  const asyncSetDevices = async () => {
    setDevices(MOCK_DEVICES);
  };

  useEffect(() => {
    asyncSetDevices();
  }, []);

  return { idKey, devices };
}
