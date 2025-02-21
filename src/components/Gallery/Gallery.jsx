import './Gallery.css';
import ImageCard from '../ImageCard/ImageCard.jsx';
import images from '../../data/photos.json'

function Gallery() {
    return (
        <section className="gallery">
            {
                images.map((image) => {
                    return (
                        <ImageCard imageSrc={image.photo} 
                        imageAltText={image.photoDescription}
                        author={image.photographer}
                        tags={image.tags}/>
                    );
                })
            }
        </section>
    );
}

export default Gallery;