import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Blog.css';

const blogHeroImages = [
  '/BLOGS%20HERO/1.JPG',
  '/BLOGS%20HERO/2.JPG',
  '/BLOGS%20HERO/3.JPG',
  '/BLOGS%20HERO/4.JPG',
  '/BLOGS%20HERO/5.JPG',
  '/BLOGS%20HERO/6.JPG',
  '/BLOGS%20HERO/7.JPG',
  '/BLOGS%20HERO/8.JPG'
];

const blogSlideVariants = {
  enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit: (direction) => ({ x: direction > 0 ? '-100%' : '100%' })
};

// Premium golden leaf emblem SVG
const LeafEmblem = () => (
  <div className="leaf-emblem-container">
    <svg className="leaf-emblem-svg" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 5 C55 12, 45 15, 30 15 H 10 M60 5 C65 12, 75 15, 90 15 H 110" stroke="var(--champagne-gold)" strokeWidth="0.75" strokeOpacity="0.5" />
      <path d="M60 2 C61.5 5, 63 9, 60 14 C57 9, 58.5 5, 60 2 Z" fill="var(--champagne-gold)" opacity="0.8" />
      <path d="M48 11 C51 11, 54 13, 55 16 C51 16, 49 14, 48 11 Z" fill="var(--champagne-gold)" opacity="0.6" />
      <path d="M72 11 C69 11, 66 13, 65 16 C69 16, 71 14, 72 11 Z" fill="var(--champagne-gold)" opacity="0.6" />
      <circle cx="60" cy="22" r="1.5" fill="var(--champagne-gold)" />
    </svg>
  </div>
);

const madeItPossibleStories = [
  {
    roman: 'V',
    issue: '05',
    dateLines: ['2012, Antalya, Turkey'],
    paragraphs: [
      'The entrance of the Kempinski Hotel was transformed by our founder and designer, Rachna Chadha, into a stunning venue for a seven-course seated dinner with matching wines, mega entertainment, and a novel couple entry.'
    ],
    watchTitle: 'SANA SULTAN WEDDING 2012',
    watchUrl: 'https://www.instagram.com/reels/CuqtMrbq7ey/'
  },
  {
    roman: 'VI',
    issue: '06',
    dateLines: ['2015, Waldorf Astoria,', 'Palm Jumeirah, Dubai'],
    paragraphs: [
      'A benchmark by BAQAA in 2015 — Laced with Love, a dreamy engagement celebration.',
      'One of the first mega Indian wedding engagements, for a couple from two leading families from Palm Jumeirah, Dubai, was touted by the hotel management as the best they had seen for the design, décor, and experience created.'
    ],
    watchTitle: 'A DREAMY ENGAGEMENT IN 2015',
    watchUrl: 'https://www.instagram.com/reels/CvUbxnyIvDi/'
  },
  {
    roman: 'VII',
    issue: '07',
    dateLines: ['2013, Al Saadiyat Island,', 'Abu Dhabi'],
    paragraphs: [
      'Another benchmark by BAQAA in 2013: the first mega destination wedding of Sukoon and Akshaye at The St. Regis Saadiyat Island, with a colourful Mehndi, a fun Sangeet, and a beautiful sunset wedding on the beach with turquoise-coloured water as the backdrop.',
      'Every event had the signature stamp of founder and designer Rachna Chadha.'
    ],
    watchTitle: "SUKOON & AKSHAYE'S MEGA WEDDING",
    watchUrl: 'https://www.instagram.com/reels/CtzSEgHK6g6/'
  },
  {
    roman: 'VIII',
    issue: '08',
    dateLines: ['2015 — First Big Fat Indian Destination', 'Wedding at Emirates Palace, Abu Dhabi'],
    paragraphs: [
      'BAQAA has always strived to set benchmarks. After establishing the business of big fat Indian weddings and destination weddings in the UAE at high-end hotels, the first Indian destination wedding at Emirates Palace was mobilized and planned by Rachna Chadha, the founder, CEO, and designer of the company, in December 2015.',
      "A grand, three-day wedding for 500 guests featured unique ideas for the welcome, décor, design, high-end technical production, entertainment, a curated food-and-beverage experience, and flawless orchestration. Keshav and Sakshi's wedding was created for a leading family from Jaipur, India."
    ],
    watchTitle: "KESHAV & SAKSHI'S WEDDING",
    watchUrl: 'https://www.instagram.com/reels/Cs_Vd3bI74B/'
  },
  {
    roman: 'IX',
    issue: '09',
    dateLines: ['2016 — Welcome Dinner & Mehendi,', 'Emirates Hills'],
    paragraphs: [
      'A week-long luxury wedding of Rumana and Kunal in Dubai by BAQAA.',
      'Another milestone and benchmark — BAQAA made it happen. Founder and designer Rachna Chadha completely transformed the Nazim residence in Emirates Hills into a full-blown movie set and theatre to seat 350 guests. The living room became a magical stage with lighting, ground fog, and audio-visuals on the walls.',
      'The show was conceptualized and choreographed by Rachna Chadha, inspired by the journey of Darbar-style dancing from Mughal-e-Azam, Pakeezah, and Umrao Jaan to the famous Mastani dance from Bajirao Mastani. This was the first big event to kick-start the week-long festivities for Rumana and Kunal.',
      'The Kunana Welcome Dinner featured live performances by performer and music composer Ratish Chadha with freestyle percussion, flowing into non-stop, mesmerizing performances by a talented troupe of 16 professional dancers from India. Dancing continued until the early hours as family and friends rocked the stage.',
      'The celebration continued with the Mehendi: bursts of flowers throughout the villa and garden, a mix of intimate and large-scale décor ideas, and every corner accessorized and designed to create a rainbow of colours and expressions for 250 guests.'
    ],
    watchTitle: 'GRAND WELCOME DINNER & MEHENDI',
    watchUrl: 'https://www.instagram.com/reels/CzGO24fpy_0/'
  }
];

const Blog = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dubai Luxury Wedding Planner & Destination Wedding Journal | BAQAA";
  }, []);

  useEffect(() => {
    if (blogHeroImages.length < 2) return undefined;

    const timer = setInterval(() => {
      setSlide(([previousSlide]) => [(previousSlide + 1) % blogHeroImages.length, 1]);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlide(([previousSlide]) => [(previousSlide + 1) % blogHeroImages.length, 1]);
  };

  const previousSlide = () => {
    setSlide(([previousSlide]) => [previousSlide === 0 ? blogHeroImages.length - 1 : previousSlide - 1, -1]);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.19, 1, 0.22, 1] } }
  };

  return (
    <div className="blog-page">

      {/* HERO SECTION */}
      <section className="blog-hero">
        <div className="blog-hero-slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              className="blog-hero-slide"
              custom={direction}
              variants={blogSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            >
              <div
                className="blog-hero-bg"
                style={{ backgroundImage: `url(${blogHeroImages[currentSlide]})` }}
              />
              <div className="blog-hero-overlay"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="blog-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="hero-title blog-hero-title"
          >
            <span>Dreamweaver & Storyteller</span>
            <span>Rachna Chadha</span>
            <span>From the Founder&apos;s Heart & Desk</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="hero-description"
          >
            Read inspiring blogs on destination weddings, luxury wedding planning, wedding décor, beach weddings in Dubai, and exclusive behind-the-scenes blogs by our Dreamweaver and Storyteller Rachna Chadha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="/about#founder" className="btn-hero">Discover Our Stories</a>
            <a href="/#destinations" className="btn-hero">Explore Our Work</a>
          </motion.div>
        </div>

        {blogHeroImages.length > 1 && (
          <div className="blog-hero-controls">
            <button onClick={previousSlide} className="blog-control-btn" aria-label="Previous blog hero image">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="blog-control-btn" aria-label="Next blog hero image">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </section>

      {/* Journal Folio (Book Spreads Layout) */}
      <section id="journal-folio" className="journal-folio-container">

        <div className="folio-header">
          <span className="folio-subtitle">BAQAA PUBLISHING</span>
          <h2 className="folio-main-title">THE WEDDING JOURNAL</h2>
          <div className="folio-header-divider"></div>
        </div>

        {/* SPREAD 1: Blog 1 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Decorative Corner Ornaments */}
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>

          {/* Spine Fold Shadow */}
          <div className="spread-gutter"></div>

          {/* Left Page: Cover & Introduction */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 01</span>
              <span>BAQAA ARCHIVES</span>
            </div>

            <span className="page-story-num">I</span>

            <h1 className="spread-story-title">A WEDDING DOCTOR ON CALL 24/7</h1>

            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                As the founder and designer of BAQAA with a journey of 35 years plus, my career began in the wonderful city of Dubai and kept growing with the exponential growth of this emirate. I am grateful to have stood tall and sturdy through all the challenging times of recessions and the pandemic. I tirelessly worked with dedication and passion to build my vast portfolio as seen on the website and our social media pages.
              </p>

              <p className="blog-paragraph">
                I work on a host of details for each project to deliver an exclusive and all immersive, memorable celebration / wedding for each client irrespective of budgets.
              </p>

              <p className="blog-paragraph">
                From the first meeting to identify their needs, followed by detailed discussions and coordination with the couple and sometimes their parents, the endeavour is to achieve a dream wedding / celebration for them.
              </p>

              <p className="blog-paragraph">
                I bring trust, expertise and years of strong portfolio to the table as a pioneer of the events and destination weddings industry in UAE with ground infrastructure at all the popular destinations of the world - India, Thailand, Europe, Turkey, Bali, Muscat, Doha & Baku.
              </p>

              <p className="blog-paragraph">
                I named my company BAQAA because its literal Sufi meaning is so apt for the company ethos I follow. BAQAA (Arabic: بقاء baqāʾ), with literal meaning of subsistence or permanency.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 01</span>
              </div>
            </div>
          </div>

          {/* Right Page: Checklist & Vision */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">THE EXECUTION MATRIX</h4>
              <p className="spread-section-subtitle">A glimpse of the details looked into while executing a signature wedding:</p>

              <ul className="spread-checklist">
                <li>Preparation of the budget</li>
                <li>Design and style of the event</li>
                <li>Scouting locations</li>
                <li>Photoshoots</li>
                <li>Planning a detailed checklist</li>
                <li>Identification and contracting of additional service providers</li>
                <li>Coordination of deliveries / services on the wedding day</li>
                <li>Have a back-up plan in the event of a disaster</li>
                <li>Help and prepare legal documentation and translations</li>
                <li>Event planning indicating the location of all important elements</li>
                <li>Event briefing for all the suppliers and the hotel or the venue</li>
                <li>Prepare a detailed customized presentation (sometimes up to 250 pages or more)</li>
                <li>Coordinating and executing the final days of the celebrations</li>
                <li>Always striving to give each couple their wedding its signature vision and experience.</li>
              </ul>
            </div>

            <div className="spread-philosophical-block">
              <blockquote className="spread-pull-quote">
                "I try to make BAQAA a safe, happy permanent abode for all our clients!"
              </blockquote>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 02</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 2: Blog 2 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          {/* Left Page: Essay */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 02</span>
              <span>VETERAN REFLECTIONS</span>
            </div>

            <span className="page-story-num">II</span>
            <h1 className="spread-story-title">LIFE AS A VETERAN WEDDING PLANNER</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                I am a veteran wedding planner & designer in the region. I personally don't believe in participating in the new age award events, as I believe the biggest stamp of appreciation is the testimonials of my clients.
              </p>
              <p className="blog-paragraph">
                I have worked with a creative vision to launch many firsts in most of the high-end prestigious world class hotels and wedding destinations. I have personally established the business of big fat destination weddings at these properties or destinations - in UAE since 2010, Turkey since 2012 & Portugal since 2017.
              </p>
              <p className="blog-paragraph">
                The goal of a memorable wedding is to provide an experience that makes guests feel special and celebrated with deep impressions of glamour, elegance and style!
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 03</span>
              </div>
            </div>
          </div>

          {/* Right Page: Learnings & Pillars */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">VETERAN LEARNINGS & STRENGTHS</h4>
              <p className="spread-section-subtitle">
                I have always strived to raise the bar, set milestones and leave memorable imprints. I feel extremely grateful that I can continue to do so. As a senior veteran, I am sharing some important aspects which have become my strengths and learnings over the years:
              </p>

              <ul className="scrollable-bullet-list">
                <li>Listen attentively to the client – couple/ parents / families</li>
                <li>Understand the style and personality of the couple</li>
                <li>Understand the emotions and expectations of the parents</li>
                <li>Create a harmonious balance between the families giving valuable inputs and advice at every step</li>
                <li>Stay mindful of the religious sanctity, sentiments and traditions</li>
                <li>Keep the cultural elements centric to the design and planning for some of the events</li>
                <li>Patience, availability, honest guidance and hard work with no shortcuts</li>
                <li>Give creative and unique ideas to add to the regular format of the weddings</li>
                <li>Ensure each wedding has its signature decor and design</li>
                <li>Try my best to ensure each wedding or celebration is noted for its decor and the experience</li>
                <li>Ensure my presence at every event</li>
                <li>Ensure my designs and details are followed by the execution team</li>
                <li>Ensure all the teams working on the project - hotel management, hotel staff, suppliers, artists, vendors, various teams are abreast with the requirements and details of all the events</li>
                <li>Guide the clients to hire very good, talented photography and videography company, as these are once in a lifetime captures</li>
                <li>Guide the clients on curated F&B experiences with every event</li>
              </ul>
            </div>

            <div className="spread-philosophical-block">
              <p className="blog-paragraph italic-highlight-box">
                "I work hours, weeks, days and months to create an experience extraordinary for every single client!"
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 04</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 3: Blog 3 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          {/* Left Page: Cover & Introduction */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 03</span>
              <span>DESTINATION DOSSIER</span>
            </div>

            <span className="page-story-num">III</span>
            <h1 className="spread-story-title">DUBAI<br />A PREMIUM DESTINATION FOR WEDDINGS</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph font-serif-paragraph">
                Located on the Arabian Peninsula, the UAE is made up of seven Sheikhdoms (Emirates), with Dubai being the flagship and leading the way in hosting a large number of destination weddings in this glamourous city.
              </p>

              <p className="blog-paragraph">
                Beside the number of world known attractions, exciting range of shopping and luxurious hotels, Dubai is conveniently located between Europe, Africa and Asia, making it easily accessible from around the world. This vibrant city offers perfect weather from November to March.
              </p>

              <p className="blog-paragraph">
                If you've fallen in love with Dubai and have decided to get married under the charming Arabian sky, your options for having a wedding in this emirate are limitless. The different landscapes which are offered by various hotels make the destination wedding in Dubai an unforgettable experience.
              </p>

              <p className="blog-paragraph">
                Every hotel and location has its own charm. BAQAA's destination weddings in Dubai are part of the marketing brochure of many hotel brands. BAQAA has maintained new designs, new ideas and flawless execution for all the destination weddings in Dubai.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 05</span>
              </div>
            </div>
          </div>

          {/* Right Page: Advantages Checklist */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">
                DESTINATION WEDDINGS IN DUBAI HAVE THE FOLLOWING ADVANTAGES:
              </h4>

              <ul className="spread-checklist">
                <li>Unique, luxury weddings are created here</li>
                <li>Sunny and comfortable weather between November to March</li>
                <li>Excellent service standards</li>
                <li>Melting pot of many cultures and nationalities</li>
                <li>Cuisines of the world easily available</li>
                <li>Easy access to everything required for a destination Wedding in Dubai of any cultural or religious background</li>
                <li>Great infrastructure</li>
                <li>High safety standards</li>
                <li>High hygiene standards</li>
                <li>World class entertainment options</li>
                <li>Regional cuisines are easily available</li>
                <li>Dubai allows weddings of any religion</li>
                <li>Best globally recognized hotel brands</li>
              </ul>
            </div>

            <div className="spread-philosophical-block">
              <blockquote className="spread-pull-quote">
                "We transform emotions, heritage, and personal stories into timeless celebrations."
              </blockquote>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <span className="page-number-footer">PAGE 06</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREAD 4: Blog 4 */}
        <motion.article
          className="book-spread"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="folio-corner top-left"></div>
          <div className="folio-corner top-right"></div>
          <div className="folio-corner bottom-left"></div>
          <div className="folio-corner bottom-right"></div>
          <div className="spread-gutter"></div>

          {/* Left Page: Intro & Story */}
          <div className="spread-page page-left">
            <div className="page-header-stamp">
              <span>VOL. I • NO. 04</span>
              <span>COASTAL CELEBRATIONS</span>
            </div>

            <span className="page-story-num">IV</span>
            <h1 className="spread-story-title">HOSTING A BEACH WEDDING IN DUBAI</h1>
            <p className="blog-author-signature">By Rachna Chadha</p>

            <div className="page-intro-text">
              <p className="blog-paragraph">
                A Beach wedding in Dubai has its own charm and magic! Dubai has now, more than ever, become a top destination for weddings and honeymoons as many couples fly from around the world to celebrate their wedding in Dubai.
              </p>

              <p className="blog-paragraph">
                For those living in the city and planning a wedding in this spectacular emirate, beach wedding is an available option for good 6 months of the year. They are some of the most beautiful wedding venues in the Middle East and in the entire world.
              </p>

              <p className="blog-paragraph">
                The beach wedding venues in Dubai are unparalleled in the beauty they add to any wedding experience.
              </p>

              <p className="blog-paragraph">
                Beach wedding venues are among the most popular choices for wedding venues. Dubai has beautiful beaches with stunning backdrops, which are an inspiration for the pioneering designer Rachna Chadha, the founder of BAQAA. For all the dream weddings created by her!
              </p>

              <p className="blog-paragraph">
                The first few beach weddings in Dubai for destination celebrations were conceptualised by the designer and founder Rachna Chadha in UAE.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row">
                <span className="page-number-footer">PAGE 07</span>
              </div>
            </div>
          </div>

          {/* Right Page: Checklist & Highlight */}
          <div className="spread-page page-right">
            <div className="checklist-spread-container">
              <h4 className="spread-section-title">BEACH WEDDING BLUEPRINTS</h4>
              <p className="spread-section-subtitle">Crucial elements to consider for absolute success:</p>

              <ul className="numbered-checklist">
                <li>
                  <span className="number-index">I</span>
                  <p>The beach venue should have good accessibility for setting up the decor, F&B, executing the wedding ceremony rituals etc.</p>
                </li>
                <li>
                  <span className="number-index">II</span>
                  <p>The sound set up and music should not be overpowered by the sound of waves.</p>
                </li>
                <li>
                  <span className="number-index">III</span>
                  <p>Make your decor windproof.</p>
                </li>
                <li>
                  <span className="number-index">IV</span>
                  <p>Make sure there's some shade if it's a day ceremony.</p>
                </li>
                <li>
                  <span className="number-index">V</span>
                  <p>Select the appropriate attire as per the ceremony theme and rituals.</p>
                </li>
                <li>
                  <span className="number-index">VI</span>
                  <p>Ensure the food set up is protected from the sun and the sand.</p>
                </li>
                <li>
                  <span className="number-index">VII</span>
                  <p>Arrange comfortable and safe seating.</p>
                </li>
                <li>
                  <span className="number-index">VIII</span>
                  <p>Accentuate the natural beauty of the venue.</p>
                </li>
                <li>
                  <span className="number-index">IX</span>
                  <p>Keep spray for bug bites and keep a first aid kit on site.</p>
                </li>
                <li>
                  <span className="number-index">X</span>
                  <p>Keep a plan B ready in case of strong winds or rain.</p>
                </li>
                <li>
                  <span className="number-index">XI</span>
                  <p>Plan a sunset wedding on the beach as it's the most magical experience.</p>
                </li>
              </ul>
            </div>

            {/* Case Study Block */}
            <div className="case-study-folio-box">
              <h5 className="case-study-title">TANYA & SAGAR'S BEACH WEDDING</h5>
              <p className="blog-paragraph size-small">
                It takes a lot of hard work of weeks and months to plan and execute perfect beach weddings. BAQAA ensures the process is stress free for the client and goes that extra mile to add ideas to enhance the decor and elevate the experience.
              </p>
            </div>

            <div className="spread-page-footer">
              <div className="footer-links-row single-link">
                <a href="https://www.baqaawdc.com" target="_blank" rel="noopener noreferrer" className="spread-action-link">WWW.BAQAAWDC.COM</a>
                <a href="https://pin.it/5MWJJ34WG" target="_blank" rel="noopener noreferrer" className="spread-action-link">PINTEREST</a>
                <span className="page-number-footer">PAGE 08</span>
              </div>
            </div>
          </div>
        </motion.article>

        <LeafEmblem />

        {/* SPREADS 5–9: BAQAA Made It Possible */}
        {madeItPossibleStories.map((story, index) => {
          const leftPage = 9 + (index * 2);
          const rightPage = leftPage + 1;

          return (
            <motion.article
              key={story.issue}
              className="book-spread made-it-possible-spread"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="folio-corner top-left"></div>
              <div className="folio-corner top-right"></div>
              <div className="folio-corner bottom-left"></div>
              <div className="folio-corner bottom-right"></div>
              <div className="spread-gutter"></div>

              <div className="spread-page page-left made-it-possible-cover">
                <div className="page-header-stamp">
                  <span>VOL. I • NO. {story.issue}</span>
                  <span>BAQAA MILESTONES</span>
                </div>

                <span className="page-story-num">{story.roman}</span>
                <h1 className="spread-story-title large-headline">BAQAA MADE IT POSSIBLE</h1>
                <div className="made-it-possible-divider"></div>
                <h2 className="made-it-possible-location">
                  {story.dateLines.map((line) => <span key={line}>{line}</span>)}
                </h2>
                <p className="blog-author-signature">By Rachna Chadha</p>

                <div className="spread-page-footer">
                  <div className="footer-links-row">
                    <span className="page-number-footer">PAGE {leftPage}</span>
                  </div>
                </div>
              </div>

              <div className="spread-page page-right made-it-possible-story">
                <div className="page-intro-text">
                  {story.paragraphs.map((paragraph, paragraphIndex) => (
                    <p className="blog-paragraph" key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                <div className="made-it-possible-watch">
                  <span>WATCH HERE</span>
                  <a
                    href={story.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spread-action-link"
                  >
                    {story.watchTitle}
                  </a>
                </div>

                <div className="spread-page-footer">
                  <div className="footer-links-row single-link">
                    <span className="page-number-footer">PAGE {rightPage}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}

      </section>
    </div>
  );
};

export default Blog;
