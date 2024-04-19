import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Profile from '../components/Profile'
import Settings from '../components/Settings'

const DashboardPage = () => {
  return (
    <div>
        <h2>Dashboard</h2>
        <div>
            <Link to={'/dashboard/profile'} >Go to profile</Link>   
        </div>
        <div>
            <Link to={'/dashboard/settings'} >Go to setting</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default DashboardPage