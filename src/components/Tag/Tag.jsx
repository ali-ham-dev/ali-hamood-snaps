import './Tag.css';

function Tag(props) {
    const clickableClass = props.clickable ? 'tag--clickable' : '';
    const marginRight = props.marginRight ? 'tag--margin-right' : '';
    const marginBottom = props.marginBottom ? 'tag--margin-bottom' : '';

    return (
        <button className={`
            tag 
            ${ clickableClass } 
            ${ marginRight } 
            ${ marginBottom }
            `}>{ props.text }</button>
    );
}

export default Tag;