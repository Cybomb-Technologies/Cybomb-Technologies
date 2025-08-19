import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const NodeJSTechnologies = () => {
  const techData = {
    "Frameworks": ["Express", "NestJS", "Koa", "Fastify", "Socket.io"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    "Tools": ["TypeScript", "Webpack", "Babel", "Jest", "PM2"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure"]
  };

  const techLogos = {
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Koa": "https://www.vectorlogo.zone/logos/koajs/koajs-ar21.svg",
    "Fastify": "data:image/png;base64,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",
    "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "Elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Webpack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "Babel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
    "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "PM2": "https://images.seeklogo.com/logo-png/27/1/pm2-logo-png_seeklogo-273807.png",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Node.js Technologies</h2>
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
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
                onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NodeJSTechnologies;