import { MainNav } from '@/src/widgets/MainNav';
import type { TClearProps } from '@/src/shared/type';
import type { JSX } from 'react';
import styles from './Main.module.scss';

export function MainLayout({children}: TClearProps): JSX.Element {
    return (
        <div className={styles.main}>
            <MainNav />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}
