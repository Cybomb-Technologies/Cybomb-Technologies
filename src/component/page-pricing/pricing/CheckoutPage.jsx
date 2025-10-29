import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCreditCard, FaUser, FaEnvelope, FaPhone, FaMapMarker, FaCheck } from 'react-icons/fa';
import styles from './checkout.module.css';
import { Link } from 'react-router-dom';
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { planType, price, planName } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    pincode: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!planType || !price) {
      navigate('/pricing');
    }
  }, [planType, price, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Order Details:', {
        plan: planName,
        price: price,
        customer: formData
      });
      
      // Redirect to success page or show success message
      alert('Order placed successfully! We will contact you shortly.');
      navigate('/');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlanFeatures = () => {
    const features = {
      economy: [
        'One page website',
        '500 MB hosting',
        'Mobile responsive design',
        'Enquiry form',
        'Click to call option',
        '1 Content revision'
      ],
      professional: [
        '5 page web design',
        '1 GB hosting',
        '2 Business emails',
        'Professional SSL certificate',
        'Mobile responsive',
        'WhatsApp Chat options',
        '2 Content revisions'
      ],
      cms: [
        'CMS admin login',
        'Up to 10 pages',
        '1 GB hosting',
        '2 Business emails',
        'Professional SSL certificate',
        'WhatsApp Chat options',
        '3 Content revisions'
      ]
    };
    
    return features[planType] || features.economy;
  };

  if (!planType || !price) {
    return null;
  }

  return (
    <section className={styles.checkoutSection}>
      <Container>
        <Button 
          variant="outline-secondary" 
          className={styles.backButton}
          onClick={() => navigate('/pricing')}
        >
          <FaArrowLeft className={styles.backIcon} />
          Back to Pricing
        </Button>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className={styles.checkoutHeader}>
              <h1 className={styles.checkoutTitle}>Complete Your Order</h1>
              <p className={styles.checkoutSubtitle}>
                You're purchasing: <strong>{planName}</strong>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className={styles.checkoutCard}>
              <Card.Body>
                <Row>
                  {/* Order Summary */}
                  <Col md={5} className={styles.orderSummary}>
                    <div className={styles.summaryHeader}>
                      <h3>Order Summary</h3>
                    </div>
                    
                    <div className={styles.planCard}>
                      <div className={`${styles.planBadge} ${styles[planType]}`}>
                        {planType.charAt(0).toUpperCase() + planType.slice(1)}
                      </div>
                      <h4 className={styles.planName}>{planName}</h4>
                      <div className={styles.planPrice}>₹{price.toLocaleString()}</div>
                      <p className={styles.priceNote}>One-time payment</p>
                    </div>

                    <div className={styles.featuresList}>
                      <h5>What's Included:</h5>
                      <ul>
                        {getPlanFeatures().map((feature, index) => (
                          <li key={index}>
                            <FaCheck className={styles.featureCheck} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.totalSection}>
                      <div className={styles.totalRow}>
                        <span>Subtotal:</span>
                        <span>₹{price.toLocaleString()}</span>
                      </div>
                      <div className={styles.totalRow}>
                        <span>GST (18%):</span>
                        <span>₹{(price * 0.18).toLocaleString()}</span>
                      </div>
                      <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                        <span>Total Amount:</span>
                        <span>₹{(price * 1.18).toLocaleString()}</span>
                      </div>
                    </div>
                  </Col>

                  {/* Checkout Form */}
                  <Col md={7} className={styles.checkoutForm}>
                    <Form onSubmit={handleSubmit}>
                      <div className={styles.formSection}>
                        <h4>
                          <FaUser className={styles.sectionIcon} />
                          Personal Information
                        </h4>
                        
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            isInvalid={!!errors.fullName}
                            placeholder="Enter your full name"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.fullName}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Email Address *</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                isInvalid={!!errors.email}
                                placeholder="your@email.com"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Phone Number *</Form.Label>
                              <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                isInvalid={!!errors.phone}
                                placeholder="+91 9876543210"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.phone}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name (optional)"
                          />
                        </Form.Group>
                      </div>

                      <div className={styles.formSection}>
                        <h4>
                          <FaMapMarker className={styles.sectionIcon} />
                          Address Information
                        </h4>
                        
                        <Form.Group className="mb-3">
                          <Form.Label>Address *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            isInvalid={!!errors.address}
                            placeholder="Enter your complete address"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.address}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>City *</Form.Label>
                              <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                isInvalid={!!errors.city}
                                placeholder="Your city"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.city}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Pincode *</Form.Label>
                              <Form.Control
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleInputChange}
                                isInvalid={!!errors.pincode}
                                placeholder="600001"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.pincode}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>

                      <div className={styles.formSection}>
                        <h4>
                          <FaEnvelope className={styles.sectionIcon} />
                          Project Requirements
                        </h4>
                        
                        <Form.Group className="mb-4">
                          <Form.Label>Additional Requirements</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleInputChange}
                            placeholder="Tell us about your project requirements, preferred colors, any specific features you need, etc."
                          />
                        </Form.Group>
                      </div>

                      <div className={styles.termsSection}>
                        <Form.Check
                          type="checkbox"
                          id="terms-agreement"
                          label={
                            <span>
                              I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>
                            </span>
                          }
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <span className={styles.spinner}></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaCreditCard className={styles.buttonIcon} />
                            Place Order - ₹{(price * 1.18).toLocaleString()}
                          </>
                        )}
                      </Button>

                      <p className={styles.securityNote}>
                        🔒 Your information is secure and encrypted
                      </p>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckoutPage;