import React from "react";
import styles from "./development-process.module.css";

const DevelopmentProcess = ({ title, Process }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Central Title */}
        <div className={styles.centerTitle}>
          <h2>{title}</h2>
        </div>

        {/* Cards Around in Circular Layout */}
        <div className={styles.circleWrapper}>
          {Process.map((desc, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`pos${index + 1}`]}`}
            >
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
