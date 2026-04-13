import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import HeroSextion from './component/HeroSextion'
import Feature from './component/Feature'
import Cards from './component/cards'
import LowerFeature from './component/LowerFeature'
import Newfeatures from './component/Newfeatures'
import BottomFeatures from './component/BottomFeatures'
import Roller from './component/Roller'
import Testimonial from './component/Testimonial'
import CTA from './component/CTA'
import Contact from './component/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar/>
     <HeroSextion/>
     <Feature/>
     <Cards/>
     <LowerFeature/>
     <Newfeatures/>
     <BottomFeatures/>
     <Roller/>
     <Testimonial/>
     <CTA/>
     <Contact/>
    </div>
  )
}

export default App
