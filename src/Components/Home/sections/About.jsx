import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    // Heading fade-in from below
    gsap.from(".about-heading", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });

    // Body text char-by-char opacity reveal
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.15 });
        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 60%",
            end: "center 30%",
            scrub: 1.5,
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <div
      ref={aboutRef}
      className="bg-black rounded-tl-[20px] rounded-tr-[20px] relative z-10 py-8 lg:py-20"
    >
      {/* Section Label */}
      <div className="main-container mb-10 lg:mb-14">
        <span className="about-heading inline-block text-xs uppercase tracking-[0.25em] font-semibold text-red-500 border border-red-500/40 rounded-full px-4 py-1.5">
          Who We Are
        </span>
      </div>

      {/* Heading */}
      <div className="main-container mb-10 lg:mb-16">
        <h2
          className="about-heading font-heading font-bold uppercase text-white
            text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw]
            leading-[1.05] tracking-tighter"
        >
          About <span className="text-red-500">SAE</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="main-container mb-10 lg:mb-16">
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      {/* Body Text */}
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left: Pull quote / highlight */}
        <p className="about-text font-heading text-white font-medium
          text-2xl sm:text-3xl md:text-3xl lg:text-[2.2vw] xl:text-[1.9vw]
          leading-[1.35] tracking-tight">
          The only automotive club of its kind at NIT Durgapur — building engineers, innovators, and leaders.
        </p>

        {/* Right: Full description */}
        <p className="about-text text-white/70 font-sans
          text-base sm:text-lg md:text-xl lg:text-[1.1vw] xl:text-[1vw]
          leading-[1.75] tracking-normal">
          The SAE Collegiate Club of NIT Durgapur organises a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year — including F.I.S.T., webinars, SDV workshops, Drag &amp; Drift Competition, and TEDx Talks. As a pivotal force, SAE, being a part of Team Aavishkar, coordinates Aarohan, the second-largest techno-management festival in Eastern India. The club maintains a robust online presence through Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts worldwide.
        </p>
      </div>

      {/* Stats Row */}
      <div className="main-container mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
        {[
          { num: "25+", label: "Active Members" },
          { num: "10+", label: "Annual Events" },
          { num: "38th", label: "BAJA Rank Nationwide" },
          { num: "7th", label: "Among IITs & NITs" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-heading font-bold text-white text-4xl lg:text-5xl tracking-tight">
              {stat.num}
            </span>
            <span className="text-white/50 text-sm uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;