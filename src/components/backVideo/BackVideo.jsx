import React from "react";
import videoFile from '../../assets/videos/video/backViolet.mp4';

import './BackVideo.scss';


const BackVideo = () => {
return(
    <div className="videoBackground"> 
        <video autoPlay muted loop >
            <source src={videoFile} type="video/mp4"/>
        </video>
        <div className="overlay"></div>

    </div>
)}

export default BackVideo;