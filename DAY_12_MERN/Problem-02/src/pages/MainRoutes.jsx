import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import DashboardPage from './DashboardPage'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>}  >
            <Route path='/dashboard/profile' element={<Profile/>} />
            <Route path='/dashboard/settings' element={<Settings/>} />
        </Route>
       
        
    </Routes>
  )
}

export default MainRoutes