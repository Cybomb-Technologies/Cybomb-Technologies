import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Design & Prototyping": ["Figma", "Adobe XD", "Sketch"],
  Animation: ["Lottie", "After Effects", "Framer"],
  "User Testing": ["Maze", "UsabilityHub"],
  "Design Systems": ["Storybook"],
};

const techLogos = {
  // Design & Prototyping
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Adobe XD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
  Sketch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",

  // Animation
  Lottie: "https://cdn.worldvectorlogo.com/logos/lottiefiles.svg",
  "After Effects": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
  Framer: "https://cdn.worldvectorlogo.com/logos/framer-1.svg",

  // User Testing
  Maze: "https://cdn.brandfetch.io/iddFGFHNcm/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  UsabilityHub: "https://cdn.prod.website-files.com/658002b040896ac0d98d8f10/65a90a9041071df14e532cc3_8.svg",

  // Design Systems
  Storybook: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;
