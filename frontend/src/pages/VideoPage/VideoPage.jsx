import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
// import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

const VideoPage = (props) => {
    //pass videoId into VideoPlayer

    const {videoId} = useParams()

    return (
        <div>
            <div>
                {console.log('videoId in VideoPage', videoId)}
                <VideoPlayer videoSelect={videoId}/>
            </div>
            {/* <div>
                <RelatedVideos relatedToSelect={props}/>
            </div> */}
        </div>
    )
}

export default VideoPage;