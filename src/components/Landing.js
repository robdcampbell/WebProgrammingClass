import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useSidebarHidden } from "../context/NavContext";
import { FaBars } from "react-icons/fa";
import SideBarNav from "./SideBarNav";

const Landing = () => {
  const [offScreenLeft, setoffScreenLeft] = useState(true);
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();

  useEffect(() => {});

  return (
    <section
      className="landing__wrapper__main"
      onClick={(e) => {
        // setShowSideBarNav(false);
      }}
    >
      <div className="landing__fixedWidth">
        <div className="landing__nav__container">
          <div className="landing__nav__links">
            {/* <Link to="/home-public">Classes</Link> */}

            {/* <Link to="/about">About</Link> */}
          </div>

          <div className="landing__mobile__nav">
            <button className="landing__mobile__icon">
              <FaBars onClick={(e) => setShowSideBarNav(!showSideBarNav)} />
            </button>
            {showSideBarNav && (
              <div
                className="mobile__sidebar__container"
                onClick={(e) => {
                  setShowSideBarNav(false);
                }}
              >
                <Link to="/home-public">Classes</Link>

                <Link to="/login">Resources</Link>

                <Link to="/syllabus">Syllabus</Link>

                <Link to="/about">Contact</Link>
              </div>
            )}
          </div>
        </div>

        <div
          className="landing__window"
          onClick={(e) => {
            setShowSideBarNav(false);
          }}
        >
          <div className=" landing__container">
            <h1>Web Programming</h1>
            {/* <h2>Let's take those first steps.</h2> */}
            <div className="landing__subtitle">
              <p>
                Welcome to <span className="span__title">Web Programming</span>,
                let's jump in.
              </p>
              <Link to="/home-public" className="createAccount__btn">
                <p>Classes</p>
                <FaArrowRight className="arrow__icon" />
              </Link>
              <div className="account__buttons">
                <Link to="/login" className="landing__links">
                  Resources
                </Link>
                <Link to="/syllabus" className="landing__links">
                  Syllabus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
