
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        ref={aboutRef}
        className={`info flex flex-col md:flex-row justify-around m-8 md:m-16 ${isVisible ? 'slide-in-left active' : 'slide-in-left'}`}
      >
        <div className="flex flex-col w-full md:w-1/2 p-4 order-2 md:order-1">
        <h1 className="tedx-heading">About Tedx</h1>
          <p className="text-paragraph mb-8">
            TEDx is an independently organized extension of the global TED conference. Upholding TED’s mission of sharing “ideas worth spreading,” TEDx offers a credible platform for local talent, fostering meaningful discussions within communities. These events are led by passionate individuals dedicated to uncovering fresh ideas and sparking inspiring conversations in their regions.
          </p>
        </div>
        <div className="flex justify-center w-full md:w-auto order-1 md:order-2">
          <img
            src="https://live.staticflickr.com/65535/52768165852_a5dc725ce9.jpg"
            alt="Teddy Bear"
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md"
          />
        </div>
      </div>

      <div
        className={`info flex flex-col md:flex-row justify-around m-8 md:m-16 ${isVisible ? 'slide-in-right active' : 'slide-in-right'}`}
      >
        <div className="flex flex-col w-full md:w-1/2 p-4 order-1 md:order-1">
          <h1 className="tedx-heading">SAE in Tedx</h1>
          <p className="text-paragraph mb-8">
            SAE, in collaboration with the Literary Circle, proudly organizes TEDxNITDurgapur as part of the global TED initiative. This impactful grassroots endeavor aims to create a dynamic platform that brings together diverse voices from multiple fields, encouraging the exchange of innovative ideas and perspectives. By uniting thought leaders, creators, and visionaries, TEDxNITDurgapur seeks to inspire change, ignite meaningful conversations, and contribute to the global dialogue on transformative and forward-thinking ideas.
          </p>
        </div>
        <div className="flex justify-center w-full md:w-auto order-2 md:order-2">
          <img
            src="https://i.ibb.co/d4K6n96h/IMG-7658.jpg"
            alt="SAE in Tedx"
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default About;
