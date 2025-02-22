import { useState } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import Tags from '../Tags/Tags';

function Home({filterDisplayed}) {
    return (
        <main className="home">
            <Tags filterDisplayed={filterDisplayed}/>
            <div className="home__container">
                <Hero filterDisplayed={filterDisplayed}/>
                <Gallery filterDisplayed={filterDisplayed}/>
            </div>
        </main>
    );
}

export default Home;