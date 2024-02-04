import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useMenuItems from "../utils/useMenuItems";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const MenuItems = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const itemList = useMenuItems(resId);

  if (itemList === null) return <ShimmerUI />;

  const { name, cuisines } = itemList?.cards[0]?.card?.card?.info;

  const categories =
    itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (ele) =>
        ele.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="bg-gray-50">
      <div className="w-[50%] m-auto">
        <h1 className="font-bold text-center m-4">{name}</h1>
        <ul>
          <p className="text-center m-3 font-semibold">{cuisines.join(",")}</p>
          {/* <button
          onClick={() => {
            setItemList(() => {
              console.log(itemCards);
              let filteredMenu = itemCards.filter((list) => {
                list.card.info.itemAttribute.vegClassifier.includes("VEG");
              });
              setItemList(filteredMenu);
            });
          }}
        >
          veg only
        </button> */}

          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.info?.id}
              data={category?.card?.card}
              isOpen={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
              showIndex={showIndex}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
