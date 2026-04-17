export interface IEnv {
  hostname: string;
  port: number;
  target_hostname: string;
  target_port: number;
}

export interface ICfg {
  device: ICfgDevice;
  behavior: ICfgBehavior;
}

export interface ICfgDevice {
  device_id: string;
  device_type: string;
  mac: string;
  firmware: string;
}

export interface ICfgBehavior {
  jitter_ms: number;
  interval_ms: number;
  error_chance: number;
}

export type TPerDType = "INIT" | "DATA" | "STATUS";
export type TPerDStatus =
  | "OK"
  | "ERROR"
  | "CONNECTED"
  | "DISCONNECTED"
  | "READY"
  | "IDLE";

export interface IPerData extends Pick<ICfgDevice, "device_type"> {
  type: TPerDType;
  status: TPerDStatus;
  target: string;
  time: string;
}
