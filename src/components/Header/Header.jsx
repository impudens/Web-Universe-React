import classes from './Header.module.css'
import mainLogo from '../../assets/images/main-logo.png';
function Header() {
    return (
        <>
            <header className={classes.header}>
                <a href="index.html" className={classes.logo__block}>
                    <img src={mainLogo} alt="main logo" className={classes.logo} />
                    <p className={classes.logo__wordmark}>Web<span>Universe</span></p>
                </a>
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        <li className={classes.item}><a href="#" className={classes.link}>Juniour курсы</a></li>
                        <li className={classes.item}><a href="#" className={classes.link}>Middle+ курсы</a></li>
                        <li className={classes.item}><a href="#" className={classes.link}>Пет проекты</a></li>
                    </ul>
                    <div className={classes.login__register}>
                        <a href="#" className={classes.login__btn}>Вход</a>
                        <a href="#" className={classes.register__btn}>Регистрация</a>
                    </div>
                </nav>
            </header >
        </>
    );
}

export default Header;