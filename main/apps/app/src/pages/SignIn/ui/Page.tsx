import { SignInForm } from '@/src/features/signIn-form';

import styles from './Page.module.scss';


export function SignInPage() {
    return (
        <main className={styles['sign-in-page']}>
            <SignInForm />
        </main>
    )
}
