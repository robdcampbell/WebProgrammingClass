import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useSidebarHidden } from "../context/NavContext";

const Contact = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  return (
    <>
      <Nav />
      <section
        className="content__wrapper__main "
        onClick={(e) => {
          setShowSideBarNav(false);
        }}
      >
        <div className="content__mainSection  about__modal">
          <h2>About Web Programming.</h2>
          <p>
            HomeRoom is a resource for starting or adjusting preparations for
            your financial future.
          </p>
          <p>
            Presenting simple steps that can have a massive, positive impact on
            financial freedom and sustainability, users can set and track
            retirement goals, find simple-to-use and easy-to-understand
            resources to equip them with knowledge.
          </p>
          <h2>Contact:</h2>
          rcampbell1@sva.edu
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
