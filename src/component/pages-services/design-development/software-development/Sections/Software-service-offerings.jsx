import React from 'react';
import styles from './Software-service-offering.module.css';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'We build tailored solutions from scratch that solve real problems—fast, secure, and maintainable',
  },
  {
    title: 'Enterprise Software Solutions',
    description:
      'Internal tools, business automation systems, and enterprise apps that power your operations.',
  },
  {
    title: 'SaaS Product Development',
    description:
      'Build and launch your own cloud-based software product with multi-tenancy, billing, and analytics.',
  },
  {
    title: 'CRM & ERP Systems',
    description:
      'Manage customers, inventory, HR, or finances with intelligent platforms.',
  },
  {
    title: 'Desktop & Cross-Platform Applications',
    description:
      'Software that works on Windows, Mac, and Linux—or using Electron/Flutter for cross-platform reach.',
  },
  {
    title: 'Cloud-Based Application Development',
    description:
      'Scalable apps hosted on AWS, GCP, or Azure, accessible from anywhere',
  },
  {
    title: 'Software Modernization',
    description:
      'Rebuild or upgrade outdated legacy systems to modern, secure, and scalable stacks',
  },
  {
    title: 'API Development & Integration',
    description:
      'Connect software systems with RESTful or GraphQL APIs, third-party services, and databases.',
  },
];

function SoftwareServiceOfferings() {
  return (
    <section className={styles.softwareServicesSection}>
      <h2 className={styles.sectionTitle}>Our Software Development Service Offerings</h2>
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

export default SoftwareServiceOfferings;
