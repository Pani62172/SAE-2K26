import React, { useRef, useState, useEffect, useId } from 'react';
import './cardalumni.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const STROKE_W  = 3;
const TRAIL_PCT = 0.15;

const Cardalumni = (props) => {
  const uid    = useId();
  const gradId = `rg${uid.replace(/:/g, '')}`;
  const wrapperRef = useRef(null);
  const [size, setSize]       = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
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
    <div
      ref={wrapperRef}
      className="card-alumni-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="card-alumni"
        style={{
          filter: hovered ? 'brightness(1)' : 'brightness(0.82)',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'filter 0.3s ease, transform 0.5s ease',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <div className="card-inner">
          {/* Image */}
          <img
            src={props.image}
            alt={props.name}
            style={{
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />

          {/* OVERLAY */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            borderRadius: 'inherit',
            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.60) 25%, rgba(0,0,0,0.0) 42%, transparent 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '6px',           // ← changed from 14px to 6px
            boxSizing: 'border-box',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: hovered ? 'auto' : 'none',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              width: '100%',
              padding: '0 12px',
              boxSizing: 'border-box',
              transform: hovered ? 'translateY(0px)' : 'translateY(10px)',
              transition: 'transform 0.3s ease',
            }}>
              {/* Name */}
              <span style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '1em',
                fontWeight: 700,
                color: '#ffffff',
                textAlign: 'center',
                letterSpacing: '0.04em',
                textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                display: 'block',
              }}>
                {props.name}
              </span>

              {/* Divider line */}
              <div style={{
                width: '55%',
                height: '1px',
                background: 'linear-gradient(to right, transparent 0%, rgba(255, 0, 0, 0.55) 30%, rgba(255, 0, 0, 0.55) 70%, transparent 100%)',
                borderRadius: '1px',
                margin: '2px 0',
              }} />

              {/* Icons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {/* Instagram */}
                <a
                  href={props.instalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="overlay-icon-link"
                  style={{
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'scale(1)' : 'scale(0.3)',
                    transition: 'opacity 0.25s ease 0.07s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) 0.07s',
                  }}
                  aria-label={`${props.name} Instagram`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                {/* LinkedIn */}
                <a
                  href={props.linkedinlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="overlay-icon-link"
                  style={{
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'scale(1)' : 'scale(0.3)',
                    transition: 'opacity 0.25s ease 0.15s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) 0.15s',
                  }}
                  aria-label={`${props.name} LinkedIn`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Travelling SVG border */}
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
      </div>
    </div>
  );
};

export default Cardalumni;