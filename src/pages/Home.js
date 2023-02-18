import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <h2 style={{ fontWeight: 400 }}>
        Welcome to my-Cart <span> app !</span></h2>
        <NavLink id="resto_btn" to="/products"> GO FOR SHOPPING </NavLink>
        {/* <NavLink id="resto_btn" onClick={()=> Navigate("/products")}> GO FOR SHOPPING </NavLink> */}
    </div>
  );
};
export default Home;