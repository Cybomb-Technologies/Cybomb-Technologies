import React from 'react';
import styles from './android-service-offerings.module.css';

const services = [
  {
    title: 'Custom Android App Development',
    description:
      'Bespoke, high-performance apps tailored to your requirements from simple tools to complex platforms.',
  },
  {
    title: 'Android Framework Development',
    description:
      'Build scalable, maintainable apps using native frameworks to deliver dynamic UI and robust architecture.',
  },
  {
    title: 'API Integrations',
    description:
      'Seamless integration of APIs to connect your app with backend systems and enhance data flow.',
  },
  {
    title: 'Migration & Upgrades',
    description:
      'Modernize and migrate legacy Android apps to the newest versions, minimizing disruptions.',
  },
  {
    title: 'Payment Gateway Integration',
    description:
      'Implement secure, reliable payment options (Stripe, PayPal, Amazon Pay) with industry compliance.',
  },
  {
    title: 'Google Services Integration',
    description:
      'Embed tools like Maps, Drive, Sign-In to boost app functionality.',
  },
  {
    title: 'Firebase Services Integration',
    description:
      'Use Firebase for real-time databases, authentication, storage, and analytics.',
  },
  {
    title: 'IoT, Wearables & AR/VR',
    description:
      'Expand app capabilities to smart devices, wearables (e.g. smartwatches), and immersive AR/VR experiences.',
  },
];

function AndroidServiceOfferings() {
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

export default AndroidServiceOfferings;
