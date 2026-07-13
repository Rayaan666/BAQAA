import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import './About.css';

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHeroVideoLoaded, setIsHeroVideoLoaded] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    setIsMobile(media.matches);
    const listener = (e) => setIsMobile(e.matches);
    media.addEventListener('change', listener);

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo(0, 0);
    }

    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <div className="about-page">
      <div className="texture-overlay"></div>
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <iframe 
            src="https://player.vimeo.com/video/191335609?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&playsinline=1&controls=0&background=1"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            loading="eager"
            className={`hero-video-iframe ${isHeroVideoLoaded ? 'is-loaded' : ''}`}
            onLoad={() => setIsHeroVideoLoaded(true)}
            title="BAQAA About Hero Video"
          ></iframe>
          <div className="about-hero-overlay"></div>
        </div>
        
        <div className="about-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hero-title"
          >
            BAQAA | Timeless Luxury Weddings, <br/> Events & Immersive Destination Experiences
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hero-description"
          >
            From Dubai to global destinations, BAQAA curates luxury weddings, events <br/> and bespoke celebrations through visionary design, floral artistry, and seamless execution.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="/about#founder" className="btn-hero">Discover Our Story</a>
            <a href="/#work" className="btn-hero">Explore Our Work</a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT BAQAA (REDESIGN) */}
      <section id="story" className="section about-baqaa-redesign">

        <div className="editorial-container">
          <motion.div className="editorial-left" {...fadeIn}>
            <div className="arched-frame">
              <div className="frame-outline"></div>
              <img src="/ata and aman 2.jpg" alt="Luxury wedding celebration by BAQAA" />
            </div>
          </motion.div>
          
          <motion.div className="editorial-right" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="editorial-content-wrapper">
              <div className="ornamental-divider">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                  <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                  <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                </svg>
              </div>
              
              <h2 className="editorial-heading">ABOUT BAQAA</h2>
              
              <div className="ornamental-divider">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                  <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                  <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Mobile-only image representation below title */}
              <div className="arched-frame mobile-only-image">
                <div className="frame-outline"></div>
                <img src="/ata and aman 2.jpg" alt="Luxury wedding celebration by BAQAA" />
              </div>
              
              <div className="editorial-body">
                <p className="highlight">Thirty-eight years of vision, leadership, and an unwavering commitment to destination excellence.</p>
                <p>
                  Established as a premier luxury wedding and events house, BAQAA orchestrates seamless, turnkey journeys that transcend borders. 
                  Our expertise lies in the delicate balance of artistry and scale, built on a storied heritage of trust and precision.
                </p>
                <p>
                  We do not merely plan events; we curate emotionally immersive experiences, transforming your most cherished dreams into a legacy 
                  of timeless celebrations and enduring memories.
                </p>
              </div>
              
              <div className="ornamental-divider">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                  <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                  <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                </svg>
              </div>
              
              <p className="tagline-editorial">TIMELESS CELEBRATIONS. ENDURING MEMORIES.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — FOUNDER (EDITORIAL COLLAGE) */}
      <section className="section founder-editorial" id="founder">
        <div className="founder-container">
          <div className="founder-visual-col">
            <div className="editorial-collage">

              {/* 4. Arch Portrait */}
              <div className="portrait-arch-wrapper">
                <img src="/images/founder.png" alt="Rachna Chadha" />
                <div className="portrait-gold-outline"></div>
              </div>
              

            </div>
          </div>
          
          <div className="founder-content-col">
            <motion.div className="content-wrapper" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="founder-vertical-line"></div>
              <span className="founder-label-text">THE FOUNDER</span>
              <div className="founder-horizontal-divider"></div>
              
              <h2 className="founder-name">Rachna Chadha</h2>
              <h3 className="founder-subtitle-editorial">THE DREAM WEAVER BEHIND BAQAA</h3>
              
              <div className="editorial-divider-thin"></div>
              
              <div className="editorial-narrative">
                <p>
                  Rachna Chadha is a visionary storyteller who transforms emotions, heritage, and dreams into celebrations that are immersive, meaningful, and timeless.
                </p>
                <p>
                  Rooted in intention and artistry, her creative philosophy transforms every detail into part of a larger narrative — one that reflects the essence of each couple’s unique journey.
                </p>
                <p>
                  From grand destination weddings to intimate luxury experiences, she personally shapes every celebration with precision, warmth, creativity, and soul.
                </p>
                <p>
                  For over three decades, her signature approach has blended artistic imagination with flawless execution, creating unforgettable celebrations recognized for elegance, authenticity, and emotional resonance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BEHIND THE SCENES VIDEO */}
        <div className="founder-bts-section">
          <motion.div className="bts-header text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="founder-vertical-line center-line"></div>
            <h3 className="bts-title">BEHIND THE SCENES</h3>
            <p className="bts-subtitle">The artistry and precision in motion</p>
            <div className="ornamental-divider-header bts-divider">
              <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="45" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                <path d="M48 5 L50 3 L52 5 L50 7 Z" fill="var(--champagne-gold)" />
                <line x1="55" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>
          
          <motion.div className="bts-video-container" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="bts-video-wrapper">
              <div className="bts-video-frame"></div>
              {/* Replace the src below with your actual BTS video link */}
              <iframe 
                src="https://www.youtube.com/embed/CPO15woVWkE?autoplay=1&mute=1&loop=1&playlist=CPO15woVWkE&controls=1&playsinline=1&cc_load_policy=0&iv_load_policy=3"
                frameBorder="0" 
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
                className="bts-iframe"
                title="Behind The Scenes"
              ></iframe>
            </div>
          </motion.div>
        </div>

      </section>

      {/* SECTION 4 — MILESTONES / LEGACY TIMELINE (IDENTICAL REPLICATION) */}
      <section className="section about-milestones-legacy">

        
        <motion.div className="section-header-editorial text-center" {...fadeIn}>
          <div className="vertical-divider-work"></div>
          <h2 className="work-heading">MILESTONES</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="work-subtitle"
          >
            A journey of three decades, defined by vision, leadership, and an unwavering commitment to creating extraordinary experiences.
          </motion.p>
        </motion.div>
        
        <div className="legacy-timeline-viewport">
          {/* THE GOLDEN THREAD (SVG PATH) - CONNECTING CARDS */}
          <svg className="timeline-svg-path-exact" viewBox="0 0 1200 800" fill="none">
            {/* SINGLE CONTINUOUS GOLD THREAD — TOP 4 CARDS (AS PERFECTED) */}
            <motion.path
              d="M150,220 C270,220 330,180 450,220 C570,260 630,180 750,220 C870,260 930,220 1050,220"
              stroke="var(--champagne-gold)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            
            {/* CONNECTION BETWEEN ROWS */}
            <motion.path 
              d="M1050,220 C1250,220 1250,410 600,410 C0,410 0,600 150,600"
              stroke="var(--champagne-gold)"
              strokeWidth="1.2"
              strokeDasharray="2 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 2 }}
            />

            {/* BOTTOM ROW CONNECTORS */}
            <motion.path
              d="M150,600 L450,600 L750,600 L1050,600"
              stroke="var(--champagne-gold)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
            />

            {/* Connection Nodes — Top Row (As Perfected) */}
            {[150, 450, 750, 1050].map((x, i) => (
              <motion.circle
                key={`node-t-${i}`}
                cx={x}
                cy={220}
                r="4"
                fill="var(--champagne-gold)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.6 + 0.5 }}
              />
            ))}

            {/* Connection Nodes — Bottom Row */}
            {[150, 450, 750, 1050].map((x, i) => (
              <motion.circle
                key={`node-b-${i}`}
                cx={x}
                cy={600}
                r="4"
                fill="var(--champagne-gold)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 4 + i * 0.6 }}
              />
            ))}
          </svg>

          <div className="timeline-grid-exact">
            {/* TOP ROW */}
            <motion.div className="milestone-item-exact pos-1" {...fadeIn}>
              <div className="stationery-card card-circle">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">1992</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Launch of Bollywood <br/> events & musical <br/> concerts</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-2" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="stationery-card card-ornate-big">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">1995 to 2009</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">
                    Launch of luxury properties, <br/> global brands & couture houses, <br/> bespoke events for HNW <br/> clients and banks
                  </p>

                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-3" {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="stationery-card card-arch">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">1996</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Leadership of award <br/> winning Dubai Shopping <br/> Festival events</p>

                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-4" {...fadeIn} transition={{ delay: 0.6 }}>
              <div className="stationery-card card-ribbon">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">2010</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Indian destination <br/> weddings launched <br/> in the UAE</p>
                </div>
                <div className="ribbon-bottom-notch"></div>
              </div>
            </motion.div>

            {/* BOTTOM ROW */}
            <motion.div className="milestone-item-exact pos-5" {...fadeIn} transition={{ delay: 0.8 }}>
              <div className="stationery-card card-circle badge-mode">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">2010-2016</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc font-bold">Strategic <br/> Hotel Partnerships</p>
                  <div className="card-bottom-deco">✦</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-6" {...fadeIn} transition={{ delay: 1.0 }}>
              <div className="stationery-card card-circle lotus-mode">
                <div className="stationery-inner">
                  <h3 className="year-burgundy">2010-2016</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Transforming destination <br/> weddings from an idea <br/> into an industry</p>
                  <div className="card-bottom-deco">
                    <div className="mini-divider-dots"><span>•</span><span>•</span><span>•</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-7" {...fadeIn} transition={{ delay: 1.2 }}>
              <div className="stationery-card card-circle">
                <div className="stationery-inner">
                  <h3 className="year-burgundy">2012</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Expansion <br/> into Turkey</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="milestone-item-exact pos-8" {...fadeIn} transition={{ delay: 1.4 }}>
              <div className="stationery-card card-arch">
                <div className="stationery-inner">

                  <h3 className="year-burgundy">2017</h3>
                  <div className="year-ornament">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <line x1="0" y1="5" x2="40" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                      <path d="M45 5 L50 0 L55 5 L50 10 Z" fill="var(--champagne-gold)" />
                      <line x1="60" y1="5" x2="100" y2="5" stroke="var(--champagne-gold)" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="legacy-desc">Expansion into <br/> Middle East, Europe <br/> and South East Asia</p>

                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Center Ornament */}
          <div className="timeline-bottom-ornament">
             <img src="/florals/underline.png" alt="" className="bottom-underline-img" />
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR STRENGTHS (EXACT REPLICATION) */}
      <section className="about-strengths-identical relative">
        {/* Large Botanical Background Sketch (Left Edge) */}
        <div className="botanical-sketch-side">
          {/* Botanical sketch removed */}
        </div>

        <div className="section-container-luxury">
          {/* TOP HEADER */}
          <motion.div 
            className="strengths-header-lux" 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="vertical-divider-work"></div>
             <h2 className="work-heading">OUR STRENGTHS</h2>
             <div className="header-bottom-ornament">
                <svg viewBox="0 0 100 20" className="mini-ornament-svg">
                   <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" />
                   <path d="M48 10 L50 7 L52 10 L50 13 Z" fill="var(--champagne-gold)" />
                </svg>
             </div>
             <p className="subtitle-strengths-lux">EXPERTISE. PRECISION. PERFECTION.</p>
             <div className="divider-thin-lux"></div>
          </motion.div>

          <div className="strengths-main-grid">
            {/* LEFT: TALL LUXURY ARCHED PANEL */}
            <div className="arch-panel-container">
              <div className="luxury-arch-card">
                <div className="arch-card-inner">
                  {/* Top Monogram Area */}
                    <div className="arch-top-monogram">
                      <div className="monogram-lotus">
                        <svg viewBox="0 0 24 24" fill="var(--champagne-gold)">
                           <path d="M12 21c-2-2.5-5-4-5-7 0-4.5 5-9 5-9s5 4.5 5 9c0 3-3 4.5-5 7z" opacity="0.3"/>
                           <path d="M12 21c-1.5-2-3.5-3.5-3.5-6 0-3.5 3.5-7 3.5-7s3.5 3.5 3.5 7c0 2.5-2 4-3.5 6z" />
                        </svg>
                      </div>
                      <div className="monogram-box">
                        <img src="/logo/BAQAA3.png" alt="BAQAA Logo" className="monogram-logo-img" />
                      </div>
                      <div className="monogram-lotus">
                        <svg viewBox="0 0 24 24" fill="var(--champagne-gold)">
                           <path d="M12 21c-2-2.5-5-4-5-7 0-4.5 5-9 5-9s5 4.5 5 9c0 3-3 4.5-5 7z" opacity="0.3"/>
                           <path d="M12 21c-1.5-2-3.5-3.5-3.5-6 0-3.5 3.5-7 3.5-7s3.5 3.5 3.5 7c0 2.5-2 4-3.5 6z" />
                        </svg>
                      </div>
                    </div>

                  <div className="arch-content-lux">
                    <p className="arch-p-top">
                      BAQAA, with <span className="burgundy-accent">38 years</span> of industry expertise, delivers complete turnkey solutions, seamlessly managing every element from macro vision to micro detailing.
                    </p>
                    
                    <div className="arch-divider-lotus">
                      <svg viewBox="0 0 24 24" fill="var(--champagne-gold)">
                         <path d="M12 21c-2-2.5-5-4-5-7 0-4.5 5-9 5-9s5 4.5 5 9c0 3-3 4.5-5 7z" opacity="0.3"/>
                         <path d="M12 21c-1.5-2-3.5-3.5-3.5-6 0-3.5 3.5-7 3.5-7s3.5 3.5 3.5 7c0 2.5-2 4-3.5 6z" />
                      </svg>
                    </div>

                    <p className="arch-p-bottom">
                      Our scope spans concept design and décor, hospitality, entertainment, event orchestration, F&B curation, and end-to-end execution.
                    </p>
                    
                    <div className="arch-bottom-ornament">
                       <div className="diamond-line">
                          <div className="line"></div>
                          <div className="diamond-mini"></div>
                          <div className="line"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: ELEGANT STAGGERED STRENGTHS GRID */}
            <motion.div 
              className="strengths-elegant-grid"
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              whileInView={isMobile ? { opacity: 1 } : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {[
                { num: "01", title: "CONCEPT DESIGN", desc: "Visionary ideas crafted to perfection, setting the stage for unforgettable memories." },
                { num: "02", title: "DÉCOR DESIGN", desc: "Exquisite aesthetics with attention to the finest details, transforming spaces." },
                { num: "03", title: "HOSPITALITY", desc: "Seamless and luxurious guest experiences tailored to royal standards." },
                { num: "04", title: "F&B CURATION", desc: "Culinary masterpieces that elevate the senses and indulge the palate." },
                { num: "05", title: "ENTERTAINMENT", desc: "Captivating performances and experiences that bring celebrations to life." },
                { num: "06", title: "ORCHESTRATION", desc: "Flawless execution of every element, ensuring a majestic flow of events." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`strength-card-lux ${index % 2 !== 0 ? 'offset-card' : ''}`}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                >
                  <div className="strength-card-inner">
                    <div className="strength-card-header">
                      <span className="strength-num">{item.num}</span>
                      <div className="strength-card-line"></div>
                    </div>
                    <h3 className="strength-title">{item.title}</h3>
                    <p className="strength-desc">{item.desc}</p>
                  </div>
                  {/* Subtle corner accents */}
                  <div className="corner-tl"></div>
                  <div className="corner-br"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DESIGN & FLORALS */}
      <section className="section design-florals-section">
        <div className="editorial-container">
          <motion.div className="design-florals-left" {...fadeIn}>
             <div className="design-florals-header-area">
                <div className="vertical-divider-work"></div>
                <h2 className="design-florals-heading">
                   <span className="charcoal-text">Crafting Stories</span><br/>
                   <span className="charcoal-text">Through Design <br/>& Florals</span>
                </h2>
             </div>

             <div className="florals-narrative-list">
                {/* Row 1 */}
                <div className="narrative-item">
                   <div className="narrative-icon-card">
                      <img src="/handshake/1.png" alt="Floral Design" className="narrative-icon-img" />
                   </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Floral design, under our founder’s vision, is never decorative - it is narrative-driven</p>
                   </div>
                </div>

                <div className="row-divider-ornamental">
                   <div className="orn-line"></div>
                   <div className="orn-diamond-mini"></div>
                   <div className="orn-line"></div>
                </div>

                {/* Row 2 */}
                <div className="narrative-item">
                    <div className="narrative-icon-card">
                       <img src="/handshake/2.png" alt="Floral Design" className="narrative-icon-img" />
                    </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Each floral composition has a story, a flow and a purpose of experience</p>
                   </div>
                </div>

                <div className="row-divider-ornamental">
                   <div className="orn-line"></div>
                   <div className="orn-diamond-mini"></div>
                   <div className="orn-line"></div>
                </div>

                {/* Row 3 */}
                <div className="narrative-item">
                   <div className="narrative-icon-card">
                      <img src="/handshake/3.png" alt="Floral Design" className="narrative-icon-img" />
                   </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Colors evolve through the wedding journey, textures change with time of day, and spatial movement is carefully orchestrated</p>
                   </div>
                </div>

                <div className="row-divider-ornamental">
                   <div className="orn-line"></div>
                   <div className="orn-diamond-mini"></div>
                   <div className="orn-line"></div>
                </div>

                {/* Row 4 */}
                <div className="narrative-item">
                   <div className="narrative-icon-card">
                      <img src="/handshake/4.png" alt="Floral Design" className="narrative-icon-img" />
                   </div>
                   <div className="narrative-connector">
                      <div className="conn-line"></div>
                      <div className="conn-diamond"></div>
                   </div>
                   <div className="narrative-text">
                      <p>Her florals are designed to guide emotion, not merely fill space</p>
                   </div>
                </div>
             </div>
          </motion.div>
          
          <motion.div className="design-florals-right" {...fadeIn} transition={{ delay: 0.3 }}>
             <div className="floral-image-frame-lux">
                <img src="/florals/floral4.png" alt="Exquisite Floral Design" className="floral-main-img" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL SECTION — CTA (SHARED WITH HOMEPAGE) */}
      <CTA 
        bgImage="/CTA/CTA2.png" 
        title="Plan Your Luxury Destination Wedding With BAQAA"
        description="Connect with BAQAA to design luxury destination weddings, bespoke celebrations, floral experiences, and unforgettable event journeys crafted with timeless elegance and precision."
      />
    </div>
  );
};

export default About;
