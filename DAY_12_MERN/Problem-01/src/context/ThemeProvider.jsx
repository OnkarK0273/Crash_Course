import React, { createContext, useState } from 'react'

export const ThemeSwitcher = createContext()

export const ThemeProvider = ({children}) => {
  const [toggle,setTogle] = useState(false)

  const themeToggle = ()=>{
    setTogle(!toggle)
  }


  return (
    <ThemeSwitcher.Provider  value={{toggle,themeToggle}} >
      {
        children
      }
    </ThemeSwitcher.Provider>
  )
}

