import React, { useState } from "react";
import styles from "../../common-ui/security/security-technologies.module.css";

const techData = {
  "Cloud Infrastructure Security": [
    "AWS Security Hub",
    "Azure Security Center",
    "Google Cloud Security Command Center",
    "Cloudflare"
  ],
  "Identity & Access Management": [
    "AWS IAM",
    "Azure Active Directory",
    "Okta",
    "Ping Identity"
  ],
  "Threat Detection & Prevention": [
    "AWS GuardDuty",
    "Azure Sentinel",
    "Google Chronicle",
    "Palo Alto Prisma Cloud"
  ],
  "Compliance & Monitoring": [
    "ISO 27001",
    "SOC 2",
    "GDPR",
    "HIPAA"
  ]
};

const techLogos = {
  "AWS Security Hub": "https://d1.awsstatic.com/logos/aws_logo_smile_1200x630.7d2b4b1dcdc8b38b0cb4b9912107a9b4f7c1f6ae.png",
  "Azure Security Center": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "Google Cloud Security Command Center": "https://www.gstatic.com/devrel-devsite/prod/v55b36e188a18a202ee3d66b3ab75c1b0f0bfae60cc1b83dbe3df37d6b0eacda7/cloud/images/favicons/onecloud/favicon.ico",
  "Cloudflare": "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
  "AWS IAM": "https://d1.awsstatic.com/logos/aws_logo_smile_1200x630.7d2b4b1dcdc8b38b0cb4b9912107a9b4f7c1f6ae.png",
  "Azure Active Directory": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "Okta": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Okta_logo.png",
  "Ping Identity": "https://www.pingidentity.com/content/dam/ping-6-2-assets/icons/pingidentity.png",
  "AWS GuardDuty": "https://d1.awsstatic.com/logos/aws_logo_smile_1200x630.7d2b4b1dcdc8b38b0cb4b9912107a9b4f7c1f6ae.png",
  "Azure Sentinel": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "Google Chronicle": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Google_Chronicle_logo.png",
  "Palo Alto Prisma Cloud": "https://www.paloaltonetworks.com/content/dam/palo-alto-networks/global/icons/favicon.ico",
  "ISO 27001": "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
  "SOC 2": "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
  "GDPR": "https://cdn-icons-png.flaticon.com/512/2965/2965278.png",
  "HIPAA": "https://cdn-icons-png.flaticon.com/512/2721/2721267.png"
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Cloud Security Services</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;
