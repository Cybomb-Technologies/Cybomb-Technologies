import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Laravel Ecosystem": ["Laravel", "Livewire", "Lumen", "Nova", "Forge"],
  "Frontend": ["Vue.js", "React", "Inertia.js", "Tailwind CSS", "Alpine.js"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
  "DevOps": ["Laravel Forge", "Envoyer", "Docker", "AWS", "DigitalOcean"]
};

const techLogos = {
  // Laravel Ecosystem
  Laravel: "https://icon.icepanel.io/Technology/svg/Laravel.svg",
  Livewire: "https://files.svgcdn.io/devicon/livewire.png",
  Lumen: "https://images.seeklogo.com/logo-png/27/2/lumen-logo-png_seeklogo-273621.png",
  Nova: "https://www.svgrepo.com/show/341981/laravel-nova.svg",
  Forge: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1566913083/catalog/laravel-forge/icon128x128.png",
  
  // Frontend
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Inertia.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Alpine.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg",
  
  // Databases
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  
  // DevOps
  "Laravel Forge": "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1566913083/catalog/laravel-forge/icon128x128.png",
  "Envoyer": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/envoy/envoy-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "DigitalOcean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
};

const TechnologiesToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Laravel Ecosystem & Technologies</h2>

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
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50"; // Fallback image
                }}
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