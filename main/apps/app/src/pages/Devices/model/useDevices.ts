"use client";

import { useId, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDevUi } from "@/src/shared/config";
import type { DeviceWithIp } from ".";
import type { IRootState } from "@/src/shared/store";
import api from "@/src/shared/config/axios";

export function useDevices() {
  const idKey = useId();
  const [devices, setDevices] = useState<DeviceWithIp[]>([]);
  const settings = useSelector((state: IRootState) => state.settings);

  const asyncSetDevices = async () => {
    if (!settings.pcapName) return;

    try {
      const data: { inface: string } = {
        inface: settings.pcapName,
      };

      const response = await api.post("/scan/get-devices", data);
      let resDevices: DeviceWithIp[] = getDevUi();

      if (response.status === 200) {
        const resData = response.data;
        resDevices = !data ? getDevUi() : resData.data;
      }
      
      setDevices((prev) => {
        const combined = [...prev, ...resDevices];

        return Array.from(
          new Map(
            combined.map((device) => [device.device.mac, device]),
          ).values(),
        );
      });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interSetDev = setInterval(() => asyncSetDevices(), 5000);

    return () => {
      clearInterval(interSetDev);
    };
  }, []);

  return { idKey, devices };
}
