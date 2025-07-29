import React from 'react';
import styles from './game-dev-WhyChoose.module.css';

const data = [
  {
    title: 'Creative Game Design',
    description: "Memorable characters, stories, and game loops",
  },
  {
    title: 'Optimized for All Devices',
    description: 'Smooth gameplay, fast load times, and low memory usage',
  },
  {
    title: 'Concept to Launch Support',
    description: 'We help brainstorm, prototype, test, and publish',
  },
  {
    title: 'Monetization-Ready',
    description: 'Ad integration, IAPS, rewards systems, and more',
  },
  {
    title: 'Analytics Integration',
    description: "Track player behavior, retention, and revenue",
  },
];

const GameWhyChooseUs = () => {
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

export default GameWhyChooseUs;
