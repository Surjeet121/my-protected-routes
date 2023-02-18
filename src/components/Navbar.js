import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbarStyle.css"

const Navbar = () => {
  const navigate = useNavigate();

  let auth = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (auth) {
      navigate("/profile");
    }
    
  }, []);

  return (
    <div className="nav__container">
      <NavLink className="navLink" id="logo" to="#">my-Cart</NavLink>
      {auth === null || false ? (
        <NavLink className="navLink" to="/login">
          Login
        </NavLink>
      ) : (
        <NavLink className="navLink" to="/logout">
          <span>Logout</span>
        </NavLink>
      )}
      <NavLink className="navLink" to="/">Home</NavLink>
      <NavLink className="navLink" to="/profile">Profile</NavLink>
      <NavLink className="navLink" to="/products">Product</NavLink>
      <NavLink className="navLink" to="/contact">Contact</NavLink>
      <NavLink className="navLink" to="/about">About</NavLink>
    </div>
  );
};

export default Navbar;
