import { useState } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import Tags from '../Tags/Tags';


function Home() {
    const [tagsDisplayed, setTagsDisplayed] = useState();

    return (
        <main className="home">
            <Tags />
            <div className="home__container">
                <Hero />
                <Gallery />
            </div>
        </main>
    );
}

export default Home;