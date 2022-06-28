import React from 'react';


const VideoObject = (props) => {
    

    return (
        <div>
            {props.videoContent.map((video, index) => {
                return (
                    <div key={index}>
                        <h2>{video.snippet.title}</h2>
                        <img src={video.snippet.thumbnails.medium.url}/>
                        <p>{video.snippet.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default VideoObject;