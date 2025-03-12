import styles from './Directors.module.css';

export default function Directors() {
    return (
        <div className={styles.directors}>
            <h2>Режиссеры</h2>
            <div className={styles['directors-grid']}>
                <div className={styles.director}>
                    <img src="/director1.jpg" alt="Режиссер 1" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director2.jpg" alt="Режиссер 2" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director3.jpg" alt="Режиссер 3" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director4.jpg" alt="Режиссер 4" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director5.jpg" alt="Режиссер 5" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director6.jpg" alt="Режиссер 6" />
                    <button>Смотреть</button>
                </div>
            </div>
        </div>
    );
}