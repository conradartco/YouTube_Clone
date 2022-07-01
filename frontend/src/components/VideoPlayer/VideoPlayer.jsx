import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    

    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={"https://www.youtube.com/embed/" + (props.videoSelect)} frameBorder="0"></iframe>
            <h2>{props.videoInfo.snippet.title}</h2>
            <p className='video-player-body'>{props.videoInfo.snippet.description}</p>
        </div>
    );
}

export default VideoPlayer;