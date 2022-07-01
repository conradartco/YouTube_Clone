import React, { useState } from 'react';
import './Comment.css';

const CommentForm = (props) => {
     
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            video_id: props.videoInfo,
            text: text
        }
        props.addNewComment(newComment);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={text} className="input-comment" placeholder="Add a Comment" onChange={(event) => setText(event.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="button-comment">Add</button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;