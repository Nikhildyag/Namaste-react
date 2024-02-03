import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import useMenuItems from "../utils/useMenuItems";

const MenuItems = () => {
  const { resId } = useParams();
  const itemList = useMenuItems(resId);

  if (itemList === null) return <ShimmerUI />;

  const { name, cuisines } = itemList?.cards[0]?.card?.card?.info;

  const { itemCards } =
    itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  return (
    <div className="menu-items">
      <h1>{name}</h1>
      <ul>
        <p>{cuisines.join(",")}</p>
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
        {itemCards.map((list) => (
          <li key={list.card.info.id}>
            <MenuCard url={list.card.info} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
