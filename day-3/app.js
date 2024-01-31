import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

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
