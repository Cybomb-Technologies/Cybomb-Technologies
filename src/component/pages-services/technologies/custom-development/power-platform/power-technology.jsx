import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const PowerPlatformTechnologies = () => {
  const techData = {
    "Core Components": ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents", "Dataverse"],
    "Connectors": ["SharePoint", "SQL Server", "Office 365", "Dynamics 365", "Azure Services"],
    "Integration": ["Azure Logic Apps", "Microsoft Graph API", "Power Platform APIs", "Azure Functions", "Azure API Management"]
  };

  const techLogos = {
    // Core Components
    "Power Apps": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Microsoft_Power_Platform_logo.svg/768px-Microsoft_Power_Platform_logo.svg.png?20231122081707",
    "Power Automate": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/144px-Microsoft_Power_Automate.svg.png?20240215095559",
    "Power BI": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/900px-New_Power_BI_Logo.svg.png?20210102182532",
    "Power Virtual Agents": "https://www.encorebusiness.com/wp-content/uploads/2022/06/PowerVirtualAgents.png",
    "Dataverse": "https://media.licdn.com/dms/image/v2/D4D12AQFLbaTZ_G4yNA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1667312789210?e=2147483647&v=beta&t=tAqMdBBcy07oSyI1Di2GyRo1_Lees-O984oB979WYQI",
    
    // Connectors
    "SharePoint": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/768px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png?20190925170659",
    "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    "Office 365": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/768px-Microsoft_365_%282022%29.svg.png?20231004051714",
    "Dynamics 365": "https://img.icons8.com/?size=96&id=TdZTMv5DI6kp&format=png",
    "Azure Services": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    
    
    // Integration
    "Azure Logic Apps": "https://symbols.getvecta.com/stencil_28/43_logic-apps.50018fa8c3.svg",
    "Microsoft Graph API": "data:image/png;base64,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",
    "Power Platform APIs": "https://img.icons8.com/?size=80&id=dFQ55kLSmeny&format=png",
    "Azure Functions": "https://www.vectorlogo.zone/logos/azurefunctions/azurefunctions-icon.svg",
    "Azure API Management": "https://www.svgrepo.com/show/358655/azure-api-management.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Power Platform Technologies</h2>

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

export default PowerPlatformTechnologies;