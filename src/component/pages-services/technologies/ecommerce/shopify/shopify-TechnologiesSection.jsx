import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": ["Liquid", "JavaScript", "HTML5", "CSS3", "JSON"],
  Platforms: ["Shopify", "Shopify Plus"],
  "Cloud & Hosting": ["Shopify Cloud", "AWS"],
  Integrations: [
    "REST APIs",
    "GraphQL",
    "ERP Systems",
    "PayPal",
  ],
  "DevOps & CI/CD": ["GitHub Actions", "Bitbucket Pipelines"],
  "UI Libraries & Frameworks": [
    "Bootstrap",
    "Tailwind CSS",
    "React for custom storefronts",
  ],
};

const techLogos = {
  Liquid:
    "https://cdn.prod.website-files.com/64be309a0c8ae7454454fcef/653932043d90a3fa696fd68a_liquid-logo-text.png",
  JavaScript:
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  JSON: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
  Shopify: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  "Shopify Plus":
    "https://thimpress.com/wp-content/uploads/2023/03/shopify-plus-logo.png",
  "Shopify Cloud":
    "https://img.icons8.com/?size=512&id=yEo5mhvn1aUK&format=png",
  AWS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSObhWW7gEGNs1r3kbEXIeWuIDC74C6p5RVQ&s",
  "REST APIs":
    "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "ERP Systems":
    "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/erp-icon.png",
  "PayPal":
    "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
  "GitHub Actions": "https://www.svgrepo.com/show/306098/githubactions.svg",
  "Bitbucket Pipelines":
    "https://www.freshleafmedia.co.uk/assets/media/bitbucket-pipeline_blogThumb.png",
  Bootstrap:
    "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "Tailwind CSS":
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "React for custom storefronts":
    "https://www.svgrepo.com/show/452092/react.svg",
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

export default SymfonyTechnologiesSection;
