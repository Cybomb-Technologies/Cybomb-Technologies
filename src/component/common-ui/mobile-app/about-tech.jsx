import React from "react";
import styles from "./about-tech.module.css";

const AboutTech = ({ technologies }) => {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Technologies</h2>
        <p className={styles.sectionSubtitle}>
          We leverage the right technology for your specific use case
        </p>

        <div className={styles.techGrid}>
          {technologies.map((tech, index) => {
            // Get color based on index (cycle through colors if more items than colors)
            // const colorIndex = index % iconColors.length;
            const iconStyle = {
              background: tech.iconColors,
            };

            return (
              <div key={index} className={styles.techCard}>
                <div className={styles.iconContainer} style={iconStyle}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={styles.techIcon}
                  />
                </div>
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techDescription}>{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTech;
