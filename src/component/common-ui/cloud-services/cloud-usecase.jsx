import React from 'react';
import styles from './cloud-usecase.module.css';

const CloudUseCases = ({ title, useCases }) => {
  return (
    <section className={styles.useCasesSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.cardGrid}>
        {useCases.map((useCase, index) => (
          <div key={index} className={`${styles.card} ${useCase.className}`}>
            <p className={styles.cardText}>{useCase.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudUseCases;
