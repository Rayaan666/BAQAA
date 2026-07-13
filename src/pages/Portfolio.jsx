import { useEffect } from 'react';
import './Portfolio.css';

const bollywoodImages = [
  '/portfolio/Buthaina Goes to Bollywood/9375922517.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922548.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922557.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922645.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922715.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922728.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922833.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375922851.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375923689.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375923693.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375923795.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375923824.jpg_exif1.jpg',
  '/portfolio/Buthaina Goes to Bollywood/9375923829.jpg_exif1.jpg'
];

const royalImages = [
  '/portfolio/The Royal Collective/11.jpeg',
  '/portfolio/The Royal Collective/23 a.jpg',
  '/portfolio/The Royal Collective/24.jpeg',
  '/portfolio/The Royal Collective/29.jpeg',
  '/portfolio/The Royal Collective/37b.jpeg',
  '/portfolio/The Royal Collective/39.jpeg',
  '/portfolio/The Royal Collective/43.jpeg',
  '/portfolio/The Royal Collective/44 a.jpg',
  '/portfolio/The Royal Collective/45.jpeg',
  '/portfolio/The Royal Collective/45a.jpg',
  '/portfolio/The Royal Collective/46.jpeg',
  '/portfolio/The Royal Collective/46a.jpg',
  '/portfolio/The Royal Collective/47.jpeg',
  '/portfolio/The Royal Collective/49.jpeg',
  '/portfolio/The Royal Collective/50.jpeg'
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToWork = () => {
    document.getElementById('bollywood')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-page">
      <div className="texture-overlay"></div>
      
      {/* 1. HERO SECTION */}
      <section className="hero-section" id="portfolio-hero">
        <div className="hero-bg" style={{ backgroundImage: `url('/works/work1.png')` }} />
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1 className="hero-title">
              Signature Celebrations, <br /> Beautifully Remembered
            </h1>
            
            <p className="hero-description">
              A curated showcase of BAQAA’s immersive design, cultural storytelling, and timeless celebration experiences.
            </p>
            
            <div className="hero-btns">
              <button onClick={scrollToWork} className="btn-hero" style={{ background: 'transparent' }}>
                EXPLORE PORTFOLIO
              </button>
            </div>
          </div>
        </div>

        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle p-${i}`}></div>
          ))}
        </div>
      </section>

      {/* 2. BUTHAINA GOES TO BOLLYWOOD */}
      <section id="bollywood" className="bollywood-section">
        <div className="portfolio-section-header">
          <h2 className="portfolio-heading">Buthaina Goes to Bollywood</h2>
          <p className="portfolio-desc">
            A vibrant celebration brought to life through cinematic colour, cultural detail, music, movement, and immersive BAQAA design.
          </p>
        </div>

        <div className="bollywood-gallery">
          {bollywoodImages.map((src, index) => (
            <div key={`bolly-${index}`} className="bolly-img-wrap">
              <img src={src} alt={`Buthaina Bollywood Celebration Image ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE ROYAL COLLECTIVE */}
      <section className="royal-section">
        <div className="portfolio-section-header">
          <h2 className="portfolio-heading">The Royal Collective</h2>
          <p className="portfolio-desc">
            A refined celebration of heritage, royal elegance, floral artistry, architectural detail, and timeless luxury.
          </p>
        </div>

        <div className="royal-gallery">
          {royalImages.map((src, index) => (
            <div key={`royal-${index}`} className="royal-img-wrap">
              <div className="royal-inner-border">
                <img src={src} alt={`Royal Collective Details Image ${index + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
