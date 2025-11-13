import React, { useEffect, useRef, useState } from 'react';
import styles from './home-testimonial.module.css';

const testimonials = [
  {
    name: "Charlie McMann",
    role: "Data Director, DataSense Corp.",
    image: "images/testimonial-1.jpg",
    rating: 5,
    feedback:
      "The AI analytics dashboard Cybomb created for us has transformed how we process and visualize complex data sets. Their team's expertise in machine learning and data visualization is outstanding.",
  },
  {
    name: "Emily Johnson",
    role: "CTO, InnovateX",
    image: "images/testimonial-3.png",
    rating: 5,
    feedback:
      "Cybomb Technologies delivered an exceptional mobile health platform that exceeded our expectations. The AI integration features have revolutionized how our patients interact with healthcare data.",
  },
  {
    name: "Ravi Kumar",
    role: "Founder, TechSprout",
    image: "images/testimonial-2.jpg",
    rating: 4,
    feedback:
      "Working with Cybomb was a game-changer. They built a scalable SaaS solution that handles millions of transactions. Their support helped us scale quickly.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);
  const slides = [...testimonials];
  const slideCount = slides.length;

  const goToSlide = (i) => {
    setIsTransitioning(true);
    setIndex(i);
  };

  const next = () => {
    goToSlide((index + 1) % slideCount);
    resetInterval();
  };

  const prev = () => {
    goToSlide((index - 1 + slideCount) % slideCount);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);
  };

  // Auto-loop every 5s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [index]);

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Client Testimonials</h2>
      <p className={styles.subtitle}>Hear what our clients say about working with us</p>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={prev}>‹</button>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
            }}
          >
            {slides.map((testimonial, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.feedback}>"{testimonial.feedback}"</p>
                <div className={styles.stars}>
                  {'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}
                </div>
                <div className={styles.footer}>
                  <div className={styles.profileLeft}>
                    <img src={testimonial.image} alt={testimonial.name} className={styles.avatarInline} />
                    <div className={styles.profileText}>
                      <h4 className={styles.name}>{testimonial.name}</h4>
                      <p className={styles.role}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrow} onClick={next}>›</button>
      </div>

      <div className={styles.dotsWrapper}>
        {slides.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`${styles.dot} ${dotIndex === index ? styles.activeDot : ''}`}
            onClick={() => goToSlide(dotIndex)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;