"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header({ searchParams }) {
    const [user, setUser] = useState(null);
    const searchQuery = searchParams?.search || '';
    const router = useRouter();

    useEffect(() => {
        // Check for user data in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        // Remove user data from localStorage
        localStorage.removeItem('user');
        setUser(null);
        router.push('/');
    };

    return (
        <div className={styles.cont_main}>
            <div className={styles.logo}>
                Кино+
            </div>
            <div className={styles.nav_links}>
                <Link href="/">Главная</Link>
                <Link href="/favorites">Избранное</Link>
                <Link href="/subscriptions">Подписки</Link>
            </div>
            <form className={styles.search}>
                <input
                    type="text"
                    defaultValue={searchQuery}
                    placeholder="Поиск..."
                    name="search"
                />
                <button type="submit">Найти</button>
            </form>
            <div className={styles.log_cont}>
                {user ? (
                    <>
                        <span>Привет, {user.username}</span>
                        <Link href="/profile">Профиль</Link>
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
