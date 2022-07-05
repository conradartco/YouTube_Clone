import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reply from './Reply';
import '../Comment.css';

const ReplyList = (props) => {

    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/replies/" + props.commentId + "/")
                setReplies(response.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }
        fetchReplies();
    }, []);

    return (
        <div className='reply-list'>
            {console.log(props.commentId)}
            <Reply replyContent={replies}/>
        </div>
    );
}

export default ReplyList;