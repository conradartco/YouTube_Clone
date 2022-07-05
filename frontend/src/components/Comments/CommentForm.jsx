import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Comment.css';

const CommentForm = (props) => {
     
    const [text, setText] = useState('');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

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
                    {user ? (
                        <button type="submit" className="button-comment">Add</button>
                    ) : (
                        <button onClick={() => navigate("/login")} className="button-comment">Login</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CommentForm;