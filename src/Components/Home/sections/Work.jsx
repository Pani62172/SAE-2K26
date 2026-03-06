import React, { useRef } from 'react';
import GradientButton from '../comp/GradientButton'; // Ensure this path is correct
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(() => {
    // FIX 2: Wrapped the calculation in a function. 
    // GSAP will recalculate this dynamically if images load late or the screen resizes,
    // completely stopping the grey background jump/glitch.
    const getScrollAmount = () => {
      return projectsRef.current.scrollWidth - window.innerWidth;
    };

    gsap.to(projectsRef.current, {
      x: () => -getScrollAmount(), // Use the dynamic function
      ease: "none",
      scrollTrigger: {
        trigger: workRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount()}`, // Use the dynamic function
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: workRef });

  const videos = [
    "XhYBorFI3Tg",
    "j_6sNtASHgU",
    "o7fcf5chrTo",
    "JrXKyNwJAvQ",
    "-C2yRvTJ7Ss",
  ];

  return (
    // FIX 1: Added 'relative z-30' here so it scrolls over the Services section normally
    <section ref={workRef} className="relative z-30 min-h-screen bg-black text-white py-20 lg:py-32 overflow-hidden">
      
      {/* Header Container */}
      <div className='px-8 lg:px-16 pb-16 flex flex-col md:flex-row gap-10 justify-between items-start md:items-end'>
        <div className='max-w-2xl'>
          <h3 className='text-sm uppercase tracking-[0.4em] font-bold text-gray-400 mb-4'>Videos</h3>
          <p className='text-3xl lg:text-[2.8vw] font-medium leading-[1.1] text-white'>
            A showcase of our videos—designed to inspire, engage, and deliver real results.
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <GradientButton text="Explore All" link="/projects" />
        </div>
      </div>

      {/* Horizontal Scroll Content */}
      <div ref={projectsRef} className="flex gap-8 px-8 lg:px-16">
        {videos.map((videoId, index) => (
          <div 
            key={index}
            onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
            className='relative rounded-[2rem] min-w-[400px] lg:min-w-[750px] aspect-video overflow-hidden group cursor-pointer bg-gray-100 shadow-xl'
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Work Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;