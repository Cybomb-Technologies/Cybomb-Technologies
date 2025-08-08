import React from "react";
import styles from "./whyChooseUs.module.css";

function WhyChooseUs({ sectionTitle = "Why Choose Us", subTitle = "What We Offer" }) {
  const points = [
    "Get started within 1 week — no delays",
    "Vetted, trained, and managed professionals",
    "Hire for short-term, long-term, or bucket hours",
    "Serving clients across the globe since 20XX",
    "Stable, committed teams with proven experience",
    "Web, Mobile, AI, DevOps, E-commerce & more",
  ];

  const features = [
    "Fast Onboarding",
    "Flexible Hiring Models",
    "In-House Developers",
    "High Retention Rate",
    "Global Expertise",
    "Tech Versatility",
  ];

  return (
    <section>
        <div className={styles.whyChooseSection}>
            {/* First Container */}
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

                    <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.textBlock}>
                        <h3 className={styles.subTitle}>{subTitle}</h3>
                        <ul className={styles.pointList}>
                            {points.map((point, index) => (
                            <li key={index} className={styles.pointItem}>
                                {point}
                            </li>
                            ))}
                        </ul>
                        </div>

                        <div className={styles.imageBlock}>
                        <img
                            src="/images/hire-dev/why-choose-us.png"
                            alt="Why Choose Us"
                            className={styles.image}
                        />
                        </div>
                    </div>
                    </div>
                </div>
        </div>
      

        <div className={styles.whyChooseSection}>
            {/* Second Container */}
            <div className={styles.container}>
                <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.imageBlock}>
                    <img
                        src="/images/hire-dev/features.png"
                        alt="Why Choose Us"
                        className={styles.image}
                    />
                    </div>

                    <div className={styles.textBlock}>
                    <h3 className={styles.subTitle}>Features</h3>
                    <ul className={styles.pointList}>
                        {features.map((feature, index) => (
                        <li key={index} className={styles.pointItem}>
                            {feature}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default WhyChooseUs;
