import React from 'react';
import { motion } from 'framer-motion';
import './BaqaaUniverse.css';

const UniverseRow = ({ logo, label, title, description, ctaText, reverse, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`universe-row ${reverse ? 'row-reverse' : ''} row-${index}`}
    >
      <div className="universe-logo-col">
        <div className="universe-logo-wrapper">
          <div className="logo-gold-glow"></div>
          <img src={logo} alt={title} className="universe-logo-img" />
        </div>
      </div>

      <div className="universe-text-col">
        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="universe-text-content"
        >
          <div className="universe-label-wrapper">
            <span className="universe-decorative-line"></span>
            <span className="universe-small-label">{label}</span>
          </div>
          <h3 className="universe-row-title">{title}</h3>
          <p className="universe-row-desc">{description}</p>
          <button 
            className="universe-cta-btn"
            onClick={() => window.showComingSoon && window.showComingSoon()}
          >
            {ctaText}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const BaqaaUniverse = () => {
  return (
    <section className="baqaa-universe-section">
      {/* Subtle Background Elements */}
      <div className="universe-bg-elements">
        <div className="universe-sparkle s1"></div>
        <div className="universe-sparkle s2"></div>
        <div className="universe-sparkle s3"></div>
      </div>

      <div className="universe-header text-center">
        <div className="universe-vertical-line"></div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="universe-main-title"
        >
          THE BAQAA UNIVERSE
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          className="universe-header-divider"
        ></motion.div>
      </div>

      <div className="universe-rows-container">
        <UniverseRow
          logo="/universe/BAQAA1.png"
          label="Luxury Wedding Experiences"
          title="BAQAA Glamour Weddings"
          description="Crafting luxurious destination weddings and timeless celebrations through artistic storytelling, refined elegance, and unforgettable experiences designed around your unique love story."
          ctaText="Explore Weddings"
          reverse={false}
          index={0}
        />

        <div className="universe-row-separator"></div>

        <UniverseRow
          logo="/universe/BAQAA2.png"
          label="Premium Brand Storytelling"
          title="BAQAA Corporate Events"
          description="Creating refined corporate events and luxury business experiences that transform milestones, launches, and celebrations into unforgettable moments with elegance, impact, and sophistication."
          ctaText="Discover Corporate"
          reverse={true}
          index={1}
        />

        <div className="universe-row-separator"></div>

        <UniverseRow
          logo="/universe/BAQAA3.png"
          label="Luxury Curated Experiences"
          title="BAQAA Bāzār & Ṭabel"
          description="BAQAA Bazar curates luxurious floral artistry, bespoke tablescapes, and intimate celebrations, transforming everyday gatherings into soulful, elegant experiences crafted with warmth, creativity, timeless beauty, and emotion."
          ctaText="Enter The Bazar"
          reverse={false}
          index={2}
        />
      </div>
    </section>
  );
};

export default BaqaaUniverse;
