import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = ({
  bgImage = "/CTA/CTA.png",
  title = "Where Luxury Weddings Become Timeless Memories",
  description = "From intimate ceremonies to grand destination weddings, BAQAA crafts timeless celebrations filled with elegance, emotion, and unforgettable artistry.",
  buttonText = "CONTACT US",
  buttonHref = "/contact"
}) => {
  const isExternalOrAnchor = buttonHref.startsWith('#') || buttonHref.startsWith('http');
  const MotionLink = motion(Link);

  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg-container">
        <img src={bgImage} alt="Collaborate with BAQAA" className="cta-bg-img" />
        <div className="cta-overlay-refined"></div>
      </div>

      <div className="cta-content-centered">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="cta-heading-huge"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="cta-subtitle-lines"
        >
          <p className="cta-italic-line">
            {description}
          </p>
        </motion.div>

        {isExternalOrAnchor ? (
          <motion.a
            href={buttonHref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="btn-cta-contact"
          >
            {buttonText}
          </motion.a>
        ) : (
          <MotionLink
            to={buttonHref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="btn-cta-contact"
          >
            {buttonText}
          </MotionLink>
        )}
      </div>
    </section>
  );
};

export default CTA;
