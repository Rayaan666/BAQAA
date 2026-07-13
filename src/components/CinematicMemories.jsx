import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CinematicMemories.css';

const films = [
  {
    id: 'qidcUxN9BXg',
    title: 'Timeless Memories Crafted Forever - Film 1',
    isPortrait: true,
  },
  {
    id: 'Mep6erWundc',
    title: 'Timeless Memories Crafted Forever - Film 2',
    isPortrait: true,
  },
  {
    id: 'QL2hvns0aKU',
    title: 'Timeless Memories Crafted Forever - Film 3',
    isPortrait: false,
  },
];

const CinematicMemories = () => {
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  const activeFilm = films[activeFilmIndex];
  const showPreviousFilm = () => {
    setActiveFilmIndex((currentIndex) => (
      currentIndex === 0 ? films.length - 1 : currentIndex - 1
    ));
  };
  const showNextFilm = () => {
    setActiveFilmIndex((currentIndex) => (
      currentIndex === films.length - 1 ? 0 : currentIndex + 1
    ));
  };

  return (
    <section className="cinematic-section" id="films">
      <div className="heading-container text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cinematic-title"
        >
          TIMELESS MEMORIES CRAFTED FOREVER
        </motion.h2>
      </div>

      <div className="video-wrapper-refined">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className={`main-video-area ${activeFilm.isPortrait ? 'portrait-video' : ''}`}
        >
          <div className="video-placeholder-box">
            <iframe
              key={activeFilm.id}
              className="cinematic-video-embed"
              src={`https://www.youtube.com/embed/${activeFilm.id}?playsinline=1`}
              title={activeFilm.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <button
              type="button"
              className="video-arrow video-arrow-left"
              aria-label="Play previous film"
              onClick={showPreviousFilm}
            >
              <ChevronLeft size={30} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="video-arrow video-arrow-right"
              aria-label="Play next film"
              onClick={showNextFilm}
            >
              <ChevronRight size={30} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="video-carousel-dots">
              {films.map((film, index) => (
                <button
                  key={film.id}
                  type="button"
                  className={`dot${index === activeFilmIndex ? ' active' : ''}`}
                  aria-label={`Play film ${index + 1}`}
                  aria-pressed={index === activeFilmIndex}
                  onClick={() => setActiveFilmIndex(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicMemories;
