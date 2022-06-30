import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelatedVideos.css';

const RelatedVideos = (props) => {

    let navigate = useNavigate();

    function handleClick(video) {
        //below, pass in whole object in map
        //once object gets in here, pass object to videoSelect, but only use videoID with navigate
        props.newVideoSelect(video)
        navigate('/video/' + video.id.videoId)
    }

    return (
        <div className='related-object'>
            {props.relatedToSelect.map((video, index) => {
                if(video.snippet) {
                    return (
                    <div key={index} className='related-container'>
                        <h2>{video.snippet.title}</h2>
                        <img src={video.snippet.thumbnails.medium.url}/>
                        <p>{video.snippet.description}</p>
                        <button type="submit" onClick={() => handleClick(video)}>Watch</button>
                    </div>
                );
                }
                
            })}
        </div>
    );
}

export default RelatedVideos;