"use client";

import { useState, useId, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getPackUi } from '@/src/shared/config';
import type { IGetPackData } from ".";
import type { PacketInfo } from '@/src/shared/config';
import type { IRootState } from "@/src/shared/store";
import api from "@/src/shared/config/axios";


export function formatDateTime(ts: number) {
  return new Date(ts).toLocaleString();
}

export function useTraffic() {
  const idKey = useId();
  const [packets, setPackets] = useState<PacketInfo[]>([]);
  const settings = useSelector((state: IRootState) => state.settings);
  const count = useRef<number>(1);

  const asyncGetTrafic = async () => {
    if (!settings.pcapName || !settings.userName) return;

    try {
      const data: IGetPackData = {
        username: settings.userName,
        roomname: "roomName",
        inface: settings.pcapName,
        count: 15,
        step: count.current,
      };

      const response = await api.post("/scan/get-packets", data);

      if (response.status === 200) {
        const data = response.data;
        const res: PacketInfo[] = !data ? getPackUi().reverse() : data.data;
        count.current = count.current + 1;

        setPackets(prev => [...res, ...prev])
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interPack = setInterval(() => asyncGetTrafic(), 1500);

    return () => {
      clearInterval(interPack);
      count.current = 1;
    };
  }, []);

  return { idKey, packets };
}
