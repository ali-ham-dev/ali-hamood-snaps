import './Footer.scss';
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';
import Social from '../Social/Social';
import ServiceTerms from '../ServiceTerms/ServiceTerms';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

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
    const footerLogo = 'footer__logo';
    const footerSocialDesktop = 'footer__social--desktop';
    const footerSocialMobileTable = 'footer__social--mobile-tablet';

    return (
        <footer className="footer">
            <div className="footer__container">
                <Logo className={ footerLogo }/>
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
                    <Social className={ footerSocialDesktop }/>
                </section>
            </div>
            <Social className={ footerSocialMobileTable }/>
            <ServiceTerms />
        </footer>
    );
}

export default Footer;