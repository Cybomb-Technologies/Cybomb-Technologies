import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const PythonTechnologies = () => {
  const techData = {
    "Frameworks": ["Django", "Flask", "FastAPI", "Pyramid", "CherryPy"],
    "Data Science": ["Pandas", "NumPy", "SciPy", "Matplotlib", "Scikit-learn"],
    "Automation": ["Celery", "Luigi"],
    "DevOps": ["Docker", "Kubernetes", "Ansible", "Terraform", "CI/CD"]
  };

  const techLogos = {
    "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "FastAPI": "https://svgmix.com/uploads/skillicons/151df7-fastapi.svg",
    "Pyramid": "https://cdn-icons-png.flaticon.com/512/6409/6409798.png",
    "CherryPy": "https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/cherries-icon.png",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "SciPy": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/SCIPY_2.svg/768px-SCIPY_2.svg.png?20200904111722",
    "Matplotlib": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/270px-Matplotlib_icon.svg.png?20150311090915",
    "Scikit-learn": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR076gk7M4pgH109JgmHK4jLLUtTSxX1D2oMQ&s",
    "Celery": "https://docs.celeryproject.org/en/stable/_static/celery_512.png",
    "Luigi": "https://luigi.readthedocs.io/en/stable/_static/luigi.png",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Python Technologies</h2>
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

export default PythonTechnologies;