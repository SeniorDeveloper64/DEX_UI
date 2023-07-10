import { createContext, useState } from "react";


export const StatusContext = createContext({
    wallet: "",
    setWallet: () => {}
});

export const StatusProvider = ({ ...props }) => {
  const { children } = props;
  const [wallet,setWallet] = useState("");

  return (
    <StatusContext.Provider
      value={{
        wallet,setWallet
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};
