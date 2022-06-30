import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { googleAPIKey } from '../../keys';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import CommentList from '../../components/Comments/CommentList';

const VideoPage = (props) => {
    //pass videoId into VideoPlayer

    const {videoId} = useParams()
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            let response = await axios.get("https://www.googleapis.com/youtube/v3/search?relatedToVideoId=" + videoId + "&type=video&key=" + googleAPIKey + "&part=snippet");
            setVideo(response.data.items)
          } catch (error) {
            console.log(error.response.data)
          }
        }
        fetchVideos();
      }, []);

    return (
        <div>
            <div>
                {console.log('videoId in VideoPage', videoId)}
                <VideoPlayer videoSelect={videoId} videoInfo={props.videoSelect}/>
            </div>
            <div>
                <CommentList videoInfo={videoId}/>
            </div>
            <div>
                {console.log('videos related in VideoPage', video)}
                <RelatedVideos relatedToSelect={video} newVideoSelect={props.newVideoSelect} />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default VideoPage;