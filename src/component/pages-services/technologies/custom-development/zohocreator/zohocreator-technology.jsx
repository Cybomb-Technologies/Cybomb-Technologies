import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const ZohoCreatorTechnologies = () => {
  const techData = {
    "Zoho Platform": ["Zoho Creator", "Zoho Deluge", "Zoho Analytics", "Zoho Flow", "Zoho CRM"],
    "Integrations": ["Zoho Books", "Zoho Inventory", "Zoho People", "Zoho Desk", "Zoho Projects"],
    "Extensions": ["Custom Widgets", "API Connectors", "JavaScript Functions", "CSS Customization", "Mobile SDK"]
  };

  const techLogos = {
    "Zoho Creator": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/768px-ZOHO_logo_2023.svg.png?20231106145651",
    "Zoho Deluge": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuL21Yb9Xx_8UaZNTnarvF2QhNfkG7S9zlg&s",
    "Zoho Analytics": "https://img.icons8.com/?size=96&id=KJ0KehaD9qPs&format=png",
    "Zoho Flow": "https://wp-webhooks.com/wp-content/uploads/2022/04/icon-zoho-flow.png",
    "Zoho CRM": "https://zoho.codafish.net/wp-content/uploads/2022/08/crm-512.png",
    "Zoho Books": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tUWC-Il-UUbKfMvd_qOe89DHHO-tI8ZgGA&s",
    "Zoho Inventory": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGOixa-yGYCaApGpL3Djk_SkRQJJk_jTP0A&s",
    "Zoho People": "https://play-lh.googleusercontent.com/Cvq1q_Lgo_YlnT_wBkHM-TcxrX3SQUG05jLdxpS4vdfTJTJFYirhyjpnMCEwuYKF_Xg",
    "Zoho Desk": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqPgu33bKh3R8YCuHmj2rF0oYI-1nJIIB7w&s",
    "Zoho Projects": "https://store-images.s-microsoft.com/image/apps.12495.8ad8b41f-f709-42aa-8bbc-d2594ba6af28.6cd878d5-160b-4473-88b8-461890ad9291.8d3fbff5-6e73-4904-b8e9-46e534fc73bb.jpeg",
    "Custom Widgets": "https://zodevelopment.com/wp-content/uploads/2025/02/catalyst-logo.png",
    "API Connectors": "https://www.svgrepo.com/show/379931/api-integration-connection.svg",
    "JavaScript Functions": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "CSS Customization": "https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=512",
    "Mobile SDK": "https://img.icons8.com/?size=96&id=17836&format=png"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Zoho Technologies</h2>
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

export default ZohoCreatorTechnologies;