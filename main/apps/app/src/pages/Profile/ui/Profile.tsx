"use client";

import { Button } from '@mui/material';
import { useSettings } from '../model';
import styles from "./Profile.module.scss";
import ProfileSvg from "./profile.svg";

export function ProfilePage() {
    const { name, role } = useSettings();

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
                    <Button className={styles["btn"]} >Редактировать</Button>
                </div>
            </div>
            <div className={styles["bottom"]}>
                <Button className={styles["btn"]} >Выйти</Button>
                <Button className={styles["btn"]} >Добавить пользователя</Button>
            </div>
        </main>
    )
}