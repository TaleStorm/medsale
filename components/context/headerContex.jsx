import { string } from "prop-types";
import React, { ReactNode, useEffect, useState } from "react";

const HeaderContext = React.createContext({
  currentHeading: "Направления",
  setCurrentHeading: (arg) => {}
});


const HeaderContextProvider = ({ children }) => {
  const [currentHeading, setCurrentHeading] = useState("Направления")

  return (
    <HeaderContext.Provider
    value={{
        currentHeading,
        setCurrentHeading
    }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;

export { HeaderContextProvider };