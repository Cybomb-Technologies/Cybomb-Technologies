import React, { useState, useEffect } from 'react';
import styles from './gallery.module.css';

const Gallery = () => {
  const images = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  return (
    <section className="my-5 py-4">
      <h3 className={`mb-5 text-center ${styles.sectionTitle}`}>
        Life at Our Company
      </h3>
      <div 
        className={styles.carouselContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((num) => (
            <div key={num} className={styles.carouselSlide}>
              <img
                src={`/images/gallery/life${num}.jpg`}
                alt={`Company event ${num}`}
                className={styles.carouselImage}
              />
              <div className={styles.carouselCaption}>
                Company Event {num}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.carouselDots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;