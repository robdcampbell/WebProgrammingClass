import React from "react";
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBarNav = () => {
  return (
    <div className="sidebar__container">
      <Link to="/home-public">Get Started</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Sign Up</Link>

      <Link to="/about">About</Link>
    </div>
  );
};

export default SideBarNav;
