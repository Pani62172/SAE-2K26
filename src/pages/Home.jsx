import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'
import Slider from '../sections/slider'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
     
         <Marquee />
      <Services />
      <Work />
       <Slider/>
      <CTA />
    </>
  )
}

export default Home