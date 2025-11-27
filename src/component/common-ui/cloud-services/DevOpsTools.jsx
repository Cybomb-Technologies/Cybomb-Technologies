import React from "react";
import styles from "./DevOpsTools.module.css";

function DevOpsTools() {
  const tools = [
    {
      title: "Docker",
      description: "Containerization platform to build, deploy, and run applications efficiently.",
      icon: "🐳",
    },
    {
      title: "GitHub Actions",
      description: "Automation for CI/CD workflows directly from your GitHub repository.",
      icon: "⚙️",
    },
    {
      title: "Jenkins",
      description: "Open-source automation server for building, testing, and deploying projects.",
      icon: "🚀",
    },
  ];

  return (
    <section className={styles["devops-section"]}>
      <h2 className={styles["devops-title"]}>DevOps Tools</h2>
      <div className={styles["devops-grid"]}>
        {tools.map((tool, index) => (
          <div key={index} className={styles["devops-card"]}>
            <div className={styles["devops-icon"]}>{tool.icon}</div>
            <h3 className={styles["devops-card-title"]}>{tool.title}</h3>
            <p className={styles["devops-description"]}>{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DevOpsTools;
