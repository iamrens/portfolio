import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeSwitcher } from './context/ThemeContext'
import { ThemeProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute='class'>
      <ThemeSwitcher>
        <App />
      </ThemeSwitcher>
    </ThemeProvider>
  </React.StrictMode>,
)
