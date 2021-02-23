import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <section className="content__wrapper__main bgc__gradient">
        <div className="content__mainSection account__modal">
          <h2>About Page.</h2>
          <p>
            Still currently in it's beta stages, it's getting a little closer to
            the finish-line everyday.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
