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
    "Jakarta EE": "https://jakarta.ee/images/jakarta/jakarta-ee-logo-color.svg",
    "GraalVM": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/GraalVM_Logo_RGB.svg/228px-GraalVM_Logo_RGB.svg.png?20241126120655",
    "Spring MVC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
    "Hibernate": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original-wordmark.svg",
    "Struts": "https://www.svgrepo.com/show/354402/struts.svg",
    "Play": "https://www.playframework.com/assets/images/logos/play_full_color.png",
    "Vaadin": "https://vaadin.com/images/trademark/vaadin-logo.svg",
    "Maven": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
    "Gradle": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
    "Ant": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
    "JUnit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original-wordmark.svg",
    "Tomcat": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original-wordmark.svg",
    "WildFly": "https://images.seeklogo.com/logo-png/39/1/wildfly-logo-png_seeklogo-398694.png",
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