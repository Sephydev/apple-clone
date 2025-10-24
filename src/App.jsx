import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from './components/Showcase';
import Performance from './components/Performance';
import Feature from './components/Feature';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Feature />
    </main>
  )
}

export default App