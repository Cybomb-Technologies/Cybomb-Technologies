import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Custom Business Applications',
    description:
      'From internal dashboards to operations platforms—we build tools to run your business efficiently',
  },
  {
    title: 'Automation Solutions',
    description:
      'Replace spreadsheets and manual work with intelligent, automated software',
  },
  {
    title: 'Product Development (SaaS, Portals, Tools)',
    description:
      'Have a startup idea? We help you build and launch your own platform',
  },
  {
    title: 'Legacy System Replacement',
    description:
      'Upgrade outdated software with a sleek, modern, secure alternative tailored to current needs',
  },
  {
    title: 'Cross-Platform Solutions',
    description:
      'Access your software via web, mobile, or desktop with synchronized data and performance',
  },
  {
    title: 'Advanced Integrations',
    description:
      'Connect your systems with APIs, third-party tools, ERPs, CRMs, or custom services',
  },
//   {
//     title: 'Scalable Architecture Design',
//     description:
//       'Build software that grows with your users, data, and features',
//   },
];

function ServicesSection() {
  return (
    <section className={styles.bespokeServicesSection}>
      <h2 className={styles.sectionTitle}>Our Bespoke Development Services</h2>
      <div className={styles.sectionLayer}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
