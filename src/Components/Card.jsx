import React from "react";
import { Link, Outlet } from "react-router-dom";



const Card = ({ name, username, id }) => {

  const isPresentInFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs !== null) {
      return favs.some((fav) => fav.id === id);
    }
    return false;
  };
  

  // Aqui iria la logica para agregar la Card en el localStorage
  const addFav = ()=>{

    let favs = localStorage.getItem("favs");
    if(favs === null){
      favs = [];
    }else{
      favs = JSON.parse(favs);
    }
    favs.push({name, username, id});
    localStorage.setItem("favs", JSON.stringify(favs));
  }

  const deleteFav = () => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    favs = favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(favs));
  };


  
  return (
    <div className="card">
      <Outlet />
      
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{name}</h3>
        <p>{username}</p>
        <p>{id}</p>
        
        <Link to={`/dentist/${id}`}>Ver mas</Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button className="favButton" onClick={isPresentInFavs() ? deleteFav : addFav}>{isPresentInFavs() ? "Delete Fav" : "Add Fav"}</button>
    </div>
  );
};

export default Card;
