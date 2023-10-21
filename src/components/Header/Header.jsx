import './Header.css'
import mainLogo from '../../assets/images/main-logo.png';
function Header() {
    return (
        <>
            <header className="page-header">
                <a href="index.html" className="page-header__logo-and-wordmark">
                    <img src={mainLogo} alt="main logo" className='page-header__logo' />
                    <p className="page-header__wordmark">Web<span>Universe</span></p>
                </a>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Juniour курсы</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Middle+ курсы</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Пет проекты</a></li>
                    </ul>
                    <div className="header__login-register">
                        <a href="#" className="login__btn">Вход</a>
                        <a href="#" className="register__btn">Регистрация</a>
                    </div>
                </nav>
            </header >
        </>
    );
}

export default Header;