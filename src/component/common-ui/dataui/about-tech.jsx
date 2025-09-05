import React from "react";
import styles from "./about-tech.module.css";

const AboutTech = ({ technologies }) => {
  // Array of colors for the icon containers
  // const iconColors = [
  //   "linear-gradient(135deg, #ccfdbfff, #d4f9b8ff)", // Original purple
  //   "linear-gradient(135deg, #f9e1a0ff, #fede9fff)", // Blue
  //   "linear-gradient(135deg, #beedf6ff, #c7e7fbff)", // Pink
  //   "linear-gradient(135deg, #a5d5f8ff, #aaebeeff)", // Green
  //   "linear-gradient(135deg, #f5c7c7d8, #fad6d6cb)", // Orange
  //   "linear-gradient(135deg, #959393ff, #092e2048)", // Lavender
  // ];

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Technologies</h2>
        <p className={styles.sectionSubtitle}>
          We leverage the right database technology for your specific use case
        </p>
        
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => {
            // Get color based on index (cycle through colors if more items than colors)
            // const colorIndex = index % iconColors.length;
            const iconStyle = {
              background: tech.iconColors
            };
            
            return (
              <div key={index} className={styles.techCard}>
                <div 
                  className={styles.iconContainer} 
                  style={iconStyle}
                >
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