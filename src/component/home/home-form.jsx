import { useState } from "react";
import "./home-form.css";

function Homeform() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    source: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent successfully!" });
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          source: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section" style={{ padding: "60px 0px" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side Content */}
          <div className="col-md-6" data-aos="zoom-out-up">
            <h2 style={{ color: "#003459" }}>Let's Talk About Your Project</h2>
            <p className="text-black fs-5 mt-3">
              Ready to transform your ideas into digital reality? Get in touch with our experts and let's discuss how we can bring your vision to life.
            </p>
            <img
              src="images/form-img.jpg"
              className="img-fluid rounded mt-3"
              alt="Team Discussion"
            />
            <div className="d-flex gap-3 mt-3">
              <span className="text-success small">✔️ Privacy Protected</span>
              <span className="text-danger small">🚫 No Spam</span>
              <span className="text-primary small">🔄 Unsubscribe Anytime</span>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6" data-aos="zoom-out-up">
            <div className="card p-5 rounded-4 shadow-sm text-white border-0 form mt-1">
              {submitStatus && (
                <div className={`alert alert-${submitStatus.success ? 'success' : 'danger'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label text-white fw-bold">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control forminput"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-bold">Email *</label>
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
                  <label className="form-label text-white fw-bold">Phone (+91)</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control forminput"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white fw-bold">Where did you find us?</label>
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
                  <label className="form-label text-white fw-bold">Message *</label>
                  <textarea
                    name="message"
                    className="form-control forminput"
                    rows="4"
                    maxLength="500"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <small className="text-muted float-end">{formData.message.length}/500</small>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-gradient w-100 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Homeform;