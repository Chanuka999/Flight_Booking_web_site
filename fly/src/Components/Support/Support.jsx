import React from "react";

import grid from "../../assets/grid.jpg";

const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h3>Plan your travel with confidence</h3>
          <p>
            find help with booking and travel plans,see what to expect along
          </p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirments for dubai</h4>
              <p>
                find help with booking and travel plans,see what to expect along
              </p>
            </div>

            <div className="singleInfo">
              <span className="number">02</span>
              <h4>chauffeur services at your arrival</h4>
              <p>
                find help with booking and travel plans,see what to expect along
              </p>
            </div>

            <div className="singleInfo">
              <span className="number">03</span>
              <h4>Travel requirments for dubai</h4>
              <p>
                find help with booking and travel plans,see what to expect along
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img src={grid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
