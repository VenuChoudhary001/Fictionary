import React, { Component } from "react";
import useRouter from "next/router";
const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
