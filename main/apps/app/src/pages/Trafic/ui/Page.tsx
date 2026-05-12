"use client";

import { useTraffic, formatDateTime } from "../model";
import styles from "./Page.module.scss";

export function TraficPage() {
  const { idKey, packets } = useTraffic();

  return (
    <div className={styles["trafic-page"]}>
      {packets.map((item, index) => (
        <details className={styles["item"]} key={`${idKey}-${index}`}>
          <summary className={styles["head"]}>
            <h5 className={styles["head__block"]}>{item.network.srcIP}</h5>
            <h5 className={styles["head__block"]}>{item.network.protocol}</h5>
            <h5 className={styles["head__block"]}>
              {formatDateTime(item.timestamp)}
            </h5>
          </summary>
          <div className={styles["body"]}>
            <hr className={styles["line"]} />
            <div className={styles["body__ctx"]}>
              <h6 className={styles["info"]}>
                <mark>MAC отправителя:</mark> {item.ethernet.srcMAC}
              </h6>
              <h6 className={styles["info"]}>
                <mark>MAC получателя:</mark> {item.ethernet.dstMAC}
              </h6>
              <h6 className={styles["info"]}>
                <mark>Версия IP:</mark> {item.network.version}
              </h6>
              <h6 className={styles["info"]}>
                <mark>IP отправителя:</mark> {item.network.srcIP}
              </h6>
              <h6 className={styles["info"]}>
                <mark>IP получателя:</mark> {item.network.dstIP}
              </h6>
              <h6 className={styles["info"]}>
                <mark>Протокол сети:</mark> {item.network.protocol}
              </h6>
              <h6 className={styles["info"]}>
                <mark>Транспортный протокол:</mark> {item.transport.proto}
              </h6>
              <h6 className={styles["info"]}>
                <mark>Порт отправителя:</mark> {item.transport.srcPort}
              </h6>
              <h6 className={styles["info"]}>
                <mark>Порт получателя:</mark> {item.transport.dstPort}
              </h6>
              <h6 className={styles["info"]}>
                <mark>Полезная нагрузка:</mark> {item.application.join(" ")}
              </h6>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
