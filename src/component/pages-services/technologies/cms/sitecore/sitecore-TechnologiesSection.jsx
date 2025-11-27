import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  Core: ["Sitecore XP", "XM", "XC"],
  "Front-end": ["React", "Next.js", "Angular", "Vue"],
  "Headless & APIs": ["Sitecore JSS", "GraphQL", "REST"],
  "Marketing & Automation": [
    "Sitecore Personalization",
    "Email Experience Manager",
    "Marketing Automation",
  ],
  "Hosting & Infrastructure": ["Sitecore Managed Cloud", "Azure", "AWS"],
  Security: ["SSL", "Identity Server", "SSO", "RBAC"],
};

const techLogos = {
  "Sitecore XP":
    "https://doc.sitecore.com/_next/image?url=https%3A%2F%2Fdelivery-sitecore.sitecorecontenthub.cloud%2Fapi%2Fpublic%2Fcontent%2Fmark-xp-dark&w=256&q=75",
  XM: "https://images.ctfassets.net/zi1ovlormku8/7zNad2EYjixInPsViqqgTp/21bb6fec74be5b29b989ccb662ec73db/XMCloud-logo-color.png",
  XC: "https://images.g2crowd.com/uploads/product/hd_favicon/2097b6224e8d70a807fecafc656a9c12/sitecore-commerce.jpg",
  React: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  "Next.js": "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  Angular: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
  Vue: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
  "Sitecore JSS":
    "https://img.icons8.com/?size=512&id=63257&format=png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  REST: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s",
  "Sitecore Personalization":
    "https://external-preview.redd.it/what-is-sitecore-personalize-v0-ZiGtJxnr4r_Z1vmPvWb8934cDOdjeUbdIVDFckIupEc.jpg?auto=webp&s=ea4dc93d50118350be01967a29f4d088a2257a72",
  "Email Experience Manager":
    "https://static.thenounproject.com/png/4676248-200.png",
  "Marketing Automation":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DOUvsqu1UrrWtITpSRH0VDBMQ5J_FYFaLw&s",
  "Sitecore Managed Cloud":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJ-OXK062AhNQC7WPC7UnsLi9Wnh1amNqRA&s",
  Azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  SSL: "https://www.vectorlogo.zone/logos/letsencrypt/letsencrypt-icon.svg",
  "Identity Server":
    "https://www.marcus-povey.co.uk/wp-content/40902000-8788-11e9-9e34-50b428f439cf.jpeg",
  SSO: "https://cdn.iconscout.com/icon/premium/png-256-thumb/sso-icon-svg-png-download-7607052.png",
  "RBAC":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwxu7ZtcyZvTIBKyy5_ByzHJ79UO6EzqyxR6ujT2R99U-n56bFBpcDwvsbiLs2B-mBNE&usqp=CAU",
};

const SitecoreTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies We Use</h2>

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

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitecoreTechnologiesSection;
