import "./Home.scss";
import Video from "../../assets/bgVideo.mp4";
import { GoUnmute, GoMute } from "react-icons/go";
import { AiOutlineSwapRight } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  let vid = "";

  useEffect(() => {
    Aos.init({ duration: 2000 });
    vid = document.querySelector("#myVideo");
  }, []);

  const [playVideo, setPlayVideo] = useState("false");

  function playVid() {
    vid.play();
    setPlayVideo(!playVideo);
  }
  function pauseVid() {
    vid.pause();
    setPlayVideo(!playVideo);

  }
  return (
    <div className="Home">
      <div className="videoBg">
        <video id="myVideo" src={Video} preload="auto" loop="loop" ></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button data-aos="fade-up" className="btn flex">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
        <button data-aos="fade-up" className="btn flex play-btn">
          {playVideo ? (
            <GoMute size={30} onClick={playVid} />
           
          ) : (
            <GoUnmute size={30} onClick={pauseVid()} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;















// import React ,{useState, useRef, useEffect} from 'react';

// import './App.css';

// function App() {
//   const [mystream, setmystream] = useState();
//     const [videoswitch, setvideo] = useState(true);
//     const [audioswitch, setaudio] = useState(true);
//     const myvideo = useRef(HTMLVideoElement);
 
//     useEffect(() => {
//         navigator.mediaDevices
//             .getUserMedia({ video: true, audio: true })
//             .then((stream) => {
//                 myvideo.current.srcObject = stream;
//                 myvideo.current.autoplay = true;
//                 myvideo.current.muted = false;
//                 setmystream(stream);
//             });
//     }, []);
 
//     const handleVideo = () => {
//         if (videoswitch) {
//             setvideo(false);
//             mystream.getTracks().forEach(function (track) {
//                 if (track.readyState === "live" && 
//                     track.kind === "video") {
//                     track.enabled = false;
//                 }
//             });
//         } else {
//             setvideo(true);
//             mystream.getTracks().forEach(function (track) {
//                 if (track.readyState === "live" && 
//                     track.kind === "video") {
//                     track.enabled = true;
//                 }
//             });
//         }
//     };
   
//     return (
//         <div>
//             <button onClick={handleVideo}>
//                 {videoswitch ? "Turn off video" : 
//                     "Turn on video"}
//             </button>

//             <video ref={myvideo} style={{
//                 width: "500px", height: "500px" }}></video>
//         </div>
//     );
// }
// export default App;
