import './Home.css';
import Hero from '../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import Tags from '../Tags/Tags';


function Home() {
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