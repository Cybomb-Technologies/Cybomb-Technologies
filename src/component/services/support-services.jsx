import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './support-services.module.css';

const services = [
  {
    id: 1,
    title: "Hosting Services",
    description: "Reliable and secure hosting solutions with 99.9% uptime guarantee and 24/7 monitoring.",
    image: "images/support-1.jpg",
    link: "/services/hosting-service"
  },
  {
    id: 2,
    title: "Server Support",
    description: "Comprehensive server management, maintenance, and troubleshooting services.",
    image: "images/support-2.jpg",
    link: "/services/support-service"
  },
  {
    id: 3,
    title: "Development Support",
    description: "Ongoing development support, maintenance, and feature enhancements for your applications.",
    image: "images/support-3.jpg",
    link: "/services/development-support"
  },
  {
    id: 4,
    title: "Staff Augmentation",
    description: "Flexible staffing solutions to augment your team with skilled IT professionals.",
    image: "images/support-4.jpg",
    link: "/services/staff-agumentation"
  },
  {
    id: 5,
    title: "Digital Fulfilment",
    description: "End-to-end digital solutions including content management and digital asset delivery.",
    image: "images/support-5.jpg",
    link: "/services/digital-fulfilment-support"
  },
  {
    id: 6,
    title: "IT Support Services",
    description: "Comprehensive IT support including helpdesk, troubleshooting, and system administration.",
    image: "images/support-6.jpg",
    link: "/services/it-support"
  },
  {
    id: 7,
    title: "DevOps Services",
    description: "Continuous integration, deployment, and infrastructure automation solutions.",
    image: "images/support-7.jpg",
    link: "/services/devops-support"
  }
];

export default function SupportServices() {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <section className={styles.serviceBg}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2 className={styles.servicesMainTitle}>Support Services</h2>
          <p className={styles.servicesSubtitle}>Reliable technical support and maintenance for your digital infrastructure</p>
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