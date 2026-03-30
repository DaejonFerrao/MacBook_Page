import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
  </StrictMode>,
)
