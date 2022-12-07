import { useContext } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  

  return (
    <ContextGlobal.Provider value={{
      theme, setTheme,
      data, setData
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalStates = () => {
  return useContext(ContextGlobal);
}


