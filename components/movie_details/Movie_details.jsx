'use client';

import { useState } from 'react';
import { addFavoriteMovie } from '@/api/movies/movies';
import { useUser } from '@/context/UserContext';
import styles from './Movie_details.module.css';

const MovieDetails = ({ movie }) => {
    const { user } = useUser();
    const [isFavorite, setIsFavorite] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedVoiceOver, setSelectedVoiceOver] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleAddToFavorites = async () => {
        try {
            await addFavoriteMovie(movie);
            setIsFavorite(true);
            console.log('Фильм добавлен в избранное!');
        } catch (error) {
            console.error('Ошибка при добавлении фильма в избранное:', error);
        }
    };

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleStarHover = (value) => {
        setHoverRating(value);
    };

    const handleStarLeave = () => {
        setHoverRating(0);
    };

    const handleVoiceOverClick = (voiceOver) => {
        setSelectedVoiceOver(voiceOver);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const stars = Array.from({ length: 10 }, (_, i) => i + 1);
    const voiceOvers = ['Бла-бла', 'Вася Пупкин', 'Оптимус Прайм']; // Пример озвучек

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.movieInfo}>
                    <div className={styles.posterContainer}>
                        <img
                            src={movie.poster || '/placeholder.jpg'}
                            alt={movie.title}
                            className={styles.poster}
                        />
                        <button
                            onClick={handleAddToFavorites}
                            className={styles.favoriteButton}
                            disabled={isFavorite}
                            style={{ backgroundColor: isFavorite ? '#2ecc71' : '#e67e22' }}
                        >
                            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                        </button>
                    </div>
                    <div className={styles.details}>
                        <h1 className={styles.title}>{movie.title}</h1>
                        <div className={styles.rating}>
                            <span className={styles.ratingStar}>⭐</span>
                            <span className={styles.ratingText}>{movie.rating || 'Неизвестно'} / 10</span>
                            <div className={styles.starRatingContainer}>
                                {stars.map((star) => (
                                    <span
                                        key={star}
                                        className={`${styles.star} ${
                                            star <= (hoverRating || rating) ? styles.hovered : ''
                                        } ${star <= rating && styles.active}`}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => handleStarHover(star)}
                                        onMouseLeave={handleStarLeave}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span>Ваша оценка</span>
                        </div>
                        <ul className={styles.infoList}>
                            <li><strong>Жанр:</strong> {movie.genre || 'Неизвестно'}</li>
                            <li><strong>Возрастные ограничения:</strong> {movie.ageRating || 'Не указано'}</li>
                            <li><strong>Длительность:</strong> {movie.duration || 'Не указано'}</li>
                            <li><strong>Режиссер:</strong> {movie.director || 'Неизвестно'}</li>
                            <li><strong>Главные герои:</strong> {movie.mainActors || 'Не указано'}</li>
                        </ul>
                        <h2 className={styles.descriptionTitle}>Описание</h2>
                        <p className={styles.descriptionText}>{movie.description || 'Описание отсутствует'}</p>
                    </div>
                </div>

                <div className={styles.videoSection}>
                    <div className={styles.videoPlayer}>
                        <div className={styles.videoPlaceholder}>
                            <button className={styles.videoPlayButton}>▶</button>
                        </div>
                    </div>
                    <aside className={styles.voiceOver}>
                        <h3 className={styles.voiceOverTitle}>Озвучка</h3>
                        {voiceOvers.map((voiceOver) => (
                            <button
                                key={voiceOver}
                                className={styles.voiceOverButton}
                                onClick={() => handleVoiceOverClick(voiceOver)}
                            >
                                {voiceOver}
                            </button>
                        ))}
                        {selectedVoiceOver && <p>Выбрана озвучка: {selectedVoiceOver}</p>}
                    </aside>
                </div>

                {/* Комментарии */}
                <div className={styles.commentSection}>
                    <textarea
                        className={styles.commentTextArea}
                        placeholder="Оставьте комментарий..."
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <button className={styles.commentSubmitButton} onClick={handleCommentSubmit}>
                        Отправить комментарий
                    </button>
                    {comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MovieDetails;