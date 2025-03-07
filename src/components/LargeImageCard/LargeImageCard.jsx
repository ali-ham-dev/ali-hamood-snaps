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
    const filterDisplayed = props.filterDisplayed ? 'large-image-card--filter-displayed' : '';

    // console.log(imageSrc);

    return (
        <div className={`large-image-card ${ filterDisplayed }`}>
            <div className="large-image-card__image-container">
                <img src={imageSrc} alt={imageAltText} className="large-image-card__image" />
            </div>
            <div className="large-image-card__tags">
                { tags.map((tag, index) =>  
                    <Tag text={tag} marginRight={(index === tags.length - 1) ? false : true} key={ uuidV4() } />) }
            </div>
            <div className="large-image-card__image-data">
                <div className="large-image-card__likes">
                    <button className="large-image-card__like-button"></button>
                    <span className="large-image-card__like-count">0</span>
                </div>
                <span className="large-image-card__author"></span>
                <span className="large-image-card__date"></span>
            </div>
        </div>
    );
}

export default ImageCard;