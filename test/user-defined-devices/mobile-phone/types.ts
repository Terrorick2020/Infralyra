export interface IEnv {
  hostname: string;
  adpPort: number;
  httpPort: number;
  binderPort: number;
  httpsPort: number;
  telephonyPort: number;
  target_hostname: string;
  target_port: number;
}

export interface ICfg {
  device: ICfgDevice;
  network: ICfgNetwork;
  os: ICfgOS;
  hardware: ICfgHardware;
  performance: ICfgPerformance;
  power: ICfgPower;
  security: ICfgSecurity;
  agent: ICfgAgent;
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
}

export interface ICfgNetwork {
  gateway: string;
  dns: string[];
  interface_type: "wifi" | "ethernet" | "cellular" | string;
  ssid: string | null;
  signal_strength: number | null;
  connection_state: "up" | "down" | "connecting" | string;
  latency_ms: number;
  packet_loss: number;
  bandwidth_mbps: number | null;
  server: string;
  powered: string;
}

export interface ICfgOS {
  name: string;
  version: string;
  kernel_version: string;
  architecture: "x86_64" | "arm64" | string;
  uptime_seconds: number;
  timezone: string;
}

export interface ICfgHardware {
  cpu_model: string;
  cpu_cores: number;
  ram_total_mb: number;
  disk_total_gb: number;
  gpu_model: string;
}

export interface ICfgPerformance {
  cpu_usage_percent: number;
  ram_usage_percent: number;
  disk_usage_percent: number;
  temperature_cpu_c: number;
  temperature_gpu_c: number;
}

export interface ICfgPower {
  battery_level_percent: number;
  charging_status: boolean;
  power_source: "ac" | "battery" | string;
  battery_health_percent: number;
  cycle_count: number;
  estimated_time_remaining_min: number;
}

export interface ICfgSecurity {
  secure_boot_enabled: boolean;
  disk_encryption_enabled: boolean;
  firewall_enabled: boolean;
  antivirus_status: "active" | "inactive" | "unknown" | string;
  failed_login_count: number;
}

export interface ICfgAgent {
  agent_version: string;
  last_seen: string;
  heartbeat_interval_ms: number;
  jitter_ms: number;
  error_rate: number;
  reconnect_count: number;
}

export interface ICfgBehavior {
  jitter_ms: number;
  interval_ms: number;
  error_chance: number;
}
