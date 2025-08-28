import { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import styles from './contact.module.css';

function Contactcontent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [subscribe, setSubscribe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handlePhoneChange = (value, country, e, formattedValue) => {
  //   setFormData(prev => ({ ...prev, phone: value }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...formData, subscribe}),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send message");

      setSubmitStatus({ success: true, message: data.message });
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubscribe(false);
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className="container mt-5">
          <h1>Get in Touch</h1>
          <p className="lead">
            We're here to help and answer any questions you might have. 
            Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Contact Methods */}
        <div className={`row g-4 ${styles.contactMethods}`}>
          {[
            {
              icon: "bi-geo-alt-fill",
              title: "Visit Us",
              content: "Cybomb Technologies – Prime Plaza, St. Thomas Mount, Chennai",
              link: "https://maps.app.goo.gl/wNjfo2WgKsKnZLty8",
              target:"_blank",
              btnText: "Get Directions",
           
            },
            {
              icon: "bi-telephone-fill",
              title: "Call Us",
              content: "+91 97150 92104",
              link: "tel:+919715092104",
              btnText: "Call Now"
            },
            {
              icon: "bi-envelope-fill",
              title: "Email Us",
              content: "support@cybomb.com",
              link: "mailto:support@cybomb.com",
              btnText: "Send Email"
            }
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className={`card h-100 border-0 ${styles.contactMethodCard}`}>
                <div className="card-body text-center">
                  <div className={styles.iconContainer}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="text-muted mb-4">{item.content}</p>
                  <a href={item.link} target={item.target} className="btn btn-primary px-4" style={{ backgroundColor: "#003459" }}>
                    {item.btnText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="row g-4 my-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm text-white" style={{ backgroundColor: "#003459" }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4">Contact Information</h3>
                
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className={styles.contactInfoText}>
                    <h5>Address</h5>
                    <p>
                      Cybomb Technologies LLP<br />
                      Prime Plaza – No.54/1, 1st street, Sripuram Colony<br />
                      St. Thomas Mount, Chennai, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className={styles.contactInfoText}>
                    <h5>Working Hours</h5>
                    <p>Mon-Fri: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                {/* Visit Our Office Block */}
                <div className={`${styles.contactInfoTextBlock} mt-4`}>
                  <h5>Visit Our Office</h5>
                  <p className="mb-0">
                    Located in the heart of Chennai's tech hub, our office is easily accessible
                    and equipped with modern facilities for client meetings and collaboration.
                  </p>
                </div>

                <hr className="my-4 bg-white opacity-25" />

                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex">
                  {[
                    { icon: "bi-instagram", url: "https://www.instagram.com/cybomb_tech/" },
                    { icon: "bi-linkedin", url: "https://www.linkedin.com/company/cybomb/" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-outline-light rounded-circle me-2"
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}

                  {/* X Logo */}
                  <a 
                    href="https://x.com/CybombTech"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light rounded-circle me-2"
                    style={{ padding: "0.45rem" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 1200 1227">
                      <path d="M714.163 519.284L1160.89 0H1055.2L675.85 442.798 370.346 0H0l468.127 684.109L0 1226.2h105.685l401.507-474.692L829.654 1226.2H1200z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <div className="col-lg-7">
            <img src="/images/banner/banner-2.webp" alt=""  className="img-fluid h-100 object-fit-cover"/>
          </div>
          {/* <div className="col-lg-7">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                {submitStatus && (
                  <div className={`alert alert-${submitStatus.success ? "success" : "danger"} mb-4`}>
                    {submitStatus.message}
                  </div>
                )}

                {showSuccess ? (
                  <div className="text-center py-4">
                    <svg className={styles.successAnimation} viewBox="0 0 52 52">
                      <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                    <h4 className="text-success mt-3">Message Sent!</h4>
                    <p>We'll get back to you within 24 hours.</p>
                    <button 
                      className="btn btn-outline-primary mt-2"
                      onClick={() => setShowSuccess(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-4" style={{ color: "#003459" }}>Send Us a Message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-12">
                          <label className="form-label fw-bold">
                            Name <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-person-fill" style={{ color: "#003459" }}></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-bold">
                            Email <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-envelope-fill" style={{ color: "#003459" }}></i>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="your.email@example.com"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-bold">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <PhoneInput
                            country="in"
                            value={formData.phone}
                            // onChange={handlePhoneChange}
                            inputProps={{
                              name: 'phone',
                              required: true,
                            }}
                            containerClass="react-tel-input w-100"
                            inputClass={styles.phoneInput}
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-bold">
                            Message <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-light align-items-start">
                              <i className="bi bi-chat-left-text-fill mt-1" style={{ color: "#003459" }}></i>
                            </span>
                            <textarea
                              className="form-control"
                              rows="4"
                              placeholder="Tell us how we can help..."
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="newsletter"
                              checked={subscribe}
                              onChange={(e) => setSubscribe(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="newsletter">
                              Subscribe to our newsletter
                            </label>
                          </div>
                        </div>

                        <div className="col-12 mt-3">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 py-3" style={{ backgroundColor: "#003459" }}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-send-fill me-2"></i> Send Message
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4279204989957!2d80.19743463488764!3d13.008399400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679b4aace7c3%3A0x3a52679b4aace7c3!2sHygee%20Works%20%E2%80%93%20PS%20Industrials!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cybomb Location"
        />
        <div className={styles.mapOverlay}>
          <a 
            href="https://maps.app.goo.gl/wNjfo2WgKsKnZLty8" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-primary shadow" style={{ backgroundColor: "#003459" }} 
          >
            <i className="bi bi-arrow-up-right-circle me-2"></i> Open in Maps
          </a>
        </div>
      </div>

      {/* Floating Action Button */}
      <a 
        href="https://wa.me/919715092104" 
        target="_blank" 
        rel="noreferrer"
        className={`btn btn-success rounded-circle shadow-lg ${styles.floatingBtn}`}
      >
        <i className="bi bi-whatsapp fs-4"></i>
      </a>
    </div>
  );
}

export default Contactcontent;