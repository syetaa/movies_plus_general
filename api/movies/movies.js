import axios from "axios";
import { API_BASE_URL, API_KEY } from "@/api/config";

// Получение популярных фильмов
export const getTrendingMovies = async () => {
    return fetchMovies({ s: "popular", type: "movie" });
};

// Получение избранных фильмов
export const getFavoriteMovies = async () => {
    return fetchMovies({ s: "favorites", type: "movie" });
};

// Получение деталей фильма
export const getMovieDetails = async (id) => {
    return fetchMovies({ i: id });
};

// Внутренняя функция для выполнения запросов
const fetchMovies = async (params) => {
    try {
        const response = await axios.get(API_BASE_URL, { params: { apikey: API_KEY, ...params } });
        return response.data.Search || [];
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        return [];
    }
};
