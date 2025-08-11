import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Frameworks": ["Laravel", "Symfony", "CodeIgniter", "Yii", "CakePHP CSS"],
  "CMS": [], // No items in the image under CMS tab
  "Databases": [], // No items in the image under Databases tab
  "Cloud & Hosting": [] // No items in the image under Cloud & Hosting tab
};

const techLogos = {
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  Symfony: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  CodeIgniter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  Yii: "https://upload.wikimedia.org/wikipedia/commons/2/27/Yii_logo.svg",
  "CakePHP CSS": "https://upload.wikimedia.org/wikipedia/commons/e/ea/CakePHP_logo.svg"
};

const TechnologiesToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies &amp; Tools We Use</h2>

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

export default TechnologiesToolsSection;
