import React from 'react';
import styles from "./why-choose-us.module.css";

const WhyChooseUs = ({ ChooseUs }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Us</h2>

        {/* First Row - 3 Cards */}
        <div className={styles.row}>
          {ChooseUs.slice(0, 3).map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className={`${styles.row} ${styles.centeredRow}`}>
          {ChooseUs.slice(3).map((item, index) => (
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
