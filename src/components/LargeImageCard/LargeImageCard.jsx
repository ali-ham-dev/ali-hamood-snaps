import React from 'react';
import './LargeImageCard.scss';
import Tag from '../Tag/Tag.jsx';
import { v4 as uuidV4 }from 'uuid';
import ImageData from '../ImageData/ImageData.jsx';


function ImageCard(props) {  
    const image = props.image ?? {};
    const imageSrc = image.photo ?? null;
    const imageAltText = image.imageAltText ?? '';
    const tags = image.tags ?? [];

    return (
        <div className={"large-image-card"}>
            <div className="large-image-card__image-container">
                <img src={imageSrc} alt={imageAltText} className="large-image-card__image" />
            </div>
            <div className="large-image-card__tags">
                { tags.map((tag, index) =>  
                    <Tag text={tag} marginRight={(index === tags.length - 1) ? false : true} key={ uuidV4() } />) }
            </div>
            <ImageData image={image} />
        </div>
    );
}

export default ImageCard;