export interface IEnv {
  hostname: string;
  mqttPort: number;
  httpPort: number;
  udpPort: number;
  telemetryPort: number;
  target_hostname: string;
  target_port: number;
}

export interface ICfg {
  device: ICfgDevice;
  network: ICfgNetwork;
  behavior: ICfgBehavior;
}

export interface ICfgDevice {
  device_id: string;
  device_type: string;
  hostname: string;
  mac_address: string;
  serial_number: string;
  model: string;
  vendor: string;
  firmware_version: string;
  uptime_seconds: number;
}

export interface ICfgNetwork {
  gateway: string;
  dns: string[];
  interface_type: "wifi" | "ethernet" | "lte" | "5g" | "lorawan" | "nb-iot";
  ssid?: string;
  signal_strength: number;
  connection_state: "up" | "down" | "degraded";
  latency_ms: number;
  packet_loss: number;
  bandwidth_mbps: number;
  protocol: string;
  broker: string;
}

export interface ICfgBehavior {
  jitter_ms: number;
  interval_ms: number;
  error_chance: number;
}
