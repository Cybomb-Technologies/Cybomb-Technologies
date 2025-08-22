import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";

const techData = {
  Frontend: ["React.js", "Vue.js", "Angular", "Tailwind CSS"],
  Backend: ["Node.js", "Python (Django/Flask)", "Java (Spring Boot)", "PHP (Laravel)"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  Cloud: ["AWS", "Azure", "Google Cloud"],
  "DevOps & CI/CD": ["Docker", "GitHub Actions", "Jenkins"],
  "APIs & Security": ["REST", "GraphQL", "OAuth2", "JWT", "Encryption"],
};

const techLogos = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Tailwind CSS": "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",

  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python (Django/Flask)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java (Spring Boot)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "PHP (Laravel)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  AWS: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
  Azure: "https://icon.icepanel.io/Technology/svg/Azure.svg",
  "Google Cloud": "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg",

  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions": "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
  Jenkins: "https://icon.icepanel.io/Technology/svg/Jenkins.svg",

  REST: "https://cdn-icons-png.flaticon.com/512/907/907773.png",
  GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  OAuth2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/2560px-Oauth_logo.svg.png",
  JWT: "https://jwt.io/img/pic_logo.svg",
  Encryption: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
};

const techUrls = {
  // Frontend
  "React.js": "",
  "Vue.js": "",
  Angular: "/services/angular-development-service",
  "Tailwind CSS": "",
  
  // Backend
  "Node.js": "/services/nodejs-development-service",
  "Python (Django/Flask)": "/services/python-development-service",
  "Java (Spring Boot)": "",
  "PHP (Laravel)": "/services/php-development-service",
  
  // Databases
  MySQL: "",
  PostgreSQL: "",
  MongoDB: "",
  Firebase: "",
  
  // Cloud
  AWS: "/Services/aws-cloud",
  Azure: "/Services/azure-cloud",
  "Google Cloud": "/Services/google-cloud",
  
  // DevOps & CI/CD
  Docker: "",
  "GitHub Actions": "",
  Jenkins: "",
  
  // APIs & Security
  REST: "",
  GraphQL: "",
  OAuth2: "",
  JWT: "",
  Encryption: "",
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bespoke Development Technologies</h2>

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