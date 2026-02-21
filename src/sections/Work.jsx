import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Work = () => {

  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(() => {
    // Horizontal scroll
    const projectsWidth = projectsRef.current.scrollWidth;
    const scrollDistance = projectsWidth - window.innerWidth;

    gsap.to(projectsRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center ",
        end: () => `+=${projectsWidth}`,
        pin: true,
        scrub: 0,
        anticipatePin: 1, // prevents flicker on fast scroll
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
  "wjw50oAJZao",
  "h_Qjiqtd3Vw",
  "P1XK8_ZumVI",
  "1W2jI4JDNtE",
  "aTdqZOGJPDw",
];
  
  const handleThumbnailClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <>
      <div ref={workRef} className="min-h-screen bg-white text-black py-24 lg:py-40 overflow-hidden">
        
        {/* Title Wrapper */}
        <div className='main-container pb-8 lg:pb-12 flex max-md:flex-col gap-10 justify-between items-start md:items-end sm:items-end'>
          <div className='max-w-xl'>
            <h3 className='mb-3'>Videos</h3>
            <p className='text-lg lg:text-xl'>A showcase of our videos—designed to inspire, engage, and deliver real results.</p>
          </div>
          <GradientButton text="Explore All" link="/projects" className="btn-light" />
        </div>
        <div ref={projectsRef}>
          {/* Projects */}
          <div className='flex gap-5 lg:gap-8 ms-4 lg:ms-[40%] mt-6'>
            {videos.map(( videoId, index ) => (
            <div className='relative rounded-2xl w-full min-w-[340px] lg:min-w-2xl  h-72 lg:h-96 block overflow-hidden group' key={index}>
                {/* Project Image */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                  alt="Youtube Video Thumbnail"
                    onClick={() => handleThumbnailClick(videoId)}
                    style={{ cursor: "pointer" }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Work