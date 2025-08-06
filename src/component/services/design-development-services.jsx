import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './design-development-services.module.css';

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Professional website development with responsive design, SEO optimization, and cutting-edge technologies.",
    image: "images/services-1.jpg",
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with React Native or native technologies for iOS and Android.",
    image: "images/services-2.jpg",
    link: "/services/mobile-app-development"
  },
  {
    id: 3,
    title: "E-commerce Development",
    description: "Custom e-commerce solutions with secure payment gateways, inventory management, and analytics.",
    image: "images/services-3.jpg",
    link: "/services/ecommerce-development"
  },
  {
    id: 4,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with scalable architecture.",
    image: "images/services-4.jpg",
    link: "/services/software-development"
  },
  {
    id: 5,
    title: "Game Development",
    description: "Engaging 2D/3D game development for mobile, web, and desktop platforms.",
    image: "images/services-5.jpg",
    link: "/services/game-development"
  },
  {
    id: 6,
    title: "Bespoke Development",
    description: "Fully customized solutions designed specifically for your unique business requirements.",
    image: "images/services-6.jpg",
    link: "/services/bespoke-development"
  },
  {
    id: 7,
    title: "API Development",
    description: "Secure and scalable API development and integration services for seamless connectivity.",
    image: "images/services-1.jpg",
    link: "/services/api-development"
  },
  {
    id: 8,
    title: "Custom Software Integration",
    description: "Integration of disparate systems to create unified workflows and data synchronization.",
    image: "images/services-2.jpg",
    link: "/services/custom-software-integration-services"
  },
  {
    id: 9,
    title: "SaaS Solutions",
    description: "Cloud-based software solutions with subscription models and multi-tenant architecture.",
    image: "images/services-3.jpg",
    link: "/services/saas-solutions"
  },
  {
    id: 10,
    title: "UI/UX Design",
    description: "User-centric design services focusing on usability, accessibility, and engaging experiences.",
    image: "images/services-4.jpg",
    link: "/services/ui-ux-design"
  },
  {
    id: 11,
    title: "Tech Consulting",
    description: "Strategic technology consulting to align your IT infrastructure with business goals.",
    image: "images/services-5.jpg",
    link: "/services/tech-consulting"
  },
  {
    id: 12,
    title: "AI Integration",
    description: "Implementing AI and machine learning solutions to automate processes and gain insights.",
    image: "images/services-6.jpg",
    link: "/services/ai-integration"
  }
];

export default function DesignDevelopmentServices() {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <section className={styles.serviceBg}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2 className={styles.servicesMainTitle}>Design and Development Services</h2>
          <p className={styles.servicesSubtitle}>Comprehensive solutions tailored to your business needs</p>
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