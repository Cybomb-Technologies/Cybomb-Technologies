import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Frameworks": ["Laravel", "Symfony", "CodeIgniter", "Yii", "CakePHP CSS"],
  "CMS": ["WordPress", "Drupal", "Joomla", "Magento", "Shopify"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  "Cloud & Hosting": ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Heroku"]
};

const techLogos = {
  // Frameworks
  Laravel: "https://icon.icepanel.io/Technology/svg/Laravel.svg",
  Symfony: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  CodeIgniter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  Yii: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/yii-php-framework-icon.png",
  "CakePHP CSS": "https://www.svgrepo.com/show/341668/cakephp.svg",
  
  // CMS
  WordPress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  Drupal: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain.svg",
  Joomla: "https://www.svgrepo.com/show/508922/joomla.svg",
  Magento: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  Shopify: "https://cdn.iconscout.com/icon/free/png-512/free-shopify-226579.png?f=webp&w=512",
  
  // Databases
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Elasticsearch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  
  // Cloud & Hosting
  AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050",
  "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  DigitalOcean: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  Heroku: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
};

const TechnologiesToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies &amp; Tools We Use</h2>

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

export default TechnologiesToolsSection;