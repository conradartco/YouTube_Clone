import React from 'react';


const VideoPlayer = (props) => {
    

    return (
        <div>
            {props.videoContent.map((video, index) => {
                return (
                    <iframe key={index} id="ytplayer" type="text/html" width="640" height="360"
                    src={"https://www.youtube.com/embed/" + (video.id.videoId)} frameBorder="0"></iframe>
                );
            })}
        </div>
    );
}

export default VideoPlayer;