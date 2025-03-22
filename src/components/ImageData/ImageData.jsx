import './ImageData.scss';
import LikeIcon from '../../assets/icons/Like_Outline.svg';

function ImageData({ image }) {
    const likes = image.likes ?? 0;
    const photographer = image.photographer ?? 'Unknown';
    const timestamp = image.timestamp ?? '';
    const date = new Date(timestamp).toLocaleDateString('en', 
        { month: '2-digit', day: '2-digit', year: 'numeric' });

    return (
        <div className="image-data">
            <div className="image-data__desktop-display">
                <div className="image-data__likes">
                    <button className="image-data__like-button" 
                        type="button">
                        <img className="image-data__like-icon" src={LikeIcon} alt="Like icon"></img>
                    </button>
                    <span className="image-data__like-count">{`${likes} likes`}</span>
                </div>
                <span className="image-data__author-desktop-tablet">{`Photo by ${photographer}`}</span>
                <span className="image-data__date">{date}</span>
            </div>
            <span className="image-data__author">{`Photo by ${photographer}`}</span>
        </div>
    )
}

export default ImageData;