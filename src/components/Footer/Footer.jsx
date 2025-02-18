import "./Footer.css";
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';
import Social from '../Social/Social';
import ServiceTerms from '../ServiceTerms/ServiceTerms';

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
];

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
];

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
                            corpLinks.map((link) => {
                                return (
                                    <NavLink className="footer__link" to={`/${link.link}`}>{link.text}</NavLink>
                                )
                            })
                        }
                    </div>
                </section>
                <Social />
            </div>
            <ServiceTerms />
        </footer>
    );
}

export default Footer;