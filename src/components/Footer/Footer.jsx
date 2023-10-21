import './Footer.css'
import telegramLogo from '../../assets/images/telegram-image.svg';

function Footer() {
    return (
        <>
            <footer class="page-footer">
                <ul class="socials-list">
                    <li class="socials-list__item">
                        <img src={telegramLogo} class="socials-list__logo"></img>
                        <a href="https://t.me/troff_webdev" class="socials-list__link">troff_webdev</a>
                    </li>
                </ul>
            </footer >
        </>
    );
}

export default Footer;