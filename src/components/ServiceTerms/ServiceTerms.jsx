import './ServiceTerms.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const serviceLinks = [
    {
        text: '©2024 Snaps',
        link: 'copywrite%202024%20snaps'
    },
    {
        text: '. Terms',
        link: '.%20terms'
    },
    {
        text: 'Privacy',
        link: 'privacy'
    },
    {
        text: 'Cookies',
        link: 'cookies'
    }
];

function ServiceTerms() {
    return (
        <section className="service-terms">
            {
                serviceLinks.map((link) => {
                    return (
                        <Link className="service-terms__link" to={`/${link.link}`} key={uuidv4()}>{link.text}</Link>
                    )
                })
            }
        </section>
    );
}

export default ServiceTerms;