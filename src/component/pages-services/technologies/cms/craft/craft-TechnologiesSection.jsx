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
    "https://parsers.vc/logo/3297834e-35ff-42f9-bc55-ab5434091ec6-3.webp",
  DigitalOcean:
    "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
  AWS: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
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
