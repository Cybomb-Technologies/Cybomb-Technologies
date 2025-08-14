import React from 'react';
import styles from '../../../common-ui/enterprise-services/crm-platforms.module.css';

const salesforceTech = [
  {
    name: 'Salesforce Sales Cloud',
    logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
  },
  {
    name: 'Service Cloud',
    logo: 'https://diabsolut.com/wp-content/uploads/2020/03/Salesforce-Service-Cloud-Logo.png',
  },
  {
    name: 'Marketing Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Sf-marketingcloud-logo.png',
  },
  {
    name: 'Experience Cloud',
    logo: 'https://static1.squarespace.com/static/577d28ac1b631bee7ceef256/t/64aef141a52a2d5723ef746f/1689186625935/experience-cloud.png?format=1500w',
  },
  {
    name: 'Pardot (Account Engagement)',
    logo: 'https://assets.partnerfleet.app/variants/0pma0u81hsu3nd2eda403i9a5spz/ea5fa4208abc630da645ee21b35af85af516002067d66c1440b56ce6cc7d0e8d',
  },
  {
    name: 'Lightning Web Components (LWC)',
    logo: 'https://d259t2jj6zp7qm.cloudfront.net/images/v1544500043-trailhead_project_quick-start-lightning-web-components_pxnxms.png',
  },
  {
    name: 'Apex',
    logo: 'https://media.licdn.com/dms/image/v2/D4D12AQFpMentYRp9WQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685558134344?e=2147483647&v=beta&t=1wBotwV0-A1MkhCEv0wlCNl_gUsttQVxc0xHCeC5mfs',
  },
  {
    name: 'Visualforce',
    logo: 'https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_dev_visualforce/7998e9bbdff36b923bb01ff7a5f918f5_badge.png',
  },
  {
    name: 'MuleSoft',
    logo: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/11/mulesoft-logo.webp?w=528',
  },
  {
    name: 'Zapier',
    logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
  },
  {
    name: 'Workato',
    logo: 'https://images.ctfassets.net/p03bi75xct27/4HACe3dHPBgjTxMV37gf4r/0eecc4c58079405b3302bc0233b3d419/icon.png',
  },
  {
    name: 'Heroku',
    logo: 'https://cdn.worldvectorlogo.com/logos/heroku-4.svg',
  },
  {
    name: 'Tableau CRM (Einstein Analytics)',
    logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
  },
];

function SalesforcePlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Platforms &amp; Technologies We Work With</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {salesforceTech.map((tech, index) => (
              <div key={index} className={styles.card}>
                <img src={tech.logo} alt={tech.name} />
              </div>
            ))}
            {salesforceTech.map((tech, index) => (
              <div key={`dup-${index}`} className={styles.card}>
                <img src={tech.logo} alt={tech.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesforcePlatforms;
