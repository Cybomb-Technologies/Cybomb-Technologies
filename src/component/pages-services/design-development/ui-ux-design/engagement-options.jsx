import React from "react";
import styles from "./engagement-options.module.css";

const EngagementOptions = () => {
  const steps = [
    { id: 1, title: "END-TO-END PRODUCT DESIGN",
      desc: "From ideation to final assets — perfect for new projects." },
    { id: 2, title: "UI OVERHAUL / REDESIGNS",
      desc: "Modernize outdated interfaces while keeping existing functionality." },
    { id: 3, title: "UX AUDITS & CONSULTING",
      desc: "Identify usability bottlenecks and get actionable insights." },
    { id: 4, title: "DESIGN SUPPORT FOR DEVELOPERS",
      desc: "Detailed specs, assets, and guidance for smooth dev handoff." },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Engagement Options</h2>

      <div className={styles.stepsWrapper}>
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`${styles.cardWrapper} ${(idx === 1 || idx === 3) ? styles.inverted : ""}`}
          >
            <div className={styles.stepTag}>STEP {step.id}</div>
            <div className={styles.verticalLine}></div>
            <div className={styles.line}></div>
            <div className={styles.card}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementOptions;
