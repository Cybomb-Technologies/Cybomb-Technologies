import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": ["PHP", "MySQL", "JavaScript", "Knockout.js", "LESS", "CSS3", "HTML5"],
  "Platforms": ["Adobe Commerce (Magento)", "Magento Open Source"],
  "Cloud & Hosting": ["Adobe Commerce Cloud", "AWS", "Azure"],
  "Integrations": ["REST APIs", "GraphQL", "ERP & CRM integrations", "Payment Gateways (PayPal, Stripe, Authorize.Net)"],
  "DevOps & CI/CD": ["Jenkins", "GitHub Actions", "Bitbucket Pipelines"],
  "UI Libraries & Frameworks": ["Bootstrap", "Tailwind CSS"],
};

const techLogos = {
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  JavaScript: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  "Knockout.js": "https://cdn.worldvectorlogo.com/logos/knockout.svg",
  LESS: "https://www.vectorlogo.zone/logos/lesscss/lesscss-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  "Adobe Commerce (Magento)": "https://icon.icepanel.io/Technology/svg/Adobe-Commerce-%28Magneto%29.svg",
  "Magento Open Source": "https://www.svgrepo.com/show/303592/magento-2-logo.svg",
  "Adobe Commerce Cloud": "https://www.adobe.com/content/dam/cc/icons/adobe_wordmark_red.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  Azure: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  "REST APIs": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "ERP & CRM integrations": "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
  "Payment Gateways (PayPal, Stripe, Authorize.Net)": "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
  Jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  "GitHub Actions": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  "Bitbucket Pipelines": "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg",
  Bootstrap: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
};
const AdobeTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Development and Technologies</h2>

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

export default AdobeTechnologiesSection;
