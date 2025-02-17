import "./Footer.css";
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';

const footerLinkText = [
    {
        text: 'For photographers',
        link: 'for%20photographers'
    },
    {
        text: 'Hire talent',
        link: 'hire%20talent'
    },
    {
        text: 'Inspiration',
        link: 'inspiration'
    },
    {
        text: 'About',
        link: 'about'
    },
    {
        text: 'Careers',
        link: 'careers'
    },
    {
        text: 'Support',
        link: 'support'
    }
]

function Footer() {
    return (
        <footer className="footer">
            < Logo />
            <section className="footer__links">
                {
                    footerLinkText.map((link, index) => {
                        return (
                            <Link key={index} className="footer__link" to={`/${link.link}`}>{link.text}</Link>
                            // <a key={index} className="footer__link" to={`/${link.link}`}>{link.text}</a>
                        )
                    })
                }
            </section>
            <section className="footer__social">

            </section>
            <section className="service-condition">

            </section>
        </footer>
    );
}

export default Footer;