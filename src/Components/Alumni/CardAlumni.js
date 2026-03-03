import React, { useRef, useState, useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import './cardalumni.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const STROKE_W  = 3;
const TRAIL_PCT = 0.15;

const Cardalumni = (props) => {
  const uid    = useId();
  const gradId = `rg${uid.replace(/:/g, '')}`;
  const motionRef = useRef(null);
  const [size, setSize]       = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = motionRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setSize({ w: el.offsetWidth, h: el.offsetHeight });
    });
    ro.observe(el);
    setSize({ w: el.offsetWidth, h: el.offsetHeight });
    return () => ro.disconnect();
  }, []);

  const { w: W, h: H } = size;
  const PAD = 3;
  const rx  = 22;
  const perimeter = (W && H) ? 2 * (W + H) - (8 - 2 * Math.PI) * rx : 0;
  const trail  = perimeter * TRAIL_PCT;
  const hasSvg = perimeter > 0;

  return (
    <div className="card-alumni-wrapper">
      <motion.div
        ref={motionRef}
        className="card-alumni"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="card-inner">
          <img src={props.image} alt={props.name} />

          {/* Name — only visible on hover, sits above the boxes */}
          <div className="alumni-name-label">
            <h2>{props.name}</h2>
          </div>

          {/* Instagram — larger box */}
          <div className="box box1">
            <span className="icon">
              <a href={props.instalink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="box-icon-svg" />
              </a>
            </span>
          </div>

          {/* LinkedIn — smaller box */}
          <div className="box box2">
            <span className="icon">
              <a href={props.linkedinlink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="box-icon-svg" />
              </a>
            </span>
          </div>
        </div>

        {/* Travelling red SVG border */}
        {hasSvg && (
          <svg
            className="card-border-svg"
            width={W + PAD * 2}
            height={H + PAD * 2}
            style={{ left: -PAD, top: -PAD }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
                <stop offset="0%"   stopColor="rgba(150,0,0,0)" />
                <stop offset="50%"  stopColor="rgb(200,0,0)" />
                <stop offset="100%" stopColor="rgb(255,0,0)" />
              </linearGradient>
            </defs>
            <rect x={PAD} y={PAD} width={W} height={H} rx={rx} ry={rx}
              fill="none" stroke="rgba(100,100,100,0.5)" strokeWidth="1" />
            <rect
              className="border-arc"
              x={PAD} y={PAD} width={W} height={H} rx={rx} ry={rx}
              fill="none" stroke={`url(#${gradId})`}
              strokeWidth={STROKE_W} strokeLinecap="round"
              strokeDasharray={`${trail} ${perimeter - trail}`}
              style={{
                '--perimeter': `${perimeter}`,
                opacity: hovered ? 1 : 0,
                animation: hovered ? 'travel-border 2.5s linear infinite' : 'none',
              }}
            />
          </svg>
        )}
      </motion.div>
    </div>
  );
};

export default Cardalumni;