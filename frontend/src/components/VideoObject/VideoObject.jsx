import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoObject = (props) => {

    let navigate = useNavigate();

    function handleClick(video) {
        //below, pass in whole object in map
        //once object gets in here, pass object to videoSelect, but only use videoID with navigate
        console.log('video in handleClick', video)
        props.videoSelect(video)
        navigate('/video/' + video.id.videoId)
    }

    return (
        <div>
            {props.videoContent.map((video, index) => {
                if(video.snippet) {
                    return (
                    <div key={index}>
                        <h2>{video.snippet.title}</h2>
                        <img src={video.snippet.thumbnails.medium.url}/>
                        <p>{video.snippet.description}</p>
                        {console.log('video in map', video)}
                        <button type="submit" onClick={() => handleClick(video)}>Watch</button>
                    </div>
                );
                }
                
            })}
        </div>
    );
}

export default VideoObject;