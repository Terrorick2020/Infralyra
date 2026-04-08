import { Button, TextField } from '@mui/material';
import type { JSX } from 'react';

import styles from './SignInForm.module.scss';


export function SignInForm(): JSX.Element {
    return (
        <article className={styles['signIn-form']}>
            <div className={styles.title}>
                <h3>Авторизация</h3>
            </div>
            <div className={styles.body}>
                <TextField
                    id="outlined-login"
                    label="Логин"
                    variant="outlined"
                />
                <TextField
                    id="outlined-pswd"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                />
            </div>
            <Button fullWidth>
                Войти
            </Button>
        </article>
    )
}
