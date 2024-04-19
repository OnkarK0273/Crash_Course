import React, { useContext } from 'react'
import '../App.css'
import { ThemeSwitcher } from '../context/ThemeProvider'
const Header = () => {

    const {toggle,themeToggle} = useContext(ThemeSwitcher)

  return (
    <div>
        <div className='nav-box' >
            <div><img width="48" height="48" className='img-pointer' src={toggle?"https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/000000/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png":"https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png"} alt="external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector" onClick={()=>themeToggle()} />
            </div>
            <div className='nav-right' >
                <div>about</div>
                <div>contacts</div>
                <div>login</div>
            </div>
        </div>
    </div>
  )
}

export default Header