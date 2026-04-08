import type { TClearProps } from '@/src/shared/type';

import styles from './Default.module.scss';


export function DefaultLayout({children}: TClearProps) {
    return (
        <div className={styles.default}>
            <div className={styles.box}>
                {children}
            </div>
        </div>
    );
}
