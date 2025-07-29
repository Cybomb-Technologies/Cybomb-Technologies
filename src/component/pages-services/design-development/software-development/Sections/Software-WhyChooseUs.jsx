import React from 'react';
import styles from './Software-WhyChooseUs.module.css';

const data = [
  {
    title: 'Solutions, Not Just Code',
    description: "We focus on solving business problems with smart technology",
  },
  {
    title: 'Secure by Design',
    description: 'Security is integrated from day one',
  },
  {
    title: 'End-to-End Development',
    description: 'From idea to deployment—we handle everything',
  },
  {
    title: 'Modular Architecture',
    description: "Build software that's easy to expand and scale",
  },
  {
    title: 'Agile and Transparent',
    description: "Work closely with you throughout the project lifecycle",
  },
];

const SoftwareWhyChooseUs = () => {
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

export default SoftwareWhyChooseUs;
