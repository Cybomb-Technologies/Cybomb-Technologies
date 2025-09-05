import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const governanceSolutions = {
  "Governance Platforms": ["Collibra", "Informatica Axon", "Alation", "Atlan"],
  "Data Quality & MDM": [
    "Informatica Data Quality",
    "Talend Data Quality",
    "SAP Master Data Governance",
    "Oracle Enterprise Data Quality",
  ],
  "Metadata Management": [
    "Apache Atlas",
    "Informatica EDC",
    "Alation Data Catalog",
    "Azure Purview",
    "Google Data Catalog",
  ],
  "Lineage & Observability": [
    "Datafold",
    "OpenLineage",
    "Monte Carlo Data",
    "Bigeye",
  ],
  "Privacy & Compliance": [
    "OneTrust",
    "BigID",
    "Immuta",
    "Privacera",
    "Collibra Privacy & Risk",
  ],
};

const governanceSolutionsLogos = {
  // Data Governance Platforms
  Collibra:
    "https://www.datameer.com/wp-content/uploads/2023/04/yrh4ffcjynusx5wkhzyx.png",
  "Informatica Axon":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5769L_oTYhZzHqJtZ-dYJX5D_ydSbOjDUA&s",
  Alation:
    "https://images.saasworthy.com/alation_11773_logo_1607581065_sbeah.png",
  Atlan:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqwDnXOZzailHhDhIUvFbi44v3q9ObTsopg&s",

  // Data Quality & MDM
  "Informatica Data Quality":
    "https://companieslogo.com/img/orig/INFA-c4767c1c.png?t=1720244492",
  "Talend Data Quality":
    "https://images.icon-icons.com/2699/PNG/512/talend_logo_icon_169665.png",
  "SAP Master Data Governance":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TQC1_E4gh2fRrax8M3RbDfTQuMKtJNRxsg&s",
  "Oracle Enterprise Data Quality":
    "https://companieslogo.com/img/orig/ORCL-d5a587ae.png?t=1740130451",

  // Metadata Management
  "Apache Atlas":
    "https://data-universe.org/wp-content/uploads/2023/03/Imagen2-1.png",
  "Informatica EDC":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vrQif0dYzsxcNjMX0lorx8Fxa_GZVKeCkw&s",
  "Alation Data Catalog":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRol77QMUvIT5Bm0nGXK8RVydBXcQAiRbiSpw&s",
  "Azure Purview":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Microsoft_Purview_Logo.svg/2048px-Microsoft_Purview_Logo.svg.png",
  "Google Data Catalog": "https://www.svgrepo.com/show/375405/data-catalog.svg",

  // Data Lineage & Observability
  Datafold:
    "https://images.saasworthy.com/tr:w-112,h-0,c-at_max,e-sharpen-1/datafold_9355_logo_1612520621_dzuse.svg",
  OpenLineage: "https://avatars.githubusercontent.com/u/73205353?s=280&v=4",
  "Monte Carlo Data":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeQ9wp1n-PbuQni1ScfBAg0eyHqJq_gWi3Q&s",
  Bigeye:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovoPmyYRQdgUpD8QI9dPwLkUPIwDItXWHkg&s",

  // Privacy & Compliance Tools
  OneTrust:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpmVIEf6blKY8i-JfxDuOsDsgKKnmACDefVWYsHWdOPH3ITyDLFg6rr2wIp6KWlEkr8E&usqp=CAU",
  BigID:
    "https://astrix.security/wp-content/uploads/2024/06/icon-customer-stories-menu-bigid.png",
  Immuta:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZEZB4g4yjmTJygYAU0JzjpW6zEa68VRNpA&s",
  Privacera:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2aYDSyhTK3guGfEQQt-GsbINKsoTwClOTQ&s",
  "Collibra Privacy & Risk":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5IEfKLU5Faq2elhh6ILM-jH1T1QM5N9fxw&s",
};

const GovernanceToolsSection = () => {
  const categories = Object.keys(governanceSolutions);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                selected === cat ? styles.activeTab : ""
              }`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool Cards */}
        <div className={styles.cardGrid}>
          {governanceSolutions[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={governanceSolutionsLogos[tool]}
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

export default GovernanceToolsSection;
