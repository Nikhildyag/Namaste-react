import { MENU_IMG_URL } from "../utils/constants";
const MenuCard = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {" "}
      {items.map((ele) => (
        <div
          key={ele.card.info.id}
          className="flex justify-between bg-gray-50 border-b-2 p-2 m-2 h-32"
        >
          <div className="w-9/12">
            <div className=" py-2 inline-block">
              <span className="font-semibold">{ele.card.info.name}</span>
              <h4>
                ₹
                {ele.card.info.price
                  ? ele.card.info.price / 100
                  : ele.card.info.defaultPrice / 100}
              </h4>
            </div>
            <p className="text-xs font-light">{ele.card.info.description}</p>
          </div>
          <div>
            <button className="absolute border shadow-sm font-bold bg-white text-green-500 text-xs p-2 rounded-[4px]  mx-2 my-16 w-24">
              ADD +
            </button>
            <img
              className="rounded-lg w-28"
              src={MENU_IMG_URL + ele.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuCard;
