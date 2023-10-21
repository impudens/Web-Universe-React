import classes from './Footer.module.css'
import telegramLogo from '/assets/images/telegram-image.svg';

function Footer() {
    return (
        <>
            <footer className={classes.footer}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <img src={telegramLogo} className={classes.logo}></img>
                        <a href="https://t.me/troff_webdev" target='_blank' className={classes.link}>troff_webdev</a>
                    </li>
                </ul>
            </footer >
        </>
    );
}

export default Footer;