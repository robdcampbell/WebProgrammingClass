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
                <p>Class 1</p>
              </Link>
              <Link to="/class2" className="classBtn">
                <p>Class 2</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 3</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 4</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 5</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 6</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 7</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 8</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 9</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 10</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 11</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 12</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 13</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 14</p>
              </Link>
              <Link to="/#" className="classBtn">
                <p>Class 15</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
