import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck, FaGlobe, FaChartLine, FaShoppingCart, FaDatabase, FaCogs, FaUsers, FaMobile, FaEnvelope, FaCode } from "react-icons/fa";
import styles from "./pricing-section.module.css";

const PricingSection = () => {
  return (
    <section  id="pricingsection" className={styles.pricingSection}>
      <Container>
        <div className={`text-center mb-5 ${styles.sectionHeader}`}>
          <h2 className={styles.sectionHeading}>Web Development Packages</h2>
          <p className={styles.sectionSubheading}>
            Transparent pricing with no hidden fees. All packages include responsive design, 
            SEO optimization, and dedicated support.
          </p>
        </div>

        <Row className={styles.scrollRow}>
  {/* Starter Plan */}
  <Col lg={4} md={12} className="mb-4">
    <div className={`${styles.pricingCard} ${styles.starter}`}>
              <h4 className={styles.planTitle}>Starter Website</h4>
              <p className={styles.planSubtitle}>
                Best for individuals, startups, and small businesses looking to get online quickly
              </p>
              <h3 className={styles.planPrice}>$1,500<span className={styles.pricePeriod}>one-time</span></h3>
              <p className={styles.priceNote}>
                One-time Fee – No Hidden Charges
              </p>
              
              <ul className={styles.featuresList}>
                <li>
                  <FaMobile className={styles.featureIcon} />
                  5 Custom Pages
                </li>
                <li>
                  <FaGlobe className={styles.featureIcon} />
                  Responsive Design
                </li>
                <li>
                  <FaChartLine className={styles.featureIcon} />
                  Basic SEO Setup
                </li>
                <li>
                  <FaEnvelope className={styles.featureIcon} />
                  Contact Form
                </li>
                <li>
                  <FaCheck className={styles.featureIcon} />
                  30 Days Free Support & Maintenance
                </li>
              </ul>
              
              <Button 
                variant="outline-primary" 
                className={styles.ctaBtn}
              >
                Launch Your Website
              </Button>
            </div>
          </Col>

          {/* Business Plan - Most Popular */}
          <Col lg={4} md={12} className="mb-4">
            <div className={`${styles.pricingCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>
                Most Popular
              </div>
              
              <h4 className={styles.planTitle}>Business Website</h4>
              <p className={styles.planSubtitle}>
                Perfect for small to medium businesses needing CMS, SEO, and e-commerce capabilities
              </p>
              <h3 className={styles.planPrice}>$3,500<span className={styles.pricePeriod}>one-time</span></h3>
              <p className={styles.priceNote}>
                One-time Fee – No Hidden Charges
              </p>
              
              <ul className={styles.featuresList}>
                <li>
                  <FaCode className={styles.featureIcon} />
                  Up to 10 Custom Pages
                </li>
                <li>
                  <FaCogs className={styles.featureIcon} />
                  CMS Integration
                </li>
                <li>
                  <FaChartLine className={styles.featureIcon} />
                  Advanced SEO
                </li>
                <li>
                  <FaShoppingCart className={styles.featureIcon} />
                  E-commerce Functionality
                </li>
                <li>
                  <FaUsers className={styles.featureIcon} />
                  Blog Setup
                </li>
                <li>
                  <FaCheck className={styles.featureIcon} />
                  60 Days Free Support & Maintenance
                </li>
              </ul>
              
              <Button 
                variant="primary" 
                className={styles.ctaBtn}
              >
                Grow Your Business Online
              </Button>
            </div>
          </Col>

          {/* Enterprise Plan */}
          <Col lg={4} md={12} className="mb-4">
            <div className={`${styles.pricingCard} ${styles.enterprise}`}>
              <h4 className={styles.planTitle}>Enterprise Solution</h4>
              <p className={styles.planSubtitle}>
                For enterprises needing scalable, secure, and fully customized web applications
              </p>
              <h3 className={styles.planPrice}>$7,500<span className={styles.pricePeriod}>one-time</span></h3>
              <p className={styles.priceNote}>
                One-time Fee – No Hidden Charges
              </p>
              
              <ul className={styles.featuresList}>
                <li>
                  <FaCode className={styles.featureIcon} />
                  Unlimited Pages
                </li>
                <li>
                  <FaCogs className={styles.featureIcon} />
                  Custom Web Application
                </li>
                <li>
                  <FaUsers className={styles.featureIcon} />
                  User Authentication
                </li>
                <li>
                  <FaDatabase className={styles.featureIcon} />
                  Database Integration
                </li>
                <li>
                  <FaCogs className={styles.featureIcon} />
                  API Development
                </li>
                <li>
                  <FaCheck className={styles.featureIcon} />
                  90 Days Free Support & Maintenance
                </li>
              </ul>
              
              <Button 
                variant="outline-primary" 
                className={styles.ctaBtn}
              >
                Book a Free Consultation
              </Button>
            </div>
          </Col>
        </Row>

        <div className={`text-center mt-5 ${styles.customSection}`}>
          <p className={styles.customText}>
            Need a custom solution?{" "}
            <a href="/contact-us" className={styles.customLink}>
              Contact us for a tailored proposal
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;