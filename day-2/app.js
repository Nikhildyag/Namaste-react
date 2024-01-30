import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse2.mm.bing.net/th?id=OIP.eQdIO8NVBLYkG1Q0MCOwSQHaHa&pid=Api&P=0&h=180"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="res-container">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-card"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ggbuknqzqc4qoqfnl2cr"
        ></img>
      </div>
      <div className="res-card-details">
        <h3>Shah Ghouse Hotel</h3>
        <div className="time-stars">
          <h4>4.2 stars</h4>
          <h4>35mins</h4>
        </div>
        <h4 className="lighter">Biryani, North Indian, Chineese</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3>Search</h3>
      </div>
      <div className="resCard-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
