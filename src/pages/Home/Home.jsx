import { useState, useEffect } from 'react';
import './Home.scss';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import Tags from '../../components/Tags/Tags';

function Home({ filterDisplayed, setOnHomePage }) {
    useEffect(() => {
        setOnHomePage(true);
    }, []);

    const [filterTags, setFilterTags] = useState([]);
    const updateFilterTags = (tag) => {
        if (!filterTags.includes(tag)) 
            setFilterTags(tag);
        else 
            setFilterTags([]);
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