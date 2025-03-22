import './Tag.scss';

function Tag(props) {
    const clickableClass = props.clickable ? 'tag--clickable' : '';
    const marginRight = props.marginRight ? 'tag--margin-right' : '';
    const marginBottom = props.marginBottom ? 'tag--margin-bottom' : '';
    const clicked = props.tagClickState ? props.tagClickState[props.text] : false;

    const handelTagClick = (event)=>{
        if (!clickableClass && !props.updateFilterTags)
            return;

        props.handelTagClickState(event.target.innerText);
        props.updateFilterTags(event.target.innerText);
    }

    return (
        <button className={`tag 
            ${ clickableClass } 
            ${ marginRight } 
            ${ marginBottom } 
            ${clicked ? 'tag--clickable-clicked' : ''}`}
            onClick={handelTagClick}>{ props.text }</button>
    );
}

export default Tag;