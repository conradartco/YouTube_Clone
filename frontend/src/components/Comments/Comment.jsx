
const Comment = (props) => {

    return (
        <div>
            {props.commentContent.map((comment, index) => {
                if(comment) {
                    return (
                        <div key={index}>
                            <p>{comment.user}</p>
                            <p>{comment.text}</p>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default Comment;