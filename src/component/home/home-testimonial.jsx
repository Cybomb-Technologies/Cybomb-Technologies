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
    image: "images/testimonial-2.jpg",
    rating: 5,
    feedback:
      "Cybomb Technologies delivered an exceptional mobile health platform that exceeded our expectations. The AI integration features have revolutionized how our patients interact with healthcare data.",
  },
  {
    name: "Ravi Kumar",
    role: "Founder, TechSprout",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    feedback:
      "Working with Cybomb was a game-changer. They built a scalable SaaS solution that handles millions of transactions. Their support helped us scale quickly.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(1); // Start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);
  const extendedSlides = [
    testimonials[testimonials.length - 1], // Clone last
    ...testimonials,
    testimonials[0], // Clone first
  ];
  const slideCount = testimonials.length;

  const goToSlide = (i) => {
    setIndex(i);
    setIsTransitioning(true);
  };

  const [disabled, setDisabled] = useState(false);

  const next = () => {
    if (disabled) return;
    setDisabled(true);
    goToSlide(index + 1);
    setTimeout(() => setDisabled(false), 600); // matches transition duration
  };

  const prev = () => {
    if (disabled) return;
    setDisabled(true);
    goToSlide(index - 1);
    setTimeout(() => setDisabled(false), 600);
  };

  // Auto-loop every 5s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [index]);

  const handleTransitionEnd = () => {
    if (index === extendedSlides.length - 1) {
      // Jump from clone of first → real first
      setIsTransitioning(false);
      setTimeout(() => {
        setIndex(1);
      }, 20);
    } else if (index === 0) {
      // Jump from clone of last → real last
      setIsTransitioning(false);
      setTimeout(() => {
        setIndex(slideCount);
      }, 20);
    }
  };


  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const id = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Slightly more than above timeout to ensure proper DOM sync
      return () => clearTimeout(id);
    }
  }, [isTransitioning]);


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
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((testimonial, i) => (
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
        {testimonials.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`${styles.dot} ${dotIndex === index - 1 ? styles.activeDot : ''}`}
            onClick={() => goToSlide(dotIndex + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
