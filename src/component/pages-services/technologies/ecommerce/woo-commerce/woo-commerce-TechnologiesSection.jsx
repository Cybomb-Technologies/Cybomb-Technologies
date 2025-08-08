import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "jQuery"],
  "Platforms": ["WooCommerce", "WordPress"],
  "Cloud & Hosting": ["AWS", "Google Cloud", "WP Engine", "Kinsta"],
  "Integrations": ["REST APIs", "GraphQL", "ERP/CRM", "Payment Gateways (PayPal, Stripe, Razorpay)"],
  "DevOps & CI/CD": ["GitHub Actions", "Bitbucket Pipelines", "Docker"],
  "UI Libraries & Frameworks": ["Bootstrap", "Tailwind CSS", "React for custom storefronts"],
};

const techLogos = {
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  JavaScript: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  jQuery: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
  WooCommerce: "https://www.vectorlogo.zone/logos/woocommerce/woocommerce-icon.svg",
  WordPress: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  "Google Cloud": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  "WP Engine": "https://www.vectorlogo.zone/logos/wpengine/wpengine-icon.svg",
  Kinsta: "https://www.vectorlogo.zone/logos/kinsta/kinsta-icon.svg",
  "REST APIs": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "ERP/CRM": "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
  "Payment Gateways (PayPal, Stripe, Razorpay)": "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
  "GitHub Actions": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  "Bitbucket Pipelines": "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  Bootstrap: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "React for custom storefronts": "https://www.svgrepo.com/show/452092/react.svg",
};
const WooCommerceTechnologiesSection = () => {
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

export default WooCommerceTechnologiesSection;
