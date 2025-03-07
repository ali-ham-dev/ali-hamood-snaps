import React from 'react';
import { useState, useEffect } from 'react';
import './Gallery.scss';
import ImageCard from '../ImageCard/ImageCard.jsx';
// import images from '../../data/photos.json';
import axios from 'axios';
import apiData from '../../data/apiData.json';
import { v4 as uuidv4 } from 'uuid';


const renderImageCard = (filterTags, image) => {
    if (filterTags.length === 0)
        return true;

    let tagFound = false;
    image.tags.forEach((tag) => {
        if (filterTags.includes(tag)) {
            tagFound = true;
            return;
        }
    });

    return tagFound ? true : false;
}

function Gallery({filterDisplayed, filterTags}) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getImages = async () => {
            try {
                const response = await axios.get(`
                    ${apiData.api_url}photos/${apiData.api_key}`);
                
                setImages(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getImages();
    }, []);

    return (
        <section className="gallery">
            {
                images.map((image) => {
                    if (!renderImageCard(filterTags, image))
                        return null;

                    return (
                        <ImageCard imageSrc={image.photo} 
                        imageAltText={image.photoDescription}
                        author={image.photographer}
                        tags={image.tags}
                        key={ image.id }
                        filterDisplayed={filterDisplayed}/>
                    );
                })
            }
        </section>
    );
}

export default Gallery;