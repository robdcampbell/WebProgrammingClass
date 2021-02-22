import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
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
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
