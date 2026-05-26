"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js роутинг
import api from '@/src/shared/config/axios';

export function useSignIn() {
  const [login, setLogin] = useState<string>("");
  const [pswd, setPswd] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    if (error) setError(null);
  };

  const onChangePswd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswd(e.target.value);
    if (error) setError(null);
  };

  const onAuth = async () => {
    const trimmedLogin = login.trim();
    const trimmedPswd = pswd.trim();

    if (!trimmedLogin || !trimmedPswd) {
      setError("Заполните все поля");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {

      const response = await api.post('/auth/sign-in', {
        username: trimmedLogin,
        password: trimmedPswd,
      });

      if(response.status === 200) {
        router.replace('/interfaces')
      }
    } catch (err: any) {
      const serverMsg = err.response?.data?.message || err.response?.data?.error;
      setError(serverMsg || "Неверный логин или пароль");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, pswd, onChangeLogin, onChangePswd, onAuth, isLoading, error };
}