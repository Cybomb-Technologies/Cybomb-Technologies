import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  CMS: ["Craft CMS", "Craft Commerce"],
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
  "Craft CMS":
    "https://avatars.githubusercontent.com/u/22369139?s=280&v=4",
  "Craft Commerce":
    "https://pluginicons.craft-cdn.com/wishlistLeksbETs8QU8Nt2izRrS0hq1IMZTTR7OxYte.svg",
  Twig: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/twig-1.png",
  "PHP (Yii2 Framework)": "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "REST API":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://images.icon-icons.com/2699/PNG/512/varnish_software_logo_icon_169293.png",
  "CDN integration":
    "https://cdn-icons-png.flaticon.com/512/18405/18405290.png",
  "Next.js": "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  Nuxt: "https://nuxt.com/assets/design-kit/icon-green.svg",
  Gatsby: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
  Docker:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
  "CI/CD pipelines":
    "https://www.svgrepo.com/show/372275/ci-cd.svg",
  Forge:
    "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1566913083/catalog/laravel-forge/icon128x128.png",
  Envoyer:
    "https://cdn-icons-png.flaticon.com/512/660/660619.png",
  "Craft Cloud":
    "https://www.cloudcraft.co.in/cdn/shop/files/CLOUD_CRAFT.jpg?v=1749229828",
  DigitalOcean:
    "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
  AWS: "data:image/png;base64,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",
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
