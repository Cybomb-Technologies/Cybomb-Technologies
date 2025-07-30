import React from 'react';
import styles from './game-dev-EngagementModels.module.css';

const models = [
  {
    title: 'Game Concept & Mechanics Planning',
    description: "Define game type, core loop, features, and target platforms",
  },
  {
    title: 'Storyboarding & Design',
    description: "Sketch out levels, characters, UI, and flow of the game",
  },
  {
    title: 'Development & Iteration',
    description: "Build game logic, animations, assets, and mechanics in agile sprints",
  },
  {
    title: 'Testing & Bug Fixing',
    description: "Ensure playability, balance, and cross-device compatibility",
  },
  {
    title: 'Launch & Post-Release Support',
    description: "Publish to app stores and optimize based on player feedback",
  },
];

const GameDevEngagementModels = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Our Game Development Process</h2>
        </div>
        <div className={styles.cardsWrapper}>
          {models.map((model, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <div className={styles.cardDescBox}>
                <p className={styles.cardDesc}>{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDevEngagementModels;
