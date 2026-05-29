"use client";

import { useId, useState, useEffect } from "react";
import { getDevUi } from '@/src/shared/config';
import type { DeviceWithIp } from ".";
import api from '@/src/shared/config/axios';

export function useDevices() {
  const idKey = useId();
  const [devices, setDevices] = useState<DeviceWithIp[]>([]);

  const asyncSetDevices = async () => {
    try {
      const response = await api.get("/scan/get-devices")

      if(response.status === 200) {
        const data = response.data;
        const res: DeviceWithIp[] = !data ? getDevUi() : data.data;

        setDevices(prev => {
          const combined = [...prev, ...res];

          return Array.from(
            new Map(combined.map(device => [device.device.mac, device])).values()
          );
        })
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const interSetDev = setInterval(() => asyncSetDevices(), 5000);

    return () => {
      clearInterval(interSetDev);
    }
  }, []);

  return { idKey, devices };
}
