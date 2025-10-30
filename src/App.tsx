import { useState } from 'react'
import './App.css'
import ChessBoard from './ChessBoard.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChessBoard />
    </>
  )
}

export default App
