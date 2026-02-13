import React, { useState, useRef } from 'react';
import './EventCard.css'; // We will create this specific CSS

const EventCard = ({ event, onInteract }) => {
  const [activePosterIndex, setActivePosterIndex] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  const posters = event.posters || [{ src: event.image, label: 'Default' }];
  const currentPoster = posters[activePosterIndex] || posters[0];

  return (
    <div className="event-card-wrapper"
    onMouseEnter={() => onInteract && onInteract(true)}
    onMouseLeave={() => onInteract && onInteract(false)}
         >
      {/* The 3D Card */}
      <div className="arhn-card"
      ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
        
        {/* Poster Image */}
        <img 
         src={currentPoster.src} 
          alt={event.name} 
          className="arhn-card-img"
        />

        {/* Hover Content Overlay */}
        <div className="arhn-card-content">
          <h2 className="text-3xl font-bold text-white mb-2">{event.name}</h2>
          <div className="h-1 w-12 bg-red-600 mb-4 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-300 px-4">{event.content}</p>
        </div>
      </div>

      {posters.length > 1 && (
        <div className="card-tabs">
          {posters.map((poster, index) => (
            <button
              key={index}
              className={`tab-dot ${index === activePosterIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActivePosterIndex(index);
              }}

    //   <div className="card-tabs">
    //     {event.posters.map((poster, index) => (
    //       <button
    //         key={index}
    //         className={`tab-dot ${index === activePosterIndex ? 'active' : ''}`}
    //         onClick={(e) => {
    //           e.stopPropagation(); // Prevent triggering card clicks if any
    //           setActivePosterIndex(index);
    //         }}
          >
            {poster.label}
          </button>
        ))}
      </div>
      )}
    </div>
  );
};

export default EventCard;