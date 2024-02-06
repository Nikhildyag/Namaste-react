import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //use selector will give us access to the store(subscribing the store)
  //we have to tell the portion which we want to access

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between items-center shadow-md">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="items-center mx-10">
        <ul className="flex flex-wrap">
          <li className="mx-2 px-2">
            Online status:{onlineStatus ? "✅" : "❎"}
          </li>
          <li>
            <Link
              to="/"
              className="mx-2 px-2 td decoration-0 hover:text-orange-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="mx-2 px-2 td decoration-0 hover:text-orange-400"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="mx-2 px-2 td decoration-0 hover:text-orange-400"
            >
              Contact us
            </Link>
          </li>
          <li className="mx-2 px-2 td decoration-0 hover:text-orange-400 font-bold text-xl">
            <Link to="/cart">Cart({cart.length})</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
