
export interface ClientToServerEvents {
  JoinRoom: (data: { username: string; roomName: string }) => void;
  LeaveRoom: (data: { username: string; roomName: string }) => void;
  SockMGetTraffic: (data: {
    username: string;
    roomName: string;
    inface: string;
    payloadLimit?: number;
  }) => void;
}

export interface ServerToClientEvents {
  EmitJRoom: (data: { roomName: string; success: boolean; message?: string }) => void;
  EmitLRoom: (data: { roomName: string; success: boolean; message?: string }) => void;
  SockMEmitGTraff: (data: {
    roomName: string;
    inface: string;
    bytesSent: number;
    bytesRecv: number;
    sentSpeedKbps: number;
    recvSpeedKbps: number;
    packetsIn: number;
    packetsOut: number;
    timestamp: number;
  }) => void;
  error: (data: { message: string; code?: number }) => void;
  disconnect: (reason: import('socket.io-client').DisconnectDescription) => void;
  connect_error: (err: Error) => void;
}

export const SOCKET_DISCONNECT_REASONS = {
  TransportClose: 'transport close' as const,
  PingTimeout: 'ping timeout' as const,
  ServerDisconnect: 'server disconnect' as const,
  ClientError: 'client error' as const,
} as const;

export type SocketDisconnectReason = typeof SOCKET_DISCONNECT_REASONS[keyof typeof SOCKET_DISCONNECT_REASONS];

export interface PacketInfoEther {
  srcMAC: string;
  dstMAC: string;
}

export interface PacketInfoNet {
  version: string;
  srcIP: string;
  dstIP: string;
  protocol: string;
}

export interface PacketInfoTrans {
  proto: string;
  srcPort: number;
  dstPort: number;
}

export interface PacketInfo {
  timestamp: number;
  ethernet: PacketInfoEther;
  network: PacketInfoNet;
  transport: PacketInfoTrans;
  application: string;
}

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