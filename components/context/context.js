import React, { useState } from "react";
import useRouter from "next/router";
const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <GlobalContext.Provider
      value={{ open: openDialog, setOpen: setOpenDialog, loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
