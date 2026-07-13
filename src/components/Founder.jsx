import React from 'react';
import { motion } from 'framer-motion';
import './Founder.css';

const Founder = () => {
  return (
    <section className="founder-section" id="about">
      <div className="founder-wrapper">

        {/* Left Side: Framed Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="founder-image-box"
        >
          <div className="founder-image-frame">
            <img
              src="/images/founder.png"
              alt="Rachna Chadha"
              className="founder-portrait"
            />
          </div>
        </motion.div>

        {/* Right Side: Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="founder-card-box"
        >
          <div className="founder-info-card">
            <div className="card-top-line"></div>

            <div className="card-content">
              <h2 className="founder-name-editorial">
                <span className="meet-label">MEET</span>
                <span className="name-first">RACHNA</span>
                <span className="name-last">CHADHA</span>
              </h2>
              <p className="founder-tagline">The Dream Weaver & Master Artisan Behind BAQAA</p>

              <div className="founder-biography">
                <p>
                  Rachna Chadha is a visionary wedding designer who transforms emotions,
                  heritage, and personal stories into timeless celebrations. Blending
                  artistry with precision, she crafts immersive experiences filled with
                  elegance, meaning, and unforgettable detail. Every BAQAA wedding
                  reflects her signature touch, deeply personal, beautifully executed,
                  and designed to become a lifelong memory.
                </p>
              </div>

            </div>
          </div>

          <div className="founder-card-footer">
            <a href="/about#founder" className="btn-read-more">READ MORE</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Founder;
