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
          <h2>(Creating your account is just around the bend.)</h2>
          <p>
            HomeRoom is still currently in it's beta stages, it's getting a
            little closer to the finish-line everyday.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
