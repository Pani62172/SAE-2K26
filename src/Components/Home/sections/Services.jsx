import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sdv from '../../../assets/images/sdv.jpg';
import fist from '../../../assets/images/fist.png';
import baja from '../../../assets/images/baja.jpg';
import aiml from '../../../assets/images/aiml.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─── Event Data ─────────────────────────────────────────── */
const events = [
  {
    id: '01',
    title: 'FIST',
    bg: 'bg-black',
    text: 'text-white',
    accent: 'text-red-500',
    border: 'border-white/10',
    description:
      `Team SAE-NITD's "Forum for Ideas on Science and Technology" (F.I.S.T.) cultivates a research-focused environment through engaging webinars and hands-on workshops on cutting-edge topics like generative AI. By bringing in industry experts, F.I.S.T. bridges knowledge gaps, inspires innovation, and empowers students to explore technology-based solutions to real-world challenges.`,

    image: fist,
    tag: 'Workshop & Webinar',
  },
  {
    id: '02',
    title: 'BAJA SAEINDIA',
    bg: 'bg-black',
    text: 'text-white',
    accent: 'text-red-500',
    border: 'border-white/10',
    description:
      'BAJA SAEINDIA is a renowned national event challenging university students to design, build, and race off-road vehicles, promoting teamwork and engineering skills. NIT Durgapur\'s Team NDORS - 25 talented students - achieved 38th place nationwide and 7th among IITs and NITs.',
    image: baja,
    tag: 'National Competition',
  },
  {
    id: '03',
    title: 'SDV WORKSHOP',
    bg: 'bg-black',
    text: 'text-white',
    accent: 'text-red-500',
    border: 'border-white/10',
    description:
      "SAE's self-driving vehicle workshop offers an in-depth experience in building a prototype autonomous vehicle, covering key principles of autonomous driving, robotics, and algorithm development. Participants gain insights into the innovations shaping tomorrow's mobility landscape.",
    image: sdv,
    tag: 'Autonomous Tech',
  },
  {
    id: '04',
    title: 'AI/ML WORKSHOP',
    bg: 'bg-black', // Changed to solid black
    text: 'text-white',
    accent: 'text-red-400',
    border: 'border-white/10',
    description:
      'This workshop provides practical, in-depth experience in AI and ML, focusing on CNNs and deep learning models. Attendees tackle real-world challenges, designing neural network architectures and exploring applications in image recognition, autonomous systems, and data-driven decision-making.',
    image: aiml,
    tag: 'AI & Machine Learning',
  },
];

/* ─── Single Event Card ──────────────────────────────────── */
const EventCard = ({ event, index }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 75%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    });

    // Card slide-up
    tl.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Image reveal (clip from left)
    tl.from(
      imgRef.current,
      {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1,
        ease: 'power4.inOut',
      },
      '-=0.4'
    );

    // Content stagger (ID, Title, Description)
    tl.from(
      contentRef.current.querySelectorAll('.anim-child'),
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.6'
    );

    // Line extension animation
    tl.fromTo(
      contentRef.current.querySelector('.line-anim'),
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    // Subtle image parallax on scroll
    gsap.to(imgRef.current, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  }, { scope: cardRef });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`${event.bg} ${event.text} rounded-2xl lg:rounded-3xl overflow-hidden border ${event.border} mb-3 lg:mb-4`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
          isEven ? '' : 'lg:[&>*:first-child]:order-2'
        }`}
      >
        {/* Image Side */}
        <div className="relative h-64 sm:h-80 lg:h-[420px] overflow-hidden">
          <img
            ref={imgRef}
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-left"
            style={{ clipPath: 'inset(0 0 0 0)' }}
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 ${
              event.bg === 'bg-black' || event.bg === 'bg-[#0f0f0f]'
                ? 'bg-gradient-to-r from-black/40 to-transparent'
                : 'bg-gradient-to-r from-white/20 to-transparent'
            }`}
          />
          {/* Tag pill */}
          <span
            className={`absolute top-4 left-4 text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full ${
              event.bg === 'bg-red-600'
                ? 'bg-black text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {event.tag}
          </span>
        </div>

        {/* Content Side */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center px-8 lg:px-14 lg:py-14 max-[800px]:gap-2 lg:gap-4"
        >
          {/* ID */}
          <span className="anim-child text-sm font-mono tracking-[0.3em] text-white opacity-70">
            {event.id}
          </span>

          {/* --- NEW: Wrapper for Title and Line --- */}
          <div className="flex flex-col w-fit max-[800px]:gap-2 lg:gap-4">
            {/* Title */}
            <h4
              className={`anim-child font-bold uppercase leading-[1] tracking-tight
                text-4xl sm:text-5xl lg:text-[3.5vw] xl:text-[3vw]
                bg-gradient-to-b from-[rgb(255,46,46)] to-[rgb(114,5,5)] bg-clip-text text-transparent`}
              style={{ fontFamily: "'Montserrat', 'Roboto', sans-serif" }}
            >
              {event.title}
            </h4>

            {/* Line - w-full now perfectly matches the width of the title */}
            <div className="line-anim w-full h-[2px] bg-red-500 origin-left" />
          </div>
          {/* --------------------------------------- */}

          {/* Description */}
          <p
            className={`anim-child font-sans text-white/100 leading-[1.75] opacity-80
              text-sm sm:text-base lg:text-[1.0vw] xl:text-[1.0vw] max-w-[480px]`}
          >
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────── */
const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.events-heading', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-black relative z-20 py-10 lg:py-14">
      {/* Section Header */}
      <div className="main-container mb-7 lg:mb-10">
        <div className="flex flex-col gap-2">
          <h3
          className="about-heading font-bold uppercase text-white text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-[1.05] tracking-tighter"
          style={{ fontFamily: "'Montserrat', 'Roboto', sans-serif" }}
        >
          Our{' '}
          <span className="bg-gradient-to-b from-[rgb(255,46,46)] to-[rgb(114,5,5)] bg-clip-text text-transparent">
            Events
          </span>
        </h3>
        </div>
      </div>

      {/* Event Cards */}
      <div className="main-container flex flex-col">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;