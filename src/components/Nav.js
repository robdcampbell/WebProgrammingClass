import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSidebarHidden } from "../context/NavContext";
import SideBarNav from "./SideBarNav";

const Nav = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();

  const hideNav = () => {
    showSideBarNav === true
      ? console.log("PTERODACTYLLLLLL CAW CAWWWWW")
      : console.log("nuts");
    // : setShowSideBarNav(false);
  };

  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <Link to="/">
            <h2 className="nav__logo">HomeRoom.</h2>
          </Link>

          <div className="nav__links">
            <Link to="/home-public" className="confirm__btn__outline">
              Get Started
            </Link>
            <Link to="/signup" className="confirm__btn__outline">
              Sign Up
            </Link>
            <Link to="/login" className="confirm__btn__outline">
              Login
            </Link>

            <Link to="/about" className="confirm__btn__outline">
              About
            </Link>
          </div>
          <button className="mobile__nav">
            <FaBars onClick={(e) => setShowSideBarNav(!showSideBarNav)} />
          </button>
        </div>
      </div>
      {showSideBarNav && <SideBarNav />}
    </nav>
  );
};

export default Nav;
