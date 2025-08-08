import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages & Tools": ["PHP", "Symfony CLI", "Twig", "Composer", "Doctrine ORM"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "Cloud & Hosting": ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  "Integrations": ["REST APIs", "GraphQL", "Payment Gateways", "ERP/CRM systems"],
  "DevOps & CI/CD": ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
  "UI Frameworks": ["Bootstrap", "Tailwind CSS", "Vue.js", "React"],
};

const techLogos = {
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  "Symfony CLI": "https://www.vectorlogo.zone/logos/symfony/symfony-icon.svg",
  Twig: "https://www.svgrepo.com/show/374142/twig.svg",
  Composer: "https://www.svgrepo.com/show/85929/composer.svg",
  "Doctrine ORM": "https://icon.icepanel.io/Technology/svg/Doctrine.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  PostgreSQL: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  MongoDB: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  Azure: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  "Google Cloud": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  DigitalOcean: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
  "REST APIs": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "Payment Gateways": "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  "ERP/CRM systems": "https://www.vectorlogo.zone/logos/sap/sap-icon.svg",
  Jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  "GitHub Actions": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  "GitLab CI": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  Kubernetes: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  Bootstrap: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "Vue.js": "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
  React: "https://www.svgrepo.com/show/452092/react.svg",
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
