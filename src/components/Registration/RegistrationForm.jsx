import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Имя пользователя:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
            </div>
            <div>
                <label>Подтвердите пароль:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
            </div>
            {errors.requiredFields && <div>{errors.requiredFields}</div>}
            {errors.passwordMismatch && <div>{errors.passwordMismatch}</div>}
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegistrationForm;
