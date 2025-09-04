import React from "react";
import styles from "./career-content.module.css";

const HiringProcess = () => {
  const steps = [
    {
      step: 1,
      title: "Application Review",
      description:
        "We carefully review each application against the role requirements.",
    },
    {
      step: 2,
      title: "Initial Screening",
      description:
        "A recruiter will reach out for a phone/video call to discuss your experience.",
    },
    {
      step: 3,
      title: "Technical Assessment",
      description:
        "For technical roles, we'll evaluate your skills through practical tests.",
    },
    {
      step: 4,
      title: "Team Interviews",
      description:
        "You'll meet with potential team members and managers for in-depth discussions.",
    },
    {
      step: 5,
      title: "Culture Fit",
      description:
        "We assess mutual fit to ensure you'll thrive in our environment.",
    },
    {
      step: 6,
      title: "Offer",
      description:
        "Successful candidates receive a competitive offer package.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#003459" }}>
      <div className="container-fluid px-3">
        <h3 className={`mb-5 text-center text-white ${styles.sectionTitle}`}>
          Our Hiring Process
        </h3>
        <div className="d-flex justify-content-center">
          <div className={`w-100 ${styles.processWrapper}`}>
            <div className="d-flex flex-column align-items-center gap-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className={`d-flex align-items-start w-100 ${styles.processStepStack}`}
                >
                  <div className={`${styles.stepCircle} me-3 flex-shrink-0`}>
                    {item.step}
                  </div>
                  <div className={styles.stepContent}>
                    <h5 className="mb-2 text-muted">{item.title}</h5>
                    <p className="mb-0 text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
