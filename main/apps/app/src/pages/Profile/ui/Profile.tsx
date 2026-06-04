"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

import { useSettings } from "../model";
import styles from "./Profile.module.scss";
import ProfileSvg from "./profile.svg";

export function ProfilePage() {
  const {
    name,
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
  } = useSettings();

  return (
    <main className={styles["profile-page"]}>
      <div className={styles["top"]}>
        <div className={styles["top__img"]}>
          <div className={styles["ico"]}>
            <img src={ProfileSvg.src} alt="profile" />
          </div>
        </div>
        <div className={styles["top__ctx"]}>
          <h6>Имя: {name}</h6>
          <h6>Роль: {role}</h6>
        </div>
      </div>

      <div className={styles["bottom"]}>
        <Button
          className={styles["btn"]}
          onClick={() => {
            onExit();
          }}
        >
          Выйти
        </Button>
        <Button className={styles["btn"]} onClick={() => setOpen(true)}>
          Добавить пользователя
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="add-user-dialog-title"
      >
        <DialogTitle id="add-user-dialog-title">
          Добавить пользователя
        </DialogTitle>

        <DialogContent>
          <TextField
            id="new-username"
            label="Логин нового пользователя"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            autoComplete="username"
          />
          <TextField
            id="new-name"
            label="Имя нового пользователя"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            id="new-role"
            label="Роль нового пользователя"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            helperText="Допустимые значения: admin | moderator | guest"
          />
          <TextField
            id="new-password"
            label="Пароль нового пользователя"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            className={styles["btn"]}
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 1, height: 50 }}
            onClick={onAddUser}
          >
            {isLoading ? "Добавление..." : "Добавить"}
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
