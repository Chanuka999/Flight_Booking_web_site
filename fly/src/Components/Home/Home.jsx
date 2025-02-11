import React from "react";

import video from "../../assets/video.mp4";
import ar2 from "../../assets/ar2.jpg";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={ar2} className="plane" />
      </div>
    </div>
  );
};

export default Home;
