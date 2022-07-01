import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoObject.css';

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
        <div className='video-display-container'>
            {props.videoContent.map((video, index) => {
                if(video.snippet) {
                    return (
                    <div key={index} className='video-object-display'>
                        <div>
                           <img className='video-object-thumb' src={video.snippet.thumbnails.medium.url}/>
                        </div>
                        <div className='video-header'>
                             <h2>{video.snippet.title}</h2>
                        </div>
                        <div className='video-body'>
                            <p>{video.snippet.description}</p>
                        </div>
                        <div>
                            <button type="submit" className='video-button' onClick={() => handleClick(video)}>Watch</button>
                        </div>
                    </div>
                );
                }
                
            })}
        </div>
    );
}

export default VideoObject;