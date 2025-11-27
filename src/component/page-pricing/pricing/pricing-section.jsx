import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck, FaGlobe, FaMobile, FaEnvelope, FaCode, FaCogs } from "react-icons/fa";
import styles from "./pricing-section.module.css";
import { Link, useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState('INR');
  const [conversionRate, setConversionRate] = useState(0.012);

  // Pricing data in INR
  const pricingData = {
    economy: 6000,
    professional: 10700,
    cms: 18000
  };

  // Modern toggle button styles
  const internalStyles = {
    currencyToggleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '30px'
    },
    toggleWrapper: {
      display: 'flex',
      alignItems: 'center',
      background: '#f8f9fa',
      borderRadius: '50px',
      padding: '4px',
      border: '2px solid #e9ecef',
      position: 'relative',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    toggleOption: {
      padding: '10px 20px',
      borderRadius: '50px',
      border: 'none',
      background: 'transparent',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 2,
      color: '#495057',
      minWidth: '80px',
      textAlign: 'center'
    },
    toggleSlider: {
      position: 'absolute',
      top: '4px',
      left: '4px',
      height: 'calc(100% - 8px)',
      width: 'calc(50% - 4px)',
      background: 'linear-gradient(135deg, #007bff, #0056b3)',
      borderRadius: '50px',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0,123,255,0.3)'
    },
    activeOption: {
      color: '#fff'
    },
    currencyNote: {
      color: '#6c757d',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginTop: '5px'
    },
    currencyBadge: {
      background: 'linear-gradient(135deg, #28a745, #20c997)',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      marginLeft: '8px'
    }
  };

  const convertPrice = (priceInINR) => {
    if (currency === 'USD') {
      return (priceInINR * conversionRate).toFixed(2);
    }
    return priceInINR;
  };

  const getCurrencySymbol = () => {
    return currency === 'INR' ? '₹' : '$';
  };

  const handleCurrencyToggle = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

 const handleCheckout = (planType, price, planName) => {
  // Pass the selected currency and the converted price
  navigate('/checkout', { 
    state: { 
      planType, 
      price: currency === 'USD' ? (price * conversionRate).toFixed(2) : price,
      planName,
      currency: currency // Pass the selected currency
    } 
  });
};

  return (
    <section id="pricingsection" className={styles.pricingSection}>
      <Container>
        <div className={`text-center mb-5 ${styles.sectionHeader}`}>
          <h2 className={styles.sectionHeading}>Web Development Packages</h2>
          <p className={styles.sectionSubheading}>
            Transparent pricing with no hidden fees. All packages include responsive design,
            SEO optimization, and dedicated support.
          </p>
          
          {/* Modern Currency Toggle */}
          <div style={internalStyles.currencyToggleContainer}>
            <div style={internalStyles.toggleWrapper}>
              <div 
                style={{
                  ...internalStyles.toggleSlider,
                  left: currency === 'INR' ? '4px' : 'calc(50% + 0px)'
                }} 
              />
              <button
                style={{
                  ...internalStyles.toggleOption,
                  ...(currency === 'INR' && internalStyles.activeOption)
                }}
                onClick={() => handleCurrencyToggle('INR')}
              >
                INR ₹
              </button>
              <button
                style={{
                  ...internalStyles.toggleOption,
                  ...(currency === 'USD' && internalStyles.activeOption)
                }}
                onClick={() => handleCurrencyToggle('USD')}
              >
                USD $
              </button>
            </div>
            <div style={internalStyles.currencyNote}>
              Displaying prices in {currency} 
              <span style={internalStyles.currencyBadge}>
                {currency === 'INR' ? 'Indian Rupee' : 'US Dollar'}
              </span>
            </div>
          </div>
        </div>

        <Row className={styles.scrollRow}>
          {/* Economy Website */}
          <Col lg={4} md={12} className="mb-4">
            <div className={`${styles.pricingCard} ${styles.starter}`}>
              <div className={styles.popularBadge}>Economy</div>
              <h4 className={styles.planTitle}>Economy Website</h4>
              <p className={styles.planSubtitle}>One page website</p>
              <h3 className={styles.planPrice}>
                {getCurrencySymbol()}{convertPrice(pricingData.economy)}
                <span className={styles.pricePeriod}></span>
              </h3>
              <p className={styles.priceNote}>
                One-time Fee – No Hidden Charges
                {currency === 'USD' && <span style={{color: '#dc3545', fontWeight: '600'}}> </span>}
              </p>

              <ul className={styles.featuresList}>
                <li><FaCode className={styles.featureIcon} /> Onepage website</li>
                <li><FaGlobe className={styles.featureIcon} /> 500 MB hosting</li>
                <li><FaMobile className={styles.featureIcon} /> Mobile responsive</li>
                <li><FaEnvelope className={styles.featureIcon} /> Enquiry form</li>
                <li><FaCheck className={styles.featureIcon} /> Click to call option</li>
                <li><FaCheck className={styles.featureIcon} /> 1 Content revision</li>
              </ul>

              <Button 
                variant="outline-primary" 
                className={styles.ctaBtn}
                onClick={() => handleCheckout('economy', pricingData.economy, 'Economy Website')}
              >
                Launch Your Website
              </Button>
            </div>
          </Col>

          {/* Professional Website */}
          <Col lg={4} md={12} className="mb-4">
            <div className={`${styles.pricingCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>Professional</div>

              <h4 className={styles.planTitle}>Professional Website</h4>
              <p className={styles.planSubtitle}>5 page web design</p>
              <h3 className={styles.planPrice}>
                {getCurrencySymbol()}{convertPrice(pricingData.professional)}
                <span className={styles.pricePeriod}> </span>
              </h3>
              <p className={styles.priceNote}>
                One-time Fee – No Hidden Charges
                {currency === 'USD' && <span style={{color: '#dc3545', fontWeight: '600'}}> </span>}
              </p>

              <ul className={styles.featuresList}>
                <li><FaCheck className={styles.featureIcon} /> Professional web design</li>
                <li><FaGlobe className={styles.featureIcon} /> 1 GB hosting</li>
                <li><FaEnvelope className={styles.featureIcon} /> 2 Business email</li>
                <li><FaCheck className={styles.featureIcon} /> Professional SSL certificate</li>
                <li><FaMobile className={styles.featureIcon} /> Mobile responsive</li>
                <li><FaEnvelope className={styles.featureIcon} /> Enquiry form</li>
                <li><FaCheck className={styles.featureIcon} /> Click to call option</li>
                <li><FaCheck className={styles.featureIcon} /> WhatsApp Chat options</li>
                <li><FaCheck className={styles.featureIcon} /> 2 Content revision</li>
              </ul>

              <Button 
                variant="primary" 
                className={styles.ctaBtn}
                onClick={() => handleCheckout('professional', pricingData.professional, 'Professional Website')}
              >
                Get Professional Website
              </Button>
            </div>
          </Col>

          {/* Custom CMS Website */}
          <Col lg={4} md={12} className="mb-4">
            <div className={`${styles.pricingCard} ${styles.enterprise}`}>
              <div className={styles.popularBadge}>CMS</div>

              <h4 className={styles.planTitle}>Custom CMS Website</h4>
              <p className={styles.planSubtitle}>Upto 10 pages & CMS admin</p>
              <h3 className={styles.planPrice}>
                {getCurrencySymbol()}{convertPrice(pricingData.cms)}
                <span className={styles.pricePeriod}></span>
              </h3>
              <p className={styles.priceNote}>
                One-time Fee – No Hidden Charges
                {currency === 'USD' && <span style={{color: '#dc3545', fontWeight: '600'}}></span>}
              </p>

              <ul className={styles.featuresList}>
                <li><FaCogs className={styles.featureIcon} /> CMS admin login</li>
                <li><FaCode className={styles.featureIcon} /> Custom web design</li>
                <li><FaGlobe className={styles.featureIcon} /> 1 GB hosting</li>
                <li><FaEnvelope className={styles.featureIcon} /> 2 Business email</li>
                <li><FaCheck className={styles.featureIcon} /> Professional SSL certificate</li>
                <li><FaMobile className={styles.featureIcon} /> Mobile responsive</li>
                <li><FaEnvelope className={styles.featureIcon} /> Enquiry form</li>
                <li><FaCheck className={styles.featureIcon} /> Click to call option</li>
                <li><FaCheck className={styles.featureIcon} /> WhatsApp Chat options</li>
                <li><FaCheck className={styles.featureIcon} /> 3 Content revision</li>
              </ul>

              <Button 
                variant="outline-primary" 
                className={styles.ctaBtn}
                onClick={() => handleCheckout('cms', pricingData.cms, 'Custom CMS Website')}
              >
                Build Custom CMS Website
              </Button>
            </div>
          </Col>
        </Row>

        <div className={`text-center mt-5 ${styles.customSection}`}>
          <p className={styles.customText}>
            Need a custom solution?{" "}
            <Link to="/contact-us" className={styles.customLink}>
              Contact us for a tailored proposal
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;