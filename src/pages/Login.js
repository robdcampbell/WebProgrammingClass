import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <section className="content__wrapper__main">
        {/* PLACEHOLDER DIV */}
        <div className="coming__soon">
          <div className="content__mainSection">
            <h2>(Login / Account Profile coming soon...)</h2>
            <p>
              HomeRoom is still currently in it's beta stages, it's getting a
              little closer to the finish-line everyday.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
