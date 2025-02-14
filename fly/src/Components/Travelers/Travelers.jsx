import React from "react";

import paris from "../../assets/paris.jfif";
import traveler1 from "../../assets/traveler1.jpeg";

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h3>Top traverlers of this month</h3>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={paris} className="destinationImage" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={traveler1} className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>Jack</span>
                <p>@jackfred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
