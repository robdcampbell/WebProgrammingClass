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

            <div className="landing__subtitle">
              <p style={{ marginBottom: "0" }}>
                <span className="emphasis__spanP">Ready to get started? :</span>
              </p>
              <Link to="/signup" className="createAccount__btn">
                <p>Create an account, here.</p>
              </Link>
            </div>

            <p className="calc__intro">
              <span className="emphasis__spanP">Seeing is believing. </span>
              Visualize the "magic" behind it here:
            </p>
          </div>
          {/* <div>
            <CompoundCalc />
            {showResults && (
              <div className="calc__results">
                <h3>Compounding Results: </h3>
                <p>{`Principal Amount: $ ${calcResults.initialInvestment}`}</p>
                <p>{`Total Contributions: $ ${calcResults.totalContributions}`}</p>
                <p>{`Amount after ${calcResults.lengthInYears} years: $ ${calcResults.finalAmount}`}</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
