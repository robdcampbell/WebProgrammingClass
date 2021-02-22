import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideBarNav from "./SideBarNav";

const Nav = () => {
  const [showSideBarNav, setshowSideBarNav] = useState(false);

  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <Link to="/">
            <h2 className="nav__logo">HomeRoom.</h2>
          </Link>
          <div className="nav__links">
            <Link to="/home-public" className="login__btn">
              Get Started
            </Link>
            <Link to="/login" className="login__btn">
              Login
            </Link>
            <Link to="/signup" className="signup__btn">
              Sign Up
            </Link>

            {/* <Link to="/about">About</Link> */}
          </div>
          <button className="mobile__nav">
            <FaBars onClick={(e) => setshowSideBarNav(!showSideBarNav)} />
          </button>
        </div>
      </div>
      {showSideBarNav && <SideBarNav />}
    </nav>
  );
};

export default Nav;
