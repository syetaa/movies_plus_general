"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchProfile, onLogout } from "@/api/auth/auth";

export default function Header() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const profile = await fetchProfile();
            setUser(profile);
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        onLogout();
        setUser(null);
        router.push("/");
    };

    return (
        <div className={styles.cont_main}>
            <div className={styles.logo}>Кино+</div>
            <div className={styles.nav_links}>
                <Link href="/">Главная</Link>
                <Link href="/favorites">Избранное</Link>
                <Link href="/subscriptions">Подписки</Link>
                {user ? <Link href="/profile">Профиль</Link> : null}
            </div>
            <form className={styles.search}>
                <input type="text" placeholder="Поиск..." name="search" />
                <button type="submit">Найти</button>
            </form>
            <div className={styles.log_cont}>
                {user ? (
                    <>
                        <button onClick={handleLogout}>Выйти</button>
                    </>
                ) : (
                    <>
                        <Link href="/login">Вход</Link> | <Link href="/register">Регистрация</Link>
                    </>
                )}
            </div>
        </div>
    );
}
