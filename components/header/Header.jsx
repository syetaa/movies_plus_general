import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.cont_main}>
            <div className={styles.logo}>
                Кино+
            </div>
            <div className={styles.nav_links}>
                <Link href="/">Главная</Link>
                <Link href="/favorites">Избранное</Link>
                <Link href="/subscriptions">Подписки</Link>
                <Link href="/profile">Профиль</Link>
            </div>
            <div className={styles.search}>
                search
            </div>
            <div className={styles.log_cont}>
                Вход | Регистрация
            </div>
        </div>
    )
}
