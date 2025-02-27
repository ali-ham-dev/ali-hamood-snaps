import './Hero.scss';
import React from 'react';

function Hero({filterDisplayed}) {
    return (
        <section className="hero">
            <b className="hero__title">Our mission:</b>
            <h1 className={`hero__description ${filterDisplayed?'hero__description--filter-displayed':''}`}>
                Provide photographers a space to share photos of the neighborhoods they 
                cherish, <em className="hero__description--italic"> expressed in their unique style.</em>
            </h1>
        </section>
    );
}

export default Hero;