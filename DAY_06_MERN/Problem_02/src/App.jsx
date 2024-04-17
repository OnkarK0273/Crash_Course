import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './Timer'

function App() {
  const [toggle,setToggle] = useState(true)

  return (
    <>
    {
      toggle?<h1>Home page</h1>:<Timer toggle={toggle} />
    }
      <button  onClick={()=>setToggle(!toggle)} >{toggle?"Go to Timer":"Go to Home"}</button>
    </>
  )
}

export default App
