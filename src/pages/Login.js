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
          <LoginModal />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
