import React, { useState, useEffect } from "react";
import styles from "../../common-ui/cloud-services/TechToolsSection.module.css";

const techData = {
  "Azure Services": [
    { name: "App Services", logo: "https://code.benco.io/icon-collection/azure-icons/App-Services.svg" },
    { name: "Azure Functions", logo: "https://code.benco.io/icon-collection/azure-icons/Function-Apps.svg" },
    { name: "Virtual Machines", logo: "https://code.benco.io/icon-collection/azure-icons/Virtual-Machine.svg" },
    { name: "Logic Apps", logo: "https://code.benco.io/icon-collection/azure-icons/Logic-Apps.svg" },
    { name: "AKS (Kubernetes)", logo: "https://code.benco.io/icon-collection/azure-icons/Kubernetes-Services.svg" },
    { name: "Azure SQL", logo: "https://code.benco.io/icon-collection/azure-icons/SQL-Server.svg" },
    { name: "Cosmos DB", logo: "https://code.benco.io/icon-collection/azure-icons/Azure-Cosmos-DB.svg" },
    { name: "Blob Storage", logo: "https://code.benco.io/icon-collection/azure-icons/Blob-Block.svg" },
    { name: "Azure DevOps", logo: "https://code.benco.io/icon-collection/azure-icons/Azure-DevOps.svg" },
    { name: "GitHub Actions", logo: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" },
    { name: "ARM Templates", logo: "https://az-icons.com/export/icons/f59275b0c7acc0754b0a659a981d88ef.svg" },
    { name: "Azure AD", logo: "https://az-icons.com/export/icons/82301ee2d3db43f597bee85c0a7e2fb9.svg" },
    { name: "Key Vault", logo: "https://az-icons.com/export/icons/951234a0ba8dbe62234b12afb5c7a488.svg" },
    { name: "Monitor", logo: "https://az-icons.com/export/icons/81d7ce6fdccef5d97790627ee0add4ac.svg" },
    { name: "Security Center", logo: "https://az-icons.com/export/icons/28e08118bbbc9d6375295371ecd8fdb6.svg" },
    { name: "Power BI", logo: "https://az-icons.com/export/icons/e4e7a2a46c0b319dc5989d4b4977cad1.svg" },
    { name: "Cognitive Services", logo: "https://az-icons.com/export/icons/5cb0c2e4d8f3ef195b6adca53490de02.svg" },
    { name: "Azure AI Studio", logo: "https://az-icons.com/export/icons/bdba2064be58a6b30881bfaddcf6e29d.svg" },
  ],
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 5;
  const selectedTools = techData[selected] || [];
const totalSlides = Math.ceil(selectedTools.length / itemsPerSlide);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

 const getCurrentItems = () => {
  const start = currentSlide * itemsPerSlide;
  return selectedTools.slice(start, start + itemsPerSlide);
};


  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tools & Technologies We Use</h2>

        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => {
                setSelected(cat);
                setCurrentSlide(0);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.slideshowContainer}>
          <div className={styles.cardRow}>
            {getCurrentItems().map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className={styles.techLogo}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/100?text=No+Logo";
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.slideIndicators}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`${styles.slideIndicator} ${currentSlide === index ? styles.activeIndicator : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;
