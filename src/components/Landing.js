import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="content__wrapper__main">
      <div className="content__mainSection">
        <h1>Let's take those first steps.</h1>
        <div className="landing__subtitle">
          <p>
            Seeing into the future is not all about magic and crystal balls.
            <span className="span__title"> HomeRoom</span> is a tool to
            visualize and plan your financial future (without being dull and
            full of lingo)
          </p>
          <Link to="/home-public" className="toHome__link">
            <p>Find out how to start building that nest-egg</p>

            <FaArrowRight className="arrow__icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
