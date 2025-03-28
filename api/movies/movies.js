const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_BACKEND_HOST || "localhost";
const port = process.env.NEXT_PUBLIC_BACKEND_PORT || "8000";
const BASE_URL = `${protocol}://${host}:${port}`;

// Получение популярных фильмов
const getTrendingMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movies/popular`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении популярных фильмов:", error.message);
        return [];
    }
};

// Получение избранных фильмов
const getFavoriteMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movies/favorite`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении избранных фильмов:", error.message);
        return [];
    }
};

// Добавление фильма в избранное
const addFavoriteMovie = async (movie) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Пользователь не авторизован");
    }

    try {
        const response = await fetch(`${BASE_URL}/movies/favorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(movie),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Ошибка: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Ошибка при добавлении фильма в избранное:", error.message);
        throw error;
    }
};

// Получение информации о фильме по ID
const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/${id}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении деталей фильма:", error.message);
        return null;
    }
};

export { getTrendingMovies, getFavoriteMovies, addFavoriteMovie, getMovieDetails };
