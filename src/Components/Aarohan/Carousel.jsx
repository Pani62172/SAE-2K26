import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue,useTransform, animate } from 'framer-motion'; 

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 32; // Increased gap for your cards
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  children, // Accept children instead of items prop
  baseWidth = 350,
  autoplay = true,
  autoplayDelay = 2000,
  pauseOnHover = false,
  loop = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  // Convert children to array for easier handling
  const items = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    // Clone logic for loop
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setPosition(prev => {

         if (loop) return prev + 1;

         return Math.min(prev + 1, itemsForRender.length - 1);
    });
 }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length, loop]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    // Only reset if items change drastically, otherwise keep position logic stable
    // setPosition(startingPosition); 
    // x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);
  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction = offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD ? 1 : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD ? -1 : 0;
    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      return next; 
    });
  };

  return (
    <div
      ref={containerRef}
      className="react-bits-carousel" 
      style={{ width: '100%' }}
    >
      <motion.div
        className="react-bits-track"
        drag="x"
        dragConstraints={{ left: -((items.length - 1) * trackItemOffset), right: 0 }}
        style={{ x: useMotionValue(-(position * trackItemOffset)) }} 
        animate={{ x: -(position * trackItemOffset) }}
        transition={SPRING_OPTIONS}
        onDragEnd={handleDragEnd}
      >
        {items.map((child, index) => (
          <motion.div
            key={index}
            className="react-bits-item" // UPDATED CLASS
            style={{
              width: itemWidth,
              height: '100%',
              marginRight: GAP,
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Indicators */}
      <div className="react-bits-indicators">
        <div className="react-bits-dots">
          {items.map((_, index) => (
            <div
              key={index}
              className={`react-bits-dot ${position === index ? 'active' : ''}`}
              onClick={() => setPosition(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}