import { MENU_IMG_URL } from "../utils/constants";
const MenuCard = (props) => {
  return (
    <div>
      <hr className="width" />
      <div className="menu-card">
        <div className="contents">
          <ul>
            <li>
              <img
                className="veg-logo"
                src="https://tse4.mm.bing.net/th?id=OIP.ykGTylT_JhcI7Mn6kB-nIgHaFE&pid=Api&P=0&h=180"
              />
            </li>
            {console.log(props.url.info)}
            <li>{props.url.name}</li>
            <li>{props.url.price / 100}</li>
          </ul>
        </div>
        <div>
          <img className="menu-img" src={MENU_IMG_URL + props.url.imageId} />
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
