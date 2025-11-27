import React from 'react';
import styles from './whatweoffer.module.css';

const WhatWeOffer = ({ title, items = [], image }) => {
  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>
        
        

        {/* Right Content (same as your original image section) */}
        <div className={styles.rightContent}>
          <img src={image} alt="Hiring discussion" className={styles.image} />
        </div>
        {/* Left Content (Updated text style for "What We Offer") */}
        <div className={styles.leftContent}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {items.map((item, index) => (
            <p key={index} className={styles.offerText}>
              <strong>{item.title} – </strong>{item.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
