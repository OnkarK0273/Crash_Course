import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeSwitcher} from './components/ThemeSwitcher.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeSwitcher>
    <App />
  </ThemeSwitcher>
)
