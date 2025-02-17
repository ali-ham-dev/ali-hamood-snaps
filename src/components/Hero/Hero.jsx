import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <b className="hero__title">Out mission:</b>
            <h2 className="hero__description">
                Provide photographers a space to share photos of the neighborhoods they 
                cherish, <em className="hero__description--italic"> expressed in their unique style.</em>
            </h2>
        </section>
    );
}

export default Hero;