import React from "react";
import { Link } from "react-router-dom";
import { useSidebarHidden } from "../context/NavContext";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Class1 = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  return (
    <main>
      <Nav />
      {/* <ClassContent /> */}
      {/* Class 1 content */}

      <section
        className="content__wrapper__main"
        onClick={(e) => {
          setShowSideBarNav(false);
        }}
      >
        <div className="class__content">
          <div className="class__heading">
            {/* <h1> Welcome to HomeRoom,</h1> */}
            <h2>Class 1</h2>
            <Link to="/home-public" className="">
              <p className="return__link">Back to all classes</p>
            </Link>
            {/* <div className="landing__subtitle"> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Class1;
