import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Signup = () => {
  return (
    <>
      <Nav />
      <section className="content__wrapper__main">
        <div className="content__mainSection">
          <h2>Signup Page.</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
