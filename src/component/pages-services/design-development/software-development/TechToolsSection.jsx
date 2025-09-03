import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";

const techData = {
  Languages: ["Python", "Java", "Dart", "JavaScript", "C#", "PHP"],
  Frontend: ["React", "Vue.js", "Angular"],
  Backend: ["Node.js", "Express.js", "Django", "Springboot", ".Net"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
  "Cloud & Devops": ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD"],
  Desktop: ["Electron.js", "JavaFX", ".NET MAUI", "Flutter"],
  APIs: ["REST", "GraphQL", "gRPC"],
};

const techLogos = {
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

  // Frontend
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",

  // Backend
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Springboot:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  ".Net":
    "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63064f1fedf422395124660e_e7d03466.png",

  // Databases
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "SQL Server":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",

  // Cloud / DevOps
  AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png",
  Azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "CI/CD":
    "https://arrowcore.com/wp-content/uploads/2022/03/3.8-768x500-c-default.png",

  // Desktop
  "Electron.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  JavaFX:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/JavaFX_text_logo.png",
  ".NET MAUI":
    "https://raw.githubusercontent.com/MahmudX/awesome-maui/main/dotnet_bot.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",

  // APIs
  REST: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png", // community-based logo
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  gRPC: "https://logo.svgcdn.com/l/grpc-8x.png",
};

const techUrls = {
  // Languages
  Python: "/services/python-development-service",
  Java: "",
  Dart: "/services/flutter-app-development",
  JavaScript: "/services/javascript-development-service",
  "C#": "/services/csharp-development-service",
  PHP: "/services/php-development-service",

  // Frontend
  React: "",
  "Vue.js": "",
  Angular: "/services/angular-development-service",

  // Backend
  "Node.js": "/services/nodejs-development-service",
  "Express.js": "/services/nodejs-development-service",
  Django: "/services/python-development-service",
  Springboot: "/services/spring-development-service",
  ".Net": "/services/dotnet-development-service",

  // Databases
  MongoDB: "",
  MySQL: "",
  PostgreSQL: "",
  "SQL Server": "",

  // Cloud & DevOps
  AWS: "/Services/aws-cloud",
  Azure: "/Services/azure-cloud",
  Docker: "",
  "GitHub Actions": "",
  "CI/CD": "",

  // Desktop
  "Electron.js": "",
  JavaFX: "",
  ".NET MAUI": "",
  Flutter: "/services/flutter-app-development",

  // APIs
  REST: "",
  GraphQL: "",
  gRPC: "",
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Software Development Technologies</h2>

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
            <Link
              key={item}
              to={techUrls[item]}
              className="text-decoration-none"
            >
              <div className={styles.techCard}>
                <img
                  src={techLogos[item]}
                  alt={`${item} logo`}
                  className={styles.logo}
                />
                <span>{item}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;
