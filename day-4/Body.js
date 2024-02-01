import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [textValue, setTextValue] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2987502&lng=78.44974309999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await data.json();
    setResList(
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="buttons">
        <button
          className="filterButton"
          onClick={() => {
            let filteredResCards = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setResList(filteredResCards);
          }}
        >
          Top rated restaurants
        </button>

        <div className="search-btn">
          <input
            type="text"
            className="text-field"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
          <button
            className="search"
            onClick={() => {
              // console.log(textValue);
              let filteredCards = resList.filter((res) =>
                res.info.cuisines.includes(textValue)
              );
              setFilteredResList(filteredCards);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="resCard-container">
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <ResCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
