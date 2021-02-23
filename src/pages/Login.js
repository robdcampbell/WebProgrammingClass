import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useSidebarHidden } from "../context/NavContext";

const Login = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  return (
    <>
      <Nav />
      <section
        className="content__wrapper__main bgc__gradient"
        onClick={(e) => {
          setShowSideBarNav(false);
        }}
      >
        {/* PLACEHOLDER DIV */}
        <div className="coming__soon">
          <div className="content__mainSection account__modal">
            <h2>(Login / Account Profile coming soon...)</h2>
            <p>
              Still currently in it's beta stages, it's getting a little closer
              to the finish-line everyday.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
