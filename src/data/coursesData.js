const coursesData = {
    frontend: [{
        image: '/assets/images/html-css-logo.png',
        title: 'HTML и CSS',
        description: 'Профессиональная вёрстка сайтов',
        link: '/frontend/html-and-css-level-one',
        linkName: 'Верстка LVL 1'
    },
    {
        image: '/assets/images/html-css-logo.png',
        title: 'HTML И CSS',
        description: 'Адаптивная вёрстка и автоматизация',
        link: '/frontend/html-and-css-level-second',
        linkName: 'ВЕРСТКА LVL 2'
    }, {
        image: '/assets/images/javascript.svg',
        title: 'JAVASCRIPT',
        description: 'Профессиональная разработка веб-интерфейсов',
        link: '/frontend/javascript-lvl-one',
        linkName: 'JAVASCRIPT LVL 1'
    },
    {
        image: '/assets/images/javascript.svg',
        title: 'JAVASCRIPT',
        description: 'Архитектура клиентских приложени',
        link: '/frontend/javascript-lvl-second',
        linkName: 'JAVASCRIPT LVL 2'
    },
    {
        image: '/assets/images/react.svg',
        title: 'React',
        description: 'Разработка сложных клиентских приложений',
        link: '/frontend/react',
        linkName: 'React'
    }
    ],
    backend: [
        {
            image: '/assets/images/php-logo.png',
            title: 'PHP',
            description: 'Профессиональная веб-разработка',
            link: '#',
            linkName: 'in dev'
        },
        {
            image: '/assets/images/yii-logo.png',
            title: 'PHP И YII',
            description: 'Архитектура сложных веб-сервисов',
            link: '#',
            linkName: 'in dev'
        }
        ,
        {
            image: '/assets/images/laravel-logo.png',
            title: 'PHP И LARAVEL',
            description: 'Создание современных бэкендов',
            link: '#',
            linkName: 'in dev'
        },
        {
            image: '/assets/images/node.js.png',
            title: 'NODE.JS',
            description: 'Профессиональная разработка REST API',
            link: '#',
            linkName: 'in dev'
        },
        {
            image: '/assets/images/node.js.png',
            title: 'NODE.JS',
            description: 'Node.js и Nest.js. Микросервисная архитектура',
            link: '#',
            linkName: 'in dev'
        }

    ],
    levelup: [
        {
            image: '/assets/images/git-logo.png',
            title: 'Git | GitHub',
            description: 'Для разработчиков, которые хотят научиться работать с Git',
            link: 'https://cloud.mail.ru/public/9VXY/Hg8pJYXrm',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/css-logo.png',
            title: 'CSS-in-JS',
            description: 'Курс научит работать с CSS-in-JS — новым подходом к стилизации веб-приложений',
            link: 'https://cloud.mail.ru/public/USw9/PSfzRLgF6',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/figma-logo.png',
            title: 'Дизайн для фронтендеров',
            description: 'Изучите основы дизайна интерфейсов',
            link: 'https://cloud.mail.ru/public/r6Ni/M2WZkmuzC',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/react-logo.svg',
            title: 'Вёрстка React-компонентов',
            description: 'Как собирать и создавать React-компоненты',
            link: 'https://cloud.mail.ru/public/bswP/PeJvC61HB',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/mentor-logo.png',
            title: 'Курсы наставничества',
            description: 'Необходимая база по наставничеству',
            link: 'https://cloud.mail.ru/public/cfzK/jnrMikfoU',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/reg-logo.png',
            title: 'Регулярные выражения для фронтендеров',
            description: 'Регулярные выражения для web-разработчка',
            link: 'https://cloud.mail.ru/public/sSzz/hrjd7dRZu',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/html-css-logo.png',
            title: 'Подготовка верстки для CMS',
            description: 'Верстка для интеграции в CMS',
            link: 'https://cloud.mail.ru/public/Kqje/oXw86r1Bi',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/graph-logo.png',
            title: 'Алгоритмы и структуры данных',
            description: 'Понимание структур данных и алгоритмов позволяет писать более эффективный код',
            link: 'https://cloud.mail.ru/public/rFge/5C21qKNMB',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/security-logo.png',
            title: 'Протоколы и сети: основы',
            description: 'Как устроена передача данных по сетям через протоколы.',
            link: 'https://cloud.mail.ru/public/yNHT/ZHDEadqhk',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/security-logo.png',
            title: 'Протоколы и сети: веб-безопасность',
            description: 'Защита компонентов веб-приложений и написание кода, устойчивого ко взломам.',
            link: 'https://cloud.mail.ru/public/WbVj/Bw3HmGL28',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/html-logo.png',
            title: 'Шаблонизаторы HTML',
            description: 'Шаблонизаторы сокращают время на разработку продуктов и уменьшают количество ошибок и исправлений.',
            link: 'https://cloud.mail.ru/public/aXsR/yuuSxS8x7',
            linkName: 'Скачать'
        },
        {
            image: '/assets/images/css-logo.png',
            title: 'Мастер анимаций: SVG-анимации',
            description: 'Улучшайте UI/UX вашего проекта с помощью анимаций, которые произведут впечатление на пользователя.',
            link: '#',
            linkName: 'in dev'
        },
        {
            image: '/assets/images/css-logo.png',
            title: 'Мастер анимаций: CSS и JS-анимации',
            description: 'Научитесь делать CSS-анимации любого уровня сложности: микро-анимации, анимации без взаимодействия, по движению мыши и по скроллу.',
            link: '#',
            linkName: 'in dev'
        },
        {
            image: '/assets/images/mail-logo.png',
            title: 'Вёрстка email-рассылок',
            description: 'Научитесь правильно верстать красивые email-рассылки, адаптировать письма под мобильные экраны, тестировать и ускорять загрузку писем.',
            link: '#',
            linkName: 'in dev'
        },
        {
            image: '/assets/images/vue-logo.png',
            title: 'Vue.js 3',
            description: 'Задача курса — научить студента создавать проект на Vue.js 3 с нуля.',
            link: '#',
            linkName: 'in dev'
        }
    ]
}

export default coursesData;

