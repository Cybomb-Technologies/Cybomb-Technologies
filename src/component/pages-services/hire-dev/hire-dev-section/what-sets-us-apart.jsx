import React from "react";
import styles from "./whatSetsUsApart.module.css";
import { FaUserCheck, FaChartLine, FaComments, FaBolt, FaGlobe } from "react-icons/fa";

function WhatSetsUsApart() {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Pre-vetted developers with domain-specific knowledge",
    },
    {
      icon: <FaChartLine />,
      title: "Easy scalability as your project grows",
    },
    {
      icon: <FaComments />,
      title: "Seamless communication with dedicated account managers",
    },
    {
      icon: <FaBolt />,
      title: "Agile methodology for fast, iterative delivery",
    },
    {
      icon: <FaGlobe />,
      title: "Portfolio of 100+ successful global clients",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
        <div className={styles.cards}>
          {features.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{item.icon}</div>
              <p className={styles.cardText}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart;
