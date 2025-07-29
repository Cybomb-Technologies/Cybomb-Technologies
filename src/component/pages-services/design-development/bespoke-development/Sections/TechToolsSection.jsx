import React, { useState } from "react";
import styles from "./TechToolsSection.module.css";

const techData = {
  Frontend: ["React.js", "Vue.js", "Angular", "Tailwind CSS"],
  Backend: ["Node.js", "Python (Django/Flask)", "Java (Spring Boot)", "PHP (Laravel)"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  Cloud: ["AWS", "Azure", "Google Cloud"],
  "DevOps & CI/CD": ["Docker", "GitHub Actions", "Jenkins"],
  "APIs & Security": ["REST", "GraphQL", "OAuth2", "JWT", "Encryption Protocols"],
};

const logoCDN = {
  // Frontend
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",

  // Backend
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python (Django/Flask)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java (Spring Boot)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "PHP (Laravel)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

  // Databases
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Firebase": "https://www.gstatic.com/devrel-devsite/prod/v4ac8e5417be5e7f3b346a660748bd671f967f255f0d5c740c1a40c765a8ee8de/firebase/images/lockup.svg",

  // Cloud
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Google Cloud": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_logo.svg",

  // DevOps & CI/CD
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Jenkins": "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",

  // APIs & Security
  "REST": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rest_API_Logo.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "OAuth2": "https://www.oauth.com/favicon.ico",
  "JWT": "https://jwt.io/img/pic_logo.svg",
  "Encryption Protocols": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", // general lock icon
};

const SoftwareTechnologies = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies We Use</h2>

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

        <div className={styles.cardGrid}>
          {techData[selected].map((tech) => (
            <div key={tech} className={styles.techCard}>
              <img
                src={logoCDN[tech]}
                alt={`${tech} logo`}
                className={styles.techLogo}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTechnologies;
