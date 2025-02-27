import './ImageCard.scss';
import Tag from '../Tag/Tag.jsx';
import { v4 as uuidV4 }from 'uuid';
import React from 'react';

function ImageCard(props) {  
    const imageSrc = props.imageSrc ?? '';
    const imageAltText = props.imageAltText ?? '';
    const author = props.author ?? 'Unknown';
    const tags = props.tags ?? [];

    return (
        <div className={`image-card ${props.filterDisplayed?'image-card--filter-displayed':''}`}>
            <div className="image-card__image-container">
                <img src={imageSrc} alt={imageAltText} className="image-card__image" />
                <span className="image-card__image-author">{author}</span>
            </div>
            <div className="image-card__tags">
                { tags.map((tag, index) =>  
                    <Tag text={tag} marginRight={(index === tags.length - 1) ? false : true} key={ uuidV4() } />) }
            </div>
        </div>
    );
}

export default ImageCard;