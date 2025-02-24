import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h3>Travel to make memories all arround the word</h3>
          <button className="btn">View All</button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">save more</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Smart check list</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="cardTitle">Book & relax</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
