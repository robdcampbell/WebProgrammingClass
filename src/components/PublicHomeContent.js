import React from "react";
import { Link } from "react-router-dom";
import { useSidebarHidden } from "../context/NavContext";
import { useCompoundCalculator } from "../context/CalcContext";
import CompoundCalc from "./CompoundCalc";

const PublicHomePage = () => {
  const { showSideBarNav, setShowSideBarNav } = useSidebarHidden();
  const {
    showResults,
    setShowResults,
    calcResults,
    setCalcResults,
  } = useCompoundCalculator();

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
            <h1> Time to de-mystify some things.</h1>

            <div className="landing__subtitle">
              <p>
                Terms like <span className="emphasis__spanP">"401k"</span>,
                <span className="emphasis__spanP">"IRA"</span>, and other
                acronyms we hear tossed around can all be a bit daunting at
                first.
              </p>
              <p>
                But these can all be simplified to get closer to building a
                fruitful future - it's never too late (or too early).
              </p>
              <p style={{ marginBottom: "0" }}>
                <span className="emphasis__spanP">Ready to get started? :</span>
              </p>
              <Link to="/signup" className="createAccount__link">
                <p>Create an account, here.</p>
              </Link>
            </div>

            <p className="calc__intro">
              <span className="emphasis__spanP">Seeing is believing. </span>
              Visualize the "magic" behind it here:
            </p>
          </div>

          <CompoundCalc />
          {showResults && (
            <div className="calc__results">
              <h3>Compounding Results: </h3>
              <p>{`Principal Amount: $ ${calcResults.initialInvestment}`}</p>
              <p>{`Total Contributions: $ ${calcResults.totalContributions}`}</p>
              <p>{`Amount after ${calcResults.lengthInYears} years: $ ${calcResults.finalAmount}`}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
