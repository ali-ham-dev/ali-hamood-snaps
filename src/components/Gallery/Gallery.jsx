import './Gallery.css';
import { v4 as uuidv4 } from 'uuid';
import ImageCard from '../ImageCard/ImageCard.jsx';
import images from '../../data/photos.json'

function Gallery({filterDisplayed}) {
    return (
        <section className="gallery">
            {
                images.map((image) => {
                    return (
                        <ImageCard imageSrc={image.photo} 
                        imageAltText={image.photoDescription}
                        author={image.photographer}
                        tags={image.tags}
                        key={ uuidv4() }
                        filterDisplayed={filterDisplayed}/>
                    );
                })
            }
        </section>
    );
}

export default Gallery;