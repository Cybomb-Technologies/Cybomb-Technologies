import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const DatabaseTechnologies = () => {
  const techData = {
    "NoSQL": ["MongoDB", "Firebase"],
    "Relational": ["MySQL", "PostgreSQL", "SQL Server"],
    "ORM / Framework": ["Django ORM"]
  };

  const techLogos = {
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Firebase": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "SQL Server": "https://marstel.ru/assets/images/img-articles/2025/01/mssql_for_1c/mssql_logo.png",
    "Django ORM": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  };

    const categories = Object.keys(techData);
    const [selected, setSelected] = useState(categories[0]);
  
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>DataBase Technologies</h2>
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
  
  export default DatabaseTechnologies;