import React from "react";
import { useCompoundCalculator } from "../context/CalcContext";

const CompoundCalc = () => {
  const {
    initialInvestment,
    setInitialInvestment,
    monthlyContribution,
    setMonthlyContribution,
    lengthInYears,
    setLengthInYears,
    interestRate,
    setInterestRate,
    interestVariance,
    setInterestVariance,
    compoundFrequency,
    setCompoundFrequency,
  } = useCompoundCalculator();

  const calculateResult = (e) => {
    console.log(`${initialInvestment} you dope!`);
    setInitialInvestment("");
    setMonthlyContribution("");
    setLengthInYears("");
    setInterestRate("");
    setInterestVariance("");
    setCompoundFrequency("Annually");
  };

  return (
    <form>
      <div className="compound__interest__calc">
        <h3>The miracle of compound interest:</h3>

        <div className="initial__investment calc__input__section">
          <label htmlFor="initial__investment">Initial Investment</label>
          <input
            name="initial__investment"
            type="number"
            value={initialInvestment}
            placeholder="Amount put in the first time..."
            onChange={(e) => setInitialInvestment(e.target.value)}
          />

          {/* <p>sub explanation</p> */}
        </div>

        <div className="monthly__contribution calc__input__section">
          <label htmlFor="monthly__contribution">Monthly Contribution</label>
          <input
            name="monthly__contribution"
            type="number"
            placeholder="Amount added each month..."
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
          />

          {/* <p>sub explanation</p> */}
        </div>

        <div className="length__years calc__input__section">
          <label htmlFor="length__years">Length of time in years</label>
          <input
            name="length__years"
            type="number"
            placeholder="Amount it will be in this number of years..."
            value={lengthInYears}
            onChange={(e) => setLengthInYears(e.target.value)}
          />

          {/* <p>sub explanation</p> */}
        </div>

        <div className="estimated__interest__rate calc__input__section">
          <label htmlFor="estimated__interest__rate">
            Estimated Interest Rate
          </label>
          <input
            name="estimated__interest__rate"
            type="number"
            placeholder="% return expected..."
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />

          {/* <p>sub explanation</p> */}
        </div>

        <div className="interest__rate__variance calc__input__section">
          <label htmlFor="interest__rate__variance">
            Interest rate variance range
          </label>
          <input
            name="interest__rate__variance"
            type="number"
            placeholder="% the interest may change each compound..."
            value={interestVariance}
            onChange={(e) => setInterestVariance(e.target.value)}
          />

          {/* <p>sub explanation</p> */}
        </div>

        <div className="compound__frequencey calc__input__section">
          <label htmlFor="compound__frequencey">Compound frequency</label>
          <select
            name="compound__frequencey"
            className="compound__frequencey"
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
          >
            <option value="annually">Annually</option>
            <option value="semiannually">Semiannually</option>
            {/* <option value="monthly">Monthly</option>
                  <option value="daily">Daily</option> */}
          </select>
          {/* <p>sub explanation</p> */}
        </div>

        <div className="calc__buttons">
          <button
            className="confirm__btn__fill"
            type="button"
            onClick={(e) => calculateResult()}
          >
            View Results
          </button>
          <button className="confirm__btn__outline" type="button">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default CompoundCalc;
