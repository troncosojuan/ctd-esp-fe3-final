import { useContext } from "react";
import { createContext, useState } from "react";

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light");

  return (
    <ContextGlobal.Provider value={{
      theme, setTheme
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalStates = () => {
  return useContext(ContextGlobal);
}


