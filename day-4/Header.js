import React from "react";
import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="underline">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="underline">
              Contact us
            </Link>
          </li>
          <li className="underline">Cart</li>
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
