import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './LoveStories.css';

const stories = [
  {
    names: "Ata x Aman",
    location: "Dubai",
    image: "/love stories/1.jpg",
    rotation: -4
  },
  {
    names: "Sameera x Nikhil",
    location: "Turkey",
    image: "/love stories/2.png",
    rotation: 3
  },
  {
    names: "Ruhi x Kartik",
    location: "Abu Dhabi",
    image: "/love stories/3.png",
    rotation: -2
  },
  {
    names: "Shriya x Vadhiraj",
    location: "Fujairah",
    image: "/love stories/4.png",
    rotation: 4
  }
];

const AnimatedLoop = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate the path drawing as we scroll through the section
  const pathLength = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  // Infinity loop path definition
  const d = "M20 40C20 10 70 10 120 40C170 70 220 70 220 40C220 10 170 10 120 40C70 70 20 70 20 40Z";

  return (
    <div ref={containerRef} className="love-loop-container">
      <svg width="240" height="80" viewBox="0 0 240 80" fill="none" className="love-loop-svg">
        <motion.path
          d={d}
          stroke="#8C8C8C"
          strokeWidth="1.5"
          strokeDasharray="10 14"
          style={{ pathLength }}
        />

        {/* Centered Heart at intersection */}
        <motion.path
          d="M120 44 C118 42, 115 42, 115 39 C115 36, 118 35, 120 37 C122 35, 125 36, 125 39 C125 42, 122 42, 120 44 Z"
          fill="#8C8C8C"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Moving Icon: Heart-Diamond Hybrid */}
        <motion.g
          style={{
            offsetPath: `path("${d}")`,
            offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"]),
            opacity: useTransform(pathLength, [0, 0.05], [0, 1])
          }}
        >
          {/* Heart Icon */}
          <path
            d="M0 4 C-2 2, -5 2, -5 -1 C-5 -4, -2 -5, 0 -3 C2 -5, 5 -4, 5 -1 C5 2, 2 2, 0 4 Z"
            fill="#8C8C8C"
          />
        </motion.g>
      </svg>
    </div>
  );
};

const LoveStories = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = () => setIsMobile(media.matches);

    updateIsMobile();
    media.addEventListener('change', updateIsMobile);
    return () => media.removeEventListener('change', updateIsMobile);
  }, []);

  return (
    <section className="love-stories-section" id="weddings">
      <div className="texture-overlay"></div>

      <div className="heading-container text-center">
        <div className="vertical-line-header"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="love-stories-title"
        >
          BAQAA LOVE STORIES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="love-stories-subtitle"
        >
          Celebrating timeless unions, beautiful traditions, and unforgettable moments.
        </motion.p>

        <div className="vertical-line-header"></div>

        <AnimatedLoop />
      </div>

      <div className="polaroid-wrapper">
        <div className="stories-grid-refined">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="polaroid-card-refined"
              style={{ rotate: isMobile ? '0deg' : `${story.rotation}deg` }}
            >
              <div className="masking-tape"></div>
              <div className="polaroid-img-box">
                <img src={story.image} alt={story.names} />
              </div>
              <div className="polaroid-text">
                <h3 className="couple-names">{story.names}</h3>
                <p className="couple-location">{story.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="view-more-container">
        <motion.a
          href="#work"
          className="btn-view-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          VIEW MORE
        </motion.a>
      </div>
    </section>
  );
};

export default LoveStories;
