import './Comment.css';

const Comment = (props) => {

    return (
        <div>
            {props.commentContent.map((comment, index) => {
                if(comment) {
                    return (
                        <div className='comment-wrapper'>
                            <div key={index} className='comment-text'>
                                <p>{comment.text}</p>
                            </div>
                            <div className='comment-break'>
                                <hr className='comment-rule'></hr>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default Comment;