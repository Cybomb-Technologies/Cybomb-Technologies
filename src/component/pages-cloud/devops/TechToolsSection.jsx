import React, { useState, useEffect } from "react";
import styles from "../../common-ui/cloud-services/TechToolsSection.module.css";

const techData = {
  "DevOps Tools": [
    { name: "Jenkins", logo: "https://icon.icepanel.io/Technology/svg/Jenkins.svg" },
    { name: "GitHub Actions", logo: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" },
    { name: "GitLab CI/CD", logo: "https://icon.icepanel.io/Technology/svg/GitLab.svg" },
    { name: "Docker", logo: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
    { name: "Kubernetes", logo: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg" },
    { name: "Helm", logo: "https://icon.icepanel.io/Technology/svg/Helm.svg" },
    { name: "Terraform", logo: "https://www.svgrepo.com/show/354444/terraform.svg" },
    { name: "Ansible", logo: "https://icon.icepanel.io/Technology/svg/Ansible.svg" },
    { name: "Chef", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Chef_logo.svg/1119px-Chef_logo.svg.png?20161015214928" },
    { name: "AWS CodePipeline", logo: "https://icon.icepanel.io/AWS/svg/Developer-Tools/CodePipeline.svg" },
    { name: "Azure DevOps", logo: "https://code.benco.io/icon-collection/azure-icons/Azure-DevOps.svg" },
    { name: "Google Cloud Build", logo: "https://icon.icepanel.io/GCP/svg/Cloud-Build.svg" },
    { name: "ELK Stack", logo: "https://cdn.worldvectorlogo.com/logos/elastic-stack.svg" },
    { name: "Prometheus", logo: "https://icon.icepanel.io/Technology/svg/Prometheus.svg" },
    { name: "Grafana", logo: "https://icon.icepanel.io/Technology/svg/Grafana.svg" },
    { name: "Datadog", logo: "https://www.svgrepo.com/show/305934/datadog.svg" },
    { name: "SonarQube", logo: "https://icon.icepanel.io/Technology/svg/SonarQube.svg" },
    { name: "Snyk", logo: "https://www.svgrepo.com/show/513792/sync.svg" },
    { name: "OWASP ZAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/OWASP_ZAP_logo.svg/877px-OWASP_ZAP_logo.svg.png?20250207171655" },
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
        <h2 className={styles.title}>Tools & Platforms We Work With</h2>

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
