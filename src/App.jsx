import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import Card from './Component/Card'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1 className="p-10 font-bold">NFT card</h1>
    <Card/>
    </div>
  )
}

export default App
