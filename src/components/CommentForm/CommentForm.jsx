import React from 'react';
import './CommentForm.scss';

function CommentForm() {
    return (
        <form className="comment-form">
            <label className="comment-form__label" for="name">Name</label>
            <input type="text" placeholder="Add your name..." className="comment-form__input-name" name="name"/>
            <label className="comment-form__label" for="comment">Comment</label>
            <input type="text" placeholder="Add your comment..." className="comment-form__input-comment" name="userName"/>
            <button type="submit" className="comment-form__button">Submit</button>
        </form>
    )
}

export default CommentForm;