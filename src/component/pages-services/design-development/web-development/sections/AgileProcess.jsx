import React, { useState } from "react";
import styles from "./AgileProcess.module.css";

const steps = [
  "Consultation",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance",
];

export default function AgileProcess() {
  const [activeStep, setActiveStep] = useState("Consultation");

  return (
    <section className={`${styles.agileSection} py-5`}>
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Our Agile Process</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {steps.map((step) => (
           <button
            className={`${styles.processButton} ${
            activeStep === step ? styles.active : ""
                }`}
            >
             {step}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
