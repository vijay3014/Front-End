import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline text-red-600 bg-green-400 p-4 text-center">
    Hello world!
    </h1>
    </>
  )
}

export default App
