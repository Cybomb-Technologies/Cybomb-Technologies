import React from 'react';
import styles from './devlopment-process.module.css';

// const process = [
//   {
//     title: 'Game Concept & Mechanics Planning',
//     description: "Define game type, core loop, features, and target platforms",
//   },
//   {
//     title: 'Storyboarding & Design',
//     description: "Sketch out levels, characters, UI, and flow of the game",
//   },
//   {
//     title: 'Development & Iteration',
//     description: "Build game logic, animations, assets, and mechanics in agile sprints",
//   },
//   {
//     title: 'Testing & Bug Fixing',
//     description: "Ensure playability, balance, and cross-device compatibility",
//   },
//   {
//     title: 'Launch & Post-Release Support',
//     description: "Publish to app stores and optimize based on player feedback",
//   },
// ];

const DevelopmentProcess = ({title, Process}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.cardsWrapper}>
          {Process.map((Process, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <h3 className={styles.cardTitle}>{Process.title}</h3>
              <div className={styles.cardDescBox}>
                <p className={styles.cardDesc}>{Process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
