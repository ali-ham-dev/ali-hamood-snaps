import { useState } from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import Tags from '../Tags/Tags';

function Home({filterDisplayed}) {
    const filterTags = [];
    const updateFilterTags = (tag) => {
        if (filterTags.includes(tag))
            filterTags.splice(filterTags.indexOf(tag), 1);
        else
            filterTags.push(tag);

        console.log(filterTags);
    };

    return (
        <main className="home">
            <Tags filterDisplayed={filterDisplayed} updateFilterTags={updateFilterTags}/>
            <div className="home__container">
                <Hero filterDisplayed={filterDisplayed}/>
                <Gallery filterDisplayed={filterDisplayed}/>
            </div>
        </main>
    );
}

export default Home;