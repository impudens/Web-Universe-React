import './Footer.css'
import telegramLogo from '../../assets/images/telegram-image.svg';

function Footer() {
    return (
        <>
            <footer className="page-footer">
                <ul className="socials-list">
                    <li className="socials-list__item">
                        <img src={telegramLogo} className="socials-list__logo"></img>
                        <a href="https://t.me/troff_webdev" className="socials-list__link">troff_webdev</a>
                    </li>
                </ul>
            </footer >
        </>
    );
}

export default Footer;