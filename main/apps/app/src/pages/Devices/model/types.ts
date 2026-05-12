export interface ServiceInfo {
  port: number;
  protocol: string;
  product: string;
  version: string;
  banner: string;
}

export interface TLSInfo {
  version: string;
  cipher: string;
  commonName: string;
  issuer: string;
  valid_from: string;
  valid_to: string;
}

export interface Device {
  ip: string;
  mac: string;
  alive: boolean;
  hostname: string;

  os: string;
  osTtl: number;
  osMethod: string;

  services: ServiceInfo[];

  iot: string;
  snmp: string;
  mdns: string;
  ssdp: string;

  tls?: TLSInfo;
  webStack: string;
}

export interface Net {
	IP: Uint8Array
	Mask: Uint8Array
}

export interface Interface {
  name: string;
  description: string;
  flags: number;
  addresses: InterfaceAddress[];
}

export interface InterfaceAddress {
  ip: Uint8Array;
  netmask?: Uint8Array;
  broadaddr?: Uint8Array;
  p2p?: Uint8Array;
}

export interface DeviceWithIp {
  device: Device;
  interface: Interface;
  net: Net;
}