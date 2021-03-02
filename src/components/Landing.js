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
            <Link to="/home-public">Get Started</Link>

            <Link to="/about">About</Link>
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
                <Link to="/home-public">Get Started</Link>

                <Link to="/login">Login</Link>

                <Link to="/signup">Sign Up</Link>

                <Link to="/about">About</Link>
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
            <h1>HomeRoom</h1>
            <h2>Let's take those first steps.</h2>
            <div className="landing__subtitle">
              <p>
                <span className="span__title"> HomeRoom</span>, a tool to make
                preparing for your financial future dead simple and easy to
                visualize (without being dull and full of lingo).
              </p>
              <Link to="/home-public" className="createAccount__btn">
                <p>Start building that nest-egg</p>
                <FaArrowRight className="arrow__icon" />
              </Link>
              <div className="account__buttons">
                <Link to="/login" className="landing__links">
                  Login
                </Link>
                <Link to="/signup" className="landing__links">
                  Signup
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
