import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { ThemeSwitcher } from './context/ThemeProvider'


function App() {
  const {toggle} = useContext(ThemeSwitcher)

  return (
    <div className={toggle?"light":"dark"} >
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
