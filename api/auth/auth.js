const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_BACKEND_HOST || "127.0.0.1";
const port = process.env.NEXT_PUBLIC_BACKEND_PORT || "8000";
const BASE_URL = `${protocol}://${host}:${port}`;

// Универсальная функция запроса
const apiRequest = async (endpoint, method = "GET", body = null, includeAuth = false) => {
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    if (includeAuth) {
        const token = localStorage.getItem("token");
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
    }

    const options = { method, headers };
    if (body) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(`${BASE_URL}${endpoint}`, options);

    // Если токен протух, обновляем его и повторяем запрос
    if (response.status === 401 && includeAuth) {
        console.log("🔄 Токен истек, пробуем обновить...");
        const refreshed = await refreshAccessToken();
        if (refreshed) {
            headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
            response = await fetch(`${BASE_URL}${endpoint}`, options);
        }
    }

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Ошибка запроса");
    }

    return response.json();
};

// Функция обновления токена
export const refreshAccessToken = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
        });

        if (!response.ok) {
            console.log("❌ Ошибка обновления токена. Придется заново входить в систему.");
            onLogout();
            return false;
        }

        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        console.log("✅ Токен успешно обновлен!");
        return true;
    } catch (error) {
        console.error("Ошибка при обновлении токена:", error.message);
        return false;
    }
};

// Вход (логин)
export const onSignIn = async (username, password) => {
    try {
        const data = await apiRequest("/auth/login", "POST", { username, password });

        if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            console.log("✅ Успешный вход");
            return true;
        }
    } catch (error) {
        alert(error.message);
        return false;
    }
};

// Регистрация (sign up)
export const onSignUp = async (username, password) => {
    try {
        await apiRequest("/auth/register", "POST", { username, password });
        console.log("✅ Регистрация успешна! Теперь войдите в систему.");
        return true;
    } catch (error) {
        alert(error.message);
        return false;
    }
};

// Выход (logout)
export const onLogout = () => {
    localStorage.removeItem("token");
    console.log("🚪 Выход из системы выполнен");
};

// Получение данных о пользователе
export const getProfile = async () => {
    try {
        return await apiRequest("/auth/me", "GET", null, true);
    } catch (error) {
        console.error("Ошибка при получении профиля:", error.message);
        return null;
    }
};
