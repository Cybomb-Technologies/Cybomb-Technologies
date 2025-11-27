import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "AEM Core": ["Sites", "Assets", "Forms", "Screens"],
  "Runtime & APIs": ["Adobe I/O Runtime", "Adobe I/O APIs"],
  Frontend: ["React", "Angular", "Vue", "SPA Editor"],
  Headless: ["AEM GraphQL", "Content Fragments API", "Sling Models"],
  "Integrations & Deployment": ["Adobe Analytics", "Adobe Target", "Adobe Campaign", "Adobe Managed Services",
    "AEM Cloud",
    "On-premise",],

  "Security & Performance": [
    "Dispatcher",
    "CDN",
    "SSO",
    "HTTPS",
    "Access Control",
  ],
};

const techLogos = {
  Sites:
    "https://help.xtm.cloud/connectors/en/image/uuid-12031a30-3123-9a67-6eef-0726c7dc20e0.png",
  Assets:
    "https://cdn-icons-png.flaticon.com/256/10841/10841383.png",
  Forms:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvFRt7Y_Wid_udRFVVtyTCZGrCHNrx166TA&s",
  Screens:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gBD66So0Z1X3xNR4Yxou98AZ_eCZl1fFGg&s",
  "Adobe I/O Runtime":
    "https://avatars.githubusercontent.com/u/12461336?s=280&v=4",
  "Adobe I/O APIs":
    "https://cdn-icons-png.flaticon.com/512/3234/3234207.png",
  React:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  Angular:
    "https://www.svgrepo.com/show/353396/angular-icon.svg",
  Vue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
  "SPA Editor":
    "https://cdn-prod.seismic.com/seismic-apps/480351e4-c91d-4ba0-a61d-718141cf1c1a/icons/095fc47f-e31f-442f-a67f-c8237d2cddda.png",
  "AEM GraphQL":
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/graphql-icon.png",
  "Content Fragments API":
    "https://cdn-icons-png.flaticon.com/512/8760/8760484.png",
  "Sling Models":
    "https://img.freepik.com/premium-vector/engine-icon-vector-image-can-be-used-car-repair_120816-227815.jpg",
  "Adobe Analytics":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEeT8NUT70aWgd4u_amkoDzfzUqfOyJNNjA&s",
  "Adobe Target":
    "https://cdn.iconscout.com/icon/free/png-256/free-adobe-target-icon-svg-png-download-2132668.png",
  "Adobe Campaign":
    "https://cdn.iconscout.com/icon/free/png-256/free-adobe-campaign-icon-svg-png-download-2132654.png",
  "Adobe Managed Services":
    "https://images.seeklogo.com/logo-png/35/2/adobe-experience-manager-logo-png_seeklogo-355432.png",
  "AEM Cloud":
    "https://cdn-icons-png.flaticon.com/512/748/748918.png",
  "On-premise":
    "https://cdn-icons-png.flaticon.com/512/5321/5321804.png",
  Dispatcher:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODwiVwW-lPbSHIhtDdm1D35ME7dqotvDAJw&s",
  CDN: "https://cdn-icons-png.flaticon.com/512/10988/10988181.png",
  SSO: "https://i0.wp.com/courseplay.co/wp-content/uploads/2017/10/sso.png?fit=800%2C800&ssl=1",
  HTTPS:
    "https://cdn-icons-png.flaticon.com/512/1008/1008894.png",
  "Access Control":
    "https://cdn-icons-png.flaticon.com/512/7426/7426463.png",
};

const AemTechnologiesSection = () => {
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

export default AemTechnologiesSection;
