import React, { useState } from "react";
import styles from "./Software-Technologies.module.css";

const techData = {
  Languages: ["Python", "Java", "Dart", "JavaScript", "C#", "PHP"],
  Frontend: ["React", "Vue.js", "Angular"],
  Backend: ["Node.js", "Express.js", "Django", "Springboot", ".Net"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
  Cloud: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD"],
  Desktop: ["Electron.js", "JavaFX", ".NET MAUI", "Flutter"],
  APIs: ["REST", "GraphQL", "gRPC"],
};

// CDN logos mapped to each technology
const logoCDN = {
  // Languages
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

  // Frontend
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",

  // Backend
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Springboot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  ".Net": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",

  // Databases
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",

  // Cloud / DevOps
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", // closest for CI/CD

  // Desktop
  "Electron.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  JavaFX: "https://upload.wikimedia.org/wikipedia/commons/4/45/JavaFX_Logo.png",
  ".NET MAUI": "https://learn.microsoft.com/en-us/dotnet/images/hub/net-maui.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",

  // APIs
  REST: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rest_API_Logo.svg", // community-based logo
  GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  gRPC: "https://grpc.io/img/logos/grpc-icon-color.png",
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
