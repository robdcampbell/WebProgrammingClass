import React, { useContext, useState } from "react";

//Creating NavContext
const NavContext = React.createContext();

//custom hook to access whatever is added to the 'value' prop.
export const useMobileHidden = () => {
  return useContext(NavContext);
};

// PROVIDER
export const NavProvider = ({ children }) => {
  const [showSideBarNav, setshowSideBarNav] = useState(false);

  /* Value to pass to the provider, to be accessed in whatever
   child component you need to*/
  const value = {
    showSideBarNav,
    setshowSideBarNav,
  };

  //Provider to pass values to all children nested in the NavContext
  return <NavContext.prodiver value={value}>{children}</NavContext.prodiver>;
};
