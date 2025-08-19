import React, { useState, useEffect } from "react";
import styles from "../../common-ui/cloud-services/TechToolsSection.module.css";

const techData = {
  "AWS Services": [
    { name: "EC2", logo: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg" },
    { name: "ECS", logo: "https://icon.icepanel.io/AWS/svg/Containers/ECS-Anywhere.svg" },
    { name: "Lambda", logo: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" },
    { name: "S3", logo: "https://icon.icepanel.io/AWS/svg/Storage/S3-on-Outposts.svg" },
    { name: "CloudFront", logo: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg" },
    { name: "RDS", logo: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg" },
    { name: "DynamoDB", logo: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" },
    { name: "Aurora", logo: "https://icon.icepanel.io/AWS/svg/Database/Aurora.svg" },
    { name: "API Gateway", logo: "https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg" },
    { name: "AppSync", logo: "https://icon.icepanel.io/AWS/svg/App-Integration/AppSync.svg" },
    { name: "Route53", logo: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg" },
  ],
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(techData[selected].length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return techData[selected].slice(start, start + itemsPerSlide);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tools & Services We Work With</h2>
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
                    e.currentTarget.src =
                      "https://via.placeholder.com/100?text=No+Logo";
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
                className={`${styles.slideIndicator} ${
                  currentSlide === index ? styles.activeIndicator : ""
                }`}
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
