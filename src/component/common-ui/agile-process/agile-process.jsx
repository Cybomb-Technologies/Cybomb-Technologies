import React from 'react';
import styles from './agile-process.module.css';

const process = [
  'Consultation',
  'Design',
  'Development',
  'Testing',
  'Deployment',
  'Maintenance',
];

function MobileDevProcess() {
  return (
    <section className={styles.devProcessSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Agile Process</h2>
        <div className={styles.cardGrid}>
          {process.map((step, index) => (
            <div key={index} className={styles.card}>
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MobileDevProcess;
