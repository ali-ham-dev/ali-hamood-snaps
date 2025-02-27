import './Tag.css';
import { useState, useEffect} from 'react';
import React from 'react';

function Tag(props) {
    const clickableClass = props.clickable ? 'tag--clickable' : '';
    const marginRight = props.marginRight ? 'tag--margin-right' : '';
    const marginBottom = props.marginBottom ? 'tag--margin-bottom' : '';

    const [clicked, setClicked] = useState(false);
    const handelTagClick = (event)=>{
        if (!clickableClass && !props.updateFilterTags)
            return;

        setClicked(!clicked);
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