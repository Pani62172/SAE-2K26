import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../comp/CTA'
import Footer from '../comp/Footer'
//import Navbar from '../comp/Navbar'
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Marquee />
      <CTA />
      <Footer />
    </>
  )
}

export default Home