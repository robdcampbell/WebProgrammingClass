import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h4 className="footer__logo">HomeRoom.</h4>
      </div>

      <div className="footer__right">
        <a href="#" target="_blank">
          View project code.
        </a>

        <a href="https://robcampbelldev.com" target="_blank">
          &#169; rob campbell 2021
        </a>
      </div>
    </footer>
  );
};

export default Footer;
