import React from 'react';

const GradientButton = ({ text, link, className = "" }) => {
  return (
    <a 
      href={link} 
      className={`
        group relative inline-flex items-center justify-center 
        min-w-[240px] h-[60px] lg:min-w-[280px] lg:h-[70px]
        rounded-full font-bold uppercase tracking-[0.2em] text-xs lg:text-sm
        transition-all duration-300 overflow-hidden isolate
        ${className}
      `}
    >
      {/* 1. Border Layer */}
      <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#40E0D0]">
        
        {/* 2. Inner background (Black to match CTA section) */}
        <span className="flex h-full w-full items-center justify-center rounded-full bg-white group-hover:bg-transparent transition-all duration-500">
          
          {/* 3. Text (Gradient to White) */}
          <span className="bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#40E0D0] bg-clip-text text-transparent group-hover:text-black transition-all duration-300">
            {text}
          </span>
        </span>
      </span>
    </a>
  );
};

export default GradientButton;