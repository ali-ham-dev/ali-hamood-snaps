import './Gallery.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

function Gallery() {
    const imageSrc = 'https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png';
    const imageAltText = 'Looking up to the Manhattan Bridge, in New York City, New York.';
    const author = 'Greg Hooper';
    const tags = ['New York', 'Bridge', 'Skyline', 'Cars', 'Bridge'];

    return (
        <section className="gallery">
            <ImageCard imageSrc={imageSrc} 
                imageAltText={imageAltText}
                author={author}
                tags={tags}/>
        </section>
    );
}

export default Gallery;