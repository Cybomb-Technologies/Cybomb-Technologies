import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  CMS: ["Craft CMS (latest versions)", "Craft Commerce"],
  Development: ["Twig", "PHP (Yii2 Framework)", "GraphQL", "REST API"],
  "Database & Caching": [
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Varnish",
    "CDN integration",
  ],
  "Headless Tools": ["Next.js", "Nuxt", "Gatsby"],
  DevOps: ["Docker", "CI/CD pipelines", "Forge", "Envoyer"],
  Hosting: ["Craft Cloud", "DigitalOcean", "AWS", "Vercel"],
};

const techLogos = {
  "Craft CMS (latest versions)":
    "https://craftcms.com/assets/images/craft-logo.svg",
  "Craft Commerce":
    "https://craftcms.com/assets/images/craft-commerce-logo.svg",
  Twig: "https://www.vectorlogo.zone/logos/twigproject/twigproject-icon.svg",
  "PHP (Yii2 Framework)": "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "REST API": "https://restfulapi.net/wp-content/uploads/rest.png",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://www.vectorlogo.zone/logos/varnishcache/varnishcache-icon.svg",
  "CDN integration": "https://www.akamai.com/site/en/images/logo-akamai.svg",
  "Next.js": "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  Nuxt: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
  Gatsby: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  "CI/CD pipelines":
    "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  Forge: "https://forge.laravel.com/img/laravel-forge-logo.svg",
  Envoyer: "https://envoyer.io/img/envoyer-logo.svg",
  "Craft Cloud": "https://craftcms.com/assets/images/craft-cloud-logo.svg",
  DigitalOcean:
    "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazonwebservices/amazonwebservices-icon.svg",
  Vercel: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
};

const CraftTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies We Use</h2>

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

export default CraftTechnologiesSection;
