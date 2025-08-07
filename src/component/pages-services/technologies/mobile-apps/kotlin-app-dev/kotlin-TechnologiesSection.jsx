import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages": ["kotlin", "Java"],
  "Android SDK": ["Jetpack","Coroutines"],
  "Tooling": ["Android Studio", "Gradle", "Kotlin DSL"],
  "Frameworks":["Ktor", "Spring"]
};

const techLogos = {
  
    "kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    "Java": "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    
    "Jetpack": "https://logo.svgcdn.com/d/jetpackcompose-original.svg",
    "Coroutines": "https://www.svgrepo.com/show/342326/uikit.svg",

    "Android Studio":"https://icon.icepanel.io/Technology/svg/Android-Studio.svg ", 
    "Gradle":"https://icon.icepanel.io/Technology/svg/Gradle.svg ", 
    "Kotlin DSL":"https://icon.icepanel.io/Technology/svg/Simple-DirectMedia-Layer-%28SDL%29.svg ",

    "Ktor":"https://icon.icepanel.io/Technology/svg/Ktor.svg ", 
    "Spring":"https://icon.icepanel.io/Technology/svg/Spring.svg "

};


const KotlinTechnologiesSection = () => {
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

export default KotlinTechnologiesSection;
