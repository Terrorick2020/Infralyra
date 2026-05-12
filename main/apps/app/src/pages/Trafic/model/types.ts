export interface PacketInfoEther {
  srcMAC: string;
  dstMAC: string;
};

export interface PacketInfoNet {
  version: string;
  srcIP: string;
  dstIP: string;
  protocol: string;
};

export interface PacketInfoTrans {
  proto: string;
  srcPort: number;
  dstPort: number;
};

export interface PacketInfo {
  timestamp: number;
  ethernet: PacketInfoEther;
  network: PacketInfoNet;
  transport: PacketInfoTrans;
  application: Uint8Array;
};