import styles from './subscriptions.module.css'

export default function Subscriptions() {
    return (
        <div className={styles.subscriptions}>
            <h2>Подписки</h2>
            <div className={styles['subscription-cards']}>
                <div className={styles.card}>
                    <h3>Всё в одном</h3>
                    <p>244 ТВ-канала</p>
                    <p>50000 Фильмов и сериалов</p>
                    <p>Дарим 30 дней подписки "Для детей"</p>
                    <button>Попробовать бесплатно на 7 дней, далее - 399 ₽/мес</button>
                </div>

                <div className={styles.card}>
                    <h3>Стартовый</h3>
                    <p>244 ТВ-канала</p>
                    <p>27000 Фильмов и сериалов</p>
                    <p>Дарим 30 дней подписки "Для детей"</p>
                    <button>Попробовать бесплатно на 7 дней, далее - 399 ₽/мес</button>
                </div>

                <div className={styles.card}>
                    <h3>5 в 1</h3>
                    <p>244 ТВ-канала</p>
                    <p>50000 Фильмов и сериалов</p>
                    <p>Дарим 30 дней подписки "Для детей"</p>
                    <button>Попробовать бесплатно на 7 дней, далее - 399 ₽/мес</button>
                </div>

                <div className={styles.card}>
                    <h3>Премиум</h3>
                    <p>244 ТВ-канала</p>
                    <p>50000 Фильмов и сериалов</p>
                    <p>Дарим 30 дней подписки "Для детей"</p>
                    <button>Попробовать бесплатно на 7 дней, далее - 399 ₽/мес</button>
                </div>
            </div>
        </div>
    );
}
