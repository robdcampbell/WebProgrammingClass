import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PublicHomePage = () => {
  return (
    <section className="content__wrapper__main">
      <div className="content__mainSection">
        <h1>Let's do this.</h1>
        <div className="landing__subtitle">
          <p>
            Terms like "401k", "IRA", and other acronyms we hear tossed around
            can all be a bit daunting at first.
          </p>
          <p>
            But we're here to simplify all that and equip you with dead simple
            information that can help you get closer to building fruitful
            investments.
          </p>
          <Link to="/home-public" className="createAccount__link">
            <p>Create an account, here</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
