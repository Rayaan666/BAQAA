import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Destinations.css';

const destinations = [
  {
    name: 'BODRUM',
    location: 'TURKEY',
    couple: 'Sameera & Nikhil',
    image: '/destination/destination1.png'
  },
  {
    name: 'CASCAIS',
    location: 'PORTUGAL',
    couple: 'Rhea & Raj',
    image: '/destination/destination2.png'
  },
  {
    name: 'BAB AL BAHAR',
    location: 'ABU DHABI, UAE',
    couple: 'Priya & Rohan',
    image: '/destination/destination3.png'
  },
  {
    name: 'FUJAIRAH',
    location: 'UAE',
    couple: 'Shriya & Vadhiraj',
    image: '/destination/destination4.png',
    objectPosition: '15% center'
  },
  {
    name: 'PALM DUBAI',
    location: 'UAE',
    couple: 'Tanya & Sagar',
    image: '/destination/destination5.png'
  },
  {
    name: 'SAADIYAT ISLAND',
    location: 'ABU DHABI, UAE',
    couple: 'Ruhi & Kartik',
    image: '/destination/destination6.png',
    objectPosition: '20% center'
  },
  {
    name: 'ANTALYA',
    location: 'TURKEY',
    couple: 'Sumeet & Sonali',
    image: '/destination/destination7.png'
  },
  {
    name: 'BALI',
    location: 'INDONESIA',
    couple: 'Salimah & Riaz',
    image: '/destination/destination8.png'
  },
  {
    name: 'NEW DELHI',
    location: 'INDIA',
    couple: 'Jehana & Kanishk',
    image: '/destination/destination9.png'
  },
  {
    name: 'MUSCAT',
    location: 'OMAN',
    couple: 'Sarah & Ahmed',
    image: '/destination/destination11.png',
    objectPosition: '70% center'
  },
  {
    name: 'RAS AL KHAIMAH',
    location: 'UAE',
    couple: 'Maryam & Shanveer',
    image: '/destination/destination12.png',
    objectPosition: '40% -10px'
  }
];

const AnimatedTravelPath = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const d = "M100 60 C 300 20, 700 100, 900 60";

  return (
    <div ref={containerRef} className="travel-path-container">
      <div className="travel-path-label-left">ORIGIN</div>
      <svg width="1000" height="120" viewBox="0 0 1000 120" fill="none" className="travel-path-svg">
        <motion.path
          d={d}
          stroke="url(#pathGradient)"
          strokeWidth="1.5"
          strokeDasharray="12 18"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="pathGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0" />
            <stop offset="50%" stopColor="#8d8a86" stopOpacity="1" />
            <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.g
          style={{
            offsetPath: `path("${d}")`,
            offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"]),
            opacity: useTransform(pathLength, [0, 0.05], [0, 1])
          }}
        >
          <circle r="4" fill="#8d8a86" />
          <circle r="8" stroke="#8d8a86" strokeWidth="1" opacity="0.3" />
        </motion.g>
      </svg>
      <div className="travel-path-label-right">DESTINATION</div>
    </div>
  );
};

const Destinations = () => (
    <section className="destinations-section" id="destinations">
      <div className="destinations-header text-center">
        <div className="vertical-line-header"></div>
        <span className="dest-pre-title">
          GLOBAL CELEBRATIONS
        </span>
        <h2 className="dest-title">
          TOP WEDDING DESTINATIONS
        </h2>
 
        <AnimatedTravelPath />
      </div>
 
      <div className="destinations-grid-refined">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="dest-card-refined"
          >
            <div className="dest-img-box">
              <img 
                src={dest.image} 
                alt={dest.name} 
                style={{
                  ...(dest.objectPosition ? { objectPosition: dest.objectPosition } : {}),
                  ...(dest.imageStyle || {})
                }}
              />
              <div className="dest-img-overlay"></div>
            </div>
 
            <div className="dest-content-area">
              <div className="dest-text-box">
                <span className="dest-location-tag">{dest.location}</span>
                <h3 className="dest-name-label">{dest.name}</h3>
                {dest.couple && <p className="dest-couple-name">{dest.couple}</p>}
                <div className="dest-accent-line"></div>
              </div>
 
              <a href="/portfolio" className="dest-explore-btn">
                VIEW GALLERY
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
 
      <div className="destinations-footer-refined">
        <button className="btn-more-dest">
          ALL DESTINATIONS
        </button>
      </div>
    </section>
);

export default Destinations;
