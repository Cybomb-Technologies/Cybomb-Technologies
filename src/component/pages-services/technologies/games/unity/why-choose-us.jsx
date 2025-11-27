import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./why-choose-us.module.css";

const whyChooseData = [
  {
    icon: "bi-gear-fill",
    title: "Unity-Certified Developers",
    description: "Skilled in building games of all genres and complexities.",
    iconColor: "#007ea7",
  },
  {
    icon: "bi-diagram-3-fill",
    title: "End-to-End Development",
    description: "From concept art and prototyping to publishing and live-ops.",
    iconColor: "#28a745",
  },
  {
    icon: "bi-collection-play-fill",
    title: "Diverse Portfolio",
    description:
      "Proven success across genres like RPGs, FPS, puzzles, educational, and simulations.",
    iconColor: "#dc3545",
  },
  {
    icon: "bi-cash-coin",
    title: "Cost-Efficient & Scalable",
    description: "Flexible engagement models tailored to your budget and goals.",
    iconColor: "#ffc107",
  },
  {
    icon: "bi-envelope-paper-heart-fill",
    title: "Dedicated Post",
    description:
      "Continuous improvements, monetization strategies, and content expansion.",
    iconColor: "#e83e8c",
  },
  {
    icon: "bi-shield-lock-fill",
    title: "Secure & Stable Builds",
description: "Ensuring smooth gameplay, performance, and reliable data protection with optimized builds.",

    iconColor: "#6f42c1",
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUsSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <Row className="g-4">
          {whyChooseData.map((item, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <div className={styles.card}>
                <div className={styles.titleRow}>
                  <div 
                    className={styles.iconWrapper}
                    style={{ color: item.iconColor }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className={styles.cardTitle}>{item.title}</h5>
                </div>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;