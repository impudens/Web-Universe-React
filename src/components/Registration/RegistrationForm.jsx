import React, { useState } from 'react';
import classes from "./RegistrationForm.module.css"
const RegistrationForm = () => {
    const initialFormData = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);
    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Проверка наличия значений в полях
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            newErrors.requiredFields = 'Все поля обязательны для заполнения';
            valid = false;
        }

        // Проверка совпадения паролей
        if (formData.password !== formData.confirmPassword) {
            newErrors.passwordMismatch = 'Пароли не совпадают';
            valid = false;
        }

        // Другие правила валидации, например, для email

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsRegistered(true);
            // Отправка данных на сервер
            // axios.post('/api/register', formData)
            //   .then(response => {
            //     // Обработка успешной регистрации
            //   })
            //   .catch(error => {
            //     // Обработка ошибок регистрации
            //   });
        }
    };

    const handleClearForm = () => {
        setFormData(initialFormData);
        setErrors({});
    };
    return (
        <>
            {
                !isRegistered ? (
                    <form onSubmit={handleSubmit} className={classes.form__register}>
                        <h2>Регистрация</h2>
                        <div>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                placeholder="Имя пользователя"
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                autoComplete="off"
                                className={classes.form__input}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={classes.form__input}

                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                autoComplete="new-password"
                                className={classes.form__input}

                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Подтвердите пароль"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className={classes.form__input}

                            />
                        </div>
                        {errors.requiredFields && <div>{errors.requiredFields}</div>}
                        {errors.passwordMismatch && <div>{errors.passwordMismatch}</div>}
                        <div className={classes.form__buttons}>
                            <button type="submit" className={classes.register__btn}>Зарегистрироваться</button>
                            <button type="button" onClick={handleClearForm} className={classes.clear__btn}>Сброс</button>
                        </div>
                    </form>
                ) : (
                    <h2>Регистрация успешно завершена для пользователя {formData.username}!</h2>
                )
            }

        </>
    );
};

export default RegistrationForm;
