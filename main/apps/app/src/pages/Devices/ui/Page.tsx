"use client";

import { useDevices } from "../model";
import styles from "./Page.module.scss";

export function DevicesPage() {
  const { idKey, devices } = useDevices();

  return (
    <main className={styles["devices-page"]}>
      <div className={styles["body"]}>
        {devices.length ? (
          devices.map((item, index) => {
            const { device, interface: iface, net } = item;

            return (
              <div className={styles["body__item"]} key={`${idKey}-${index}`}>
                <h4>Хост: {device.hostname}</h4>
                <hr />
                <div className={styles["section"]}>
                  <h5>Основная информация</h5>
                  <p>
                    <strong>IP:</strong> {device.ip}
                  </p>
                  <p>
                    <strong>MAC:</strong> {device.mac}
                  </p>
                  <p>
                    <strong>Статус:</strong>{" "}
                    {device.alive ? "Online" : "Offline"}
                  </p>
                  <p>
                    <strong>OS:</strong> {device.os}
                  </p>
                  <p>
                    <strong>TTL:</strong> {device.osTtl}
                  </p>
                  <p>
                    <strong>Метод определения:</strong> {device.osMethod}
                  </p>
                </div>
                <hr />
                <div className={styles["section"]}>
                  <h5>Сетевой интерфейс</h5>
                  <p>
                    <strong>Интерфейс:</strong> {iface.name}
                  </p>
                  <p>
                    <strong>Описание:</strong> {iface.description}
                  </p>
                  <p>
                    <strong>Flags:</strong> {iface.flags}
                  </p>
                </div>
                <hr />
                <div className={styles["section"]}>
                  <h5>Сервисы</h5>
                  {device.services.length > 0 ? (
                    <ul className={styles["services"]}>
                      {device.services.map((service, idx) => (
                        <li
                          key={`${service.port}-${idx}`}
                          className={styles["service"]}
                        >
                          <p>
                            <strong>Порт:</strong> {service.port}
                          </p>
                          <p>
                            <strong>Протокол:</strong> {service.protocol}
                          </p>
                          <p>
                            <strong>Продукт:</strong> {service.product}
                          </p>
                          <p>
                            <strong>Версия:</strong> {service.version}
                          </p>
                          <p>
                            <strong>Banner:</strong> {service.banner}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Сервисы отсутствуют</p>
                  )}
                </div>
                <hr />
                <div className={styles["section"]}>
                  <h5>Дополнительно</h5>
                  <p>
                    <strong>IoT:</strong> {device.iot || "Не определено"}
                  </p>
                  <p>
                    <strong>SNMP:</strong> {device.snmp}
                  </p>
                  <p>
                    <strong>mDNS:</strong> {device.mdns}
                  </p>
                  <p>
                    <strong>SSDP:</strong> {device.ssdp}
                  </p>
                  <p>
                    <strong>Web Stack:</strong> {device.webStack}
                  </p>
                </div>
                <hr />
                <div className={styles["section"]}>
                  <h5>RAW Network</h5>
                  <p>
                    <strong>IP bytes:</strong> {Array.from(net.IP).join(".")}
                  </p>
                  <p>
                    <strong>Mask:</strong> {Array.from(net.Mask).join(".")}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles["empty"]}>
            <h4>Пока ничего не найдено</h4>
          </div>
        )}
      </div>
    </main>
  );
}
