import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": ["C#", ".NET MAUI", "Xamarin"],
  "Platforms": ["iOS", "Android", "Windows"],
  "Cloud & Backend": ["Microsoft Azure", "Firebase", "REST APIs", "GraphQL"],
  "DevOps & CI/CD": ["Azure DevOps", "GitHub Actions", "Jenkins"],
  "UI Libraries": ["Telerik UI", "Syncfusion", "SkiaSharp"]
};


const techLogos = {
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  ".NET MAUI": "https://icon.icepanel.io/Technology/svg/.NET.svg",
  "Xamarin": "https://cdn.iconscout.com/icon/free/png-512/free-xamarin-282427.png?f=webp&w=512",

  "iOS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "Android": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "Windows": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",

  "Microsoft Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Firebase": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  "REST APIs": "https://www.vectorlogo.zone/logos/json/json-icon.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",

  "Azure DevOps": "https://learn.microsoft.com/en-us/media/logos/logo-devops.svg",
  "GitHub Actions": "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg",
  "Jenkins": "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",

  "Telerik UI": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Telerik_Logo.png",
  "Syncfusion": "https://www.syncfusion.com/favicon.ico",
  "SkiaSharp": "https://avatars.githubusercontent.com/u/25406408?s=200&v=4"
};



const XamarinTechnologiesSection = () => {
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

export default XamarinTechnologiesSection;
