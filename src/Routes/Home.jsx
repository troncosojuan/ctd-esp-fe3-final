import React from 'react'
import { useState } from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme } = useGlobalStates();
  const [data, setData] = useState([])

  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <Card />
      </div>
    </main>
  )
}

export default Home