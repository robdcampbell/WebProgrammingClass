import React from "react";
import { Link } from "react-router-dom";
import { useSidebarHidden } from "../context/NavContext";
import { useCompoundCalculator } from "../context/CalcContext";
import CompoundCalc from "./CompoundCalc";

const PublicHomePage = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  const { showResults, setShowResults, calcResults, setCalcResults } =
    useCompoundCalculator();

  return (
    <section
      className="content__wrapper__main"
      onClick={(e) => {
        setShowSideBarNav(false);
      }}
    >
      <div className="content__mainSection ">
        <div className="public__home__body">
          <div className="home__heading">
            {/* <h1> Welcome to HomeRoom,</h1> */}
            <h2>Fall 2021</h2>

            {/* <div className="landing__subtitle"> */}
            <div className="classList">
              {/* <p style={{ marginBottom: "0" }}>
                <span className="emphasis__spanP">Ready to get started? :</span>
              </p> */}
              <Link to="/class1" className="classBtn">
                <h3>Class 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  commodi facere odio natus non deserunt dolorum reiciendis
                  corrupti in velit!
                </p>
              </Link>
              <Link to="/class2" className="classBtn">
                <h3>Class 2</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 3</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 4</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 5</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 6</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 7</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 8</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 9</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 10</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 11</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 12</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 13</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 14</h3>
              </Link>
              <Link to="/#" className="classBtn">
                <h3>Class 15</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
