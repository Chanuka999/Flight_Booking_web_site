import React from "react";

import imageGrid2 from "../../assets/imageGrid2.webp";

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid2} />
        </div>

        <div className="textDiv">
          <h3>Unaccompanied Minor Lounge</h3>

          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help throught the airpot</span>
              <p>
                You can also call airlines from your photos and book a flight
                ticket to one of your favourite destrination
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">chauffer-drive servise</span>
              <p>
                You can also call airlines from your photos and book a flight
                ticket to one of your favourite destrination
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">care ont the flight</span>
              <p>
                You can also call airlines from your photos and book a flight
                ticket to one of your favourite destrination
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">priority Boarding</span>
              <p>
                You can also call airlines from your photos and book a flight
                ticket to one of your favourite destrination
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
