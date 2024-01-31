import React, { useState } from "react";
import ResCard from "./ResCard";
import { restaurantList } from "./utils/mock-data";

const Body = () => {
  let [resList, setresList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filterButton"
          onClick={() => {
            setresList(resList.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="resCard-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
