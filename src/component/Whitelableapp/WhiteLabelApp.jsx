import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WhiteLabelApp.module.css';

const WhiteLabelApp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handlePlanSelect = (plan) => {
    // Use React Router navigation
    navigate(`/checkout?plan=${plan}`);
  };

  const features = [
    {
      icon: '🎨',
      title: 'Custom Branding',
      description: 'Your logo, app name, and brand colors throughout the app'
    },
    {
      icon: '🌐',
      title: 'Custom Domain',
      description: 'Launch with your own domain or URL for complete brand ownership'
    },
    {
      icon: '⚙️',
      title: 'Full Admin Access',
      description: 'Complete control over your app with full admin panel access'
    },
    {
      icon: '🚀',
      title: 'Quick Launch',
      description: 'Go live in just 3 days with our streamlined setup process'
    },
    {
      icon: '📱',
      title: 'Native Apps',
      description: 'iOS and Android apps published under your brand name'
    },
    {
      icon: '🔒',
      title: 'White Label Security',
      description: 'Complete white label solution with no Cybomb branding'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: 'one-time setup',
      features: [
        'Custom logo & app name',
        'Brand color theme',
        'Basic admin panel',
        'App store submission support',
        '30-day support'
      ],
      buttonText: 'Get Started',
      planId: 'starter'
    },
    {
      name: 'Pro',
      price: '$1,999',
      period: 'one-time setup',
      features: [
        'Everything in Starter',
        'Custom domain setup',
        'Advanced admin features',
        'Priority app submission',
        '90-day support',
        'Custom onboarding'
      ],
      buttonText: 'Go Pro',
      planId: 'pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      features: [
        'Everything in Pro',
        'Multiple app instances',
        'Dedicated account manager',
        'Custom feature development',
        'White-label support',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      planId: 'enterprise'
    }
  ];

  return (
    <div className={styles.whiteLabelApp}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Launch Your Own Branded App in Just 3 Days!</h1>
            <p className={styles.heroDescription}>
              Transform our proven app into your own branded solution. Complete white label 
              service with your logo, colors, domain, and full admin control. No technical 
              expertise required.
            </p>
            <div className={styles.heroButtons}>
              <button 
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </button>
              <button 
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
              >
                See Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Complete White Label Solution</h2>
            <p>Everything you need to launch your branded mobile app</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className={styles.demoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>See It In Action</h2>
            <p>Experience the white label app with your branding</p>
          </div>
          <div className={styles.demoContent}>
            <div className={styles.demoVideo}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.playButton}>▶</div>
                <p>White Label App Demo Video</p>
              </div>
            </div>
            <div className={styles.demoFeatures}>
              <h3>What You Get</h3>
              <ul>
                <li>Fully branded iOS and Android apps</li>
                <li>Custom app store listings</li>
                <li>White-labeled admin dashboard</li>
                <li>Your domain and branding throughout</li>
                <li>Complete source code ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your business needs</p>
          </div>
          <div className={styles.pricingGrid}>
            {plans.map((plan, index) => (
              <div key={index} className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}>
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.planHeader}>
                  <h3>{plan.name}</h3>
                  <div className={styles.price}>{plan.price}</div>
                  <div className={styles.period}>{plan.period}</div>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className={`${styles.btn} ${plan.popular ? styles.btnPrimary : styles.btnSecondary}`}
                  onClick={() => handlePlanSelect(plan.planId)}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.pricingFooter}>
            <p>All plans include 3-day setup guarantee. Need a custom solution? <a href="#contact">Contact us</a></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Get Started Today</h2>
            <p>Ready to launch your white label app? Send us your details and we'll get you set up.</p>
          </div>
          <div className={styles.contactContent}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
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
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your app requirements, timeline, and any specific features you need..."
                ></textarea>
              </div>
              <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull}`}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhiteLabelApp;