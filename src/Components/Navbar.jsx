import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, setTheme } = useGlobalStates();

  const onClick = () => {
    setTheme(theme === "light" ? "dark" : "light")

  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={onClick}>Change Theme</button>

    </nav>
  )
}

export default Navbar