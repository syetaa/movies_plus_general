const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_BACKEND_HOST || "127.0.0.1";
const port = process.env.NEXT_PUBLIC_BACKEND_PORT || "8000";

const BASE_URL = `${protocol}://${host}:${port}`;

// Вход (логин)
export async function onSignIn(username, password) {
    const url = `${BASE_URL}/auth/login`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Ошибка входа");
        }

        const data = await response.json();
        if ("access_token" in data) {
            localStorage.setItem("token", data["access_token"]);
            alert("Успешный вход");
            return true;

        }
    } catch (error) {
        alert(error.message);
        return false;
    }
}

// Регистрация
export async function onSignUp(username, password) {
    const url = `${BASE_URL}/auth/register`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Ошибка регистрации");
        }

        alert("Регистрация успешна! Теперь войдите в систему.");
        return true;
    } catch (error) {
        alert(error.message);
        return false;
    }
}
