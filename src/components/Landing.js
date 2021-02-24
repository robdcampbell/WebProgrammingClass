import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useSidebarHidden } from "../context/NavContext";

const Landing = () => {
  const [offScreenLeft, setoffScreenLeft] = useState(true);
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();

  useEffect(() => {});

  return (
    <section
      className="content__wrapper__main"
      onClick={(e) => {
        setShowSideBarNav(false);
      }}
    >
      <div className="content__mainSection landing__container">
        <h1>HomeRoom.</h1>
        <h2>Let's take those first steps.</h2>
        <div className="landing__subtitle">
          <p>
            Seeing into the future is not all about magic and crystal balls.
            <span className="span__title"> HomeRoom</span> is a tool to
            visualize and plan your financial future (without being dull and
            full of lingo)
          </p>
          <Link to="/home-public" className="toHome__link">
            <p>Start building that nest-egg</p>

            <FaArrowRight className="arrow__icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
