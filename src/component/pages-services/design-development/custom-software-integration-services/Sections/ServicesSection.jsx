import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'API-Based Integrations',
    description:
      'Use REST, GraphQL, or Webhooks to connect your software with third-party services like Stripe, Salesforce, WhatsApp, Razorpay, or Google Workspace',
  },
  {
    title: 'Database Synchronization',
    description:
      'Keep your data updated and consistent across multiple systems or locations',
  },
  {
    title: 'CRM & ERP Integration',
    description:
      'Seamlessly link your sales, support, inventory, HR, and finance tools with your website or app',
  },
  {
    title: 'E-commerce Platform Integration',
    description:
      'Connect online stores with POS systems, shipping APIs, inventory tools, or payment gateways',
  },
  {
    title: 'Legacy System Modernization & Bridging',
    description:
      'Bridge the gap between old systems and modern platforms with middleware or API wrappers',
  },
  {
    title: 'Internal Workflow Automation',
    description:
      'Create smart workflows that automatically move data between tools like Slack, Google Sheets, HubSpot, or your custom dashboard',
  },
  // {
  //   title: 'Custom Middleware Development',
  //   description:
  //     'Build software that acts as a bridge between disconnected systems and automates communication',
  // },
];

function ServicesSection() {
  return (
    <section className={styles.SwIntServicesSection}>
      <h2 className={styles.sectionTitle}>Our Software Integration Services</h2>
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
