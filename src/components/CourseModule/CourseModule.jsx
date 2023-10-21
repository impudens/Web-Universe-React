import './CourseModule.module.css'

function CourseModule() {
    return (
        <>
            <section className="course">
                <div className="container course__block">
                    <h2 className="course__title">Оглавление курса</h2>
                    <ol className="course__list">
                        <li className="course__item"><a href="#" className="course__link">Старт</a>
                            <p className="course__description">Познакомимся с преподавателями, наставниками и учебным процессом на курсе.
                                Рассмотрим устройство веба и чем вы будете заниматься на работе. Установим и
                                настроим инструменты для работы.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Разметка</a>
                            <p className="course__description">Создадим семантичную, доступную и выразительную разметку страниц проектов
                                по
                                макету.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Графика</a>
                            <p className="course__description">Экспортируем графику из макета, подключим контентную графику в разметку.
                            </p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Базовая стилизация</a>
                            <p className="course__description">Выполним базовую стилизацию страниц проекта.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Сетки страниц на флексах</a>
                            <p className="course__description">Построим крупные сетки страниц с помощью флексов.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Сетки компонентов на
                            флексах</a>
                            <p className="course__description">Создадим мелкие сетки компонентов страниц при помощи флексов.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Сетки компонентов на
                            гридах</a>
                            <p className="course__description">Создадим мелкие сетки компонентов страниц при помощи гридов.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Декоративные элементы</a>
                            <p className="course__description">Добавим на страницы проектов мелкие декоративные и иконочные графические
                                элементы. Стилизуем текстовые блоки, декоративные элементы внутри сеток
                                компонентов, кнопки и ссылки.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Попапы, слайдеры, формы</a>
                            <p className="course__description">Сверстаем всплывающие элементы. Разберём приёмы стилизации форм и их
                                элементов. Рассмотрим состояния и позиционирование элементов на странице.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Подготовка к защите</a>
                            <p className="course__description">Проверим проект на соответствие критериям качества и подготовим его к
                                публикации.</p>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Финал</a>
                        </li>
                        <li className="course__item"><a href="#" className="course__link">Проекты</a> </li>
                    </ol>

                </div>
            </section>
        </>
    );
}

export default CourseModule;