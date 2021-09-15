import React from "react";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import { useSidebarHidden } from "../context/NavContext";

const Login = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  return (
    <>
      <Nav />

      <section
        className="content__wrapper__main"
        onClick={(e) => {
          setShowSideBarNav(false);
        }}
      >
        <div className="content__mainSection landing__container">
          <h2>Resources.</h2>
          <section>
            <h3>HTML</h3>
          </section>
          <section>
            <h3>CSS</h3>
          </section>
          <section>
            <h3>Javascript</h3>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
