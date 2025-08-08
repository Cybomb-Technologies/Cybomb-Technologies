import React, { useState } from "react";
import styles from "./Bannerform.module.css";

const API_URL = import.meta.env.VITE_API_BASE; 

function Bannerform() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    requirement: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/api/banner-mail`, {
      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Sent successfully!");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          company: "",
          requirement: "",
        });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("❌ Error sending form.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.requirementForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="fullName"
            className={styles.inputField}
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            className={styles.inputField}
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
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
          />
          <input
            type="text"
            name="company"
            className={styles.inputField}
            placeholder="Company Name"
            required
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name="requirement"
            className={styles.textarea}
            rows="3"
            placeholder="Your Requirement"
            required
            value={formData.requirement}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit Your Requirement
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
}

export default Bannerform;
