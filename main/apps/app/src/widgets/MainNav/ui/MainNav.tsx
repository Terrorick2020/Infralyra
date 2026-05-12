"use client";

import { usePathname } from "next/navigation";
import type { JSX } from "react";
import Link from "next/link";
import styles from "./MainNav.module.scss";
import LogoPng from "./logo.png";
import ProfileSvg from "./profile.svg";

export function MainNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/interfaces">
          <img src={LogoPng.src} alt="logo" />
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="/trafic"
            className={pathname === "/trafic" ? styles.active : ""}
          >
            Трафик интерфейса
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/devices"
            className={pathname === "/devices" ? styles.active : ""}
          >
            Устройства сети
          </Link>
        </li>
      </ul>
      <div className={styles.profile}>
        <Link href="/profile">
          <img src={ProfileSvg.src} alt="logo" />
        </Link>
      </div>
    </nav>
  );
}
