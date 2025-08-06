import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './enterprise-services.module.css';

const services = [
  {
    id: 1,
    title: "CRM Solutions",
    description: "Comprehensive Customer Relationship Management solutions to streamline your sales, marketing, and customer service.",
    image: "images/services-6.jpg",
    link: "/services/crm-services"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services including migration, management, and optimization.",
    image: "images/enterprise-2.jpg",
    link: "/services/cloud-solution"
  },
  {
    id: 3,
    title: "Data Engineering",
    description: "End-to-end data solutions including pipelines, warehousing, analytics, and business intelligence.",
    image: "images/enterprise-3.jpg",
    link: "/services/data-engineering"
  },
  {
    id: 4,
    title: "AI/ML Solutions",
    description: "Artificial Intelligence and Machine Learning solutions to automate processes and extract insights from data.",
    image: "images/enterprise-4.jpg",
    link: "/services/ai-ml-services"
  },
  {
    id: 5,
    title: "Salesforce Solutions",
    description: "Custom Salesforce implementations, integrations, and development services.",
    image: "images/enterprise-5.jpg",
    link: "/services/salesforce-services"
  },
  {
    id: 6,
    title: "HubSpot Solutions",
    description: "HubSpot CRM implementation, marketing automation, and sales enablement services.",
    image: "images/enterprise-6.jpg",
    link: "/services/hubspot-services"
  },
  {
    id: 7,
    title: "Zoho Solutions",
    description: "Zoho One implementation and customization across all Zoho applications.",
    image: "images/enterprise-7.jpg",
    link: "/services/zoho-services"
  }
];

export default function EnterpriseServices() {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <section className={styles.serviceBg}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2 className={styles.servicesMainTitle}>Enterprise Services</h2>
          <p className={styles.servicesSubtitle}>Scalable solutions for large organizations and complex business needs</p>
        </div>
        <div className="row">
          {displayedServices.map((service) => (
            <div key={service.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={`card ${styles.servicesCard} h-100`} data-aos="zoom-out-up">
                <img
                  src={service.image}
                  className={`card-img-top ${styles.serviceImage}`}
                  alt={service.title}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className={`card-title text-center text-white ${styles.cardTitle}`}>
                    {service.title}
                  </h5>
                  <p className={`card-text text-center text-white flex-grow-1 ${styles.cardText}`}>
                    {service.description}
                  </p>
                  <div className="text-center mt-auto">
                    <Link to={service.link} className={`btn btn-primary ${styles.serviceBtn}`}>
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          {!showAllServices ? (
            <button 
              onClick={() => setShowAllServices(true)}
              className={`btn btn-outline-primary ${styles.viewAllBtn}`}
            >
              View All Services
            </button>
          ) : (
            <button 
              onClick={() => setShowAllServices(false)}
              className={`btn btn-outline-primary ${styles.viewAllBtn}`}
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}