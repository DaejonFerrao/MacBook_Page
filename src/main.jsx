import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.jsx'
import ProductViewer from './Components/ProductViewer.jsx'
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <ProductViewer />
  </StrictMode>,
)
