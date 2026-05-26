"use client";

import { useState, useEffect, useId } from 'react';
import type { InterfaceInfo, IfaceStats } from '.';
import { useRouter } from 'next/navigation';
import api from '@/src/shared/config/axios';


export const generateInitialStats = (interfaces: InterfaceInfo[]): IfaceStats[] =>
  interfaces.map(iface => {
    const isActive = iface.flags?.includes("up");
    const baseSent = isActive ? Math.floor(Math.random() * 500_000_000) : 0;
    const baseRecv = isActive ? Math.floor(Math.random() * 1_200_000_000) : 0;
    
    return {
      pcapName: iface.pcapName,
      bytesSent: baseSent,
      bytesRecv: baseRecv,
      sentSpeedKbps: isActive ? Math.random() * 100 : 0,
      recvSpeedKbps: isActive ? Math.random() * 300 : 0,
      packetsIn: isActive ? Math.floor(Math.random() * 50_000) : 0,
      packetsOut: isActive ? Math.floor(Math.random() * 10_000) : 0
    };
  });

export function useNetworkData({ intervalMs = 1500, enableLive = true } = {}) {
  const idKey = useId();
  const router = useRouter();
  const [interfaces, setInterfaces] = useState<InterfaceInfo[]>([]);
  const [stats, setStats] = useState<IfaceStats[]>(() => generateInitialStats(interfaces));

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
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const onToClick = () => {
    router.replace("/trafic")
  }

  useEffect(() => {
    if (!enableLive) return;

    const timer = setInterval(() => {
      setStats(prev =>
        prev.map(s => {
          const iface = interfaces.find(i => i.pcapName === s.pcapName);
          const isActive = iface?.flags?.includes("up");

          if (!isActive) return s;

          const recvSpeed = Math.max(0, s.recvSpeedKbps + (Math.random() * 400 - 200));
          const sentSpeed = Math.max(0, s.sentSpeedKbps + (Math.random() * 200 - 100));
          
          return {
            ...s,
            recvSpeedKbps: recvSpeed,
            sentSpeedKbps: sentSpeed,
            bytesRecv: s.bytesRecv + Math.floor((recvSpeed * 1000 / 8) * (intervalMs / 1000)),
            bytesSent: s.bytesSent + Math.floor((sentSpeed * 1000 / 8) * (intervalMs / 1000)),
            packetsIn: s.packetsIn + Math.floor(Math.random() * 50),
            packetsOut: s.packetsOut + Math.floor(Math.random() * 30)
          };
        })
      );

      getInterfaces();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [enableLive, intervalMs, interfaces]);

  return { idKey, interfaces, stats, onToClick };
}
