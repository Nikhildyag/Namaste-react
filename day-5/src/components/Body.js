import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
  let [textValue, setTextValue] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  let [resList, setResList] = useState([]);
  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    const data = await fetch(RES_API);
    const json1 = await data.json();
    // console.log(json1);
    setResList(
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(resList);
  };

  // const resList = useBody(RES_API);
  // console.log(resList);

  // console.log(filteredResList);

  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false)
  //   return <h1>oops! look like you dont have an active internet connection</h1>;

  if (resList.length === 0) return <ShimmerUI />;

  return (
    <div className="body">
      <div className="buttons">
        <button
          className="filterButton"
          onClick={() => {
            let filteredResCards = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredResCards);
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
