import React, { useState } from "react";
import styles from "./TechToolsSection.module.css";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  Frameworks: ["React", "Vue.js", "Angular", "Next.js", "Svelte"],
  "CMS Platforms": ["WordPress", "Webflow", "Drupal", "Ghost", "Strapi"],
  eCommerce: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Ecwid"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "PHP", "Python Django"],
  Hosting: ["Vercel", "Netlify", "Hostinger", "AWS", "DigitalOcean"],
  "Design Tools": ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"]
};

export default function TechToolsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className={styles.techSection}>
      <div className="container text-center">
        <h2 className={styles.title}>Technologies &amp; Tools We Use</h2>

        <div className={`row justify-content-center ${styles.tabGrid}`}>
          {Object.keys(techData).map((tab) => (
            <div className="col-auto px-1" key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-4 g-3">
          {techData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
            >
              <div className={styles.techCard}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
