import React, { useState } from "react";
import styles from "./Bannerform.module.css";

const API_URL = import.meta.env.VITE_API_BASE_URL; 

function Bannerform() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    subscribe: true
  });

  const [status, setStatus] = useState({
    type: "", // "success", "error", "loading"
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your requirement..." });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "banner-form", // Add source identifier
          createdAt: new Date().toISOString()
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus({ 
          type: "success", 
          message: "✅ Thank you! Your requirement has been submitted successfully. We'll contact you soon." 
        });
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          message: "",
          subscribe: true
        });
      } else {
        setStatus({ 
          type: "error", 
          message: result.message || "❌ Failed to submit your requirement. Please try again." 
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus({ 
        type: "error", 
        message: "❌ Network error. Please check your connection and try again." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-clear status message after 5 seconds
  React.useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.type]);

  return (
    <div className={styles.formContainer}>
      <form className={styles.requirementForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="phone"
            className={styles.inputField}
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            className={styles.inputField}
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="company"
            className={styles.inputField}
            placeholder="Company Name"
            required
            value={formData.company}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name="message"
            className={styles.textarea}
            rows="3"
            placeholder="Your Requirement"
            required
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        {/* Newsletter Subscription Option */}
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <span className={styles.checkboxText}>
              Subscribe to our newsletter for updates
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner}></span>
              Submitting...
            </>
          ) : (
            "Submit Your Requirement"
          )}
        </button>
        
        {/* Status Message */}
        {status.message && (
          <div className={`${styles.statusMessage} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default Bannerform;