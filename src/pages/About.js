import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <section className="content__mainSection">
        <h2>About Page.</h2>
      </section>
      <Footer />
    </>
  );
};

export default About;
