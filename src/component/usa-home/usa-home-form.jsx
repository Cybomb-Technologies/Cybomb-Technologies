import { useState, useEffect } from "react";
import "./usa-home-form.css";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function Homeform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
    subscribe: true, // Default to true for home page form
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Clear submit status message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare data for backend contact system
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Source: ${
          formData.source || "Not specified"
        }\n\nProject Details: ${formData.message}`,
        subscribe: formData.subscribe,
        source: "homepage-form", // Track where this came from
      };

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your project details have been submitted successfully. We'll get back to you soon.",
      });

      // Reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        source: "",
        message: "",
        subscribe: true,
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error.message ||
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact-form-section"
      id="start-project"
      style={{ padding: "60px 0px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-md-6" data-aos="zoom-out-up">
            <h2 style={{ color: "#003459" }}>Let's Talk About Your Project</h2>
            <p className="text-black fs-5 mt-3">
              Ready to transform your ideas into digital reality? Get in touch
              with our experts.
            </p>
            <img
              src="images/form-img.jpg"
              className="img-fluid rounded mt-3"
              alt="Team Discussion"
            />
          </div>

          {/* Right Side Form */}
          <div className="col-md-6" data-aos="zoom-out-up">
            <div className="card p-5 rounded-4 shadow-sm text-white border-0 form mt-1">
              {submitStatus && (
                <div
                  className={`alert alert-${
                    submitStatus.success ? "success" : "danger"
                  } mb-4`}
                >
                  {submitStatus.message}
                </div>
              )}

              {!submitStatus?.success ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-white fw-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control forminput"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white fw-bold">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control forminput"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white fw-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control forminput"
                      placeholder="Enter your phone number (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <small className="text-muted">
                      We'll use this for better communication
                    </small>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white fw-bold">
                      How did you find us?
                    </label>
                    <select
                      className="form-select forminput"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Google Search">Google Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="Previous Client">Previous Client</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white fw-bold">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      className="form-control forminput"
                      rows="4"
                      maxLength="500"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <small className="text-muted float-end">
                      {formData.message.length}/500 characters
                    </small>
                  </div>

                  <div className="mb-4">
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
                        className="form-check-label text-white"
                        htmlFor="newsletterSubscribe"
                      >
                        Subscribe to our newsletter for project updates and tech
                        insights
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gradient w-100 text-white py-3 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>
                        Get Free Consultation
                      </>
                    )}
                  </button>
                </form>
              ) : (
                // Success State
                <div className="text-center py-4">
                  <div
                    className="text-success mb-3"
                    style={{ fontSize: "4rem" }}
                  >
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h4 className="text-success mb-3">
                    Project Submitted Successfully!
                  </h4>
                  <p className="text-white mb-4">
                    Thank you for sharing your project details. Our expert will
                    contact you within 24 hours to discuss your requirements.
                  </p>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => setSubmitStatus(null)}
                  >
                    Submit Another Project
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homeform;
