import React from "react";
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSidebarHidden } from "../context/NavContext";

const SideBarNav = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  return (
    <div
      className="sidebar__container"
      onClick={(e) => {
        setShowSideBarNav(false);
      }}
    >
      <Link to="/home-public">Get Started</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Sign Up</Link>

      <Link to="/about">About</Link>
    </div>
  );
};

export default SideBarNav;
