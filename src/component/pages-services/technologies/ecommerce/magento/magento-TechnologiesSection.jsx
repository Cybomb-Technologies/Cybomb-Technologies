import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": [
    "PHP",
    "MySQL",
    "JavaScript",
    "Knockout.js",
    "LESS",
    "CSS3",
    "HTML5",
  ],
  Platforms: ["Magento Open Source", "Magento Commerce"],
  "Cloud & Hosting": ["Magento Commerce Cloud", "AWS", "Azure"],
  Integrations: [
    "REST APIs",
    "GraphQL",
    "ERP/CRM",
    "Payment Gateways (PayPal, Stripe, Authorize.Net)",
  ],
  "DevOps & CI/CD": ["GitHub Actions", "Jenkins", "Bitbucket Pipelines"],
  "UI Libraries & Frameworks": ["Bootstrap", "Tailwind CSS"],
};

const techLogos = {
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  JavaScript:
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  "Knockout.js": "https://cdn.worldvectorlogo.com/logos/knockout.svg",
  LESS: "https://www.vectorlogo.zone/logos/lesscss/lesscss-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  "Magento Open Source":
    "https://www.svgrepo.com/show/303592/magento-2-logo.svg",
  "Magento Commerce": "https://www.svgrepo.com/show/303592/magento-2-logo.svg",
  "Magento Commerce Cloud":
    "https://www.svgrepo.com/show/303592/magento-2-logo.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  Azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  "REST APIs":
    "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "ERP/CRM": "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
  "Payment Gateways (PayPal, Stripe, Authorize.Net)":
    "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
  "GitHub Actions": "https://www.svgrepo.com/show/306098/githubactions.svg",
  Jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  "Bitbucket Pipelines":
    "https://www.freshleafmedia.co.uk/assets/media/bitbucket-pipeline_blogThumb.png",
  Bootstrap:
    "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "Tailwind CSS":
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
};
const MagentoTechnologiesSection = () => {
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
              className={`${styles.tab} ${
                selected === cat ? styles.activeTab : ""
              }`}
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

export default MagentoTechnologiesSection;
