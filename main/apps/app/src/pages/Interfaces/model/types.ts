export type IPAddress = {
  ip: string;
  netmask?: string;
  broadcast?: string;
};

export type InterfaceInfo = {
  pcapName: string;
  description?: string;
  localName?: string;
  mac?: string;
  mtu?: number;
  index?: number;
  flags?: string[];
  type?: string;
  ips?: IPAddress[];
};

export type IfaceStats = {
  pcapName: string;
  bytesSent: number;
  bytesRecv: number;
  sentSpeedKbps: number;
  recvSpeedKbps: number;
  packetsIn: number;
  packetsOut: number;
};