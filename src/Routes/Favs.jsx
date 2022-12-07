import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { theme } = useGlobalStates();

const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("favs") !== null) {
      setFavs(JSON.parse(localStorage.getItem("favs")));
    }
  }, []);



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={theme + " card-grid"}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {localStorage.getItem("favs") !== null ? JSON.parse(localStorage.getItem("favs")).map((item) => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id} />
        )) : <h1>No hay favoritos</h1>}

      </div>
    </>
  );
};

export default Favs;
