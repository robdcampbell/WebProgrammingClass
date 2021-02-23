import React, { useContext, useState } from "react";

/* CREATING CALCCONTEXT TO SAVE DATA SINGING-UP / USING THE DATA ONCE A USER IS CREATED */

const CalcContext = React.createContext();

// CUSTOM HOOK -  to access whatever is added to the 'value' prop.
export const useCompoundCalculator = () => {
  return useContext(CalcContext);
};

export const CalcProvider = ({ children }) => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [lengthInYears, setLengthInYears] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [interestVariance, setInterestVariance] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState(0);

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
  };

  return (
    <>
      <CalcContext.Provider value={value}>{children}</CalcContext.Provider>
    </>
  );
};
