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
    showResults,
    setShowResults,
    setCalcResults,
    calcResults,
  } = useCompoundCalculator();

  const calculateResult = (e) => {
    /* PRINCIPAL W/ INTEREST:  
        A = p(1+(r/n))^(nt)
    */
    /*
    Future Value of Series
     MONTHLY CONT. W/ INTEREST:[ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
      ex: 
      Total = 
      [ 5000 (1 + 0.05 / 12) ^ (12 × 10) ] 
      + 
      [ 100 × (((1 + 0.00416)^(12 × 10) - 1) / (0.00416)) ]
      
      [ 500 × (((1 + 0.00416)^(12 × 10) - 1) / (0.00416)) ]
    */

    const totalContributions =
      initialInvestment + monthlyContribution * lengthInYears * 12;

    const beforeMultiply =
      ((1 + interestRate / 100 / 12) ** (12 * lengthInYears) - 1) /
      (interestRate / 100 / 12);

    const monthlyContFutures = parseFloat(
      (monthlyContribution * beforeMultiply).toFixed(2)
    );

    const principalWithInterest = parseFloat(
      initialInvestment *
        Math.pow(1 + interestRate / 100, lengthInYears).toFixed(2)
    );

    const formatAmount = () => {};

    const finalAmount = parseFloat(
      (principalWithInterest + monthlyContFutures).toFixed(2)
    );

    setCalcResults({
      initialInvestment,
      monthlyContribution,
      lengthInYears,
      interestRate,
      interestVariance,
      compoundFrequency,
      finalAmount,
      totalContributions,
    });

    setShowResults(true);
    // resetCalc();
  };

  const resetCalc = () => {
    setInitialInvestment(0);
    setMonthlyContribution(0);
    setLengthInYears(0);
    setInterestRate(0);
    setInterestVariance(0);
    setCompoundFrequency("Annually");
  };

  return (
    <div className="compound__interest__calc">
      <form>
        <h3>The miracle of compound interest:</h3>

        <div className="initial__investment calc__input__section">
          <label htmlFor="initial__investment">Initial Investment</label>
          <input
            name="initial__investment"
            type="number"
            value={initialInvestment}
            placeholder="Amount put in the first time..."
            onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
          />
        </div>

        <div className="monthly__contribution calc__input__section">
          <label htmlFor="monthly__contribution">Monthly Contribution</label>
          <input
            name="monthly__contribution"
            type="number"
            placeholder="Amount added each month..."
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseFloat(e.target.value))}
          />
        </div>

        <div className="length__years calc__input__section">
          <label htmlFor="length__years">Length of time in years</label>
          <input
            name="length__years"
            type="number"
            placeholder="Amount it will be in this number of years..."
            value={lengthInYears}
            onChange={(e) => setLengthInYears(parseFloat(e.target.value))}
          />
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
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>

        {/* UPDATE SOON: INTEREST RATE VARIANCE */}

        {/* <div className="interest__rate__variance calc__input__section">
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
        </div> */}

        {/* UPDATE SOON: WILL ADD COMPOUND FREQUENCY */}

        {/* <div className="compound__frequencey calc__input__section">
          <label htmlFor="compound__frequencey">Compound frequency</label>
          <select
            name="compound__frequencey"
            className="compound__frequencey"
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
          >
            <option value="annually">Annually</option>
            <option value="semiannually">Semiannually</option>
          </select>
        </div> */}

        <div className="calc__buttons">
          <button
            className="confirm__btn__outline"
            type="button"
            onClick={(e) => calculateResult()}
          >
            View Results
          </button>
          <button
            className="confirm__btn__outline"
            type="button"
            onClick={(e) => resetCalc()}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompoundCalc;
