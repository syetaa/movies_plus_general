"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { onSignIn } from "@/api/auth/auth";
import { useUser } from "@/context/UserContext";
import styles from "./Login.module.css";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useUser();
    const router = useRouter();

    const handleSignIn = async () => {
        const success = await onSignIn(username, password);
        if (success) {
            login(localStorage.getItem("token"));
            router.push("/");
        }
    };

    return (
        <div className={styles.textmain}>
            <div className={styles.card}>
                <div className={styles.cont1}>Вход</div>
                <div className={styles.cont2}>
                    <div className={styles.inp1}>
                        <MdEmail size={20} />
                        <input
                            name="username"
                            type="email"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Логин"
                            required
                        />
                    </div>

                    <div className={styles.inp1}>
                        <RiLockPasswordFill size={20} />
                        <input
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            required
                        />
                    </div>

                    <button className={styles.btn} type="submit" onClick={handleSignIn}>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
}
