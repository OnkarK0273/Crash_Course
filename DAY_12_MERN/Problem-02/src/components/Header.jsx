import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {

    

  return (
    <div>
        <div className='nav-box' >
            <div><img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
            </div>
            <div className='nav-right' >
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/dashboard'}>Dashboard</Link>
                <Link className='link' to={'/about'}>About</Link>
            </div>
        </div>
    </div>
  )
}

export default Header