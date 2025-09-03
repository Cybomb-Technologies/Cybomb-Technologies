import React, { useState, useEffect, useRef } from "react";
import styles from "./techtools.module.css";

const techItems = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg" },
  { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
  { name: "Lottie", logo: "https://cdn.worldvectorlogo.com/logos/lottiefiles.svg" },
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
  { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
  { name: "Maze", logo: "https://cdn.brandfetch.io/iddFGFHNcm/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "UsabilityHub", logo: "https://cdn.prod.website-files.com/658002b040896ac0d98d8f10/65a90a9041071df14e532cc3_8.svg" },
  { name: "Storybook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" }
];

const TechToolsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Clone items to create seamless infinite scroll
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools</h2>

        {/* Running Slider Container */}
        <div 
          className={styles.sliderContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className={`${styles.sliderTrack} ${isPaused ? styles.paused : ""}`}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className={styles.techCard}>
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className={styles.logo}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;