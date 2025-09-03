import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const aiConsultingCategories = {
  "Machine Learning Platforms": [
    "TensorFlow",
    "PyTorch",
    "KNIME"
  ],
  "AI Roadmap & Planning": [
    "DataRobot",
    "H2O.ai",
    "C3 AI",
    "SAS Viya",
    "RapidMiner",
  ],
  "Enterprise AI Strategy": [
    "Azure AI",
    "AWS AI",
    "Google Cloud AI",
    "Oracle AI",
    "SAP AI",
  ],
};

const aiConsultingLogos = {



  TensorFlow: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  PyTorch: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
  KNIME: "https://elest.io/images/softwares/238/logo.png",

  // AI Roadmap & Planning
  DataRobot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwno994cLeN4Kpf1VOJtifl3mpB_oASbaK_g&s",
  "H2O.ai": "https://upload.wikimedia.org/wikipedia/commons/f/f3/H2O_logo_from_H2O.ai.png?20160218230403",
  "C3 AI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hHLSiuchXgp9RANaRVM9g61k7bRwt8R9pA&s",
  "SAS Viya": "https://www.sas.com/en/news/media-gallery/all-images/sas-logo-blue.transform/width319/image.1685459921715.png",
  RapidMiner: "https://www.stardog.com/img/connectors/logo-small/RapidMiner.png?_cchid=64b32da4106f4e3471ed00cee89ee954",


  // Enterprise AI Strategy
  "Azure AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "AWS AI": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "Google Cloud AI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrTg_Ygs_SNsALOCO1-s6-KYS2CKFd0LvfA&s",
  "Oracle AI": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "SAP AI": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
};

const AIConsultingSection = () => {
  const categories = Object.keys(aiConsultingCategories);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>AI Consulting & Strategy Tools</h2>

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

        {/* Tool Cards */}
        <div className={styles.cardGrid}>
          {aiConsultingCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={aiConsultingLogos[tool]}
                alt={`${tool} logo`}
                className={styles.logo}
              />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIConsultingSection;
