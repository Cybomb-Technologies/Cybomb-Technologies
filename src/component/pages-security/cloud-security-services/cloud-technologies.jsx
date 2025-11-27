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
  "AWS Security Hub": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Security-Hub.svg",
  "Azure Security Center": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "Google Cloud Security Command Center": "https://icon.icepanel.io/GCP/svg/Security-Command-Center.svg",
  "Cloudflare": "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
  "AWS IAM": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/IAM-Identity-Center.svg",
  "Azure Active Directory": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "Okta": "https://icon.icepanel.io/Technology/svg/Okta.svg",
  "Ping Identity": "https://upload.wikimedia.org/wikipedia/en/0/01/PingIdentity_logo.png?20150601222100",
  "AWS GuardDuty": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/GuardDuty.svg",
  "Azure Sentinel": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "Google Chronicle": "https://brandeps.com/logo-download/G/Google-Chronicle-logo-vector-01.svg",
  "Palo Alto Prisma Cloud": "https://www.paloaltonetworks.com/content/dam/ext-includes/PANW_icon_32x32.svg",
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
