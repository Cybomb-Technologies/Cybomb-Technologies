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
  "AWS WAF": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/WAF.svg",
  "AWS Shield": "https://w7.pngwing.com/pngs/335/196/png-transparent-aws-shield-advance-hd-logo.png",
  "AWS GuardDuty": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/GuardDuty.svg",
  "AWS CloudFront": "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg",
  "AWS Security Hub": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Security-Hub.svg",
  "AWS Certificate Manager": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Certificate-Manager.svg",
  "AWS CloudWatch": "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg",
  "Amazon Inspector": "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Inspector.svg",
  "DDoS Mitigation": "https://cdn-icons-png.flaticon.com/512/10534/10534208.png",
  "Web Application Firewall": "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
  "Bot Control": "https://cdn-icons-png.flaticon.com/512/1063/1063802.png",
  "Rate Limiting": "https://cdn-icons-png.flaticon.com/512/929/929429.png",
  "PCI-DSS": "https://cdn-icons-png.flaticon.com/512/2721/2721267.png",
  "HIPAA": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1h65eV5JdVRN8en1_0eaOqajV1TMAcrLCQ&s",
  "GDPR": "https://cdn-icons-png.flaticon.com/512/2965/2965278.png",
  "ISO 27001": "https://logowik.com/content/uploads/images/iso-27001-information-security5133.logowik.com.webp",
  "Encryption": "https://cdn-icons-png.flaticon.com/512/2965/2965278.png",
  "IAM Policies": "https://cdn-icons-png.flaticon.com/512/3233/3233860.png",
  "MFA": "https://cdn-icons-png.flaticon.com/512/5815/5815413.png",
  "Security Groups": "https://cdn-icons-png.flaticon.com/512/2912/2912061.png"
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