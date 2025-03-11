import Link from 'next/link'
import styles from './Promo_action.module.css'

export default function Promo_action() {
    return (
        <div className={styles.cont_main}>
            <div className={styles.promo_text}>
                Дарим незабываемые впечатления
            </div>
            <div className={styles.promo_btn}>
                <Link href="/">30 дней бесплатно!</Link>
            </div>
        </div>
    )
}
