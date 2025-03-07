import React from 'react';
import './LargeImageCard.scss';
import Tag from '../Tag/Tag.jsx';
import { v4 as uuidV4 }from 'uuid';


function ImageCard(props) {  
    const imageSrc = props.imageSrc ?? null;
    const imageAltText = props.imageAltText ?? '';
    const author = props.author ?? 'Unknown';
    const tags = props.tags ?? [];
    const imageId = props.imageId ?? '';
    const filterDisplayed = props.filterDisplayed ? 'image-card--filter-displayed' : '';

    // console.log(imageSrc);

    return (
        <div className={`image-card ${ filterDisplayed }`}>
            <div className="image-card__image-container">
                <img src={imageSrc} alt={imageAltText} className="image-card__image" />
            </div>
            <div className="image-card__tags">
                { tags.map((tag, index) =>  
                    <Tag text={tag} marginRight={(index === tags.length - 1) ? false : true} key={ uuidV4() } />) }
            </div>
            <div className="image-card__image-data">
                <div className="image-card__likes">
                    <button className="image-card__like-button"></button>
                    <span className="image-card__like-count">0</span>
                </div>
                <span className="image-card__author"></span>
                <span className="image-card__date"></span>
            </div>
        </div>
    );
}

export default ImageCard;