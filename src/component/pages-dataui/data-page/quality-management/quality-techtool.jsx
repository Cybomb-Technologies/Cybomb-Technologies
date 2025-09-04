import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const qualityManagementCategories = {
  "Quality Management Systems (QMS)": [
    "ISO 9001",
    "Six Sigma",
    "TQM",
    "Lean Manufacturing",
    "CMMI",
  ],
  "Quality Management Software": [
    "SAP Quality Management",
    "Oracle Quality Management",
    "MasterControl",
    "Sparta TrackWise",
    "ETQ Reliance",
  ],
  "Testing & Inspection Tools": [
    "Automated Testing Tools",
    "NDT Tools",
    "Check Sheets",
    "Inspection Management Software",
  ],
  "Continuous Improvement Frameworks": [
    "Kaizen",
    "PDCA Cycle",
    "Benchmarking",
    "5S Methodology",
  ],
};

const qualityManagementLogos = {
  // Quality Management Systems (QMS)
  "ISO 9001":
    "https://images.seeklogo.com/logo-png/30/2/iso-logo-png_seeklogo-305564.png",
  "Six Sigma":
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Six_sigma-2.svg",
  TQM: "https://cdn-icons-png.flaticon.com/512/18497/18497224.png",
  "Lean Manufacturing":
    "https://cdn-icons-png.flaticon.com/512/16812/16812723.png",
  CMMI: "https://iconape.com/wp-content/png_logo_vector/cmmi-logo.png",

  // Quality Management Software
  "SAP Quality Management":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png",
  "Oracle Quality Management":
    "https://oracle-international.com/images/quality-assurance.png",
  MasterControl:
    "https://images.seeklogo.com/logo-png/47/3/mastercontrol-logo-png_seeklogo-470646.png",
  "Sparta TrackWise":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Q9CSSakQkPwEgw9ap88TXWhOXZswOvEXrA&s",
  "ETQ Reliance":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH3KiBYHk_vlnht_TIxr74eu2LPpNb3NbAQ&s",

  // Testing & Inspection Tools
  "Automated Testing Tools":
    "https://static.thenounproject.com/png/3538848-200.png",
  "NDT Tools":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQO91yu8QFSJM7NKR7CshoXtzOIAxpQedKQ&s",
  "Check Sheets": "https://cdn-icons-png.flaticon.com/512/1221/1221036.png",
  "Inspection Management Software":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuiVOR5E7r9sdyBTaYpKiFoka23U3i9uGJg&s",

  // Continuous Improvement Frameworks
  Kaizen: "https://cdn-icons-png.freepik.com/512/17008/17008893.png",
  "PDCA Cycle":
    "https://www.clipartmax.com/png/middle/274-2746399_customer-relationship-management-pdca-organization-circle-process-png.png",
  Benchmarking:
    "https://png.pngtree.com/png-clipart/20230504/original/pngtree-benchmark-line-icon-png-image_9139045.png",
  "5S Methodology":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SKIRzENCQlEFK6sbbMRyRZ3zDgLedc4GpA&s",
};

const QualityToolsSection = () => {
  const categories = Object.keys(qualityManagementCategories);
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
          {qualityManagementCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={qualityManagementLogos[tool]}
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

export default QualityToolsSection;
