import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BazarTabel.css';

const ConnectInstagramIcon = () => (
  <svg className="bazar-connect-instagram-icon" viewBox="0 0 32 32" aria-hidden="true">
    <rect x="7" y="7" width="18" height="18" rx="5.2" />
    <circle cx="16" cy="16" r="4.7" />
    <circle cx="21.2" cy="10.9" r="1.1" />
  </svg>
);

const ConnectWhatsAppIcon = () => (
  <svg className="bazar-connect-whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16.04 3.2c-7.03 0-12.76 5.72-12.76 12.76 0 2.25.59 4.45 1.72 6.39L3.16 29l6.82-1.79a12.72 12.72 0 0 0 6.06 1.54h.01c7.03 0 12.76-5.72 12.76-12.76S23.08 3.2 16.04 3.2Z" />
    <path d="M21.88 18.63c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const bazarShowcaseImages = [
  { src: '/BAZAR/1.png', alt: 'BAQAA Bazar floral arrangement detail' },
  { src: '/BAZAR/2.png', alt: 'BAQAA Bazar tablescape styling detail' },
  { src: '/BAZAR/3.png', alt: 'BAQAA Bazar curated celebration detail' },
  { src: '/BAZAR/4.png', alt: 'BAQAA Bazar floral and tablescape showcase' },
  { src: '/BAZAR/5.png', alt: 'BAQAA Bazar intimate celebration styling' },
  { src: '/BAZAR/6.png', alt: 'BAQAA Bazar luxury table arrangement' },
  { src: '/BAZAR/7.png', alt: 'BAQAA Bazar curated floral design' },
  { src: '/BAZAR/8.png', alt: 'BAQAA Bazar elegant tablescape detail' }
];

const bazarHeroImages = [
  '/BAZAR%20HERO/1.JPG',
  '/BAZAR%20HERO/2.JPG',
  '/BAZAR%20HERO/3.JPG',
  '/BAZAR%20HERO/4.JPG',
  '/BAZAR%20HERO/5.JPG',
  '/BAZAR%20HERO/6.JPG',
  '/BAZAR%20HERO/7.jpg',
  '/BAZAR%20HERO/8.jpg',
  '/BAZAR%20HERO/9.jpg'
];

const bazarVideos = [
  {
    id: '1aJY8D0TLU4',
    title: 'BAQAA Bazar and Tabel video'
  },
  {
    id: 'fawP8RiRnCw',
    title: 'BAQAA Bazar and Tabel behind-the-scenes video'
  }
];

const bazarSlideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%'
  }),
  center: {
    x: 0
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%'
  })
};

const themes = [
  {
    id: 'summer-citrus',
    name: 'Summer Citrus',
    mood: 'Tangy . Cool . Bright',
    desc: 'Vibrant and refreshing arrangements bursting with the energy of summer sunshine.',
    img: '/BAQAA BAZAR/1.png',
    catalogueDesc: 'Inspired from the colors of summer fruits. These special floral arrangements & tablescapes exude a vibrant energy. Gift it or celebrate intimate occasions with your family at home.'
  },
  {
    id: 'country-summer',
    name: 'Country Summer',
    mood: 'Nature . Lush Green . Free-Spirited',
    desc: 'Wild, unstructured beauty that brings the meadow to your celebration.',
    img: '/BAQAA BAZAR/2.png',
    catalogueDesc: 'Inspired from the lush greenery & intoxicating wild foliage of a country home. These special floral arrangements & tablescapes are a blend of the free spirit of nature’s bounty. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'the-verandah',
    name: 'The Verandah',
    mood: 'Vintage . Outdoor . Fresh',
    desc: 'Nostalgic elegance with a mix of classic blooms and fresh greens.',
    img: '/BAQAA BAZAR/3.png',
    catalogueDesc: 'Inspired from the outdoor comfort of entertaining on one’s terrace or verandah. These colonial blue pottery vases with fresh flowers in colors that complement the theme exude happiness. These special floral arrangements and tablescapes represent the charm of vintage hospitality.'
  },
  {
    id: 'spring-soiree',
    name: 'Spring Soireé',
    mood: 'Cheery . Colourful . Bountiful',
    desc: 'A joyous celebration of seasonal abundance and pastel dreams.',
    img: '/BAQAA BAZAR/4.png',
    catalogueDesc: 'Inspired from the joy of spring colors which bloom every season. These special floral arrangements and tablescapes signify the feeling of rebirth of goodness of nature. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'lavender-lush',
    name: 'Lavender Lush',
    mood: 'Feminine . Strong . Sweet',
    desc: 'Romantic and fragrant, balancing delicate petals with bold silhouettes.',
    img: '/BAQAA BAZAR/5.png',
    catalogueDesc: 'Inspired from the femininity of a woman with many nuances of her love & strength. These special floral arrangements and tablescapes create that energy which makes every home and family complete. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'strawberry-romance',
    name: 'Strawberry Romance',
    mood: 'Memorable . Deep . Romantic',
    desc: 'Rich reds and soft pinks intermingling for a deeply romantic aesthetic.',
    img: '/BAQAA BAZAR/6.png',
    catalogueDesc: 'Inspired from the romance which makes every moment memorable. These special floral arrangements and tablescapes celebrate the bond of a relationship. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'blush-sage-dreams',
    name: 'Blush & Sage Dreams',
    mood: 'SOFT . SUBTLE . SERENE',
    desc: 'A muted, sophisticated palette that whispers of timeless elegance.',
    img: '/BAQAA BAZAR/7.png',
    catalogueDesc: 'Inspired from the thoughts which bring serenity and happiness. These special floral arrangements and tablescapes inspire us to dream. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'jewel-love',
    name: 'Jewel Love',
    mood: 'Deep . Mystical . Sparkling',
    desc: 'Opulent, saturated tones that create a dramatic, luxurious ambiance.',
    img: '/BAQAA BAZAR/8.png',
    catalogueDesc: 'Inspired from jewels which are everlasting. These special floral arrangements and tablescapes paint the mystique of these gems. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'boho-autumn',
    name: 'Boho Autumn',
    mood: 'Cosy . Breathy . Earthy',
    desc: 'Warm textures, dried elements, and earthy tones for a free-spirited feel.',
    img: '/BAQAA BAZAR/9.png',
    catalogueDesc: 'Inspired from the change which autumn brings as the year unfolds. These special floral arrangements and tablescapes bring forth the earth’s ability to change. Gift it or celebrate intimate occasions with your family in your beautiful home.'
  },
  {
    id: 'rustic-winter',
    name: 'Rustic Winter',
    mood: 'Rustic . Warm . Winter',
    desc: 'Textured winter warmth with rustic elegance and soulful seasonal details.',
    img: '/BAQAA BAZAR/11.png',
    catalogueDesc: 'Inspired from the quiet beauty of winter gatherings. These special floral arrangements and tablescapes bring warmth, texture, and rustic elegance to intimate celebrations at home.'
  }
];

const BazarTabel = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 1]);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(([previousSlide]) => [(previousSlide + 1) % bazarHeroImages.length, 1]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "+971554968810";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const nextSlide = () => {
    setSlide(([previousSlide]) => [(previousSlide + 1) % bazarHeroImages.length, 1]);
  };

  const prevSlide = () => {
    setSlide(([previousSlide]) => [previousSlide === 0 ? bazarHeroImages.length - 1 : previousSlide - 1, -1]);
  };

  const nextVideo = () => {
    setCurrentVideo((previousVideo) => (previousVideo + 1) % bazarVideos.length);
  };

  const previousVideo = () => {
    setCurrentVideo((previousVideo) => (previousVideo === 0 ? bazarVideos.length - 1 : previousVideo - 1));
  };

  return (
    <div className="bazar-page">
      {/* 1. HERO SECTION */}
      <section className="bazar-hero">
        <div className="bazar-hero-slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              className="bazar-hero-slide"
              custom={direction}
              variants={bazarSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            >
              <div
                className="bazar-hero-bg"
                style={{
                  backgroundImage: `url(${bazarHeroImages[currentSlide]})`,
                  '--bazar-hero-position': 'center 15%',
                  '--bazar-hero-laptop-size': '115% auto',
                  '--bazar-hero-laptop-shift-left': '0px',
                  '--bazar-hero-mobile-position': 'center center',
                  '--bazar-hero-mobile-size': 'cover'
                }}
              />
              <div className="bazar-hero-overlay"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bazar-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="hero-title bazar-hero-title"
          >
            BAQAA Bāzār & Tābel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="hero-description"
          >
            Born in 2020 from resilience, creativity, and heart, BAQAA Bāzār & Tābel curates soulful floral arrangements, intimate setups, and elegant tablescapes designed by Rachna Chadha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="hero-btns"
          >
            <a href="#themes" className="btn-hero">Explore Themes</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-hero">Order via WhatsApp</a>
          </motion.div>
        </div>

        <div className="bazar-hero-controls">
          <button onClick={prevSlide} className="bazar-control-btn" aria-label="Previous BAQAA Bazar hero image">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="bazar-control-btn" aria-label="Next BAQAA Bazar hero image">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* 2. BROCHURE INTRO SECTION */}
      <motion.section
        className="bazar-brochure-intro"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="brochure-shell">
          <img className="brochure-logo" src="/universe/BAQAA3.png" alt="BAQAA bāzār & tābel" />
          <p className="brochure-label">Floral Arrangements, Intimate Set Ups &amp; Tablescapes</p>
          <p className="brochure-tagline">
            A passionate &amp; community driven vertical of BAQAA Glamour Weddings &amp; Events
          </p>
        </div>
      </motion.section>

      {/* 3. BRAND STORY SECTION */}
      <section className="bazar-story section">
        <div className="story-ambient-line story-ambient-line-top"></div>
        <div className="story-ambient-line story-ambient-line-bottom"></div>
        <div className="bazar-story-container">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="story-content-frame">
              <img className="story-heading-image" src="/story.png" alt="Our Story" />
              <div className="story-text">
                <p>
                  Born in a moment when the world stood still in 2020, within the warmth of our founder’s home,
                  <br />
                  this is a story of resilience, creativity, and heart.
                  <br />
                  <span className="story-spaced-line">
                    A thoughtful vertical created to support florists and skilled artisans, it was built with a purpose,
                    <br />
                    to sustain livelihoods and uplift daily wage workers through challenging times.
                  </span>
                </p>
                <p>
                  Today, as the world once again navigates uncertainty, that purpose feels just as powerful, just as necessary.
                  <br />
                  <span className="story-spaced-line">
                    Each creation reflects artistry and emotion - curated, original themes brought to life through exquisite
                    <br />
                    floral arrangements and soulful tablescapes, envisioned and handcrafted by Rachna Chadha,
                    <br />
                    Founder, Designer & Dreamweaver of BAQAA Glamour Weddings & Events,
                    <br />
                    with over 35 years of pioneering legacy and an iconic portfolio.
                  </span>
                </p>
                <p>
                  A beautiful gift.
                  <br />
                  A thoughtful token.
                  <br />
                  <span className="story-spaced-line">
                    From intimate celebrations to elegant gatherings, BAQAA Bazar & Tabel transforms small moments into unforgettable experiences - where every detail whispers luxury, warmth, and meaning.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THEMES INDEX SECTION */}
      <motion.section
        className="bazar-themes-index"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="themes-index-inner">
          <img className="themes-index-crest themes-index-logo" src="/universe/BAQAA3.png?v=themes-logo" alt="BAQAA bāzār & tābel" />
          <h2>THEMES</h2>
          <nav className="themes-index-list" aria-label="BAQAA Bazar and Tabel themes">
            {themes.map((theme) => (
              <a key={theme.id} href={`#${theme.id}`}>
                {theme.name}
              </a>
            ))}
          </nav>
        </div>
      </motion.section>

      <section className="bazar-editorial-stack" aria-label="BAQAA Bazar showcase">
        <div className="bazar-editorial-inner">
          {bazarShowcaseImages.map((image, index) => (
            <motion.figure
              className="bazar-editorial-frame"
              key={image.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* 5. CATALOGUE SECTION */}
      <section id="themes" className="bazar-catalogue">
        <div className="catalogue-inner">
          <header className="catalogue-header">
            <img className="catalogue-emblem" src="/logo/BAQAA3.png" alt="BAQAA emblem" />
            <h2>BAQAA BĀZĀR & TĀBEL</h2>
            <p>FLORAL ARRANGEMENTS, INTIMATE SET UPS & TABLESCAPES</p>
            <div className="catalogue-title-divider" aria-hidden="true">
              <span></span>
              <i></i>
              <span></span>
            </div>
          </header>

          <div className="catalogue-grid catalogue-grid-images-only">
            {themes.map((theme, index) => (
              <motion.article
                id={theme.id}
                className="catalogue-card catalogue-card-image-only"
                key={theme.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.22), ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="catalogue-card-intro">
                  <div className="catalogue-image-wrap">
                    <img src={theme.img} alt={theme.name} loading="lazy" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="bazar-connect-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="bazar-connect-card">
          <header className="bazar-connect-header">
            <span></span>
            <h2>CONNECT WITH US TO GET A DETAILED CATALOGUE AND RATE CARD</h2>
            <span></span>
          </header>

          <div className="bazar-connect-whatsapp">
            <ConnectWhatsAppIcon />
            <a href={whatsappLink} target="_blank" rel="noreferrer">+971 554968810</a>
          </div>

          <div className="bazar-connect-divider"></div>

          <div className="bazar-connect-social">
            <ConnectInstagramIcon />
            <p>Discover our universe of curated artistry and celebration</p>
            <a href="https://instagram.com/baqaabazar" target="_blank" rel="noreferrer">@baqaabazar</a>
            <a href="https://instagram.com/baqaa_wedding_events" target="_blank" rel="noreferrer">@baqaa_wedding_events</a>
          </div>

          <div className="bazar-connect-divider"></div>

          <div className="bazar-connect-hours">
            <p>10AM - 7PM</p>
            <p>ORDER via WHATSAPP</p>
            <p>* MINIMUM 5 DAYS PRE-ORDER *</p>
            <p>* 5% VAT APPLICABLE ON ALL ORDERS *</p>
          </div>

          <div className="bazar-connect-notes">
            <strong>ABOVE PRICES ARE FOR DUBAI ONLY</strong>
            <strong>ADDITIONAL LABOUR AND TRANSPORT CHARGES ARE APPLICABLE FOR ANY OTHER EMIRATE WITHIN UAE</strong>
          </div>

          <p className="bazar-connect-legal">
            * ALL DESIGNS, IDEAS &amp; CONCEPTS ARE LEGAL INTELLECTUAL PROPERTY OF RACHNA CHADHA &amp; BAQAA. ANY COPYRIGHT INFRINGEMENT WILL BE SUBJECT TO LEGAL ACTION.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="bazar-video-section"
        aria-labelledby="bazar-video-title"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="bazar-video-inner">
          <header className="bazar-video-header">
            <h2 id="bazar-video-title">OUR STORY IN MOTION</h2>
            <p>Step into our universe of curated florals, intimate settings and artful tablescapes.</p>
          </header>

          <div className="bazar-video-frame">
            <iframe
              key={bazarVideos[currentVideo].id}
              src={`https://www.youtube-nocookie.com/embed/${bazarVideos[currentVideo].id}?rel=0`}
              title={bazarVideos[currentVideo].title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <button
              className="bazar-video-arrow bazar-video-arrow-left"
              type="button"
              onClick={previousVideo}
              aria-label="Show previous video"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              className="bazar-video-arrow bazar-video-arrow-right"
              type="button"
              onClick={nextVideo}
              aria-label="Show next video"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bazar-bts-section"
        aria-labelledby="bazar-bts-title"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="bazar-video-inner">
          <header className="bazar-video-header bazar-bts-header">
            <h2 id="bazar-bts-title">BTS</h2>
            <p>Behind the scenes of the details, hands and artistry that bring each setting to life.</p>
          </header>

          <div className="bazar-video-frame bazar-bts-video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-Oi4XQnvfx4?rel=0"
              title="BAQAA Bazar and Tabel BTS short video"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BazarTabel;
