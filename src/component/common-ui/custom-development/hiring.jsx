import React from 'react';
import styles from './hiring-models.module.css';

const HiringModels = ({ title, cards = [], image }) => {
  return (
    <section className={styles.hiringSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {cards.map((card, index) => (
            <p key={index} className={styles.cardText}>
              <strong>{card.title} </strong>
              {card.description}
            </p>
          ))}
        </div>

        <div className={styles.rightContent}>
          <img src={image} alt="Hiring discussion" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default HiringModels;
