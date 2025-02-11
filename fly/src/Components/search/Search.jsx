import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const Search = () => {
  return (
    <div>
      <div className="search container section">
        <div className="sectionContainer grid">
          <div className="btns flex">
            <div className="singleBtn">
              <span>Economy</span>
            </div>
            <div className="singleBtn">
              <span>Business Class</span>
            </div>
            <div className="singleBtn">
              <span>first Class</span>
            </div>
          </div>

          <div className="searchInputs flex">
            <div className="singleInputs flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon" />
              </div>
              <div className="texts">
                <h4>location</h4>
                <input type="text" placeholder="where do you want to go?" />
              </div>
            </div>

            <div className="singleInputs flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className="icon" />
              </div>
              <div className="texts">
                <h4>Travel</h4>
                <input type="text" placeholder="add guest" />
              </div>
            </div>

            <div className="singleInputs flex">
              <div className="iconDiv">
                <RxCalendar className="icon" />
              </div>
              <div className="texts">
                <h4>check in</h4>
                <input type="text" placeholder="add date" />
              </div>
            </div>

            <div className="singleInputs flex">
              <div className="iconDiv">
                <RxCalendar className="icon" />
              </div>
              <div className="texts">
                <h4>check out</h4>
                <input type="text" placeholder="add date" />
              </div>
            </div>

            <button className="btn btnBlock flex">Search Flight</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
