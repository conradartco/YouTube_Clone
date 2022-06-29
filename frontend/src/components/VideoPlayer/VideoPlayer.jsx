import React from 'react';


const VideoPlayer = (props) => {
    

    return (
        <div>
            {console.log('props.videoSelect in VideoPlayer', props.videoSelect)}
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={"https://www.youtube.com/embed/" + (props.videoSelect)} frameBorder="0"></iframe>
            {/* <h2>{props.snippet.title}</h2>
            <p>{props.snippet.description}</p> */}
        </div>
    );
}

export default VideoPlayer;