import './App.css'
import { Home } from './best/Home'
import { lazy, Suspense, useState } from 'react'
import { Dungeon } from './best/Dungeon'

// Local-only design experiments: open http://localhost:5173/?v=probability or ?v=combo
// while running `npm run dev`. Never shown on the deployed site.
const HomeProbability = lazy(() => import('./best/HomeProbability'))
const HomeCombo = lazy(() => import('./best/HomeCombo'))
const previewVersion = import.meta.env.DEV ? new URLSearchParams(window.location.search).get('v') : null
const showProbability = previewVersion === 'probability'
const showCombo = previewVersion === 'combo'

function App() {
  const [isDungeon, setIsDungeon] = useState(false)

  const toggleDungeon = () => {
    setIsDungeon(!isDungeon)
  }

  return (
    <>
      {isDungeon ? (
        <Dungeon setIsDungeon={toggleDungeon}/>
      ) : showCombo ? (
        <Suspense fallback={null}><HomeCombo setIsDungeon={toggleDungeon}/></Suspense>
      ) : showProbability ? (
        <Suspense fallback={null}><HomeProbability setIsDungeon={toggleDungeon}/></Suspense>
      ) : (
        <Home setIsDungeon={toggleDungeon}/>
      )}
    </>
  )
}

export default App
