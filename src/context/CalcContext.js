import React, { useContext, useState } from "react";

const CalcContext = React.createContext();

// CUSTOM HOOK -  to access whatever is added to the 'value' prop.
export const useCompoundCalculator = () => {
  return useContext(CalcContext);
};

const initialCalcResult = {
  initialInvestment: 0,
  monthlyContribution: 0,
  lengthInYears: 0,
  interestRate: 0,
  interestVariance: 0,
  compoundFrequency: 0,
  finalAmount: 0,
};

export const CalcProvider = ({ children }) => {
  // CALC - Consolidate to calcValues ?
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [lengthInYears, setLengthInYears] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [interestVariance, setInterestVariance] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("");

  const [showResults, setShowResults] = useState(false);
  const [calcResults, setCalcResults] = useState(initialCalcResult);

  /*Values to be accessed by children components*/
  const value = {
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
    calcResults,
    setCalcResults,
  };

  return (
    <>
      <CalcContext.Provider value={value}>{children}</CalcContext.Provider>
    </>
  );
};
