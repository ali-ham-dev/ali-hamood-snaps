import "./Footer.css";
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';

const contentLinks = [
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
]

const corpLinks = [
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
            <div className="footer__container">
                < Logo />
                <section className="footer__links">
                    <div className="footer__links-container">
                        {
                            contentLinks.map((link, index) => {
                                return (
                                    <NavLink key={index} className="footer__link" to={`/${link.link}`}>{link.text}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="footer__links-container">
                        {
                            corpLinks.map((link, index) => {
                                return (
                                    <NavLink key={index} className="footer__link" to={`/${link.link}`}>{link.text}</NavLink>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="footer__social">

                </section>
            </div>

            <section className="service-condition">

            </section>
        </footer>
    );
}

export default Footer;