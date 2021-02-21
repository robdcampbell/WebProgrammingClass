import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <h2 className="nav__logo">Navbar Logo</h2>
        </Link>
        <div className="nav__links">
          <Link to="/about">About</Link>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
