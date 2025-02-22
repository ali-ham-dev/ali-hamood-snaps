import './Tag.css';
import {useState} from 'react';

function Tag(props) {
    const clickableClass = props.clickable ? 'tag--clickable' : '';
    const marginRight = props.marginRight ? 'tag--margin-right' : '';
    const marginBottom = props.marginBottom ? 'tag--margin-bottom' : '';

    const [clicked, setClicked] = useState(false);
    const handelTagClick = ()=>{
        if (!clickableClass)
            return;

        setClicked(!clicked);
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