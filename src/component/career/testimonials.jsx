import React, { useState, useEffect } from "react";
import styles from "./testimonials.module.css";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    //     {
    //   quote: "The work-life balance is real. I can be productive at work while still having time for my family and personal projects.",
    //   author: "Sudesh T",
    //   role: "FullStack Developer",
    //   tenure: "1 years at company",
    //   avatar: "/images/avatar3.jpg"
    // },
    {
      quote: "What I love most is the trust and autonomy we're given to solve problems creatively. The leadership truly values our input.",
      author: "Santhosh K",
      role: "FullStack Developer",
      tenure: "1 years at company",
      avatar: "/images/avatar1.png"
    },
    {
      quote: "The learning opportunities here are unmatched. In just one year, I've grown more than in my previous three years combined.",
      author: "Manoj MR",
      role: "UI/UX Designer",
      tenure: "1 year at company",
      avatar: "/images/avatar2.png"
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className={`${styles.testimonialsSection} py-5`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} text-center mb-5`}>Team Member Stories</h2>
        
        <div 
          className={styles.testimonialCarousel}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className={styles.testimonialCard}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.testimonialText}>{testimonials[currentIndex].quote}</p>
            
            <div className={styles.authorInfo}>
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].author} 
                className={styles.avatar}
              />
              <div>
                <h4 className={styles.authorName}>{testimonials[currentIndex].author}</h4>
                <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
                <p className={styles.authorTenure}>{testimonials[currentIndex].tenure}</p>
              </div>
            </div>
          </div>

          <div className={styles.carouselControls}>
            <button onClick={goToPrev} className={styles.controlButton}>
              <FaChevronLeft />
            </button>
            
            <div className={styles.dotsContainer}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button onClick={goToNext} className={styles.controlButton}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;