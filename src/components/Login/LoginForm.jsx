import React, { useState } from 'react';
import classes from "./LoginForm.module.css"


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

    return (<>
        {!loggedIn ? (
            <form className={classes.form__login}>
                <h2>Вход</h2>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={classes.form__input}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.form__input}
                />
                <button onClick={handleLogin} className={classes.login__btn}>Войти</button>
            </form>
        ) : (
            <h2>Добро пожаловать, {username}!</h2>
        )}
    </>
    );
};

export default LoginForm;
