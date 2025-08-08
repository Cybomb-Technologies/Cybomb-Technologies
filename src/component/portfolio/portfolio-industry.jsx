import React from 'react';
import styles from './portfolio-industry.module.css';

const IndustryVerticals = () => {
  const industries = [
    { 
      icon: '🛍️', 
      title: 'eCommerce & Retail',
      description: 'Custom online stores, marketplace solutions, and retail tech integrations',
      projects: 42
    },
    { 
      icon: '🏥', 
      title: 'Healthcare & Wellness',
      description: 'HIPAA-compliant solutions, telemedicine platforms, and health analytics',
      projects: 28
    },
    { 
      icon: '📚', 
      title: 'Education & LMS',
      description: 'Learning management systems, edtech platforms, and virtual classrooms',
      projects: 35
    },
    { 
      icon: '🏢', 
      title: 'Enterprise Software',
      description: 'Custom ERP, CRM, and business process automation solutions',
      projects: 56
    },
    { 
      icon: '🛠️', 
      title: 'SaaS & Cloud',
      description: 'Scalable cloud applications and multi-tenant SaaS platforms',
      projects: 63
    },
    { 
      icon: '🎮', 
      title: 'Gaming & Entertainment',
      description: 'Interactive gaming platforms and immersive entertainment experiences',
      projects: 19
    },
  ];

  return (
    <section className={`py-5 ${styles.sectionBg}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`mb-3 ${styles.sectionTitle}`}>Industry Verticals We Serve</h2>
          <p className={`${styles.sectionSubtitle} mx-auto`}>
            We deliver tailored digital solutions across diverse industries, 
            combining deep domain expertise with cutting-edge technology
          </p>
        </div>
        
        <div className="row g-4">
          {industries.map((item, index) => (
            <div className="col-6 col-md-4 col-xl-2 text-center" key={index}>
              <div className={`${styles.card} p-4 rounded-4 h-100 d-flex flex-column`}>
                <div className={`${styles.iconContainer} mb-3`}>
                  <span className={styles.industryIcon}>{item.icon}</span>
                </div>
                <h5 className={`${styles.cardTitle} mb-3`}>{item.title}</h5>
                <p className={`${styles.cardDescription} mb-3`}>{item.description}</p>
                <div className={`${styles.projectCount} mt-auto`}>
                  <span className={styles.projectNumber}>{item.projects}</span>
                  <span> projects delivered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryVerticals;