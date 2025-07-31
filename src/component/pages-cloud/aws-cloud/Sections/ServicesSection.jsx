import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Cloud Architecture & Setup',
    description:
      'Design and implement secure, scalable AWS environments tailored to your project or business',
  },
  {
    title: 'Web & App Hosting on EC2 / S3 / CloudFront',
    description:
      'Deploy websites and apps with high availability and blazing-fast speed',
  },
  {
    title: 'Database Hosting & Management',
    description:
      'Manage databases using RDS (MySQL, PostgreSQL), DynamoDB, or Aurora with backups and monitoring',
  },
  {
    title: 'Serverless Development (Lambda, API Gateway)',
    description:
      'Build scalable apps with zero infrastructure overhead and only pay for what you use',
  },
  {
    title: 'Cloud Migration',
    description:
      'Move your legacy systems or on-premise applications to the cloud without downtime',
  },
  {
    title: 'DevOps on AWS',
    description:
      'Automate deployments with services like CodePipeline, CodeDeploy, and CloudFormation',
  },
  {
    title: 'Storage & Backup Solutions (S3, Glacier)',
    description:
      'Store and archive your data with built-in redundancy and cost-efficiency',
  },
  {
    title: 'Security & Identity Management',
    description:
      'Set up IAM roles, VPCs, encryption, and security groups to protect your cloud assets',
  },
];

function ServicesSection() {
  return (
    <section className={styles.awsServicesSection}>
      <h2 className={styles.sectionTitle}>Our AWS Services Include</h2>
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