import React from "react";
import "../Styling/cardStyle.css";

function Card(props) {
  return (
    <div className="container--card">
      <img src={props.imageUrl} alt="fuji" id="placeImg" />
      <div className="container--data">
        <div className="container--top">
          <div className="container--location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <h5>{props.location}</h5>
            &nbsp;&nbsp;&nbsp;
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2>{props.title}</h2>
        </div>
        <div className="container--bottom">
          <div className="container--date">
            <h6>
              {props.startDate} - {props.endDate}
            </h6>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
