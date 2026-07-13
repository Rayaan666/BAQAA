import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import './BrandMilestones.css';

const StatItem = ({ label, number, index }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, parseInt(number), {
        duration: 3.5,
        delay: index * 0.5,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [isInView, number, index, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: index * 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="legacy-stat-block"
    >
      <div className="legacy-number-wrapper">
        <motion.span className="legacy-number">
          <motion.span>{rounded}</motion.span>
          <span className="plus-sign">+</span>
        </motion.span>
      </div>
      <div className="legacy-label-wrapper">
        <div className="year-ornament">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none">
            <line x1="0" y1="5" x2="40" y2="5" stroke="#C0C0C0" strokeWidth="1" />
            <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="#C0C0C0" />
            <line x1="60" y1="5" x2="100" y2="5" stroke="#C0C0C0" strokeWidth="1" />
          </svg>
        </div>
        <span className="legacy-label">
          {label.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}{i < label.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      </div>
    </motion.div>
  );
};

const BrandMilestones = () => {
  return (
    <section className="brand-milestones-v2">
      <div className="milestones-bg-accents">
        <div className="accent-circle top-left"></div>
        <div className="accent-circle bottom-right"></div>
      </div>

      <div className="milestones-frame">
        <div className="frame-corner tl"></div>
        <div className="frame-corner tr"></div>
        <div className="frame-corner bl"></div>
        <div className="frame-corner br"></div>

        <div className="milestones-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="milestones-top-info"
          >
            <div className="vertical-divider-milestones"></div>
            <span className="milestone-pre-title">OUR JOURNEY</span>
            <h2 className="milestone-main-title">A Legacy of Excellence</h2>
          </motion.div>

          <div className="stats-showcase">
            <StatItem
              index={0}
              label="YEARS IN THE GLOBAL EVENTS INDUSTRY"
              number="38"
            />

            <div className="stats-vertical-separator">
              <div className="separator-line"></div>
              <div className="separator-diamond"></div>
              <div className="separator-line"></div>
            </div>

            <StatItem
              index={1}
              label="YEARS LEADING LUXURY DESTINATION WEDDINGS"
              number="16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMilestones;
