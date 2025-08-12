import React, { useState } from "react";
import styles from "../../common-ui/security/security-technologies.module.css";

const techData = {
  "AWS Security Services": [
    "AWS WAF", 
    "AWS Shield", 
    "AWS GuardDuty", 
    "AWS CloudFront",
    "AWS Security Hub",
    "AWS Certificate Manager",
    "AWS CloudWatch",
    "Amazon Inspector"
  ],
  "Threat Protection": [
    "DDoS Mitigation",
    "Web Application Firewall",
    "Bot Control",
    "Rate Limiting"
  ],
  "Compliance Standards": [
    "PCI-DSS",
    "HIPAA",
    "GDPR",
    "ISO 27001"
  ],
  "Security Features": [
    "Encryption",
    "IAM Policies",
    "MFA",
    "Security Groups"
  ]
};

const techLogos = {
  "AWS WAF": "https://d1.awsstatic.com/logos/security/aws-waf-logo.d3fa5a8a3a0ffd433e7f6627adaf8e2e5b8435fb.png",
  "AWS Shield": "https://d1.awsstatic.com/logos/security/aws-shield-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "AWS GuardDuty": "https://d1.awsstatic.com/logos/security/aws-guardduty-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "AWS CloudFront": "https://d1.awsstatic.com/logos/security/aws-cloudfront-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "AWS Security Hub": "https://d1.awsstatic.com/logos/security/aws-security-hub-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "AWS Certificate Manager": "https://d1.awsstatic.com/logos/security/aws-certificate-manager-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "AWS CloudWatch": "https://d1.awsstatic.com/logos/security/aws-cloudwatch-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "Amazon Inspector": "https://d1.awsstatic.com/logos/security/amazon-inspector-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "DDoS Mitigation": "https://d1.awsstatic.com/logos/security/ddos-mitigation-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "Web Application Firewall": "https://d1.awsstatic.com/logos/security/waf-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "Bot Control": "https://d1.awsstatic.com/logos/security/bot-control-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "Rate Limiting": "https://d1.awsstatic.com/logos/security/rate-limiting-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "PCI-DSS": "https://d1.awsstatic.com/logos/security/pci-dss-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "HIPAA": "https://d1.awsstatic.com/logos/security/hipaa-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "GDPR": "https://d1.awsstatic.com/logos/security/gdpr-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "ISO 27001": "https://d1.awsstatic.com/logos/security/iso-27001-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "Encryption": "https://d1.awsstatic.com/logos/security/encryption-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "IAM Policies": "https://d1.awsstatic.com/logos/security/iam-policies-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "MFA": "https://d1.awsstatic.com/logos/security/mfa-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png",
  "Security Groups": "https://d1.awsstatic.com/logos/security/security-groups-logo.7d1f0d2a5b430d60f5e8a9a0a9a0b5b5a9b5b5a9.png"
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our AWS Security Stack</h2>

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