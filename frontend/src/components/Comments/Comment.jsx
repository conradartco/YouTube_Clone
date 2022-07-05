import ReplyList from './Replies/ReplyList';
import './Comment.css';

const Comment = (props) => {

    return (
        <div>
            {props.commentContent.map((comment, index) => {
                if(comment) {
                    return (
                        <div>
                            <div key={index} className='comment-wrapper'>
                                <div className='comment-text'>
                                    <p>{comment.text}</p>
                                </div>
                                <div className='comment-break'>
                                    <hr className='comment-rule'></hr>
                                </div>
                            </div>
                            <div key={index + 1}>
                                <ReplyList commentId={comment.id}/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default Comment;