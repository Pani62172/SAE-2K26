import React from 'react';
import star from '../assets/images/star.svg';

const words = ['ENDURANCE', 'INNOVATION', 'PRECISION', 'VELOCITY', 'EXCELLENCE', 'ENGINEERING'];

const MarqueeRow = ({ reverse = false, color = 'text-white' }) => (
  <div
    className={`flex whitespace-nowrap overflow-hidden ${
      reverse ? 'animate-marquee-reverse' : 'animate-marquee'
    } ${color}`}
  >
    {/* Duplicate for seamless loop */}
    {[0, 1].map((copy) => (
      <span key={copy} className="flex items-center gap-5 lg:gap-8 pr-5 lg:pr-8 shrink-0">
        {words.map((word, i) => (
          <React.Fragment key={`${copy}-${i}`}>
            <span className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl tracking-[0.18em] uppercase leading-none">
              {word}
            </span>
            <img
              src={star}
              alt=""
              aria-hidden="true"
              className={`w-4 h-4 lg:w-5 lg:h-5 shrink-0 ${
                reverse ? 'animate-spin-slow-reverse' : 'animate-spin-slow'
              } ${color === 'text-white' ? 'invert' : ''}`}
            />
          </React.Fragment>
        ))}
      </span>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div className="bg-black overflow-hidden py-16 lg:py-20 flex flex-col gap-4 lg:gap-5 select-none">
      {/* Row 1 — white, left */}
      <MarqueeRow reverse={false} color="text-white/80" />

      {/* Row 2 — red accent, right */}
      <MarqueeRow reverse={true} color="text-red-500" />

      {/* Row 3 — muted, left — desktop only */}
      <div className="hidden lg:block">
        <MarqueeRow reverse={false} color="text-white/30" />
      </div>
    </div>
  );
};

export default Marquee;