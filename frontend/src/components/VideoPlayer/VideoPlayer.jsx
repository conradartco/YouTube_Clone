import React from 'react';


const VideoPlayer = (props) => {
    

    return (
        <div>
            {props.videoContent.map((video, index) => {
                return (
                    <div key={index}>
                        <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={"https://www.youtube.com/embed/" + (video.id.videoId)} frameBorder="0"></iframe>
                        <h2>{video.snippet.title}</h2>
                        <p>{video.snippet.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default VideoPlayer;