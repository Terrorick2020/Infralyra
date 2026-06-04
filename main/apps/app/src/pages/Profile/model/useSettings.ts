"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import api from "@/src/shared/config/axios";
import { IRootState } from "@/src/shared/store";
import { useRouter } from "next/navigation";

interface SignUpPayload {
  username: string;
  password: string;
  name: string;
  role: string;
}

export function useSettings() {
  const settings = useSelector((state: IRootState) => state.settings);
  const [role, _setRole] = useState<string>("admin");
  const [open, setOpen] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onAddUser = async () => {
    if (!newUsername || !newName || !newRole || !newPassword) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);

    try {
      const payload: SignUpPayload = {
        username: newUsername,
        password: newPassword,
        name: newName,
        role: newRole,
      };

      const response = await api.post("/signup", payload);

      console.log("Успех:", response.data);
      alert("Пользователь успешно добавлен!");

      setNewUsername("");
      setNewName("");
      setNewRole("");
      setNewPassword("");
      setOpen(false);
    } catch (error: any) {
      console.error("Ошибка при добавлении пользователя:", error);
      const errorMsg =
        error.response?.data?.message ||
        "Произошла ошибка при добавлении пользователя";
      alert(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const onExit = () => {
    router.replace("/sign-in");
  };

  return {
    name: settings.userName,
    role,
    open,
    setOpen,
    onAddUser,
    newUsername,
    setNewUsername,
    newName,
    setNewName,
    newRole,
    setNewRole,
    newPassword,
    setNewPassword,
    isLoading,
    onExit,
  };
}
