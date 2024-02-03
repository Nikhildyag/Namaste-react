import { useState, useEffect } from "react";
const useBody = (RES_API) => {
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
    // console.log(resList);
  };
  return resList;
};
export default useBody;
