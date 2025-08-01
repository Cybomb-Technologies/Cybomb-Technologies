import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind"],
  Platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom React", "Node"],
  Backend: ["Node.js", "Express.js", "PHP", "Laravel", "Django"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Payments: ["Stripe", "PayPal", "Phonepe", "UPI"],
  CMS: ["WordPress", "Contentful", "Firebase", "Cloudinary"],
  APIs: ["REST", "GraphQL", "MongoDB","Express.js","Django"],
};

const GameTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies We Use</h2>

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

        {/* Tech Cards (Text-only boxes) */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameTechnologiesSection;
