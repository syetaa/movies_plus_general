'use client';
import { useState } from 'react';
import { addFavoriteMovie } from '@/api/movies/movies';
import { useUser } from '@/context/UserContext';
const MovieDetails = ({ movie }) => {
    const { user } = useUser();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = async () => {
        try {
            const result = await addFavoriteMovie(movie);
            setIsFavorite(true);
            console.log("Фильм добавлен в избранное!");
        } catch (error) {
            console.error("Ошибка при добавлении фильма в избранное:", error);
        }
    };

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description || 'Описание отсутствует'}</p>
            <button onClick={handleAddToFavorites}>
                {isFavorite ? 'Добавлено в избранное' : 'Добавить в избранное'}
            </button>
            <p>Жанр: {movie.genre || 'Неизвестно'}</p>
            <p>Режиссер: {movie.director || 'Неизвестно'}</p>
            <p>Рейтинг: {movie.rating || 'Неизвестно'}</p>
        </div>
    );
};

export default MovieDetails;
