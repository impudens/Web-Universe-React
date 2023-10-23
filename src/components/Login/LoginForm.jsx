import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Проверка логина и пароля (в данном случае просто сравнение со значениями 'admin' и 'password')
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
        } else {
            alert('Неправильное имя пользователя или пароль.');
        }
    };

    return (
        <div>
            {!loggedIn ? (
                <div>
                    <h2>Вход</h2>
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={handleLogin}>Войти</button>
                </div>
            ) : (
                <h2>Добро пожаловать, {username}!</h2>
            )}
        </div>
    );
};

export default LoginForm;
