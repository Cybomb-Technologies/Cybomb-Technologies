import React, { useState, useEffect } from "react";
import styles from "../../common-ui/cloud-services/TechToolsSection.module.css";
const techData = {
  "GCP Tools": [
    {
      name: "App Engine",
      logo: "https://icon.icepanel.io/GCP/svg/App-Engine.svg",
    },
    {
      name: "Cloud Functions",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-Functions.svg",
    },
    {
      name: "Compute Engine",
      logo: "https://icon.icepanel.io/GCP/svg/Compute-Engine.svg",
    },
    {
      name: "GKE (Kubernetes)",
      logo: "https://www.svgrepo.com/show/376321/google-gke.svg",
    },
    {
      name: "Cloud Run",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-Run.svg",
    },
    { name: "BigQuery", logo: "https://icon.icepanel.io/GCP/svg/BigQuery.svg" },
    {
      name: "Cloud Storage",
      logo: "https://cdn-icons-png.flaticon.com/512/1208/1208846.png",
    },
    {
      name: "Firestore",
      logo: "https://icon.icepanel.io/GCP/svg/Firestore.svg",
    },
    {
      name: "Cloud SQL",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-SQL.svg",
    },
    {
      name: "Pub/Sub",
      logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-pub-sub-logo.svg",
    },
    {
      name: "Cloud Spanner",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-Spanner.svg",
    },
    {
      name: "Vertex AI",
      logo: "https://icon.icepanel.io/GCP/svg/Vertex-AI.svg",
    },
    { name: "AutoML", logo: "https://icon.icepanel.io/GCP/svg/AutoML.svg" },
    {
      name: "Cloud Vision",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-Vision-API.svg",
    },
    {
      name: "Cloud Natural Language",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-Natural-Language-API.svg",
    },
    {
      name: "Terraform",
      logo: "https://www.svgrepo.com/show/354444/terraform.svg",
    },
    {
      name: "Cloud Build",
      logo: "https://icon.icepanel.io/GCP/svg/Cloud-Build.svg",
    },
    {
      name: "IAM",
      logo: "https://icon.icepanel.io/GCP/svg/Identity-And-Access-Management.svg",
    },
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
        <h2 className={styles.title}>Technologies & Tools We Use</h2>

        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                selected === cat ? styles.activeTab : ""
              }`}
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
