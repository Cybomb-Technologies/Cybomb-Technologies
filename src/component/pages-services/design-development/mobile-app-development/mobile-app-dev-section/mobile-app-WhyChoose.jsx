import React from 'react';
import styles from './mobile-app-WhyChoose.module.css';

const data = [
  {
    title: 'Custom-First Approach',
    description: "We don't use cookie-cutter templates — everything is made to fit you",
  },
  {
    title: 'Mobile & SEO Ready',
    description: 'Optimized for search engines and all screen sizes',
  },
  {
    title: 'Clean & Modern Code',
    description: 'We use modern code and optimization techniques to keep your site fast',
  },
  {
    title: 'Speed & Performance',
    description: 'Easily update your content, images, or blogs without a developer',
  },
  {
    title: 'Ongoing Support',
    description: "We're here for updates, fixes, scaling, and improvements",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Us</h2>
        
        {/* First Row - 3 Cards */}
        <div className={styles.row}>
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className={`${styles.row} ${styles.centeredRow}`}>
          {data.slice(3).map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
