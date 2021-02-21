import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <h2 className="nav__logo">HomeRoom.</h2>
        </Link>
        <div className="nav__links">
          <a className="" href="#">
            Login
          </a>
          <a className="" href="#">
            Sign Up
          </a>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
