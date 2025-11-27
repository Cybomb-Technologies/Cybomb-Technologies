import styles from "../../../common-ui/enterprise-services/crm-platforms.module.css";

const platforms = [
  {
    name: "Salesforce",
    logo: "https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg",
  },
  {
    name: "HubSpot CRM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAztOg2GIEf1DQEyUwP6pPFWu0fbxryhP6-w&s",
  },
  {
    name: "Zoho CRM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8BJlLUn5J6IluAyuuO7hK6yKTmyTARQ3OA&s",
  },
  {
    name: "Microsoft Dynamics 365",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqrE-RAidPznFrsOlTokHWxaXHl2Lo44DlQ&s",
  },
  {
    name: "Pipedrive",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cGUncukACK9cCNGNDTm1ihmaTmmebXhEgg&s",
  },
  {
    name: "Freshworks CRM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfre3qtddqt4WDekxmOUmxig9IvSr9oIkCHA&s",
  },
  {
    name: "SugarCRM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-bE00qCoIqxuXQbvpp5X17tmIuJxdLcSfg&s",
  },
  {
    name: "Custom-built CRMs",
    logo: "https://dhinatechnologies.com/wp-content/uploads/2024/08/Custom-CRM.webp",
  },
];

function CRMPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>CRM Platforms We Work With</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.card}>
                <img src={platform.logo} alt={platform.name} />
              </div>
            ))}
            {platforms.map((platform, index) => (
              <div key={`dup-${index}`} className={styles.card}>
                <img src={platform.logo} alt={platform.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CRMPlatforms;
