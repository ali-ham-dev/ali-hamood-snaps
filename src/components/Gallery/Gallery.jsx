import './Gallery.scss';
import { v4 as uuidv4 } from 'uuid';
import ImageCard from '../ImageCard/ImageCard.jsx';
import images from '../../data/photos.json';
import React from 'react';

function Gallery({filterDisplayed, filterTags}) {
    return (
        <section className="gallery">
            {
                images.map((image) => {
                    let render = false;

                    for (let i = 0; i < image.tags.length; i++) {
                        if (filterTags.includes(image.tags[i])) {
                            render = true;
                            break;
                        }
                    }

                    if (filterTags.length === 0)
                        render = true;

                    if (!render)
                        return;

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