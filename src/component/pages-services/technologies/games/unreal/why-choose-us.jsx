import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./why-choose-us.module.css";

const whyChooseData = [
  {
    icon: "bi-cpu-fill",
    title: "Expert Unreal Developers",
    description: "Specialized in leveraging Unreal Engine 5, Blueprints, and C++ for cutting-edge experiences.",
    iconColor: "#007ea7",
  },
  {
    icon: "bi-diagram-3-fill",
    title: "End-to-End Production",
    description: "From pre-visualization and prototyping to deployment and live support.",
    iconColor: "#28a745",
  },
  {
    icon: "bi-collection-play-fill",
    title: "Diverse Project Portfolio",
    description: "Experience across AAA games, VR/AR, simulations, architectural visualization, and film.",
    iconColor: "#dc3545",
  },
  {
    icon: "bi-cash-coin",
    title: "Scalable & Cost-Efficient",
    description: "Flexible team structures and engagement models tailored to your needs and budget.",
    iconColor: "#ffc107",
  },
  {
    icon: "bi-lightning-fill",
    title: "Advanced Realism",
    description: "Utilizing Nanite, Lumen, Chaos Physics, and MetaHuman for unmatched realism.",
    iconColor: "#e83e8c",
  },
  {
    icon: "bi-shield-lock-fill",
    title: "Optimized & Secure Builds",
    description: "Delivering stable performance, optimized gameplay, and secure deployment pipelines.",
    iconColor: "#6f42c1",
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUsSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <Row className={`g-4 ${styles.customRow}`}>
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