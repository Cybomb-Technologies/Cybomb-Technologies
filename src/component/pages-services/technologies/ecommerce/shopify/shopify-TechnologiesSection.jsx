import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": ["Liquid", "JavaScript", "HTML5", "CSS3", "JSON"],
  "Platforms": ["Shopify", "Shopify Plus"],
  "Cloud & Hosting": ["Shopify Cloud", "AWS"],
  "Integrations": ["REST APIs", "GraphQL", "ERP & CRM Systems", "Payment Gateways (PayPal, Stripe, Razorpay)"],
  "DevOps & CI/CD": ["GitHub Actions", "Bitbucket Pipelines"],
  "UI Libraries & Frameworks": ["Bootstrap", "Tailwind CSS", "React for custom storefronts"],
};

const techLogos = {
  Liquid: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  JavaScript: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  JSON: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
  Shopify: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  "Shopify Plus": "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  "Shopify Cloud": "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  "REST APIs": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "ERP & CRM Systems": "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
  "Payment Gateways (PayPal, Stripe, Razorpay)": "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
  "GitHub Actions": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  "Bitbucket Pipelines": "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg",
  Bootstrap: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "React for custom storefronts": "https://www.svgrepo.com/show/452092/react.svg",
};

const SymfonyTechnologiesSection = () => {
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

export default SymfonyTechnologiesSection;
