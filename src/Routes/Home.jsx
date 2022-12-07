import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, data } = useGlobalStates();
  
  return (
    
    <main className={theme} >
      <h1>Home</h1>
    
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((item) => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id} />
        ))}

      </div>
    </main>
  
  )
}

export default Home