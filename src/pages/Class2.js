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

      {/* Class 2 content */}

      <section
        className="content__wrapper__main"
        onClick={(e) => {
          setShowSideBarNav(false);
        }}
      >
        <div className="content__mainSection ">
          <div className="public__home__body">
            <div className="#">
              {/* <h1> Welcome to HomeRoom,</h1> */}
              <h2>Class 2</h2>
              <Link to="/home-public" className="">
                <p>Back to all classes</p>
              </Link>

              {/* <div className="landing__subtitle"> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Class1;
