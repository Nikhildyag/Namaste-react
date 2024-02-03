import React from "react";
import { CDN_URL } from "../utils/constants";
const ResCard = ({ resData }) => {
  return (
    <div className="res-container">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-card"
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
      </div>
      <div className="res-card-details">
        <h3>{resData.info.name}</h3>
        <div className="time-stars">
          <h4>{resData.info.sla.deliveryTime}</h4>
          <h4>{"⭐" + resData.info.avgRating}</h4>
        </div>
        <h4 className="lighter">{resData.info.cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default ResCard;
