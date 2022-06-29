// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import NotFound from "./pages/NotFound/NotFound";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [video, setVideo] = useState([]);
  
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage videoSelect={setVideo}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId/" element={<VideoPage videoSelect={video} newVideoSelect={setVideo}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
