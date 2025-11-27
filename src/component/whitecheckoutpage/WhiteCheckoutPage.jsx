import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './WhiteCheckoutPage.module.css';

const CheckoutPage = () => {
  const [plan, setPlan] = useState('starter');
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    billingAddress: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    payment: {
      method: 'credit-card',
      cardNumber: '',
      expiry: '',
      cvc: '',
      cardName: ''
    }
  });

  useEffect(() => {
    // Get plan from URL parameters
    const urlParams = new URLSearchParams(location.search);
    const planParam = urlParams.get('plan');
    if (planParam) {
      setPlan(planParam);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('billing.')) {
      const field = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        billingAddress: {
          ...prevState.billingAddress,
          [field]: value
        }
      }));
    } else if (name.startsWith('payment.')) {
      const field = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        payment: {
          ...prevState.payment,
          [field]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handlePaymentMethodChange = (method) => {
    setFormData(prevState => ({
      ...prevState,
      payment: {
        ...prevState.payment,
        method: method
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment processed successfully for ${getPlanDetails().name} plan! We will contact you within 24 hours to begin your white label app setup.`);
      setIsProcessing(false);
      // Redirect to success page or home
      navigate('/');
    }, 2000);
  };

  const getPlanDetails = () => {
    const plans = {
      starter: {
        name: 'Starter',
        price: 999,
        features: ['Custom logo & app name', 'Brand color theme', 'Basic admin panel', 'App store submission support', '30-day support']
      },
      pro: {
        name: 'Pro',
        price: 1999,
        features: ['Everything in Starter', 'Custom domain setup', 'Advanced admin features', 'Priority app submission', '90-day support', 'Custom onboarding']
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Everything in Pro', 'Multiple app instances', 'Dedicated account manager', 'Custom feature development', 'White-label support', 'SLA guarantee']
      }
    };
    
    return plans[plan] || plans.starter;
  };

  const currentPlan = getPlanDetails();

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.container}>
        {/* Improved Hero Section */}
        <div className={styles.checkoutHero}>
          <div className={styles.heroContent}>
            <h1>Launch Your Branded App</h1>
            <p className={styles.heroSubtitle}>Complete your white label app purchase and get to market in just 3 days</p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>🚀 3-Day Setup</span>
              <span className={styles.badge}>💫 Priority Support</span>
              <span className={styles.badge}>🛡️ Secure Payment</span>
            </div>
          </div>
        </div>

        <div className={styles.checkoutContent}>
          {/* Enhanced Checkout Summary Card with more content */}
          <div className={styles.checkoutSummaryCard}>
            <div className={styles.summaryHeader}>
              <h3>Order Summary</h3>
              <div className={styles.planBadge}>{currentPlan.name}</div>
            </div>
            
            <div className={styles.selectedPlan}>
              <div className={styles.planPriceMain}>
                {typeof currentPlan.price === 'number' ? `$${currentPlan.price}` : currentPlan.price}
              </div>
              <p className={styles.priceDescription}>One-time setup fee</p>
            </div>
            
            {/* Plan Comparison */}
            <div className={styles.planComparison}>
              <h4>Plan Comparison</h4>
              <div className={styles.comparisonTable}>
                <div className={styles.comparisonRow}>
                  <span>Setup Time</span>
                  <span className={styles.highlightText}>3 Business Days</span>
                </div>
                <div className={styles.comparisonRow}>
                  <span>Support Duration</span>
                  <span>{plan === 'starter' ? '30 days' : plan === 'pro' ? '90 days' : '1 year'}</span>
                </div>
                <div className={styles.comparisonRow}>
                  <span>App Store Submission</span>
                  <span className={styles.highlightText}>Included</span>
                </div>
                <div className={styles.comparisonRow}>
                  <span>Custom Branding</span>
                  <span className={styles.highlightText}>Full Customization</span>
                </div>
              </div>
            </div>
            
            <div className={styles.planFeatures}>
              <h5>What's included:</h5>
              <ul>
                {currentPlan.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.featureIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Value Proposition Section */}
            <div className={styles.valueProposition}>
              <h4>🎯 Why Choose White Label?</h4>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <strong>Time to Market</strong>
                  <p>Launch in days instead of months</p>
                </div>
                <div className={styles.valueItem}>
                  <strong>Cost Effective</strong>
                  <p>Save 70% vs custom development</p>
                </div>
                <div className={styles.valueItem}>
                  <strong>Proven Technology</strong>
                  <p>Built on tested, scalable platform</p>
                </div>
                <div className={styles.valueItem}>
                  <strong>Ongoing Updates</strong>
                  <p>Regular feature enhancements included</p>
                </div>
              </div>
            </div>

            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeHeader}>
                <span className={styles.guaranteeIcon}>🚀</span>
                <h4>3-Day Setup Guarantee</h4>
              </div>
              <p>We'll have your white label app ready in just 3 business days after payment confirmation.</p>
            </div>

            {/* Technical Specifications */}
            <div className={styles.techSpecs}>
              <h4>🛠 Technical Specifications</h4>
              <ul>
                <li>iOS & Android Native Apps</li>
                <li>React Native Technology</li>
                <li>Cloud Hosting Included (1st year)</li>
                <li>Admin Dashboard</li>
                <li>Push Notifications</li>
                <li>App Analytics</li>
                <li>Regular Security Updates</li>
              </ul>
            </div>

            {/* <div className={styles.supportInfo}>
              <h4>💫 What Happens Next?</h4>
              <ol>
                <li>Instant payment confirmation</li>
                <li>Onboarding call within 24 hours</li>
                <li>Brand assets collection</li>
                <li>App setup and customization</li>
                <li>App store submission</li>
              </ol>
            </div> */}

            {/* FAQ Section */}
            {/* <div className={styles.faqSection}>
              <h4>❓ Frequently Asked Questions</h4>
              <div className={styles.faqItem}>
                <strong>Can I upgrade later?</strong>
                <p>Yes, you can upgrade your plan at any time with prorated pricing.</p>
              </div>
              <div className={styles.faqItem}>
                <strong>What about app store fees?</strong>
                <p>Apple App Store ($99/year) and Google Play ($25 one-time) fees are separate.</p>
              </div>
              <div className={styles.faqItem}>
                <strong>Is there a money-back guarantee?</strong>
                <p>Yes, we offer a 14-day money-back guarantee if we can't deliver as promised.</p>
              </div>
            </div> */}
          </div>

          <div className={styles.checkoutFormContainer}>
            <form className={styles.checkoutForm} onSubmit={handleSubmit}>
              <div className={styles.formSection}>
                <h3>Contact Information</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formSection}>
                <h3>Billing Information</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="billing.line1">Address Line 1 *</label>
                  <input
                    type="text"
                    id="billing.line1"
                    name="billing.line1"
                    value={formData.billingAddress.line1}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="billing.line2">Address Line 2</label>
                  <input
                    type="text"
                    id="billing.line2"
                    name="billing.line2"
                    value={formData.billingAddress.line2}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="billing.city">City *</label>
                    <input
                      type="text"
                      id="billing.city"
                      name="billing.city"
                      value={formData.billingAddress.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="billing.state">State *</label>
                    <input
                      type="text"
                      id="billing.state"
                      name="billing.state"
                      value={formData.billingAddress.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="billing.zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="billing.zipCode"
                      name="billing.zipCode"
                      value={formData.billingAddress.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="billing.country">Country *</label>
                    <select
                      id="billing.country"
                      name="billing.country"
                      value={formData.billingAddress.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.formSection}>
                <h3>Payment Information</h3>
                <div className={styles.paymentMethods}>
                  <div className={styles.paymentMethod}>
                    <input 
                      type="radio" 
                      id="credit-card" 
                      name="paymentMethod" 
                      checked={formData.payment.method === 'credit-card'}
                      onChange={() => handlePaymentMethodChange('credit-card')}
                    />
                    <label htmlFor="credit-card">Credit Card</label>
                  </div>
                  <div className={styles.paymentMethod}>
                    <input 
                      type="radio" 
                      id="paypal" 
                      name="paymentMethod"
                      checked={formData.payment.method === 'paypal'}
                      onChange={() => handlePaymentMethodChange('paypal')}
                    />
                    <label htmlFor="paypal">PayPal</label>
                  </div>
                  <div className={styles.paymentMethod}>
                    <input 
                      type="radio" 
                      id="bank-transfer" 
                      name="paymentMethod"
                      checked={formData.payment.method === 'bank-transfer'}
                      onChange={() => handlePaymentMethodChange('bank-transfer')}
                    />
                    <label htmlFor="bank-transfer">Bank Transfer</label>
                  </div>
                </div>

                {formData.payment.method === 'credit-card' && (
                  <div className={styles.creditCardForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="payment.cardNumber"
                        value={formData.payment.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="expiry">Expiry Date</label>
                        <input
                          type="text"
                          id="expiry"
                          name="payment.expiry"
                          value={formData.payment.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="cvc">CVC</label>
                        <input
                          type="text"
                          id="cvc"
                          name="payment.cvc"
                          value={formData.payment.cvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="cardName">Name on Card</label>
                      <input
                        type="text"
                        id="cardName"
                        name="payment.cardName"
                        value={formData.payment.cardName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {formData.payment.method === 'paypal' && (
                  <div className={styles.paymentMethodInfo}>
                    <p>You will be redirected to PayPal to complete your payment after submitting the form.</p>
                  </div>
                )}

                {formData.payment.method === 'bank-transfer' && (
                  <div className={styles.paymentMethodInfo}>
                    <p>Bank transfer details will be sent to your email after form submission.</p>
                  </div>
                )}
              </div>

              <div className={styles.formActions}>
                <button 
                  type="submit" 
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Complete Purchase - ${typeof currentPlan.price === 'number' ? `$${currentPlan.price}` : 'Contact for Pricing'}`}
                </button>
                
                <div className={styles.securityNotice}>
                  <p>🔒 Your payment is secure and encrypted</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;