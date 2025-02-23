import { useState } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import Tags from '../Tags/Tags';

function Home({filterDisplayed}) {
    const [filterTags, setFilterTags] = useState([]);
    const updateFilterTags = (tag) => {
        if (filterTags.includes(tag))
            setFilterTags(filterTags.filter(t => t !== tag));
        else
            setFilterTags([...filterTags, tag]);
    };

    return (
        <main className="home">
            <Tags filterDisplayed={ filterDisplayed } updateFilterTags={ updateFilterTags } />
            <div className="home__container">
                <Hero filterDisplayed={ filterDisplayed }/>
                <Gallery filterDisplayed={ filterDisplayed } filterTags={ filterTags }/>
            </div>
        </main>
    );
}

export default Home;