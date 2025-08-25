import React from "react";
import styles from "./features-cards.module.css";

import FastOnboarding from "./../../../../assets/hire-dev/features/fast-onboarding.png";
import FlexibleHiring from "./../../../../assets/hire-dev/features/flexible-hiring-models.png";
import InHouse from "./../../../../assets/hire-dev/features/in-house-developers.png";
import HighRetention from "./../../../../assets/hire-dev/features/high-retention-rate.png";
import GlobalExpertise from "./../../../../assets/hire-dev/features/global-expertise.png";
import TechVersatility from "./../../../../assets/hire-dev/features/tech-versatility.png";

function FeaturesCards() {
  const features = [
    { title: "Fast Onboarding", img: FastOnboarding },
    { title: "Flexible Hiring Models", img: FlexibleHiring },
    { title: "In-House Developers", img: InHouse },
    { title: "High Retention Rate", img: HighRetention },
    { title: "Global Expertise", img: GlobalExpertise },
    { title: "Tech Versatility", img: TechVersatility },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Features</h2>
        <div className={styles.cardGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={feature.img} alt={feature.title} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesCards;
