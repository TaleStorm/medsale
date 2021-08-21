import React, { ReactNode, useEffect, useState } from "react";

const SidebarContext = React.createContext({
});


const SidebarContextProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider
    value={{
        isSidebarOpen,
        setisSidebarOpen
    }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;

export { SidebarContextProvider };