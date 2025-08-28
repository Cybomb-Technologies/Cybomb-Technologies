import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages": ["kotlin", "Java"],
  "Android SDK": ["Jetpack Compose","Coroutines"],
  "Tooling": ["Android Studio", "Gradle", "Kotlin DSL"],
  "Frameworks":["Ktor", "Spring"]
};

const techLogos = {
  
    "kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    "Java": "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    
    "Jetpack Compose": "https://logo.svgcdn.com/d/jetpackcompose-original.svg",
    "Coroutines": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIa8nJnCvjPEMLQ892JMdRBTQ8Fx4H96qQw&s",

    "Android Studio":"https://icon.icepanel.io/Technology/svg/Android-Studio.svg ", 
    "Gradle":"https://icon.icepanel.io/Technology/svg/Gradle.svg ", 
    "Kotlin DSL":"https://miro.medium.com/v2/resize:fit:1200/1*LK-QTWoFYe_JnG1FV2givg.png ",

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
