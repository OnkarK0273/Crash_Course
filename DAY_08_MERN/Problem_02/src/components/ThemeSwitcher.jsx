import { useState } from 'react'
import { createContext } from 'react'

export const Darkmode = createContext()

export const ThemeSwitcher = ({children}) => {
    const [flag,setFlag] = useState(true)

    const handleToggle = ()=>{
        setFlag(!flag)
    }

  return (
    <Darkmode.Provider   value={{flag,handleToggle}} >
        {
            children
        }
    </Darkmode.Provider>
  )
}
