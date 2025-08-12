import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const SpringTechnologies = () => {
  const techData = {
    "Core Frameworks": ["Spring Framework", "Spring Boot", "Spring MVC", "Spring WebFlux", "Spring Cloud"],
    "Data Access": ["Spring Data JPA", "Spring Data MongoDB", "Spring JDBC", "Spring Batch", "Spring Data Redis"],
    "Security & Integration": ["Spring Security", "Spring Integration", "Spring AMQP", "Spring Kafka", "Spring WS"],
    "Testing": ["Spring Test", "JUnit 5", "Mockito", "Testcontainers", "AssertJ"]
  };

  const techLogos = {
    "Spring Framework": "https://spring.io/images/icon-spring-framework-9fbc3ace4a3647f4cbe94e9ff06c40a6.svg",
    "Spring Boot": "https://spring.io/images/icon-spring-boot-6b0d0f6bafc0b2b9b0a5bdfbc3d52b6e.svg",
    "Spring MVC": "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    "Spring WebFlux": "https://spring.io/images/icon-spring-webflux-68f6d6b0b4b544fcf8f4e0decee12624.svg",
    "Spring Cloud": "https://spring.io/images/icon-spring-cloud-31c043bfb2c8a3a7c4f60ef1f7f4d456.svg",
    "Spring Data JPA": "https://spring.io/images/icon-spring-data-6892b2d1a7d45af9a0a0e2b0f8c8574c.svg",
    "Spring Data MongoDB": "https://www.mongodb.com/assets/images/global/favicon.ico",
    "Spring JDBC": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    "Spring Batch": "https://spring.io/images/icon-spring-batch-26b6786cc7e4b74f81c7c6c02ab73e5e.svg",
    "Spring Data Redis": "https://redis.io/images/redis-white.png",
    "Spring Security": "https://spring.io/images/icon-spring-security-b12f52936c0d14b97d61a20f8a60a8e8.svg",
    "Spring Integration": "https://spring.io/images/icon-spring-integration-cd3f1bdf34e6cb3450a47fb702f1d146.svg",
    "Spring AMQP": "https://spring.io/images/icon-spring-amqp-b2cfa8b8c524a9d5e65c02a6f86a26b4.svg",
    "Spring Kafka": "https://spring.io/images/icon-spring-kafka-22d236a329a9e9adf6e8137db1a03b43.svg",
    "Spring WS": "https://spring.io/images/icon-spring-ws-38d642e46368b9a0c8eeb2f1e17e6c5a.svg",
    "Spring Test": "https://spring.io/images/icon-spring-boot-6b0d0f6bafc0b2b9b0a5bdfbc3d52b6e.svg",
    "JUnit 5": "https://junit.org/junit5/assets/img/junit5-logo.png",
    "Mockito": "https://site.mockito.org/images/logo.png",
    "Testcontainers": "https://www.testcontainers.org/images/testcontainers-logo.svg",
    "AssertJ": "https://assertj.github.io/doc/assertj-core-logo.png"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Spring Technologies</h2>
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

export default SpringTechnologies;
