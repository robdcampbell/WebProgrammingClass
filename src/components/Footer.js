import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <Link to="/" className="footer__logo">
            HomeRoom.
          </Link>
          <Link to="/about">About.</Link>
        </div>

        <div className="footer__right">
          <a
            href="https://github.com/robdcampbell/HomeRoom-RetirePlanning"
            target="_blank"
          >
            View project code.
          </a>

          <a
            className="name__copyright"
            href="https://robcampbelldev.com"
            target="_blank"
          >
            &#169; rob campbell 2021
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
