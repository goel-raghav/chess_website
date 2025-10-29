import { useState } from 'react'
import './App.css'
import Chess from './Chess.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chess />
    </>
  )
}

export default App
