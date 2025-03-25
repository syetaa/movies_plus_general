"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { onSignUp } from "@/api/auth/auth";
import styles from "./Register.module.css";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function RegisterComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignUp = async () => {
        const success = await onSignUp(username, password);
        if (success) router.push("/login");
    };

    return (
        <div className={styles.textmain}>
            <div className={styles.card}>
                <div className={styles.cont1}>Регистрация</div>
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

                    <button className={styles.btn} type="submit" onClick={handleSignUp}>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
}
