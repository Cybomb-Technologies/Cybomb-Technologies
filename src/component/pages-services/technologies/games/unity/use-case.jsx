import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./use-case.module.css";

const useCases = [
  {
    icon: "bi-phone-fill",
    title: "Mobile Games",
    description: "Hyper-casual, puzzle, RPG, action-adventure, and sports."
  },
  {
    icon: "bi-controller",
    title: "PC & Console Games",
    description: "Story-driven, multiplayer shooters, strategy, and simulation titles."
  },
  {
    icon: "bi-vr",
    title: "AR/VR Immersive Experiences",
    description: "Training simulations, virtual tours, interactive storytelling."
  },
  {
    icon: "bi-robot",
    title: "Gamified Learning Apps",
    description: "Education, training, e-learning with fun mechanics."
  },
  {
    icon: "bi-building",
    title: "Enterprise & Simulation Games",
    description: "Business simulations, architectural walkthroughs, and industrial training."
  },
];

function UseCases() {
  return (
    <section className={styles.useCasesSection}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col lg={6} md={12} className="order-lg-1 order-2">
            <h2 className={styles.heading}>Use Cases</h2>
            <div className={styles.caseList}>
              {useCases.map((item, index) => (
                <div key={index} className={styles.caseItem}>
                  <div className={styles.iconWrapper}>
                    <i className={`bi ${item.icon} ${styles.icon}`}></i>
                  </div>
                  <div className={styles.textBlock}>
                    <h5 className={styles.caseTitle}>{item.title}</h5>
                    <p className={styles.caseDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Column */}
          <Col lg={6} className="text-center d-none d-lg-block order-1 order-lg-2">
            <img
              src="/images/games/use-case.png"
              alt="Use Cases Illustration"
              className={styles.illustration}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UseCases;
