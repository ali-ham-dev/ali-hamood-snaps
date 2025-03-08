import React from 'react';
import './CommentForm.scss';
import { useState, useRef } from 'react';

function CommentForm() {
    const [nameIsValid, setNameIsValid] = useState(true);
    const [commentIsValid, setCommentIsValid] = useState(true);
    const formRef = useRef();

    const handelSubmit = (e) => {
        e.preventDefault();

        const name = formRef.current.name.value;
        const comment = formRef.current.comment.value;

        if (name === '') {
            setNameIsValid(false);
            alert('Please enter your name.');
        } else {
            setNameIsValid(true);
        }

        if (comment === '') {
            setCommentIsValid(false);
            alert('Please enter your comment.');
        } else {
            setCommentIsValid(true);
        }

        if (comment === '' || name === '') {
            return;
        }

        console.log(name);
        console.log(comment);
    }

    return (
        <form className="comment-form" ref={formRef}>
            <label className="comment-form__label" htmlFor="name">Name</label>
            <input type="text" 
                className={`comment-form__input-name 
                    ${nameIsValid ? '' : 'comment-form__input--error'}`} 
                name="name"/>
            <label className="comment-form__label comment-form__label--margin-top" htmlFor="comment">Comment</label>
            <textarea type="text"  
                className={`comment-form__input-comment
                    ${commentIsValid ? '' : 'comment-form__input--error'}`}
                name="comment"
                id="comment"/>
            <button type="button" 
                className="comment-form__button"
                onClick={handelSubmit}>Submit</button>
        </form>
    )
}

export default CommentForm;