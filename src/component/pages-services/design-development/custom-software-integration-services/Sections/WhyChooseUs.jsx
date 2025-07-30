import React from 'react';
import styles from './WhyChooseUs.module.css';

const data = [
  {
    title: 'Seamless Connectivity',
    description: 'We build bridges between any platforms—even custom or legacy',
  },
  {
    title: 'Flexible & Custom',
    description: 'Integrations designed around your actual workflow—not generic solutions',
  },
  {
    title: 'Security-Focused',
    description: 'Secure tokens, encrypted data, and access control at every step',
  },
  {
    title: 'Real-Time & Automated',
    description: 'Reduce delays, human errors, and outdated data',
  },
  {
    title: 'Works With Your Team',
    description: 'We collaborate closely with your in-house or vendor systems',
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
