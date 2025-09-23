import React from "react";
import styles from "./case-features.module.css";

const CaseFeatures = ({ data }) => {
  const renderCards = (cards) =>
    cards.map((card, index) => (
      <div key={index} className={styles.gridItem}>
        <div className={styles.card}>
          <div className={styles.iconWrapper} style={{ backgroundColor: card.iconBg }}>
            {card.icon}
          </div>
          <h3 className={styles.title} style={{ color: card.textColor }}>
            {card.title}
          </h3>
          <p className={styles.description} style={{ color: card.textColor }}>
            {card.description}
          </p>
        </div>
      </div>
    ));

  return (
    <div className="container py-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "40px", fontWeight: "700", color: "#111827" }}
      >
        Key Features
      </h2>
      <div className={styles.grid}>
        {renderCards([...data.topCards, ...data.bottomCards])}
      </div>
    </div>
  );
};

export default CaseFeatures;
