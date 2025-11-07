import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WhiteLabelApp.css';

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
    <div className="white-label-app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Launch Your Own Branded App in Just 3 Days!</h1>
            <p className="hero-description">
              Transform our proven app into your own branded solution. Complete white label 
              service with your logo, colors, domain, and full admin control. No technical 
              expertise required.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
              >
                See Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Complete White Label Solution</h2>
            <p>Everything you need to launch your branded mobile app</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="demo-section">
        <div className="container">
          <div className="section-header">
            <h2>See It In Action</h2>
            <p>Experience the white label app with your branding</p>
          </div>
          <div className="demo-content">
            <div className="demo-video">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p>White Label App Demo Video</p>
              </div>
            </div>
            <div className="demo-features">
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
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your business needs</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">{plan.price}</div>
                  <div className="period">{plan.period}</div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => handlePlanSelect(plan.planId)}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
          <div className="pricing-footer">
            <p>All plans include 3-day setup guarantee. Need a custom solution? <a href="#contact">Contact us</a></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get Started Today</h2>
            <p>Ready to launch your white label app? Send us your details and we'll get you set up.</p>
          </div>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
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
                <div className="form-group">
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
              <div className="form-row">
                <div className="form-group">
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
                <div className="form-group">
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
              <div className="form-group">
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
              <button type="submit" className="btn btn-primary btn-full">
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