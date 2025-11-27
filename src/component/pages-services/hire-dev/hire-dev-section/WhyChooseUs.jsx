import React from "react";
import styles from "./whyChooseUs.module.css";

import fastOnboarding from "./../../../../assets/hire-dev/why-choose-us/quick-project-kickoff.png";
import expertTeams from "./../../../../assets/hire-dev/why-choose-us/expert-teams.png";
import flexibleHiring from "./../../../../assets/hire-dev/why-choose-us/flexible-hiring.webp";
import provenExperience from "./../../../../assets/hire-dev/why-choose-us/proven-experience.png";
import techVersatility from "./../../../../assets/hire-dev/why-choose-us/tech-versatility.webp";

function WhyChooseUs({ sectionTitle = "Why Choose Us" }) {
  const points = [
    { desc: "Get started within 1 week — no delays", img: fastOnboarding },
    { desc: "Vetted, trained, and managed professionals", img: expertTeams },
    { desc: "Hire for short-term, long-term, or bucket hours", img: flexibleHiring },
    { desc: "Stable, committed teams with proven expertise", img: provenExperience },
    { desc: "Web, Mobile, AI, DevOps, E-commerce & more", img: techVersatility },
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.horizontalScroll}>
          {points.map((point, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={point.img} alt={point.desc} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                
                <p className={styles.cardDesc}>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
