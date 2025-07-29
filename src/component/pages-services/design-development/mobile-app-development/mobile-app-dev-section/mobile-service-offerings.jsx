import React from 'react';
import styles from './mobile-service-offerings.module.css';

const services = [
  {
    title: 'Custom Mobile App Development',
    description:
      'Native or cross-platform apps built to meet your business goals and user needs.',
  },
  {
    title: 'UI/UX Design for Mobile',
    description:
      'Mobile-first designs that feel intuitive and look stunning on all screen sizes.Build scalable, maintainable apps using native frameworks to deliver dynamic UI and robust architecture.',
  },
  {
    title: 'iOS & Android App Development',
    description:
      'Build specifically for the Apple App Store or Google Play using Swift, Kotlin, or Java.',
  },
  {
    title: 'Cross-Platform App Development',
    description:
      'One codebase, multiple platforms-using Flutter or React Native.',
  },
  {
    title: 'App Testing & Quality Assurance',
    description:
      'Ensure a smooth, bug-free experience across devices and operating systems.',
  },
  {
    title: 'App Store Deployment & Support',
    description:
      'We will help you get listed, approved, and ready to launch on the App Store & Play Store',
  },
  {
    title: 'Firebase Services Integration',
    description:
      'Use Firebase for real-time databases, authentication, storage, and analytics.',
  },
  {
    title: 'Post-Launch Maintenance',
    description:
      'Keep your app updated, secure, and running smoothly with ongoing support.',
  },
];

function MobileServiceOfferings() {
  return (
    <section className={styles.androidServicesSection}>
      <h2 className={styles.sectionTitle}>Our Android Service Offerings</h2>
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

export default MobileServiceOfferings;
