import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSidebarHidden } from "../context/NavContext";
import SideBarNav from "./SideBarNav";
import { GoHome } from "react-icons/go";

const Nav = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();

  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <Link to="/" onClick={(e) => setShowSideBarNav(false)}>
            <h2 className="nav__logo">Web Programming</h2>
          </Link>

          <div className="nav__links">
            <Link to="/home-public">Classes</Link>
            <Link to="/syllabus" className="confirm__btn__outline">
              Syllabus
            </Link>
            <Link to="/resources" className="confirm__btn__outline">
              Resources
            </Link>

            {/* <Link to="/about">Contact</Link> */}
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
