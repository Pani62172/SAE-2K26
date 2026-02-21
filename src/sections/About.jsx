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
      <div ref={aboutRef} className='h-screen bg-white rounded-tl-[20px] rounded-tr-[20px] relative z-10'>
        <div className=' text-4xl md:text-3xl xl:text-[30px] 2xl:text-5xl text-black items-center justify-center flex flex-col uppercase font-heading font-semibold hover:text-red-500 border-[1px] border-b-black border-transparent justifyBetween'>About SAE</div>
          <div className='about-text main-container py-4 lg:py-12  h-full flex justify-center items-center font-heading text-black text-xl md:text-3xl xl:text-[60px] 2xl:text-5xl leading-[1.25]'>
The SAE Collegiate Club of NIT Durgapur, the only automotive club of its kind organizes a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year, including F.I.S.T., webinars, SDV workshops, Drag and Drift Competition, and TEDX Talks. As a pivotal force, SAE being a part of Team Aavishkar coordinates Aarohan, the second-largest techno-management festival in Eastern India, held at NIT Durgapur. The club maintains a robust online presence through platforms like Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts.</div>
      </div>
    </>
  )
}

export default About