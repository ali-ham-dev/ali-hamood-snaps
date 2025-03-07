import React from 'react';
import './LargeImageCard.scss';
import Tag from '../Tag/Tag.jsx';
import { v4 as uuidV4 }from 'uuid';
import LikeIcon from '../../assets/icons/Like_Outline.svg';


function ImageCard(props) {  
    const image = props.image ?? {};
    const imageSrc = image.photo ?? null;
    const imageAltText = image.imageAltText ?? '';
    const likes = image.likes ?? 0;
    const photographer = image.photographer ?? 'Unknown';
    const tags = image.tags ?? [];
    const timestamp = image.timestamp ?? '';

    console.log(image);

    const date = new Date(timestamp).toLocaleDateString('en', 
        { month: '2-digit', day: '2-digit', year: 'numeric' });

    return (
        <div className={"large-image-card"}>
            <div className="large-image-card__image-container">
                <img src={imageSrc} alt={imageAltText} className="large-image-card__image" />
            </div>
            <div className="large-image-card__tags">
                { tags.map((tag, index) =>  
                    <Tag text={tag} marginRight={(index === tags.length - 1) ? false : true} key={ uuidV4() } />) }
            </div>
            <div className="large-image-card__image-data">
                <div className="large-image-card__desktop-display">
                    <div className="large-image-card__likes">
                        <button className="large-image-card__like-button">
                            <img className="large-image-card__like-icon" src={LikeIcon} alt="Like icon"></img>
                        </button>
                        <span className="large-image-card__like-count">{`${likes} likes`}</span>
                    </div>
                    <span className="large-image-card__author-desktop-tablet">{`Photo by ${photographer}`}</span>
                    <span className="large-image-card__date">{date}</span>
                </div>
                <span className="large-image-card__author">{`Photo by ${photographer}`}</span>
            </div>
        </div>
    );
}

export default ImageCard;