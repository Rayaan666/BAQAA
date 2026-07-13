import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SignatureCelebrations.css';

const celebrations = [
  {
    id: '01',
    title: 'THE ROYAL COLLECTIVE SANGEET',
    image: '/works/work1.png'
  },
  {
    id: '02',
    title: 'LACED WITH LOVE',
    image: '/works/work2.png'
  },
  {
    id: '03',
    title: 'LOCAL ARAB HENNA SIGNATURE EVENT',
    image: '/works/work3.png'
  },
  {
    id: '04',
    title: 'BUTAHINA DI WEDDING LOCAL ARAB WEDDING SANGEET',
    image: '/works/work4.png'
  },
  {
    id: '05',
    title: 'KALYANAM BY THE INDIAN OCEAN',
    image: '/works/kalyanam.jpeg'
  }
];

const SignatureCelebrations = () => {
  const [activeImage, setActiveImage] = useState(celebrations[0].image);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="signature-section" id="work">
      <div className="top-header-area text-center">
        <div className="vertical-divider-work"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="work-heading"
        >
          OUR WORK
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="work-subtitle"
        >
          Every celebration we create is inspired by a unique story. Explore a glimpse into our world of timeless experiences.
        </motion.p>
      </div>

      <div className="signature-main-layout">
        <div className="project-navigation">
          {celebrations.map((item, index) => (
            <div
              key={item.id}
              className={`project-nav-item ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => {
                setActiveImage(item.image);
                setActiveIndex(index);
              }}
            >
              <span className="project-number">{item.id}</span>
              <h3 className="project-title">{item.title}</h3>
              {activeIndex === index && (
                <motion.div layoutId="underline" className="project-underline" />
              )}
            </div>
          ))}
        </div>

        <div className="feature-image-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="image-container-rect"
            >
              <img src={activeImage} alt="Project Preview" className="rect-image" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="footer-button-area text-center">
        <motion.a
          href="/portfolio"
          className="btn-more-albums"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          VIEW GALLERY
        </motion.a>
      </div>
    </section>
  );
};

export default SignatureCelebrations;
