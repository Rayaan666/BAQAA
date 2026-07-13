import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Journal.css';

const testimonials = [
  {
    title: 'THE DREAM MAKER',
    description: 'Rachna was the dream maker behind our magical wedding! She was patient and professional, incorporating all the elements we asked for and delivering beautifully. The Baqaa team made sure everything ran smoothly.',
    author: 'Faryal Kohari',
    wedding: '4 reviews'
  },
  {
    title: 'COOL DUBAI VIBE',
    description: 'Cool vibe to watch local Dubai musicians share their talents. Awesome show! Highly recommend Baqaa events for creating such wonderful memories and hosting spectacular talent.',
    author: 'Luke',
    wedding: '3 reviews'
  },
  {
    title: 'AMAZING PARTIES',
    description: 'Wanna get married? This is the company you need. Amazing parties & musicians on the roster. Attentive staff and incredible attention to detail throughout the entire event planning process.',
    author: 'Jacopo Mangiapane',
    wedding: 'Local Guide Â· 42 reviews Â· 10 photos'
  },
  {
    title: 'MADE WEDDING A DREAM',
    description: 'Rachna and her team did an EXCELLENT job in making our wedding look like a dream! She is so fun to work with and her team works well to ensure you have a special event. She is my go-to for all my future events.',
    author: 'Siya Rajan',
    wedding: '12 reviews Â· 1 photo'
  },
  {
    title: 'HIGHLY RECOMMEND',
    description: 'Baqaa events really help create memories. Highly recommend. From start to finish, the entire event coordination was flawless and the execution was absolutely spectacular.',
    author: 'Akhil SR',
    wedding: '9 reviews'
  },
  {
    title: 'BEYOND GREATEST DREAMS',
    description: 'Words cannot do justice to the wedding that Rachna and her team pulled off. The final product was beyond our greatest dreams. I would not hesitate to recommend Baqaa to anyone searching for the best wedding designer.',
    author: 'Sagar',
    wedding: 'Local Guide Â· 20 reviews'
  },
  {
    title: 'EVENT WAS PERFECT',
    description: 'What a great experience with them. Everything in the event was perfect. The coordination, execution, and overall management were top-notch and left a lasting impression.',
    author: 'Pilot & car transport Service',
    wedding: '4 reviews Â· 3 photos'
  },
  {
    title: 'UNMATCHABLE GENEROSITY',
    description: "Great service and very attentive staff! The team's generosity and attention to detail is unmatchable. I definitely recommend them to anyone planning a luxury celebration.",
    author: 'A I (Alexandra IV)',
    wedding: '4 reviews'
  },
  {
    title: 'MANAGED AMAZINGLY',
    description: 'I highly recommend the Baqaa team for making my daughterâ€™s wedding even more beautiful than I had expected. They delivered on time, took away all my stress, and managed everything amazingly.',
    author: 'Eliza Khan',
    wedding: '7 reviews Â· 1 photo'
  },
  {
    description: `I will give them a 5 rating as they are good at managing all processes right till the delivery of the venue without any delay.*

Good catch of knowledge as per our will of decoration.
Proper communication with us during the event.

Excellent!!!!!`,
    author: 'Sonu Dewan'
  },
  {
    description: `After being referred by a close family friend, my family hired Rachna and her team at Baqaa for my sister's wedding in Abu Dhabi in December 2015. From Day One of meeting with Rachna, we felt that the wedding is in the most trustworthy hands possible.

She was meticulous in her design, thought process, and execution, and the wedding went exactly as planned.

On top of that, the team surprised us with a lot of additional items that we had not discussed but added to making my sister's dream come true.

Our family and friends continue to talk about this wedding and we will definitely recommend Rachna and her team for all weddings/events that we will have in the future and to all other family and friends.`,
    author: 'Shamsh Hadi'
  },
  {
    description: `I had hired BAQAA to be the wedding planner for my special day, and they really exceeded my and my family's expectations on both my Mehendi and Wedding functions.

During the course of my wedding planning, I had developed a really good rapport with Mrs. Chadha and even ended up freelancing for her for a few months before I moved out of Dubai.`,
    author: 'Saba M'
  },
  {
    description: `We had agreed to have silk flowers on the entrance floral arch and on my stage, however on the day of the wedding, Mrs. Chadha surprised us by adding real flowers to the arch and stage!

Mrs. Chadha is friendly, organized, and definitely has an eye for design, making sure that every little detail of the wedding decor is beautiful and well-aligned with the theme.

All in all, BAQAA delivered what it promised and made sure that my special day was beautiful in every way.`,
    author: 'Saba M'
  },
  {
    description: `Hired Baqaa for a small event for my mother - despite the event being small they treated us better than any events company I have dealt with.

Highly recommended!`,
    author: 'ISAAC TBAZZ'
  },
  {
    description: `Thank you BAQAA team for celebrating my son's birthday with the lovely decor.

BAQAA ROCKS!`,
    author: 'Priyaanka Diwar'
  },
  {
    description: `Brilliant crew that goes the extra mile to ensure clients get their moneyâ€™s worth.

Canâ€™t recommend them enough.`,
    author: 'Ayub Ali'
  },
  {
    description: `Highly professional and creative team of Event Managers and Wedding planners lead by visionary and perfectionist Mrs. Rachna - this is what I can say about BAQAA. If Mrs. Rachna takes up a project, I can bet you that she will go all out of the way to create the wow factor and complete customer satisfaction, which is difficult to achieve in the field that BAQAA is in.

Her philanthropist side may not be known to many - she has been giving back to the industry by being a generous academician-teaching students facets of wedding planning and event management without any inhibition or insecurity, just from the intention of giving back.

Kudos to the team BAQAA.`,
    author: 'Nirmal Shah'
  },
  {
    description: `Great experience working with the entire BAQAA team!

Thank you so much for all the hard work - was extremely pleased with the quality, client service, and peace of mind they granted me.

Highly recommend!`,
    author: 'Angelina Hedra'
  },
  {
    description: `Wonderful experience working with BAQAA.

Well organized and worry/stress-free with great attention to detail.

Everything you need in an events planner.`,
    author: 'Farah Radwan'
  },
  {
    description: `Never had a better experience with any events company in the country!

Clear, concise, and original!

Highly recommended.`,
    author: 'Colin Gordon'
  },
  {
    description: `Rachna is so passionate about her work and it reflects in the beauty she creates.

She planned and executed the most fabulous, beautiful wedding for my daughter, the happy NI memories of which will last forever.

Thank you Rachna ❤️❤️`,
    author: 'shalinirajan22 ❤️❤️👏👏'
  },
  {
    description: `Hi Rachna; it was amazing.

We are so pleased and you couldn't have done any better.

Thanks so much.

Everyone was blown away`,
    author: 'Rish Channa'
  },
  {
    description: `Thank you so much Rachna, we are SO happy. We’ve received so many compliments and honestly feel like you’ve created the dream wedding. You’re amazing!!!`,
    author: 'Raveena Ubhi London'
  },
  {
    description: `Rachna you did the unimaginable and you are simply brilliant ❤️`,
    author: 'Malavika'
  }
];

const Journal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    ));
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  };

  return (
    <section
      className="journal-section"
      id="journal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="journal-header text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="journal-kicker"
        >
          CLIENT EXPERIENCES
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="journal-title"
        >
          TESTIMONIALS
        </motion.h2>
      </div>

      <div className="testimonial-editorial-shell">
        <button
          type="button"
          className="testimonial-nav testimonial-nav-prev"
          aria-label="Previous testimonial"
          onClick={showPrevious}
        >
          <ChevronLeft size={34} strokeWidth={1.3} aria-hidden="true" />
        </button>

        <div className="testimonial-stage">
          <div className="testimonial-watermark" aria-hidden="true">
            <img src="/logo/BAQAA3.png" alt="" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-slide"
              initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="testimonial-featured-text">{activeTestimonial.description}</p>

              <motion.div
                className="testimonial-reviewer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
              >
                <div className="testimonial-stars" aria-label="5 star review">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="star-icon" fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="testimonial-author">— {activeTestimonial.author}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="testimonial-nav testimonial-nav-next"
          aria-label="Next testimonial"
          onClick={showNext}
        >
          <ChevronRight size={34} strokeWidth={1.3} aria-hidden="true" />
        </button>
      </div>
      <div className="testimonials-footer text-center">
        <motion.a 
          href="https://www.google.com/search?sca_esv=c46b224a6a68ee93&sxsrf=ANbL-n49a2kbKdI8qTDrRjv2zfbfcEXMRw:1781860693654&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVL93iv_XjqzZtPICLsDm8U60UF-M-LERr4XAAmDjit4zhkuMuopUjN2fzqe-qS8o9g1FJEVLUclw9Rl9zWqaJVTTBUmjXaKM599nKY_A1tywwIIGA%3D%3D&q=BAQAA+Glamour+Weddings+%26+Events+Reviews&sa=X&ved=2ahUKEwjZtbyt_JKVAxX348kDHdqQJ7sQ0bkNegQIFhAH&biw=1272&bih=668&dpr=1.5" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-more-reviews"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW MORE ON GOOGLE
        </motion.a>
      </div>
    </section>
  );
};

export default Journal;

