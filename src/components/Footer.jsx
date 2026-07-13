import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top-divider"></div>
      
      <div className="footer-main-grid">
        {/* Column 1: Get Around */}
        <div className="footer-col">
          <h4 className="footer-heading">GET AROUND</h4>
          <ul className="footer-links">
            <li><Link to="/#home">HOME</Link></li>
            <li><Link to="/about#story">ABOUT THE COMPANY</Link></li>
            <li><Link to="/about#founder">MEET THE FOUNDER</Link></li>
            <li><Link to="/#work">OUR WORK</Link></li>
          </ul>
        </div>

        {/* Column 2: Links */}
        <div className="footer-col">
          <h4 className="footer-heading">LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/about#founder">MEET THE FOUNDER</Link></li>
            <li><Link to="/#destinations">DESTINATIONS</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </div>

        {/* Column 3: Logo (Center) */}
        <div className="footer-col logo-col">
          <div className="footer-logo-box">
            <img src="/logo.png" alt="BAQAA Logo" className="footer-logo-img" />
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="footer-col">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="social-row">
            <a href="https://www.facebook.com/BAQAAWDC/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <div className="social-divider"></div>
            <a href="https://www.instagram.com/baqaa_wedding_events/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <div className="social-divider"></div>
            <a href="https://www.pinterest.com/baqaawdc/a-fun-high-energy-unique-white-party-by-baqaa/" target="_blank" rel="noopener noreferrer" className="social-link" title="Pinterest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.17-.1-.95-.19-2.4.04-3.44.2-.87 1.34-5.69 1.34-5.69s-.34-.69-.34-1.7c0-1.6 1.01-2.8 2.09-2.8.98 0 1.46.74 1.46 1.63 0 .99-.63 2.47-.96 3.84-.27 1.15.58 2.09 1.71 2.09 2.05 0 3.63-2.16 3.63-5.28 0-2.76-1.98-4.69-4.81-4.69-3.28 0-5.2 2.46-5.2 5 0 1 .38 2.07.86 2.64.09.11.11.21.08.31l-.32 1.32c-.05.21-.17.26-.39.16-1.44-.67-2.34-2.78-2.34-4.47 0-3.64 2.64-6.99 7.63-6.99 4.01 0 7.12 2.85 7.12 6.67 0 3.98-2.51 7.18-5.99 7.18-1.17 0-2.27-.61-2.65-1.33l-.72 2.74c-.26 1-1.04 2.25-1.54 3.07 1.13.34 2.33.53 3.58.53 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
            </a>
            <div className="social-divider"></div>
            <a href="https://www.youtube.com/@baqaaweddingevents" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.55 11.75l-5.8 3.27z"/></svg>
            </a>
            <div className="social-divider"></div>
            <a href="https://www.tiktok.com/@baqaa_wedding_events" target="_blank" rel="noopener noreferrer" className="social-link" title="TikTok">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
            </a>
          </div>
          <div className="contact-info-footer">
            <a href="mailto:rachna@baqaawdc.com" className="footer-email">rachna@baqaawdc.com</a>
            <p className="footer-legal">Terms & Condition | Privacy Policy</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-strip">
        <p className="copyright-text">
          BAQAA Glamour Weddings © 2026 — All photos and videos on this website belong to BAQAA Glamour Weddings unless stated otherwise.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
