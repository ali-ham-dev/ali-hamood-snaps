import './Footer.css';
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';
import Social from '../Social/Social';
import ServiceTerms from '../ServiceTerms/ServiceTerms';
import { v4 as uuidv4 } from 'uuid';

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
    const logoBottomMargin = { 'margin-bottom': '1rem' };
    const socialTopBottomMargin = { 
        'margin-top': '0.5rem', 
        'margin-bottom': '1rem' 
    };
    const serviceTopBottomMargin = {
        'margin-top': '1rem',
        'margin-bottom': '1rem'
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                <Logo style={ logoBottomMargin }/>
                <section className="footer__links">
                    <div className="footer__links-container">
                        {
                            contentLinks.map((link) => {
                                return (
                                    <NavLink key={uuidv4()} className="footer__link" to={`/${link.link}`}>{link.text}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="footer__links-container">
                        {
                            corpLinks.map((link) => {
                                return (
                                    <NavLink key={uuidv4()} className="footer__link" to={`/${link.link}`}>{link.text}</NavLink>
                                )
                            })
                        }
                    </div>
                </section>
                <Social props={ socialTopBottomMargin }/>
            </div>
            <ServiceTerms props={ serviceTopBottomMargin }/>
        </footer>
    );
}

export default Footer;