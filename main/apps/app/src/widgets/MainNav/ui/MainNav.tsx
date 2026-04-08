import Link from 'next/link';
import type { JSX } from 'react';
import styles from './MainNav.module.scss'

export function MainNav(): JSX.Element {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="devices">
                        Устройства
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="trafic">
                        Трафик интерфейса
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
