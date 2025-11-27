// WhiteLabelApp.jsx
import React, { useState } from "react";
import styles from "./WhiteLabelApp.module.css";
import { useNavigate } from "react-router-dom";

// --- Utility Components and Icons ---
const API_URL = import.meta.env.VITE_API_BASE_URL;
// Component for a clean header/navbar (using inline SVG for "Logo")
const Header = ({ scrollToSection }) => (
  <header className={styles.header}>
    <div
      className={styles.container}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className={styles.logo}>
        {/* Custom Logo SVG (simple geometric shape) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: "8px" }}
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M12 7v10" />
          <path d="M7 12h10" />
        </svg>
        <span>Whitelabel</span>
      </div>
      {/* Navigation buttons */}
      <nav className={styles.nav}>
        {["features", "demo", "pricing", "contact"].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={styles.navButton}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

const IconWrapper = ({ children }) => (
  <div className={styles.featureIconWrapper}>
    <div className={styles.featureIcon}>{children}</div>
  </div>
);

// Inline SVG Icons (mimicking lucide-react for professional look)
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 00-2 2v.22a2 2 0 00-2 2c-.01.44-.22.86-.56 1.14l-1.46 1.25a2 2 0 00.56 3.12l1.46 1.25c.34.28.55.7.56 1.14v.22a2 2 0 002 2 2 2 0 002 2c.01.44.22.86.56 1.14l1.46 1.25a2 2 0 00.56 3.12l1.46 1.25a2 2 0 002 2v.22a2 2 0 002 2h.44a2 2 0 002-2v-.22a2 2 0 002-2c.01-.44.22-.86.56-1.14l1.46-1.25a2 2 0 00.56-3.12l-1.46-1.25c-.34-.28-.55-.7-.56-1.14v-.22a2 2 0 00-2-2 2 2 0 00-2-2c-.01-.44-.22-.86-.56-1.14l-1.46-1.25a2 2 0 00-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 000 20A14.5 14.5 0 0012 2" />
    <path d="M2 12h20" />
  </svg>
);
const BarChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);
const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const SmartphoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const WhiteLabelApp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
    source: "white-label-page",
    formType: "white-label",
    referralSource: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    show: false,
    text: "",
    type: "",
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showCustomModal = (text, type = "success") => {
    setModalMessage({ show: true, text, type });
    setTimeout(
      () => setModalMessage({ show: false, text: "", type: "" }),
      4000
    );
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name || !formData.email) {
      showCustomModal(
        "Please fill in required fields (Name and Email).",
        "error"
      );
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showCustomModal("Please enter a valid email address.", "error");
      setIsSubmitting(false);
      return;
    }

    // Prepare data for backend
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "",
      message: `Company: ${formData.company}\n\nProject Requirements: ${formData.message}\n\nSource: White Label Page`,
      subscribe: formData.subscribe,
      source: "white-label-page",
      formType: "white-label",
      referralSource: formData.referralSource || "",
    };

    // API call to backend
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showCustomModal(
          "Thank you for your inquiry! Our team will contact you within 24 hours.",
          "success"
        );
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          subscribe: false,
          source: "white-label-page",
          formType: "white-label",
          referralSource: "",
        });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showCustomModal(
        error.message === "Failed to fetch"
          ? "Network error. Please check your connection and try again."
          : "There was an error submitting your form. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlanSelect = (plan) => {
    navigate(`/white-label-checkout?plan=${plan}`);
  };

  const playDemoVideo = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const features = [
    {
      icon: <SettingsIcon />, // Customization
      title: "Complete Brand Customization",
      description:
        "Your logo, app name, color scheme, and branding elements integrated throughout the entire application experience",
    },
    {
      icon: <GlobeIcon />, // Domain & Hosting
      title: "Dedicated Domain & Hosting",
      description:
        "Launch with your custom domain with SSL certification and enterprise-grade hosting infrastructure",
    },
    {
      icon: <BarChartIcon />, // Admin Dashboard
      title: "Comprehensive Admin Dashboard",
      description:
        "Full administrative control with real-time analytics, user management, and content customization capabilities",
    },
    {
      icon: <ZapIcon />, // Rapid Deployment
      title: "Rapid Deployment",
      description:
        "Go from concept to live production in just 72 hours with our optimized deployment pipeline",
    },
    {
      icon: <SmartphoneIcon />, // Native Mobile Apps
      title: "Native Mobile Applications",
      description:
        "Dedicated iOS and Android apps published under your brand on Apple App Store and Google Play Store",
    },
    {
      icon: <ShieldIcon />, // Security
      title: "White Label Security",
      description:
        "Complete white label solution with no third-party branding, enterprise-grade security, and data protection",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "one-time setup",
      features: [
        "Custom logo & app name integration",
        "Brand color theme implementation",
        "Basic admin panel access",
        "App store submission guidance",
        "30-day technical support",
        "Basic analytics dashboard",
      ],
      buttonText: "Get Started",
      planId: "starter",
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "one-time setup",
      features: [
        "All Starter features included",
        "Custom domain setup with SSL",
        "Advanced admin features & analytics",
        "Priority app store submission",
        "90-day premium support",
        "Custom onboarding session",
        "Performance optimization",
      ],
      buttonText: "Go Pro",
      planId: "pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      period: "tailored solution",
      features: [
        "All Professional features",
        "Multiple app instances",
        "Dedicated account manager",
        "Custom feature development",
        "White-label technical support",
        "SLA guarantee 99.9% uptime",
        "Advanced security features",
      ],
      buttonText: "Contact Sales",
      planId: "enterprise",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGrowth Inc",
      content:
        "The white label solution allowed us to launch our branded app in just 3 days. The process was seamless and the support team was exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Innovate Solutions",
      content:
        "We needed a custom app solution quickly, and this white label platform delivered beyond our expectations. Highly recommended for startups.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Ventures",
      content:
        "The ability to completely brand the app as our own while having full admin control has been a game-changer for our business.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className={styles.whiteLabelApp}>
      {/* Custom Modal Message Box (replacing alert()) */}
      {modalMessage.show && (
        <div className={`${styles.customModal} ${styles[modalMessage.type]}`}>
          {modalMessage.text}
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeVideoModal}>
              ✖
            </button>
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WrvKoUhuHyE?si=AWeIH-QGqQPTPtqP"
                title="White Label App Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
             
            </div>
          </div>
        </div>
      )}

      <Header scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>White Label Mobile App Solution</h1>
            <p className={styles.heroDescription}>
              Launch your fully branded mobile application in just 72 hours. Our
              complete white label solution includes custom branding, native iOS
              & Android apps, and full administrative control—no technical
              expertise required.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>72h</div>
                <div className={styles.statLabel}>Average Launch Time</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Apps Launched</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>Uptime Guarantee</div>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => scrollToSection("pricing")}
              >
                View Pricing Plans
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={playDemoVideo}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Complete White Label Solution</h2>
            <p>
              Everything you need to launch and manage your branded mobile
              application
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <IconWrapper>{feature.icon}</IconWrapper>
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
            <h2>See Our White Label Platform in Action</h2>
            <p>Experience how your branded app will look and function</p>
          </div>
          <div className={styles.demoContent}>
            <div className={styles.demoVideo}>
              <div className={styles.videoPlaceholder} onClick={playDemoVideo}>
                <div className={styles.playButton}>▶</div>
                <p>White Label App Demo Video</p>
                <span className={styles.videoDuration}>3:45</span>
              </div>
            </div>
            <div className={styles.demoFeatures}>
              <h3>What You'll Receive</h3>
              <ul>
                <li>Fully branded iOS and Android applications</li>
                <li>Custom app store listings and metadata</li>
                <li>White-labeled admin dashboard and control panel</li>
                <li>Your custom domain and complete branding throughout</li>
                <li>Complete source code ownership and transfer</li>
                <li>Regular updates and security patches</li>
                <li>Technical documentation and training materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Trusted by Businesses Worldwide</h2>
            <p>See what our clients say about our white label solution</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  "{testimonial.content}"
                </div>
                <div className={styles.testimonialRating}>
                  {renderStars(testimonial.rating)}
                </div>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that best fits your business requirements</p>
          </div>
          <div className={styles.pricingGrid}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.pricingCard} ${
                  plan.popular ? styles.popular : ""
                }`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
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
                <div className={styles.pricingCardFooter}>
                  <button
                    className={`${styles.btn} ${
                      plan.popular ? styles.btnPrimary : styles.btnSecondary
                    }`}
                    onClick={() => handlePlanSelect(plan.planId)}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.pricingFooter}>
            <p>
              All plans include our 3-day setup guarantee. Need a custom
              enterprise solution?{" "}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Frequently Asked Questions</h2>
            <p>
              Get answers to common questions about our white label solution
            </p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How long does the setup process take?</h3>
              <p>
                Most clients are live within 72 hours after providing their
                branding assets and requirements. The process includes app
                configuration, branding implementation, and initial testing.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do I need technical expertise to manage the app?</h3>
              <p>
                No technical expertise is required. Our intuitive admin
                dashboard allows you to manage content, users, and settings
                without any coding knowledge.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I customize features after launch?</h3>
              <p>
                Yes, we offer various customization options. The Professional
                and Enterprise plans include custom feature development to meet
                your evolving needs.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>What support is included?</h3>
              <p>
                All plans include technical support. Starter includes 30 days,
                Professional includes 90 days, and Enterprise includes ongoing
                white-label support with SLA guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Start Your White Label Journey Today</h2>
            <p>
              Ready to launch your branded mobile app? Complete the form below
              and our team will contact you within 24 hours.
            </p>
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
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Business Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@company.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="referralSource">
                  How did you hear about us?
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Project Requirements & Timeline</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your app requirements, target audience, timeline, and any specific features you need..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newsletterSubscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subscribe: e.target.checked,
                    }))
                  }
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="newsletterSubscribe"
                >
                  Subscribe to our newsletter for project updates and tech
                  insights
                </label>
              </div>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull}`}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Get Started with White Label"}
              </button>
              <div className={styles.formNote}>
                By submitting this form, you agree to our Privacy Policy and
                Terms of Service. We'll never share your information with third
                parties.
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelApp;
