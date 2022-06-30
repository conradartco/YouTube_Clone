import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

const CommentList = (props) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/comments/video/" + props.videoInfo + '/');
            setComments(response.data)
          } catch (error) {
            console.log(error.response.data)
          }
        }
        fetchComments();
      }, [props.reRender]);

    return (
        <div>
            <Comment commentContent={comments}/>
        </div>
    );
}

export default CommentList;