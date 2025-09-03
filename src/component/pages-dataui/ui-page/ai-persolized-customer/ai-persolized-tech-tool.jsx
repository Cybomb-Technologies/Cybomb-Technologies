import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const aiCustomerExperienceCategories = {
  "Customer Data Platforms (CDP)": [
    "Tealium",
    "Salesforce CDP",
    "Oracle CX Unity"
  ],
  "AI-Powered Chatbots": [
    "Intercom",
    "LivePerson",
    "Ada",
    "Tidio"
  ],
  
  "Customer Journey Analytics": [
    "Mixpanel",
    "Amplitude",
    "Heap",
    "Pendo"
  ],
  "Voice & Sentiment Analysis": [
    "Observe.AI",
    "CallMiner",
    "Talkdesk",
    "Replicant",
    "Verint"
  ]
};

const aiCustomerExperienceLogoUrls = {
  // Customer Data Platforms
  Tealium: "https://www.svgrepo.com/show/354439/tealium.svg",
  "Salesforce CDP": "https://cdn.iconscout.com/icon/free/png-256/free-salesforce-logo-icon-svg-png-download-2945132.png",
  "Oracle CX Unity": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",

  // AI-Powered Chatbots
  Intercom: "https://img.icons8.com/color/512/intercom.png",
  LivePerson: "https://a.mktgcdn.com/p/GKmhkX8wZsYBxXO6dTyJ20PoVilsFv0l2KpjDUY9ufo/1024x1024.png",
  Ada: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_dad63cb7954c989da3523a03418e408b/ada-support-inc-ada.png",
  Tidio: "https://cdn.prod.website-files.com/625817c1528a479afc134612/64a429a8a6c85adf05e6927a_Tidio.png",


  // Customer Journey Analytics
  Mixpanel: "https://cdn.appsflyer.com/marketplace/static/logo/mixpanel.png",
  Amplitude: "https://cdn.prod.website-files.com/620a82e405544e9832aba8ba/681b73e2bf27fcd5a9e7b4f7_6499694ffa3185049d896547_AMPL-501a52ff.png",
  Heap: "https://avatars.githubusercontent.com/u/3272680?s=280&v=4",
  Pendo: "https://avatars.githubusercontent.com/u/5685215?s=280&v=4",


  // Voice & Sentiment Analysis
  "Observe.AI": "https://assets.wheelhouse.com/media/_solution_logo_04032024_60338387.png",
  CallMiner: "https://images.credly.com/images/9f49bcab-aa7f-4d03-86ee-5d93186627a9/blob.png",
  Talkdesk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFqdNr1cEg0wKs7qKE1E6xEQo61kWCowuSw&s",
  Replicant: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/replicate.png"
};

const AICustomerExperienceToolsSection = () => {
  const categories = Object.keys(aiCustomerExperienceCategories);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>AI Personalized Customer Experience Tools</h2>

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
          {aiCustomerExperienceCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={aiCustomerExperienceLogoUrls[tool]}
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

export default AICustomerExperienceToolsSection;
