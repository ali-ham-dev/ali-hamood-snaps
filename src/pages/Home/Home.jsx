import { useState } from 'react';
import './Home.scss';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import Tags from '../../components/Tags/Tags';
import React from 'react';

function Home({ filterDisplayed, setOnHomePage }) {
    setOnHomePage(true);

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