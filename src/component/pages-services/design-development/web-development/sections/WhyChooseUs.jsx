import React from "react";
import styles from "./WhyChooseUs.module.css";

const features = [
  {
    title: "Custom-First Approach",
    description: "We don’t use cookie-cutter templates—everything is made to fit you"
  },
  {
    title: "Mobile & SEO Ready",
    description: "Optimized for search engines and all screen sizes"
  },
  {
    title: "Mobile & SEO Ready",
    description: "We use modern code and optimization techniques to keep your site fast"
  },
  {
    title: "Speed & Performance",
    description: "Easily update your content, images, or blogs without a developer"
  },
  {
    title: "Ongoing Support",
    description: "We're here for updates, fixes, scaling, and improvements"
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection}>
      <div className="container text-center">
        <h2 className={styles.title}>Why Choose Us</h2>
        <div className="row justify-content-center g-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch"
            >
              <div className={styles.cardBox}>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}