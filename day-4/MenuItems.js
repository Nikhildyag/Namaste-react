import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { API_URL } from "./utils/constants";
import { useParams } from "react-router-dom";

const MenuItems = () => {
  let [itemList, setItemList] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    const data = await fetch(API_URL + resId);
    const json = await data.json();
    setItemList(json.data);
  };

  if (itemList === null) return <ShimmerUI />;

  const { name, cuisines } = itemList?.cards[0]?.card?.card?.info;

  const { itemCards } =
    itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
  //||
  // itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[4]?.card
  //   ?.card ||
  // itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

  return (
    <div className="menu-items">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <ul>
        {itemCards.map((list) => (
          <li key={list.card.info.id}>{list.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
