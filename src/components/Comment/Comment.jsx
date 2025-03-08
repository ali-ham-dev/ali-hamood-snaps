import React from 'react';
import './Comment.scss';

function Comment({ comment }) {
    const dateFormat = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }

    const date = new Date(comment.timestamp).toLocaleDateString('en', dateFormat);
    const seoDateTime = new Date(comment.timestamp).toISOString();

    return (
        <article className="comment">
            <div className="comment__comment-header">
                <strong className="comment__user-name">{comment.name}</strong>
                <time datetime={seoDateTime} className="comment__date">{date}</time>
            </div>
            <p className="comment__comment">
                {comment.comment}
            </p>
        </article>
    )
}

export default Comment;