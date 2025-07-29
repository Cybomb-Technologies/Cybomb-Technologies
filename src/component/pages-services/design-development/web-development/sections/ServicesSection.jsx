import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Custom Website Design',
    description:
      'Unique layouts, illustrations, and interactive elements that match your brand identity',
  },
  {
    title: 'Responsive Web Development',
    description:
      'Optimized for all devices—phones, tablets, laptops, and desktops',
  },
  {
    title: 'Landing Pages & Marketing Sites',
    description:
      'Perfect for promotions, product launches, or lead generation with high conversions',
  },
  {
    title: 'Business & Portfolio Websites',
    description:
      'Showcase your company, services, projects, and team with clean, professional design',
  },
  {
    title: 'eCommerce Website Development',
    description:
      'Online stores with shopping carts, secure payments, inventory systems, and more',
  },
  {
    title: 'Content Management Systems (CMS)',
    description:
      'Build websites you can update yourself using WordPress, Webflow, or custom CMS',
  },
  {
    title: 'Blog/News/Community Platforms',
    description:
      'Set up blogs or community-driven platforms with user interaction, comments, and moderation',
  },
  {
    title: 'Website Redesign & Optimization',
    description:
      'Refresh old websites with a modern look, better performance, and improved usability',
  },
];

function ServicesSection() {
  return (
    <section className={styles.websiteServicesSection}>
      <h2 className={styles.sectionTitle}>Our Website Development Services</h2>
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
