

import React, { useEffect } from 'react';
import HeaderImg from './HeaderImg/HeaderImg';
import Speakers from './Speakers/Speakers';
//import Organisers from './Organisers/Organisers';
import ImageCarousel from './ImageCarousel/ImageCarousel';
// import Navbar from './Navbar/Navbar';  
import About from './About/About';
import './TedX.css'
import BeamsDemo from "../Team/Assets/Beams.jsx";

const TedX = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="ted-page min-h-screen relative">
      {/* Background layer */}
      <div className="beams-background">
        <BeamsDemo />
      </div>
      
      {/* Content layer */}
      <div className="ted-content">
        <HeaderImg />
        <About />
        <div className="max-w-screen mx-auto">
          <h1 className="text-[36px] md:text-[42px] font-bold text-custom-red text-center p-4">Gallery</h1>
          <ImageCarousel />
        </div>
        <div className="max-w-screen mx-auto p-4">
          <h1 className="text-[36px] md:text-[42px] font-bold text-custom-red text-center pt-8 underline-red">SPEAKERS</h1>
          <Speakers />
        </div>
      </div>
    </div>
  );
};

export default TedX;
