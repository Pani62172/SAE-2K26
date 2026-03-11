import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    tag: 'Workshop & Webinar',
  },
  {
    id: '02',
    title: 'BAJA SAEINDIA',
    bg: 'bg-red-600',
    text: 'text-black',
    accent: 'text-black',
    border: 'border-black/10',
    description:
      'BAJA SAEINDIA is a renowned national event challenging university students to design, build, and race off-road vehicles, promoting teamwork and engineering skills. NIT Durgapur\'s Team NDORS — 25 talented students — achieved 38th place nationwide and 7th among IITs and NITs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tag: 'National Competition',
  },
  {
    id: '03',
    title: 'SDV WORKSHOP',
    bg: 'bg-white',
    text: 'text-black',
    accent: 'text-red-600',
    border: 'border-black/10',
    description:
      "SAE's self-driving vehicle workshop offers an in-depth experience in building a prototype autonomous vehicle, covering key principles of autonomous driving, robotics, and algorithm development. Participants gain insights into the innovations shaping tomorrow's mobility landscape.",
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80',
    tag: 'Autonomous Tech',
  },
  {
    id: '04',
    title: 'AI/ML WORKSHOP',
    bg: 'bg-[#0f0f0f]',
    text: 'text-white',
    accent: 'text-red-400',
    border: 'border-white/10',
    description:
      'This workshop provides practical, in-depth experience in AI and ML, focusing on CNNs and deep learning models. Attendees tackle real-world challenges, designing neural network architectures and exploring applications in image recognition, autonomous systems, and data-driven decision-making.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
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

    // Content stagger
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
      className={`${event.bg} ${event.text} rounded-2xl lg:rounded-3xl overflow-hidden border ${event.border} mb-6 lg:mb-8`}
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
            className="w-full h-full object-cover scale-110"
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
          className="flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-14 gap-5"
        >
          <span className={`anim-child text-sm font-mono tracking-[0.3em] ${event.accent} opacity-70`}>
            {event.id}
          </span>

          <h4
            className={`anim-child font-heading font-bold uppercase leading-[1] tracking-tight
              text-4xl sm:text-5xl lg:text-[3.5vw] xl:text-[3vw]`}
          >
            {event.title}
          </h4>

          <div className={`anim-child w-12 h-[2px] ${event.bg === 'bg-red-600' ? 'bg-black' : 'bg-red-500'}`} />

          <p
            className={`anim-child font-sans leading-[1.7] opacity-80
              text-sm sm:text-base lg:text-[0.95vw] xl:text-[0.9vw] max-w-[480px]`}
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
    <section ref={sectionRef} className="bg-black relative z-20 py-20 lg:py-28">
      {/* Section Header */}
      <div className="main-container mb-14 lg:mb-20">
        <div className="flex flex-col gap-4">
          <span className="events-heading text-xs uppercase tracking-[0.35em] text-red-500 font-semibold">
            What We Do
          </span>
          <h3
            className="events-heading font-heading font-bold uppercase text-white
              text-[10vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw]
              leading-[1.05] tracking-tighter"
          >
            Our <span className="text-red-500">Events</span>
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