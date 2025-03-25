const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_BACKEND_HOST || "localhost";
const port = process.env.NEXT_PUBLIC_BACKEND_PORT || "8000";
const BASE_URL = `${protocol}://${host}:${port}`;

// Получение популярных фильмов
export async function getTrendingMovies() {
    try {
        const response = await fetch(`${BASE_URL}/movies/popular`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении популярных фильмов:", error);
        return [];
    }
}

// Получение избранных фильмов
export const getFavoriteMovies = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/favorite`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении избранных фильмов:", error);
        return [];
    }
};

// Добавление фильма в избранное
export const addFavoriteMovie = async (movie) => {
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
            throw new Error(`Ошибка при добавлении фильма в избранное: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Получение информации о фильме по ID
export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка при получении фильма с ID: ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении деталей фильма:", error);
        return null;
    }
};
