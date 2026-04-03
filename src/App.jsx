import './index.css'
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.jsx'
import ProductViewer from './Components/ProductViewer.jsx'
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Showcase from './Components/Showcase.jsx';
import Perfomance from './Components/Perfomance.jsx';
import Features from './Components/Features.jsx';
import Highlights from './Components/Highlights.jsx';
import Footer from './Components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Perfomance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App