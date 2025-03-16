import styles from './Directors.module.css';

export default function Directors() {
    return (
        <div className={styles.directors}>
            <h2>Режиссеры</h2>
            <div className={styles['directors-grid']} style={{padding: 21}}>
                <div className={styles.director}>
                    <img src="/director1.jpg" alt="Режиссер 1" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director2.jpg" alt="Режиссер 2" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director1.jpg" alt="Режиссер 3" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director2.jpg" alt="Режиссер 4" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director1.jpg" alt="Режиссер 5" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="/director2.jpg" alt="Режиссер 6" />
                    <button>Смотреть</button>
                </div>
            </div>
        </div>
    );
}