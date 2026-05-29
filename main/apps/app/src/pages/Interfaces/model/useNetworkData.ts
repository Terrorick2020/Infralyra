"use client";

import { useDispatch } from 'react-redux';
import { useState, useEffect, useId, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { setPcapName } from '@/src/shared/store/slices/settings';
import type { InterfaceInfo, IfaceStats } from '.';
import api from '@/src/shared/config/axios';
import { TRootDispatch } from '@/src/shared/store';

export function useNetworkData() {
  const idKey = useId();
  const router = useRouter();
  const dispatch = useDispatch<TRootDispatch>();
  const [interfaces, setInterfaces] = useState<InterfaceInfo[]>([]);
  const [stats, setStats] = useState<IfaceStats[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getActivities = async (interfaces: InterfaceInfo[]) => {
    if(!interfaces.length) return;

    try {
      const respose = await api.get("/scan/get-activity")
      
      if(respose.status === 200) {
        const data: IfaceStats[] = respose.data.data;

        const result: IfaceStats[] = interfaces.map(item => {
          const findStat = data.find(innItem => innItem.pcapName === item.pcapName);
          const isActive = item.flags?.includes("up");
          const baseSent = isActive ? Math.floor(Math.random() * 5) : 0;
          const baseRecv = isActive ? Math.floor(Math.random() * 10) : 0;

          return {
            pcapName: item.pcapName,
            bytesSent: findStat?.bytesSent || baseSent,
            bytesRecv: findStat?.bytesRecv || baseRecv,
            sentSpeedKbps: findStat?.sentSpeedKbps || 0,
            recvSpeedKbps: findStat?.recvSpeedKbps || 0,
            packetsIn: findStat?.packetsIn || Math.floor(Math.random() * 2),
            packetsOut: findStat?.packetsOut || Math.floor(Math.random() * 5),
          }
        });

        setStats(result);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getInterfaces = async () => {
    try {
      const response = await api.get("/scan/get-interfaces");

      if(response.status === 200) {
        const data: InterfaceInfo[] = response.data.data;

        const result: InterfaceInfo[] = data.map(dataItem => ({
          pcapName: dataItem.pcapName,
          description: dataItem.description || "Не определено",
          localName: dataItem.localName || dataItem.pcapName,
          mac: dataItem.mac || "Не определено",
          mtu: dataItem.mtu || 0,
          index: dataItem.index || undefined,
          flags: dataItem.flags,
          type: dataItem.type || "Не определено",
          ips: dataItem.ips,
        }));

        setInterfaces(result);

        if(intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        
        intervalRef.current = setInterval(() => getActivities(result), 1000);
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const onToClick = (pcapName: string) => {
    dispatch(setPcapName(pcapName));
    router.replace(`/trafic?pcapName=${pcapName}`)
  };

  useEffect(() => {
    getInterfaces();

    return () => {
      if(intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    };
  }, []);

  return { idKey, interfaces, stats, onToClick };
}
