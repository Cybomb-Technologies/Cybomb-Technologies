import React from "react";
import styles from "./case-challenges.module.css";
import challengeImg from "../../../assets/technologies/case-challenge.png";

export default function CaseChallenges({ 
  title = "Challenges", 
  image, 
  leftCards = [], 
  rightCards = [] 
}) {
  return (
    <div className={styles.challengeSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        
        {/* Left Column */}
        <div className={styles.column}>
          {leftCards.map((text, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === 1 ? styles.blackCard : ""}`}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.centerColumn}>
          <img src={image || challengeImg} alt={title} className={styles.image} />
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          {rightCards.map((text, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === 1 ? styles.blackCard : ""}`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}