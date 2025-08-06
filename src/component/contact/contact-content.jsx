import { useState, useEffect } from "react";
import "./contact.css";

function Contactcontent() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-clear alert after 5s
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send message");

      setSubmitStatus({ success: true, message: data.message });
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        source: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contacts">
        <div className="container">
          <div className="row">
            {/* Left Contact Details */}
            <div className="col-sm-6" data-aos="zoom-out-up">
              <div className="card p-4 contact-card h-100 border-0 shadow">
                <h3 className="text-primary">Contact Information</h3>
                {/* Address */}
                <div className="d-flex mt-3 align-items-start">
                  <div className="pt-3">
                    <i className="bi bi-geo-alt-fill contact-icon"></i>
                  </div>
                  <div className="ms-3">
                    <p className="contact-text-color mb-0"><b>Address</b></p>
                    <p className="mb-0 fs-6 contact-text-color">
                      Cybomb Technologies LLP<br />
                      Hygee Works – PS Industrials<br />
                      Guindy, Chennai, India
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="d-flex mt-5 align-items-start">
                  <div className="pt-3">
                    <i className="bi bi-telephone-fill contact-icon" style={{ backgroundColor: "#16A34A" }}></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 text-white"><b className="contact-text-color">Phone</b></p>
                    <p className="mb-0">
                      <a href="tel:+919715092104" className="text-decoration-none contact-text-color">+91 9715092104</a>
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="d-flex mt-5 align-items-start">
                  <div className="pt-3">
                    <i className="bi bi-envelope-fill contact-icon" style={{ backgroundColor: "#9333EA" }}></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 contact-text-color"><b>Email</b></p>
                    <p className="mb-0">
                      <a href="mailto:support@cybomb.com" className="text-decoration-none contact-text-color">
                        support@cybomb.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* Hours */}
                <div className="d-flex mt-5 align-items-start">
                  <div className="pt-3">
                    <i className="bi bi-clock-fill contact-icon" style={{ backgroundColor: "#EA5800C" }}></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 contact-text-color"><b>Working Hours</b></p>
                    <p className="mb-0 contact-text-color">Mon-Fri: 9:00 AM – 6:00 PM</p>
                    <p className="mb-0 contact-text-color">Saturday: 10:00 AM – 4:00 PM</p>
                    <p className="mb-0 contact-text-color">Sunday: Closed</p>
                  </div>
                </div>
                <hr />
                {/* Social Icons */}
                <div className="d-flex">
                  <a href="https://www.instagram.com/cybomb_tech/?hl=en" target="_blank" rel="noreferrer">
                    <i className="footer-para-color mx-3 bi bi-instagram fs-4"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/cybomb/" target="_blank" rel="noreferrer">
                    <i className="footer-para-color mx-3 bi bi-linkedin fs-4"></i>
                  </a>
                  <a href="https://x.com/CybombTech" target="_blank" rel="noreferrer">
                    <i className="footer-para-color mx-3 fa-brands fa-x-twitter fs-3 pt-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-md-6" data-aos="zoom-out-up">
              <div className="card h-100 p-5 rounded-4 shadow-sm text-white border-0 form mt-1">
                {submitStatus && (
                  <div className={`alert alert-${submitStatus.success ? "success" : "danger"}`}>
                    {submitStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">First Name *</label>
                    <input
                      type="text"
                      className="form-control forminput"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">Email *</label>
                    <input
                      type="email"
                      className="form-control forminput"
                      placeholder="Enter your email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">Phone (+91)</label>
                    <input
                      type="tel"
                      className="form-control forminput"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">Where did you find us?</label>
                    <select
                      className="form-select forminput"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Google">Google</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">Message *</label>
                    <textarea
                      className="form-control forminput"
                      rows="4"
                      maxLength="500"
                      placeholder="Tell us about your project..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <small className="text-muted float-end">{formData.message.length}/500</small>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gradient w-100 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400px"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-300"
            title="Cybomb Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contactcontent;
