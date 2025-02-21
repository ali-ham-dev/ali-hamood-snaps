import './ImageCard.css';
import Tag from '../tag/Tag.jsx';

function ImageCard(props) {  
    const imageSrc = props.imageSrc ?? '';
    const imageAltText = props.imageAltText ?? '';
    const author = props.author ?? 'Unknown';
    const tags = props.tags ?? [];
    console.log('Got called once');

    return (
        <div className="image-card">
            <div className="image-card__image-container">
                <img src={imageSrc} alt={imageAltText} className="image-card__image" />
                <span className="image-card__image-author">{author}</span>
            </div>
            <div className="image-card__tags">
                { tags.map((tag, index) =>  <Tag text={tag} marginRight={(index === tags.length - 1) ? true : false}/>) }
            </div>
        </div>
    );
}

export default ImageCard;