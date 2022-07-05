import React from "react";
import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { googleAPIKey } from "../../keys";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoObject from "../../components/VideoObject/VideoObject";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

  // const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  const [videos, setVideos] = useState([]);


  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=6&q=strangerthings" + "&key=" + googleAPIKey + "&part=snippet");
        setVideos(response.data.items)
      } catch (error) {
        console.log(error.response.data)
      }
    }
    fetchVideos();
  }, []);

  async function searchFilter(query){
    try {
      let response = await axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=6&q=" + query + "&key=" + googleAPIKey + "&part=snippet");
      setVideos(response.data.items)
    } catch (error) {
      console.log('error in searchFilter', error.response.data)
    }
  }

  return (
    <div className="container">
      <div>
        <SearchBar searchQueryData={searchFilter}/>
      </div>
      <div>
        <VideoObject videoContent={videos} videoSelect={props.videoSelect}/>
      </div>
    </div>
  );
};

export default HomePage;
