import './App.css'
import { Home } from './best/Home'
import { useState } from 'react'
import { Dungeon } from './best/Dungeon'

function App() {
  const [isDungeon, setIsDungeon] = useState(false)

  const toggleDungeon = () => {
    setIsDungeon(!isDungeon)
  }

  return (
    <>
      {isDungeon ? <Dungeon setIsDungeon={toggleDungeon}/> :  <Home setIsDungeon={toggleDungeon}/> }
    </>
  )
}

export default App
