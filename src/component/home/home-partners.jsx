import React, { useState, useRef } from "react";
import styles from "./home-partners.module.css";
import DjitLogoImg from "./../../assets/partners/djit-trading.png";
import AitalsLogoImg from "./../../assets/partners/Aitals.png";


const techItems = [
  {
    name: 'AWS',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  },
  {
    name: 'Zoho',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png',
  },
  {
    name: 'Microsoft',
    logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
  },
  {
    name: 'Djit Trading',
    logo: DjitLogoImg,
  },
  {
    name: 'Aitals',
    logo: AitalsLogoImg,
  },
  {
    name: 'Rank Seo',
    logo: 'https://res.cloudinary.com/dcfjt8shw/image/upload/v1761297491/j4q6qjzlm93uirax0l6f.png'
  },
  {
    name: 'PDF Works',
    logo: 'https://res.cloudinary.com/dcfjt8shw/image/upload/v1761288318/wn8m8g8skdpl6iz2rwoa.svg'
  }


];

const HomePartners = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Clone items to create seamless infinite scroll
  const duplicatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Partners We Work With</h2>

        {/* Running Slider Container */}
        <div 
          className={styles.sliderContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className={`${styles.sliderTrack} ${isPaused ? styles.paused : ""}`}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className={styles.techCard}>
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className={styles.logo}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;