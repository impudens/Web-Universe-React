import { useState } from 'react'
import './assets/styles/App.css'
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
