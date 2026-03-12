import React, { useRef, useState } from 'react';
import GradientButton from '../comp/GradientButton';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  { id: 'XhYBorFI3Tg', label: 'SAE Highlights' },
  { id: 'j_6sNtASHgU', label: 'BAJA Recap' },
  { id: 'o7fcf5chrTo', label: 'SDV Workshop' },
  { id: 'JrXKyNwJAvQ', label: 'F.I.S.T. Event' },
  { id: '-C2yRvTJ7Ss', label: 'AI/ML Session' },
];

const VideoCard = ({ video, index }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    // Staggered reveal: cards come up one-by-one as section scrolls into view
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      delay: index * 0.12,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });

    // Hover-driven subtle image zoom handled via state + CSS transition
  }, { scope: cardRef });

  const handleOpen = () => {
    window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
  };

  return (
    <div
      ref={cardRef}
      onClick={handleOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-900"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Thumbnail */}
      <img
        ref={imgRef}
        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
        alt={video.label}
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
          opacity: hovered ? 1 : 0.55,
        }}
      />

      {/* Play button */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-400"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.8)' }}
      >
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
        <span className="text-white/50 text-xs uppercase tracking-[0.25em] font-semibold">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-white font-heading font-semibold text-base lg:text-lg leading-tight mt-0.5">
          {video.label}
        </p>
      </div>

      {/* Red border accent on hover */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-red-500 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0 }}
      />
    </div>
  );
};

const Work = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-black text-white py-5 lg:py-16"
    >
      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="main-container flex flex-col md:flex-row gap-8 lg:gap-12 justify-between items-start md:items-end mb-12 lg:mb-16"
      >
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.35em] font-bold text-red-500 block mb-3">
            Media
          </span>
          <h3
          className="about-heading font-bold uppercase text-white text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-[1.05] tracking-tighter"
          style={{ fontFamily: "'Montserrat', 'Roboto', sans-serif" }}
        >
          Our{' '}
          <span className="bg-gradient-to-b from-[rgb(255,46,46)] to-[rgb(114,5,5)] bg-clip-text text-transparent">
            Videos
          </span>
        </h3>
          <p className="mt-4 text-white/50 text-sm lg:text-base leading-relaxed max-w-sm">
            A showcase of our work - designed to inspire, engage, and deliver real results.
          </p>
        </div>

        {/*<div className="flex-shrink-0">
          <GradientButton text="Explore All" link="/projects" />
        </div>*/}
      </div>

      {/* ── Grid: 1 large + 2 small on first row, then 2 on second row ── */}
      <div className="main-container">
        {/* Row 1: Featured (large) + 2 side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {/* Featured — spans 2 cols */}
          <div className="lg:col-span-2">
            <VideoCard video={videos[0]} index={0} />
          </div>
          {/* Side stack */}
          <div className="grid grid-cols-1 gap-4 lg:gap-5">
            <VideoCard video={videos[1]} index={1} />
            <VideoCard video={videos[2]} index={2} />
          </div>
        </div>

        {/* Row 2: Two equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          <VideoCard video={videos[3]} index={3} />
          <VideoCard video={videos[4]} index={4} />
        </div>
      </div>
    </section>
  );
};

export default Work;