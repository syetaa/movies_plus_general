'use client'
import { useEffect, useState } from "react";
import MovieDetails from "@/components/movie_details/Movie_details";
import { getMovieDetails } from "@/api/movies/movies";
import { useParams } from "next/navigation";

const MoviePage = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieData = await getMovieDetails(id);
                if (!movieData) {
                    throw new Error("Ошибка при загрузке данных фильма");
                }
                setMovie(movieData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMovie();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!movie) return <p>Загрузка...</p>;

    return (
        <div>
            <MovieDetails movie={movie} />
        </div>
    );
};

export default MoviePage;
