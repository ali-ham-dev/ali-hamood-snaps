import './Tag.css';

function Tag(props) {
    const clickableClass = props.clickable ? 'tag--clickable' : '';
    const marginRight = props.marginRight ? 'tag--margin-right' : '';

    return (
        <button className={`tag ${clickableClass} ${marginRight}`}>{props.text}</button>
    );
}

export default Tag;