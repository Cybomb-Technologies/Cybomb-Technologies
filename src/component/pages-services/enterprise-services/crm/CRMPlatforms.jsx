import React from 'react';
import styles from '../../../common-ui/enterprise-services/crm-platforms.module.css';

const platforms = [
  { name: 'Salesforce', logo: 'https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg' },
  { name: 'HubSpot CRM', logo: 'https://cdn.prod.website-files.com/64f9b4455536d44a918695b3/65115c26cf6103bc7771d449_64b5254be3e1527059fedfc2_5842a629a6515b1e0ad75afa.png' },
  { name: 'Zoho CRM', logo: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg' },
  { name: 'Microsoft Dynamics 365', logo: 'https://cdn.prod.website-files.com/64f9b4455536d44a918695b3/65115c67432e8b2ade1ae861_64b5252b4f82bcb1e0dfd34c_60bf400d26ecf589a2ac3b82_Dynamics-365-logo.png' },
  { name: 'Pipedrive', logo: 'https://cdn.prod.website-files.com/64f9b4455536d44a918695b3/65115cac738d792054337f59_64b524f7a94b48cb24d326a4_Pipedrive_Logo_Green.png' },
  { name: 'Freshworks CRM', logo: 'https://brandlogos.net/wp-content/uploads/2024/04/freshworks-logo_brandlogos.net_c6t5u.png' },
  { name: 'SugarCRM', logo: 'https://www.sugarcrm.com/au/wp-content/themes/sugarcrm-child/dist/images/sugarcrm-logo-blk.svg' },
  { name: 'Custom-built CRMs', logo: 'https://dhinatechnologies.com/wp-content/uploads/2024/08/Custom-CRM.webp' }, 
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
