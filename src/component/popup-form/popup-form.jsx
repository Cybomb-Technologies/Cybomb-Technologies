import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import styles from "./popup-form.module.css";
import logo from "../../assets/logo.png";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaCommentDots,
} from "react-icons/fa";

const PopupForm = () => {
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      setAnimate(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual form submission logic here
    setSubmitted(true);
    setPhone("");

    // Hide popup after few seconds (optional)
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <div
          className={`modal-content p-4 rounded-4 position-relative ${animate ? styles.shutterIn : ""}`}
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
<div className="position-relative text-center mb-2">
  {/* Close button in top-right corner of the modal box */}
  <button
    type="button"
    className="btn-close position-absolute"
    aria-label="Close"
    onClick={() => setShowModal(false)}
    style={{
      top: "15px",
      right: "20px",
      zIndex: 10,
      backgroundColor: "#fff",
      borderRadius: "50%",
      padding: "6px",
      boxShadow: "0 0 5px rgba(0,0,0,0.1)"
    }}
  ></button>

  {/* Logo below the close button */}
  <div className="bg-white px-3 py-1 rounded-5 shadow-sm d-inline-block logo-container" style={{ maxWidth: 140 }}>
    <img src={logo} alt="Cybomb Technologies" className="img-fluid" />
  </div>
</div>


          {submitted ? (
            <div className="text-center my-4">
              <h5 className="text-success fw-bold">🎉 Thank you!</h5>
              <p className="text-muted small mb-0">
                We've received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h5 className="fw-bold text-dark mb-1">
                  We'd Love to Hear From You
                </h5>
                <p className="text-muted small">
                  Have questions or need assistance? Our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <form className="mt-3 px-2" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      onChange={setPhone}
                      inputClass="form-control"
                      containerClass="w-100"
                      inputStyle={{ width: "100%", paddingLeft: 48, height: 38 }}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <select className="form-select" required>
                      <option value="">Where did you Find us?</option>
                      <option value="google">Google</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="newsletter"
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="newsletter"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary px-4 py-2">
                      Submit Request →
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
