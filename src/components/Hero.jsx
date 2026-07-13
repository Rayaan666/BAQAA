import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Hero.css';

const images = [
  '/hero%20section/herosection1.png',
  '/hero%20section/herosection2.png',
  '/hero%20section/herosection3.jpeg',
  '/hero%20section/herosection4.jpeg',
  '/hero%20section/herosection5.jpeg',
  '/hero%20section/herosection6.jpeg',
  '/hero%20section/herosection7.jpeg',
  '/hero%20section/herosection8.jpeg',
  '/hero%20section/herosection9.jpeg',
  '/hero%20section/herosection11.jpeg'
];

const mobileImages = {
  0: '/hero%20section/herosection1_mobile.png',
  1: '/destination/destination2_mobile.png',
  3: '/hero%20section/herosection4_mobile.png',
  4: '/hero%20section/herosection5_mobile.png',
  5: '/hero%20section/herosection6_mobile.png',
  6: '/hero%20section/herosection7_mobile.png',
  7: '/hero%20section/herosection8_mobile.png'
};

const laptopImages = {
  0: '/hero%20section/herosection1_laptop.png'
};

const heroImageCache = new Map();

const getHeroImage = (index, isMobile, isLaptop) => {
  if (isMobile && mobileImages[index]) return mobileImages[index];
  if (isLaptop && laptopImages[index]) return laptopImages[index];
  return images[index];
};

const preloadHeroImage = (src) => {
  if (heroImageCache.has(src)) return heroImageCache.get(src);

  const imagePromise = new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      if (typeof image.decode === 'function') {
        image.decode().then(() => resolve(true), () => resolve(true));
      } else {
        resolve(true);
      }
    };
    image.onerror = () => resolve(false);
    image.src = src;
  });

  heroImageCache.set(src, imagePromise);
  return imagePromise;
};

const mobileImagePositions = {
  0: '39% center',
  4: '-42vw center',
  5: '-34vw center'
};

const mobileImageSizes = {
  0: '100% auto',
  4: '145% auto',
  5: '145% auto'
};

const laptopImageShifts = {
  4: '18vw',
  5: '18vw'
};

const laptopImageSizes = {
  5: '105% auto',
  6: '121% auto'
};

const slideVariants = {
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

const Hero = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 1]);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  const [isLaptop, setIsLaptop] = useState(() => window.matchMedia('(min-width: 769px) and (max-width: 2200px)').matches);
  const currentSlideRef = useRef(0);
  const transitionPendingRef = useRef(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const listener = (event) => setIsMobile(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 769px) and (max-width: 2200px)');
    const listener = (event) => setIsLaptop(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const nextSlide = (currentSlide + 1) % images.length;
    preloadHeroImage(getHeroImage(currentSlide, isMobile, isLaptop));
    preloadHeroImage(getHeroImage(nextSlide, isMobile, isLaptop));
  }, [currentSlide, isMobile, isLaptop]);

  const requestSlide = useCallback(async (nextSlide, nextDirection) => {
    if (transitionPendingRef.current) return;

    transitionPendingRef.current = true;
    const targetImage = getHeroImage(nextSlide, isMobile, isLaptop);
    const isReady = await preloadHeroImage(targetImage);

    if (isReady && mountedRef.current) {
      currentSlideRef.current = nextSlide;
      setSlide([nextSlide, nextDirection]);
    }

    transitionPendingRef.current = false;
  }, [isMobile, isLaptop]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlideRef.current + 1) % images.length;
      requestSlide(nextSlide, 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [requestSlide]);

  const nextSlide = () => {
    const nextIndex = (currentSlideRef.current + 1) % images.length;
    requestSlide(nextIndex, 1);
  };

  const prevSlide = () => {
    const previousIndex = currentSlideRef.current === 0
      ? images.length - 1
      : currentSlideRef.current - 1;
    requestSlide(previousIndex, -1);
  };

  const heroImage = getHeroImage(currentSlide, isMobile, isLaptop);

  return (
    <section className="hero-section" id="home">
      <div className="hero-slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            className="hero-slide"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          >
            <div
              className="hero-bg"
              style={{ 
                backgroundImage: `url(${heroImage})`,
                '--hero-position': currentSlide === 0 ? 'right center' : 'center 15%',
                '--hero-laptop-size': laptopImageSizes[currentSlide] || '115% auto',
                '--hero-laptop-shift-left': laptopImageShifts[currentSlide] || '0px',
                '--hero-mobile-position': mobileImagePositions[currentSlide] || 'center center',
                '--hero-mobile-size': mobileImageSizes[currentSlide] || 'cover'
              }}
            />
            <div className="hero-overlay"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-content-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Crafting Timeless Luxury <br /> Weddings, Events & Destination Celebrations
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            BAQAA is a luxury wedding planning, events and destination wedding design company in Dubai,
            creating bespoke celebrations filled with elegance, emotion, couture styling,
            and unforgettable experiences across the UAE and worldwide.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link to="/contact" className="btn-hero">Plan Your Wedding</Link>
            <Link to="/#weddings" className="btn-hero">
              Explore Our Celebrations
            </Link>
          </motion.div>
        </motion.div>
      </div>


      <div className="hero-controls">
        <button onClick={prevSlide} className="control-btn"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="control-btn"><ChevronRight size={24} /></button>
      </div>

      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle p-${i}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
