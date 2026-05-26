"use client";

import { Button, TextField } from "@mui/material";
import { useSignIn } from "../model";
import type { JSX } from "react";

import styles from "./SignInForm.module.scss";

export function SignInForm(): JSX.Element {
  const { login, pswd, onChangeLogin, onChangePswd, onAuth, isLoading, error } = useSignIn();

  return (
    <article className={styles["signIn-form"]}>
      <div className={styles.title}>
        <h3>Авторизация</h3>
      </div>
      
      <div className={styles.body}>
        <TextField
          id="outlined-login"
          label="Логин"
          variant="outlined"
          value={login}
          onChange={onChangeLogin}
          fullWidth
          margin="normal"
          autoComplete="username"
        />
        <TextField
          id="outlined-pswd"
          label="Пароль"
          variant="outlined"
          type="text"
          value={pswd}
          onChange={onChangePswd}
          fullWidth
          margin="normal"
          autoComplete="current-password"
          error={!!error}
          helperText={error}
        />
      </div>

      <Button
        fullWidth
        variant="contained"
        disabled={!login.trim() || !pswd.trim() || isLoading}
        onClick={onAuth}
        sx={{ mt: 2 }}
      >
        {isLoading ? "Вход..." : "Войти"}
      </Button>
    </article>
  );
}