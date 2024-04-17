import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import UserForm from './components/UserForm'
import { Darkmode } from './components/ThemeSwitcher'
import { useContext } from 'react'

function App() {
  const {flag} = useContext(Darkmode)

  return (
    <div  className={flag?"dark":"light"} >
     <Header/>
     <UserForm/>
    </div>
  )
}

export default App
