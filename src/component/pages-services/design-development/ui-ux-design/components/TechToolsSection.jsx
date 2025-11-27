import React, { useState,  useRef } from "react";
import styles from "./techtools.module.css";

const techItems = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg" },
  { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
  { name: "Lottie", logo: "https://cdn.worldvectorlogo.com/logos/lottiefiles.svg" },
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
  { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
  { name: "Maze", logo: " https://cdn.brandfetch.io/iddFGFHNcm/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1671034548382"},
  { name: "UsabilityHub", logo: "https://avatars.githubusercontent.com/u/16235092?s=200&v=4" },
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