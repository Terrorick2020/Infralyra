"use client";

import { useNetworkData } from "../model";
import styles from "./Page.module.scss";

export function InterfacesPage() {
  const { idKey, interfaces, stats } = useNetworkData();

  return (
    <div className={styles["interfaces-page"]}>
      <div className={styles["box"]}>
        {interfaces.map((item, index) => {
          const stat = stats.find((s) => s.pcapName === item.pcapName);
          const isActive = item.flags?.includes("up") ?? false;

          return (
            <div className={styles["box__item"]} key={`${idKey}-${index}`}>
              <h5>
                <mark>Интерфейс:</mark>{" "}
                {item.localName || item.description || "unknown"}
              </h5>
              <h6>
                <mark>Тип:</mark> {item.type}
              </h6>
              <h6>
                <mark>MAC:</mark> {item.mac || "N/A"}
              </h6>
              <h6>
                <mark>IP:</mark>{" "}
                {item.ips?.length
                  ? item.ips.map((ip) => ip.ip).join(", ")
                  : "Не назначен"}
              </h6>
              <h6>
                <mark>Маска:</mark>{" "}
                {item.ips?.length
                  ? item.ips.map((ip) => ip.netmask).join(", ")
                  : "Не назначен"}
              </h6>
              <h6>
                <mark>Статус:</mark> {isActive ? "Активен" : "Неактивен"}
              </h6>
              <h6>
                <mark>Статистика:</mark> ↓{ stat?.packetsIn || 0 } ↑{ stat?.packetsOut || 0 }
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
