import React from "react";
import styles from './../../../../common-ui/module-styles/engagement-options-timeline-dnd.module.css';

const options = [
  {
    title: "End-to-End Game Development",
    description: "Full production of mobile, desktop, or browser games",
  },
  {
    title: "Game Prototyping / MVPs",
    description: "Build a testable game prototype to pitch or validate your concept",
  },
  {
    title: "Art & Animation Services Only",
    description: "Need characters, UI, or visual polish? We've got you",
  },
];

const GameDevEngagementOptions = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Engagement Options</h2>
      <div className={styles.flowContainer}>
        <div className={styles.centerLine}></div>

        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.cardRow} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.lineConnector}>
              <div className={styles.horizontalLine}></div>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{option.title}</h3>
              <p className={styles.cardDesc}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameDevEngagementOptions;
