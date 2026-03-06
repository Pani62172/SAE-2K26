import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      {/* Changed h-screen to h-auto lg:h-screen and added pb-10 for mobile bottom spacing */}
      <div ref={aboutRef} className='h-auto lg:h-screen bg-black rounded-tl-[20px] rounded-tr-[20px] relative z-10 pb-10 lg:pb-0 pt-6 lg:pt-0'>
        <div className=' text-4xl md:text-3xl xl:text-[30px] 2xl:text-5xl text-white items-center justify-center flex flex-col uppercase font-heading font-semibold hover:text-red-500 border-[1px] border-b-white border-transparent justifyBetween'>About SAE</div>
          
          {/* Removed h-full so the div wraps the content naturally on mobile */}
          <div className='about-text main-container py-4 lg:py-12 flex justify-center items-start lg:items-center mt-6 lg:mt-0 font-heading text-white text-xl md:text-3xl xl:text-[45px] 2xl:text-5xl leading-[1.25] lg:leading-[1.3]'>
            The SAE Collegiate Club of NIT Durgapur, the only automotive club of its kind organizes a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year, including F.I.S.T., webinars, SDV workshops, Drag and Drift Competition, and TEDX Talks. As a pivotal force, SAE being a part of Team Aavishkar coordinates Aarohan, the second-largest techno-management festival in Eastern India, held at NIT Durgapur. The club maintains a robust online presence through platforms like Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts.
          </div>
      </div>
    </>
  )
}

export default About