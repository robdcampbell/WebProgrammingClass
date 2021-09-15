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
      <Link to="/home-public">Classes</Link>

      <Link to="/login">Resources</Link>

      <Link to="/syllabus">Syllabus</Link>

      <Link to="/about">Contact</Link>
    </div>
  );
};

export default SideBarNav;
