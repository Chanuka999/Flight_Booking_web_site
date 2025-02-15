import React from "react";

import paris from "../../assets/paris.jfif";
import dubai from "../../assets/dubai.jfif";
import newyork from "../../assets/newyork.jpg";
import london from "../../assets/london.jpg";

import traveler1 from "../../assets/traveler1.jpeg";
import traveler2 from "../../assets/traveler2.jfif";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";

const traverlers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "jack",
    socialLink: "@jackfred",
  },

  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "joe",
    socialLink: "@joensd",
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler3,
    travelerName: "smith",
    socialLink: "@maxsmith",
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: "john",
    socialLink: "@johnferd",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h3>Top traverlers of this month</h3>

        <div className="travelersContainer grid">
          {traverlers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
