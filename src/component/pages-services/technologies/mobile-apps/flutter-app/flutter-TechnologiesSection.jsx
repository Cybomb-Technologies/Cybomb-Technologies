import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Core": ["Flutter SDK",  "Dart language"],
  "Backend": ["Firebase integration", "FlutterFire"],
  "Dev Tools": ["Hot reload", "widget libraries"],
  
};

const techLogos = {
  "Flutter SDK": "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  "Dart language": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png",
  
 
  "Firebase integration": "https://firebase.google.com/static/images/brand-guidelines/product-logo.png",
  "FlutterFire": "data:image/png;base64,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",
  
  "Hot reload": "https://www.svgrepo.com/show/513605/refresh.svg",
  "widget libraries": "data:image/png;base64,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",
  };

const FlutterTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies and Development </h2>

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

export default FlutterTechnologiesSection;
