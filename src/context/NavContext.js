import React, { useContext, useState } from "react";

//Creating NavContext
const NavContext = React.createContext();

//custom hook to access whatever is added to the 'value' prop.
export const useSidebarHidden = () => {
  return useContext(NavContext);
};

// PROVIDER
export const NavProvider = ({ children }) => {
  const [showSideBarNav, setShowSideBarNav] = useState(false);

  /* Value to pass to the provider, to be accessed in whatever
   child component you need to*/
  const value = {
    showSideBarNav,
    setShowSideBarNav,
  };

  //Provider to pass values to all children nested in the NavContext
  return (
    <>
      <NavContext.Provider value={value}>{children}</NavContext.Provider>
    </>
  );
};
