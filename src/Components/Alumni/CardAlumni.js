import React, { useRef, useState, useEffect, useId } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './cardalumni.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const SPRING      = { stiffness: 300, damping: 25, mass: 0.5 };
const TILT        = 15;   // max tilt degrees
const STROKE_W    = 3;    // border line width px
const TRAIL_PCT   = 0.15; // arc = 15% of perimeter

const Cardalumni = (props) => {
  const uid        = useId();                          // unique, safe id
  const gradId     = `rg${uid.replace(/:/g, '')}`;   // strip colons for valid SVG id
  const motionRef  = useRef(null);
  const [size, setSize]       = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState(false);

  // Measure the motion div directly (it has width/height 100%)
  useEffect(() => {
    const el = motionRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setSize({ w: el.offsetWidth, h: el.offsetHeight });
    });
    ro.observe(el);
    // also set immediately
    setSize({ w: el.offsetWidth, h: el.offsetHeight });
    return () => ro.disconnect();
  }, []);

  // ── Tilt ────────────────────────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [TILT, -TILT]), SPRING
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-TILT, TILT]), SPRING
  );
  const shineX = useSpring(useTransform(mouseX, [0, 1], [-60, 60]), SPRING);
  const shineY = useSpring(useTransform(mouseY, [0, 1], [-60, 60]), SPRING);

  const onMove = (e) => {
    const r = motionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left)  / r.width);
    mouseY.set((e.clientY - r.top)   / r.height);
  };
  const onLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setHovered(false);
  };
  const onEnter = () => setHovered(true);

  // ── SVG geometry ────────────────────────────────────
  const { w: W, h: H } = size;
  const PAD = 3;                          // half-stroke bleeds outward
  const rx  = 22;                         // border-radius px (≈2vw @1100px)
  const perimeter = (W && H)
    ? 2 * (W + H) - (8 - 2 * Math.PI) * rx
    : 0;
  const trail = perimeter * TRAIL_PCT;

  const hasSvg = perimeter > 0;

  return (
    <div className="card-alumni-wrapper">
      <motion.div
        ref={motionRef}
        className="card-alumni"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={onEnter}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
      >
        {/* ── Photo + content (clipped) ── */}
        <div className="card-inner">
          <img src={props.image} alt={props.name} />

          <motion.div
            className="card-alumni-shine"
            style={{
              backgroundImage: useTransform(
                [shineX, shineY],
                ([x, y]) =>
                  `radial-gradient(circle at ${50 + x}% ${50 + y}%,` +
                  ` rgba(255,255,255,0.10) 0%, transparent 65%)`
              ),
            }}
          />

          <div className="bottom-Alumni">
            <div className="items-Alumni">
              <h2>{props.name}</h2>
              <div className="icons-Alumni">
                <a href={props.instalink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="delay3" icon={faInstagram} color="white" />
                </a>
                <a href={props.linkedinlink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="delay2" icon={faLinkedin} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── SVG border — rendered AFTER card-inner so it paints on top ── */}
        {hasSvg && (
          <svg
            className="card-border-svg"
            width={W + PAD * 2}
            height={H + PAD * 2}
            style={{ left: -PAD, top: -PAD }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id={gradId}
                gradientUnits="userSpaceOnUse"
                x1="0" y1="0" x2={W} y2="0"
              >
                <stop offset="0%"   stopColor="rgba(150,0,0,0)" />
                <stop offset="50%"  stopColor="rgb(200,0,0)" />
                <stop offset="100%" stopColor="rgb(255,0,0)" />
              </linearGradient>
            </defs>

            {/* dim track so border path is always subtly visible */}
            <rect
              x={PAD} y={PAD}
              width={W} height={H}
              rx={rx} ry={rx}
              fill="none"
              stroke="rgba(100,100,100,0.5)"
              strokeWidth="1"
            />

            {/* travelling red arc */}
            <rect
              className="border-arc"
              data-hovered={hovered}
              x={PAD} y={PAD}
              width={W} height={H}
              rx={rx} ry={rx}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth={STROKE_W}
              strokeLinecap="round"
              strokeDasharray={`${trail} ${perimeter - trail}`}
              style={{
                '--perimeter': `${perimeter}`,
                opacity: hovered ? 1 : 0,
                animation: hovered
                  ? 'travel-border 2.5s linear infinite'
                  : 'none',
              }}
            />
          </svg>
        )}

      </motion.div>
    </div>
  );
};

export default Cardalumni;