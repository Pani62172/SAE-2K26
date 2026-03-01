import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 32;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  children,
  baseWidth = 350,
  autoplay = true,
  autoplayDelay = 2000,
  pauseOnHover = false,
  loop = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const items = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children],
  );

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const cloneOffset = loop ? 1 : 0;

  const [position, setPosition] = useState(cloneOffset);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setPosition((prev) => {
        if (loop) return prev + 1;

        return prev === items.length - 1 ? 0 : prev + 1;
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    pauseOnHover,
    itemsForRender.length,
    loop,
  ]);

  useEffect(() => {
    const targetX = -(position * trackItemOffset);
    animate(x, targetX, SPRING_OPTIONS);
  }, [position, trackItemOffset, x]);

  useEffect(() => {
    if (!loop) return;
    if (position === itemsForRender.length - 1) {
      const timeout = setTimeout(() => {
        const realIndex = 1;
        x.set(-(realIndex * trackItemOffset));
        setPosition(realIndex);
      }, 300);
      return () => clearTimeout(timeout);
    }

    if (position === 0) {
      const timeout = setTimeout(() => {
        const realIndex = items.length;
        x.set(-(realIndex * trackItemOffset));
        setPosition(realIndex);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [position, loop, itemsForRender.length, trackItemOffset, items.length, x]);

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const { offset, velocity } = info;
    const swipe =
      Math.abs(offset.x) > DRAG_BUFFER ||
      Math.abs(velocity.x) > VELOCITY_THRESHOLD;

    if (swipe) {
      const direction = offset.x < 0 ? 1 : -1;
      setPosition((prev) => prev + direction);
    } else {
      const targetX = -(position * trackItemOffset);
      animate(x, targetX, SPRING_OPTIONS);
    }
  };

  return (
    <div
      ref={containerRef}
      className="react-bits-carousel"
      style={{ width: "100%" }}
    >
      <motion.div
        className="react-bits-track"
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        style={{
          display: "flex",
          cursor: isDragging ? "grabbing" : "grab",
          width: "max-content",
          paddingLeft: containerPadding,
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >
        {itemsForRender.map((child, index) => (
          <motion.div
            key={index}
            className="react-bits-item"
            style={{
              width: itemWidth,
              height: "100%",
              marginRight: GAP,
              flexShrink: 0,
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>

      <div className="react-bits-indicators">
        <div className="react-bits-dots">
          {items.map((_, index) => {
            let activeIndex = position - cloneOffset;
            if (loop) {
              if (activeIndex < 0) activeIndex = items.length - 1;
              if (activeIndex >= items.length) activeIndex = 0;
            }

            return (
              <div
                key={index}
                className={`react-bits-dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setPosition(index + cloneOffset)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
