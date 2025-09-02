import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const VersionControlTech = () => {
  const techData = {
    "Version Control": ["Git", "GitHub", "GitLab", "Bitbucket"],
    "CI/CD": ["GitHub Actions", "Jenkins", "GitLab CI/CD", "CircleCI"],
    "DevOps / Cloud": ["Docker", "Kubernetes", "AWS CodePipeline", "Azure DevOps"]
  };

  const techLogos = {
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "Bitbucket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    "GitHub Actions": "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
    "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    "GitLab CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "CircleCI": "https://avatars.githubusercontent.com/u/1231870?s=200&v=4",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "AWS CodePipeline": "https://svgmix.com/uploads/78f381-aws-codepipeline.svg",
    "Azure DevOps": "https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-icon-svg-png-download-3029870.png?f=webp"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Version Control & CI/CD Technologies</h2>
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
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50";
                }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersionControlTech;
