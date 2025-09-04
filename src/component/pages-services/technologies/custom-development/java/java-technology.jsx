import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const JavaTechnologies = () => {
  const techData = {
    "Java Ecosystem": ["Java SE", "Java EE", "Spring Boot", "Jakarta EE", "GraalVM"],
    "Frameworks": ["Spring MVC", "Hibernate", "Struts", "Play", "Vaadin"],
    "Build Tools": ["Maven", "Gradle", "Ant", "JUnit"],
    "Deployment": ["Tomcat", "WildFly", "Docker", "Kubernetes"]
  };

  const techLogos = {
    "Java SE": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Java EE": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "Jakarta EE": "https://www.svgrepo.com/show/373717/jsp.svg",
    "GraalVM": "https://www.graalvm.org/resources/img/brand-guidelines/downloads/GraalVM-icon.png",
    "Spring MVC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "Hibernate": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQUCSAfBOjiuGWDZxEsm54094nLH09U-FOw&s",
    "Struts": "https://www.svgrepo.com/show/354402/struts.svg",
    "Play": "https://avatars.githubusercontent.com/u/319107?v=4",
    "Vaadin": "https://avatars.githubusercontent.com/u/1171922?v=4",
    "Maven": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
    "Gradle": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
    "Ant": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
    "JUnit": "https://svgicons.com/api/ogimage/?id=26052&n=junit",
    "Tomcat": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apache_Tomcat_logo.svg/1200px-Apache_Tomcat_logo.svg.png",
    "WildFly": "https://images.icon-icons.com/2699/PNG/512/wildfly_logo_icon_169793.png",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Java Technologies</h2>
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

export default JavaTechnologies;