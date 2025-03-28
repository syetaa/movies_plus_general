'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Здесь проверка аутентификации
    const checkAuth = async () => {
      // Замените на вашу логику проверки
      const auth = localStorage.getItem('adminAuth');
      setIsAuth(!!auth);
    };
    checkAuth();
  }, []);

  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  return (
    <div>
      <h1>Админ-панель</h1>
      {/* Добавьте здесь компоненты админки */}
    </div>
  );
}

function Login({ setIsAuth }) {
  const handleLogin = (e) => {
    e.preventDefault();
    // Здесь логика входа
    localStorage.setItem('adminAuth', 'true');
    setIsAuth(true);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  );
}