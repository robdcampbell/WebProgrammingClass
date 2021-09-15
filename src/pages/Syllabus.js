import React from "react";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Nav from "../components/Nav";
import SignUpModal from "../components/SignUpModal";
import { useSidebarHidden } from "../context/NavContext";

const Signup = () => {
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
          <h3>Coming soon...</h3>
          <a
            href="https://sva.simplesyllabus.com/doc/fxwmrurf3/Fall-2021-UG%2FGR-HSG-5343-A-WEB-PROGRAMG-I?mode=view"
            target="__blank"
          >
            (Click here for PDF of class syllabus)
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
