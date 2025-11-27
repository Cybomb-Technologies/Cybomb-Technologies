import React from 'react';
import styles from '../../../common-ui/enterprise-services/crm-platforms.module.css';

const hubspotTech = [
  {
    name: 'HubSpot',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1200px-HubSpot_Logo.svg.png',
  },
  {
    name: 'Marketing Hub',
    logo: 'https://www.hubspot.com/hubfs/MarketingHub_Icon_2023_Gradient_RGB_24px.svg',
  },
  {
    name: 'Sales Hub',
    logo: 'https://www.hubspot.com/hubfs/Imported%20sitepage%20images/SalesHub_Icon_Gradient_RGB_24px.svg',
  },
  {
    name: 'Service Hub',
    logo: 'https://www.hubspot.com/hubfs/Imported%20sitepage%20images/ServiceHub_Icon_Gradient_RGB_24px.svg',
  },
  {
    name: 'Smart CRM Hub',
    logo: 'https://www.hubspot.com/hs-fs/hubfs/Smart%20CRM%20Color_Icon_Only-3.png?width=45&height=45&name=Smart%20CRM%20Color_Icon_Only-3.png',
  },
  {
    name: 'Operations Hub',
    logo: 'https://www.hubspot.com/hubfs/Imported%20sitepage%20images/OperationsHub_Icon_Gradient_RGB_24px.svg',
  },
  {
    name: 'HubSpot Content Hub (CMS)',
    logo: 'https://www.hubspot.com/hubfs/Product%20Icon%20one-1.svg',
  },
  {
    name: 'HubSpot Commerce Hub',
    logo: 'https://www.hubspot.com/hubfs/Product_Icon_Only_CommerceHub.svg',
  },
  {
    name: 'HubL (HubSpot Markup Language)',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuShkrgZQKYb_xEUwC_6S5PWTSl3hcd1FRw&s',
  },
];

function HubSpotPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Platforms &amp; Technologies We Work With</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {hubspotTech.map((tech, index) => (
              <div key={index} className={styles.card}>
                <img src={tech.logo} alt={tech.name} />
              </div>
            ))}
            {hubspotTech.map((tech, index) => (
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

export default HubSpotPlatforms;
