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
        <div>
            {props.videoContent.map((video, index) => {
                if(video.snippet) {
                    return (
                    <div key={index} className='video-object-display'>
                        <div>
                           <img src={video.snippet.thumbnails.medium.url}/>
                        </div>
                        <div>
                             <h2>{video.snippet.title}</h2>
                        </div>
                        <div>
                            <p>{video.snippet.description}</p>
                        </div>
                        <div>
                            <button type="submit" onClick={() => handleClick(video)}>Watch</button>
                        </div>
                    </div>
                );
                }
                
            })}
        </div>
    );
}

export default VideoObject;