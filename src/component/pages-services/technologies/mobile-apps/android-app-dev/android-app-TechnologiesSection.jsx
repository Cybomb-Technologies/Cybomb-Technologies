import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & SDK": ["Kotlin", "Java", "Flutter", "React Native", "Xamarin","Capacitor—expertise(native)"],
  "Complementary Technologies": ["Firebase", "cloud services", "DevOps", "e-commerce", "CRM plugins"],
  
};

const techLogos = {
  Java:"https://www.vectorlogo.zone/logos/java/java-icon.svg",
  Flutter:"https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  "React Native":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207",
  Xamarin:"https://www.svgrepo.com/show/306994/xamarin.svg",
  "Capacitor—expertise(native)":"https://images.seeklogo.com/logo-png/39/1/capacitor-logo-png_seeklogo-394264.png",
  Kotlin: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/768px-Kotlin_Icon.svg.png?20171012085709",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "cloud services":"https://uxwing.com/wp-content/themes/uxwing/download/domain-hosting/cloud-services-icon.png",
  DevOps:"https://www.svgrepo.com/show/339133/devops.svg",
  "e-commerce":"https://www.svgrepo.com/show/250745/ecommerce.svg",
  "CRM plugins":"https://cdn-icons-png.flaticon.com/512/906/906341.png"

  };

const AndroidTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Game Development Technologies</h2>

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

export default AndroidTechnologiesSection;
