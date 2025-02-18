import './Social.css';
import FacebookSvg from '../../assets/icons/Facebook.svg';
import XSvg from '../../assets/icons/X_twitter.svg';
import InstagramSvg from '../../assets/icons/Instagram.svg';
import PinterestSvg from '../../assets/icons/Pinterest.svg';

const socialLinks = [
    {
        icon: FacebookSvg,
        link: 'https://www.facebook.com/'
    },
    {
        icon: XSvg,
        link: 'https://x.com/'
    },
    {
        icon:  InstagramSvg,
        link: 'https://www.instagram.com/'
    },
    {
        icon:  PinterestSvg,
        link: 'https://www.pinterest.com/'
    },
]

function Social() {
    return (
        <section className="social">
            {
                socialLinks.map((linkIcon) => {
                    return (
                        <a className="social__link" href={linkIcon.link}>
                            <img className="social__link-icon" alt={linkIcon.link} src={linkIcon.icon}/>
                        </a>
                    )
                })
            }
        </section>
    );
}

export default Social;