 /*import React from 'react';
import './Header.css';
import BlurText from './BlurText.js';

const Header = () => {
  const handleAnimationComplete = () => {
    console.log('Header animation completed!');
  };

  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          
          {/* Animated Heading }
          <BlurText
            text="Our Events"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="header-heading"
          />

          {/* Animated Tagline }
          <BlurText
            text="Where Ideas Drive Progress"
            delay={120}
            animateBy="words"
            direction="top"
           
            className="header-tagline"
          />

        </div>
      </div>
    </header>
  );
};

export default Header; */

import React from 'react';
import './Header.css';
import BlurText from './BlurText.js';

const Header = () => {
  const handleAnimationComplete = () => {
    console.log('Header animation completed!');
  };

  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          
          {/* Animated Heading */}
          <BlurText
            text="Our Events"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="header-heading"
          />

          {/* Animated Tagline */}
          <BlurText
            text="Where Ideas Drive Progress"
            delay={120}
            animateBy="words"
            direction="top"
            className="header-tagline"
          />

        </div>
      </div>
    </header>
  );
};

export default Header;
