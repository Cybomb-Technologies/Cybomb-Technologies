import React, { useState } from "react";
import styles from "../../common-ui/security/security-technologies.module.css";

const techData = {
  "API Gateway & Management": [
    "Kong Gateway",
    "Apigee",
    "AWS API Gateway",
    "Azure API Management"
  ],
  "Authentication & Authorization": [
    "OAuth 2.0",
    "OpenID Connect",
    "JWT",
    "Auth0"
  ],
  "Threat Detection & Prevention": [
    "API Firewall",
    "Rate Limiting",
    "Bot Protection",
    "WAF (Web Application Firewall)"
  ],
  "Compliance & Monitoring": [
    "PCI-DSS",
    "SOC 2",
    "GDPR",
    "API Observability Tools"
  ]
};

const techLogos = {
  "Kong Gateway": "https://www.svgrepo.com/show/353978/kong-icon.svg",
  "Apigee": "https://www.svgrepo.com/show/375537/apigee-api-platform.svg",
  "AWS API Gateway": "https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg",
  "Azure API Management": "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
  "OAuth 2.0": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
  "OpenID Connect": "https://img.icons8.com/?size=512&id=21051&format=png",
  "JWT": "https://jwt.io/img/pic_logo.svg",
  "Auth0": "https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png",
  "API Firewall": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "Rate Limiting": "https://cdn-icons-png.flaticon.com/512/929/929429.png",
  "Bot Protection": "https://cdn-icons-png.flaticon.com/512/1063/1063802.png",
  "WAF (Web Application Firewall)": "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
  "PCI-DSS": "https://cdn-icons-png.flaticon.com/512/2721/2721267.png",
  "SOC 2": "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
  "GDPR": "https://cdn-icons-png.flaticon.com/512/2965/2965278.png",
  "API Observability Tools": "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
};
const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our API Security Stack</h2>

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
