import React from 'react'
import { useContext } from 'react'
import { Darkmode } from './ThemeSwitcher'

const Header = () => {
  const {flag,handleToggle} = useContext(Darkmode)
  const changeTheme = ()=>{
    handleToggle()
  }
  return (
    <div>
        <img src={flag?"./night-mode.png":"./day-mode.png"}  width={'50px'} onClick={changeTheme} alt="icon" />
    </div>
  )
}

export default Header