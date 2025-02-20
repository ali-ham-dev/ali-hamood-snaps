import './ImageCard.css';
import Tag from '../tag/Tag.jsx';
import tags from '../../data/tags.json';
import photos from '../../data/photos.json';

function ImageCard() {  
    // tags.forEach(tag => { console.log(tag); });

    return (
        <div className="image-card">
            <div className="image-card__image-container">
                {/* <img src="" alt="" className="image-card__image" /> */}
                <div className="image-card__image-author"></div>
            </div>
            <div className="image-card__tags">
                <Tag text={'Canada'} />
                <Tag text={'BC'} clickable={true} />
            </div>
        </div>
    );
}

export default ImageCard;