import type { PacketInfo, DeviceWithIp } from '.';

export const InterFontVarName = '--font-inter';
export const CraftworkFontVarName = '--font-craftwork';

export const pack_ui: PacketInfo[] = [
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "00:1A:2B:3C:4D:5E", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.2",
      dstIP: "192.168.103.11",
      protocol: "UDP",
    },
    transport: { proto: "UDP", srcPort: 5683, dstPort: 5353 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "00:1A:2B:3C:4D:5E", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.3",
      dstIP: "192.168.103.11",
      protocol: "TCP",
    },
    transport: { proto: "TCP", srcPort: 80, dstPort: 80 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "AA:BB:CC:DD:EE:FF", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.2",
      dstIP: "192.168.103.11",
      protocol: "TCP",
    },
    transport: { proto: "TCP", srcPort: 80, dstPort: 80 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "12:34:56:78:9A:BC", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.5",
      dstIP: "192.168.103.11",
      protocol: "ICMP",
    },
    transport: { proto: "ICMP", srcPort: 0, dstPort: 0 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "12:34:56:78:9A:BC", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.5",
      dstIP: "192.168.103.11",
      protocol: "TCP",
    },
    transport: { proto: "ICMP", srcPort: 0, dstPort: 0 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "00:AA:BB:CC:DD:EE", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.6",
      dstIP: "192.168.103.11",
      protocol: "TCP",
    },
    transport: { proto: "TCP", srcPort: 53000, dstPort: 443 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "01:23:45:67:89:AB", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.0.7",
      dstIP: "192.168.103.11",
      protocol: "UDP",
    },
    transport: { proto: "UDP", srcPort: 5683, dstPort: 5353 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "FE:DC:BA:98:76:54", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.2",
      dstIP: "192.168.103.11",
      protocol: "TCP",
    },
    transport: { proto: "TCP", srcPort: 8080, dstPort: 80 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "11:22:33:44:55:66", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.8",
      dstIP: "192.168.103.11",
      protocol: "UDP",
    },
    transport: { proto: "UDP", srcPort: 5683, dstPort: 5353 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
  {
    timestamp: 1715001234567,
    ethernet: { srcMAC: "CA:FE:BA:BE:00:02", dstMAC: "A4:5E:60:12:34:56" },
    network: {
      version: "IPv4",
      srcIP: "192.168.103.9",
      dstIP: "192.168.103.11",
      protocol: "TCP",
    },
    transport: { proto: "TCP", srcPort: 8080, dstPort: 80 },
    application: "dsvsdrbdr ertbrt hre g e",
  },
];

export const getPackUi = () => {
  const min = 1;
  const max = Math.min(3, pack_ui.length);
  const count = Math.floor(Math.random() * (max - min + 1)) + min;

  const shuffled = [...pack_ui];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

export const dev_ui: DeviceWithIp[] = [
  // 1. Ubuntu PC
  {
    device: {
      ip: "192.168.103.2",
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
      ip: "192.168.103.3",
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
      ip: "192.168.103.4",
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
      ip: "192.168.103.5",
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
      ip: "192.168.103.6",
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
      ip: "192.168.103.7",
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
      ip: "192.168.103.8",
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
      ip: "192.168.103.9",
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
      ip: "192.168.103.10",
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
];


export const getDevUi = () => {
  const min = 1;
  const max = Math.min(3, dev_ui.length);
  const count = Math.floor(Math.random() * (max - min + 1)) + min;

  const shuffled = [...dev_ui];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
