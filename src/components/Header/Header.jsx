import classes from './Header.module.css'
import mainLogo from '/assets/images/main-logo.png';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className={classes.header}>
                <NavLink to="/" className={classes.logo__block}>
                    <img src={mainLogo} alt="main logo" className={classes.logo} />
                    <p className={classes.logo__wordmark}>Web<span>Universe</span></p>
                </NavLink>
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        <li className={classes.item}><NavLink to="/" className={navData => navData.isActive ? classes.link__active : classes.link}>Главная</NavLink></li>
                        <li className={classes.item}><NavLink to="/frontend" className={navData => navData.isActive ? classes.link__active : classes.link}>Frontend</NavLink></li>
                        <li className={classes.item}><NavLink to="/backend" className={navData => navData.isActive ? classes.link__active : classes.link}>Backend</NavLink></li>
                        <li className={classes.item}><NavLink to="/level-up" className={navData => navData.isActive ? classes.link__active : classes.link}>Middle+</NavLink></li>
                        <li className={classes.item}><NavLink to="/pet-projects" className={navData => navData.isActive ? classes.link__active : classes.link}>Пет проекты</NavLink></li>
                    </ul>
                    <div className={classes.login__register}>
                        <NavLink to="/login" className={classes.login__btn}>Вход</NavLink>
                        <NavLink to="/register" className={classes.register__btn}>Регистрация</NavLink>
                    </div>
                </nav>
            </header >
        </>
    );
}

export default Header;