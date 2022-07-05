import '../Comment.css';

const Reply = (props) => {

    return (
        <div>
            {props.replyContent.map((reply, index) => {
                if(reply) {
                    return (
                        <div key={index} className='comment-wrapper'>
                            <div className='comment-text'>
                                <p>{reply.text}</p>
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

export default Reply;