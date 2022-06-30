import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { googleAPIKey } from '../../keys';
import useAuth from "../../hooks/useAuth";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import CommentList from '../../components/Comments/CommentList';
import CommentForm from '../../components/Comments/CommentForm';

const VideoPage = (props) => {
    //pass videoId into VideoPlayer

    const {videoId} = useParams()
    const [video, setVideo] = useState([]);
    const [user, token] = useAuth();
    const [reRender, setReRender] = useState(false);

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

    async function addNewComment(newComment){
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment, {
            headers: {
                Authorization: "Bearer " + token,
            },
        }        
        );
        if(response.status === 201){
            console.log(newComment);
            setReRender(!reRender);
        }
    }


    return (
        <div>
            <div>
                <VideoPlayer videoSelect={videoId} videoInfo={props.videoSelect}/>
            </div>
            <div>
                <CommentList videoInfo={videoId} reRender={reRender}/>
            </div>
            <div>
                <CommentForm videoInfo={videoId} addNewComment={addNewComment}/>
            </div>
            <div>
                <RelatedVideos relatedToSelect={video} newVideoSelect={props.newVideoSelect} />
            </div>
        </div>
    )
}

export default VideoPage;