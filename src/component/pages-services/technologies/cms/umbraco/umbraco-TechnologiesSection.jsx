import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  CMS: ["Umbraco Core", "Umbraco Cloud"],
  "E-commerce": ["Vendr", "uCommerce"],
  "Development Stack": [".NET 6+", "C#", "Razor Views"],
  "Data & Integrations": ["SQL Server", "Azure", "REST APIs", "GraphQL"],
  Security: ["HTTPS", "OAuth", "Role-based Access Control"],
  Hosting: ["Azure", "Umbraco Cloud", "AWS", "On-premises"],
};

const techLogos = {
  "Umbraco Core": "https://brandfetch.com/umbraco.com",
  "Umbraco Cloud":
    "https://umbraco.com/about-us/press/use-of-the-umbraco-brand",
  Vendr:
    "https://tracxn.com/d/companies/vendr/__Mmd8gP7oEbRutfVsqG8NJwrxiPG6t5CYSlhpTO71f3k",
  uCommerce:
    "https://ucommerce.com.br/categoria-produto/servicos/design/logomarca/",
  ".NET 6+": "https://en.wikipedia.org/wiki/File:Microsoft_.NET_logo.svg",
  "C#": "https://commons.wikimedia.org/wiki/File:C_Sharp_Logo_2023.svg",
  "Razor Views":
    "https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-9.0",
  "SQL Server": "https://techicons.dev/icons/microsoftsqlserver",
  Azure: "https://www.streamlinehq.com/icons/download/microsoft-azure--22630",
  "REST APIs":
    "https://www.iconpacks.net/free-icon/rest-api-blue-logo-22098.html",
  GraphQL: "https://graphql.org/brand/",
  HTTPS: "https://www.shutterstock.com/search/https-logo",
  OAuth: "https://commons.wikimedia.org/wiki/File:Oauth_logo.svg",
  "Role-based Access Control":
    "https://www.shutterstock.com/search/role-based-access-control",
  AWS: "https://en.wikipedia.org/wiki/File:Amazon_Web_Services_Logo.svg",
  "On-premises": "https://www.flaticon.com/free-icon/on-premise_5321804",
};
const UmbracoTechnologiesSection = () => {
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

export default UmbracoTechnologiesSection;
