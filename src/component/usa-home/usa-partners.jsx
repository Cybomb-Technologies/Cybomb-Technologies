import React from 'react';
import styles from './../common-ui/enterprise-services/crm-platforms.module.css';

const partners = [
  {
    name: 'Amazon Web Services (AWS)',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  },
  {
    name: 'Zoho',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png',
  },
  {
    name: 'Microsoft',
    logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
  },
];

function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Partners We Work With</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {partners.map((partner, index) => (
              <div key={index} className={styles.card}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div key={`dup-${index}`} className={styles.card}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
