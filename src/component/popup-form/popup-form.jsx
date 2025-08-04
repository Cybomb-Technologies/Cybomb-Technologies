import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import logo from "../../assets/logo.png";
import styles from './PopupForm.module.css';

function PopupForm() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [subscribe, setSubscribe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', '#003459');
    document.documentElement.style.setProperty('--primaryLight', '#1a4d6e');
    document.documentElement.style.setProperty('--primaryDark', '#00253e');
    document.documentElement.style.setProperty('--textLight', '#ffffff');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowModal(false);
      setShowThankYou(false); // Reset thank you message when closing
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const submissionData = {
      ...formData,
      subscribe,
    };

    await fetch("/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(submissionData),
});


    setShowThankYou(true); // Show thank you message
    setTimeout(() => handleClose(), 5000); // Auto-close modal
  } catch (error) {
    console.error("Submission error:", error);
    alert("There was a problem submitting your form. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      {showModal && (
        <div className={`modal fade show d-block ${styles.modalOverlay}`}>
          <div className={`modal-dialog modal-dialog-centered modal-lg ${isVisible ? styles.modalDialogVisible : styles.modalDialog}`}>
            <div className={`modal-content border-0 ${styles.modalContent}`}>
              
              {/* Modal Header */}
              <div className={`modal-header ${styles.modalHeader}`}>
                <div className="d-flex align-items-center">
                  <div className={styles.iconWrapper}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h5 className="modal-title mb-0 ms-2">Get In Touch With Us</h5>
                </div>
                <button 
                  type="button" 
                  className={`btn-close btn-close-white position-absolute end-0 me-3 ${styles.closeButton}`}
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body p-0">
                {showThankYou ? (
                  <div className={`p-5 text-center ${styles.thankYouMessage}`}>
                    <div className={styles.iconWrapper} style={{ margin: '0 auto 1rem' }}>
                      <i className="bi bi-check-circle-fill" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h3>Thank You!</h3>
                    <p>We've received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <div className="row g-0">
                    {/* Left Panel */}
                    <div className={`col-lg-5 d-none d-lg-block ${styles.leftPanel}`}>
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <div className={styles.decorativeCircle1}></div>
                        <div className={styles.decorativeCircle2}></div>

                        <div className="text-center mb-3" style={{ position: 'relative', zIndex: 1 }}>
                          <div className={styles.logoContainer}>
                            <img src={logo} alt="Company Logo" className={styles.logoImage} />
                          </div>
                        </div>

                        <h3 className="text-center mb-3" style={{ position: 'relative', zIndex: 1 }}>
                          We'd Love to Hear From You
                        </h3>
                        <p className="text-center px-3" style={{ position: 'relative', zIndex: 1 }}>
                          Have questions or need assistance? Fill out this form and our team will get back to you within 24 hours.
                        </p>

                        <div className="text-center mt-4" style={{ position: 'relative', zIndex: 1 }}>
                          <a href="tel:+919715092104" className={styles.phoneButton}>
                            <div className={styles.iconWrapper}>
                              <i className="bi bi-telephone-fill" style={{ color: "#003459" }}></i>
                            </div>
                            +91 97150 92104
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Form Section */}
                    <div className="col-lg-7">
                      <div className={`p-4 p-md-5 ${styles.formWrapper}`}>
                        <form onSubmit={handleSubmit}>
                          <div className="row g-3">
                            
                            {/* Name Field */}
                            <div className="col-12">
                              <label className="form-label fw-bold text-primary">
                                Name <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <div className={styles.iconWrapper}>
                                    <i className="bi bi-person-fill"></i>
                                  </div>
                                </span>
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Your name"
                                  required
                                />
                              </div>
                            </div>

                            {/* Email Field */}
                            <div className="col-12">
                              <label className="form-label fw-bold text-primary">
                                Email <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <div className={styles.iconWrapper}>
                                    <i className="bi bi-envelope-fill"></i>
                                  </div>
                                </span>
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="your.email@example.com"
                                  required
                                />
                              </div>
                            </div>

                            {/* Phone Input */}
                            <div className="col-12">
                              <label className="form-label fw-bold text-primary">
                                Phone Number <span className="text-danger">*</span>
                              </label>
                              <PhoneInput
                                country="in"
                                value={formData.phone}
                                onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                                inputClass={styles.phoneInputField}
                                buttonClass={styles.phoneInputButton}
                                dropdownClass={styles.phoneInputDropdown}
                                enableSearch
                                searchPlaceholder="Search countries..."
                              />
                            </div>

                            {/* Message */}
                            <div className="col-12">
                              <label className="form-label fw-bold text-primary">
                                Message <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <span className="input-group-text align-items-start pt-2">
                                  <div className={styles.iconWrapper}>
                                    <i className="bi bi-chat-left-text-fill"></i>
                                  </div>
                                </span>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  rows="4"
                                  value={formData.message}
                                  onChange={handleChange}
                                  placeholder="Tell us how we can help..."
                                  required
                                ></textarea>
                              </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="newsletter"
                                  checked={subscribe}
                                  onChange={(e) => setSubscribe(e.target.checked)}
                                />
                                <label className="form-check-label ms-2" htmlFor="newsletter">
                                  Subscribe to our newsletter
                                </label>
                              </div>
                            </div>

                            {/* Submit Button */}
                            <div className="col-12 mt-3">
                              <button
                                type="submit"
                                className={`btn fw-bold ${styles.submitButton}`}
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Sending...
                                  </>
                                ) : (
                                  <button className={styles.submitButton}>
  <i className="bi bi-send-fill"></i> Send Message
</button>
                                )}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupForm;