import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const ReactTechnologies = () => {
    const techData = {
        "Core": ["React", "React Router", "Redux", "Next.js", "Gatsby"],
        "UI Libraries": ["Material-UI", "Chakra UI", "Ant Design", "Tailwind CSS", "Bootstrap"],
        "State Management": ["Redux Toolkit", "Zustand", "Recoil", "MobX"],
        "Build & Tools": ["Webpack", "Babel", "Vite", "ESLint", "Prettier"],
        "Testing": ["Jest", "React Testing Library", "Cypress", "Enzyme"],
        "Mobile & Cross-Platform": ["React Native", "Expo", "Electron"],
      };
      
      const techLogos = {
        "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "React Router": "https://www.svgrepo.com/show/354262/react-router.svg",
        "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "Gatsby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg",
        "Material-UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        "Chakra UI": "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg",
        "Ant Design": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
        "Tailwind CSS": "https://www.svgrepo.com/show/333609/tailwind-css.svg",
        "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        "Redux Toolkit": "https://redux-toolkit.js.org/img/redux.svg",
        "Zustand": "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
        "Recoil": "https://recoiljs.org/img/logo.svg",
        "MobX": "https://mobx.js.org/assets/mobx.png",
        "Webpack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        "Babel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
        "Vite": "https://vitejs.dev/logo.svg",
        "ESLint": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
        "Prettier": "https://prettier.io/icon.png",
        "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        "React Testing Library": "https://testing-library.com/img/octopus-128x128.png",
        "Cypress": "https://avatars.githubusercontent.com/u/8908513?s=200&v=4",
        "Enzyme": "https://www.svgrepo.com/show/294006/growth-chemistry.svg",
        "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Expo": "https://avatars.githubusercontent.com/u/12504344?s=200&v=4",
        "Electron": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
      };
      

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>React Technologies</h2>
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
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
                onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactTechnologies;