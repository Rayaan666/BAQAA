import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MediaPress.css';

const mediaData = [
  {
    image: '/media/8.jpg',
    quote: 'A captivating editorial feature celebrating the inspiring journey of Rachna Chadha, the visionary behind BAQAA. The feature highlights her decades of expertise in luxury weddings, destination celebrations, creative storytelling, and timeless event experiences that have redefined elegance and glamour across the industry.',
    publication: 'ARABIA WEDDINGS',
    link: 'Visionary Leadership & Luxury Wedding Editorial'
  },
  {
    images: [
      '/media/apex/bodrum-1.jpg',
      '/media/apex/bodrum-2.jpg'
    ],
    quote: 'Bodrum, Turkey set the stage for a landmark luxury destination wedding as Sameera Sabharwal and Nikhil Nanda were celebrated at Hyde Bodrum. Curated and orchestrated by Rachna Chadha, Founder of BAQAA, the three-day celebration hosted 450 guests in a complete property buyout at a newly opened, adults-only resort with no pre-existing event infrastructure. Every space was conceptualised and built from the ground up — from a floating mandap in the Aegean Sea to a Sangeet stage suspended over the pool, alongside immersive garden experiences. Executed as one of BAQAA’s most complex turnkey productions, the wedding featured five bespoke venues, seamless overnight transformations within a fully operational resort, and a 60-page culinary experience delivered by 100 chefs. Another BAQAA benchmark!',
    publication: 'EXPERIENTIAL PLANNER',
    link: 'Landmark Three-Day Destination Wedding at Hyde Bodrum'
  },
  {
    image: '/media/9.jpg',
    quote: 'A timeless wedding editorial capturing the quiet elegance and heartfelt romance of Sameera & Nikhil. The feature celebrates intimate moments, refined aesthetics, and a love story defined by grace, emotion, and everlasting commitment, creating an atmosphere of luxury, warmth, and modern romance.',
    publication: 'ELLE FEATURE',
    link: 'Love, Elegance & Timeless Romance Editorial'
  },
  {
    image: '/media/1.jpg',
    quote: 'A vibrant social nightlife feature capturing stylish attendees at Spice Club. The magazine highlights glamorous fashion, celebrity-inspired style, and lively party culture. Salma Khan and Rachna Chadha are showcased for their elegant outfits and accessories, while the sidebar promotes entertainment, dining experiences, and a trendy birthday celebration atmosphere.',
    publication: 'SPICE CLUB FEATURE',
    link: 'Social Nightlife & Glamour Editorial'
  },
  {
    image: '/media/2.jpg',
    quote: 'A lively social gathering at Spice Club Dubai featuring comedians, stylish guests, and a cheerful multicultural crowd. The event, “Comedy On A Platter,” combined laughter, drinks, and conversations in a warm nightlife setting. The magazine spread highlights fashionable attendees, fun group moments, and an energetic entertainment atmosphere at Le Meridien Fairway.',
    publication: 'COMEDY ON A PLATTER',
    link: 'Le Meridien Fairway Entertainment'
  },
  {
    image: '/media/3.jpg',
    quote: 'A lifestyle magazine feature spotlighting wedding planner Rachna Chadha and her luxury event company, BAQAA Glamour Weddings & Events. The article discusses innovative wedding themes, creative décor concepts, and the growing UAE wedding industry. Elegant event setups, candlelit dining arrangements, and personalized experiences reflect sophistication, exclusivity, and modern celebratory design trends.',
    publication: 'BAQAA GLAMOUR WEDDINGS',
    link: 'Lifestyle & Luxury Event Design'
  },
  {
    image: '/media/4.jpg',
    quote: 'A newspaper feature promoting BAQAA Glamour Weddings’ bridal showcase in the UAE. The article highlights luxurious wedding planning, elegant floral décor, romantic table settings, and personalized event themes. Founders Rachna Chadha and Vandana Mohan discuss modern wedding trends, grand celebrations, and creating unforgettable bridal experiences with creativity, sophistication, and premium event management.',
    publication: 'BRIDAL SHOWCASE FEATURE',
    link: 'UAE Wedding Trends & Management'
  },
  {
    image: '/media/5.jpg',
    quote: 'A business news feature announcing BAQAA Glamour Weddings & Events’ luxury bridal fairs in Abu Dhabi and Dubai. The article highlights premium venues, large-scale wedding planning services, and the collaboration between founders Rachna Chadha and Vandana Mohan. It emphasizes elegant event experiences, sophisticated celebrations, and the company’s vision for elite wedding exhibitions.',
    publication: 'BUSINESS NEWS FEATURE',
    link: 'Luxury Bridal Fairs & Elite Exhibitions'
  },
  {
    image: '/media/6.jpg',
    quote: 'A feature article promoting the BAQAA Wedding Fair, showcasing luxurious wedding experiences and bespoke event planning in Abu Dhabi and Dubai. The page highlights glamorous décor, artistic event styling, elegant dining setups, and creative entertainment concepts. BAQAA Glamour Weddings & Events is presented as a premium destination for unforgettable, sophisticated wedding celebrations.',
    publication: 'BAQAA WEDDING FAIR',
    link: 'Abu Dhabi & Dubai Luxury Events'
  },
  {
    image: '/media/7.jpg',
    quote: 'A lifestyle magazine feature showcasing extravagant fairy-tale wedding décor and luxury event styling. The grand floral backdrop, elegant stage setup, chandeliers, and romantic lighting highlight the artistry behind premium wedding planning. The article emphasizes how modern wedding planners transform celebrations into unforgettable experiences through creativity, décor, hospitality, and sophisticated event management.',
    publication: 'FAIRY-TALE WEDDINGS',
    link: 'Lifestyle & Luxury Event Styling'
  }
];

const MediaPress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaData.length) % mediaData.length);
  };

  return (
    <section className="media-snippets-section">
      <div className="media-header text-center">
        <div className="vertical-divider-media"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="media-title"
        >
          MEDIA SNIPPETS
        </motion.h2>
      </div>

      <div className="media-slider-wrapper">
        {/* Left Arrow */}
        <div className="slider-arrow left-arrow" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" strokeWidth="1.5">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </div>

        <div className="media-content-panel">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="media-content-inner"
            >
              {/* Magazine Cover */}
              <div className={`magazine-cover-box ${mediaData[currentIndex].images ? 'multi-image-mode' : ((currentIndex === 7 || currentIndex === 8 || currentIndex === 9) ? 'landscape-mode' : '')}`}>
                {mediaData[currentIndex].images ? (
                  mediaData[currentIndex].images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`Hyde Bodrum wedding production ${index + 1}`}
                      className="magazine-img"
                    />
                  ))
                ) : (
                  <img src={mediaData[currentIndex].image} alt="Media Snippet" className="magazine-img" />
                )}
              </div>

              {/* Quote Panel */}
              <div className="quote-panel-refined">
                <div className="quote-mark open">“</div>
                <p className={`press-quote-text ${currentIndex === 1 ? 'press-quote-long' : ''}`}>
                  {mediaData[currentIndex].quote}
                </p>
                <div className="quote-mark close">”</div>
                
                <div className="publication-info">
                  <h4 className="pub-name">&mdash; {mediaData[currentIndex].publication}</h4>
                  <p className="pub-link">{mediaData[currentIndex].link}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <div className="slider-arrow right-arrow" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" strokeWidth="1.5">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="media-pagination">
        {mediaData.map((_, index) => (
          <span 
            key={index} 
            className={`p-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default MediaPress;
