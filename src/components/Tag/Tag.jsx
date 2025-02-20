import './Tag.css';

function Tag(props) {
    const clickableClass = props.clickable ? 'tag--clickable' : '';

    return (
        <button className={`tag ${clickableClass}`}>{props.text}</button>
    );
}

export default Tag;