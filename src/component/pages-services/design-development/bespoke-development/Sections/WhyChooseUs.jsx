import React from 'react';
import styles from './WhyChooseUs.module.css';

const data = [
  {
    title: 'Built Around You',
    description: 'Everything is customized for how your business actually works',
  },
  {
    title: 'Problem-Solving First',
    description: 'We focus on real-world use cases and outcomes—not just code',
  },
  {
    title: 'Security at Core',
    description: 'Data protection, secure access, and role-based permissions built-in',
  },
  {
    title: 'Future-Ready',
    description: 'Modular and scalable software that evolves as you grow',
  },
  {
    title: 'One-on-One Collaboration',
    description: 'We work closely with you from idea to delivery',
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
