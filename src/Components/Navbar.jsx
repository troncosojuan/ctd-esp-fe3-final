import React from 'react'
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
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
      <a href="/favs">Favs</a>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={onClick}>Change Theme</button>

    </nav>
  )
}

export default Navbar