import { Link } from "react-router-dom";
import "./banner.css";
import React, { useState } from "react";
function HomeBanner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };
  return (
    <section className="home-banner text-white d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-2 fw-bold">
              <span className="gradient-text">Transforming Ideas</span>
              <br />
              <span>
                into <strong>Digital Reality</strong>
              </span>
            </h1>
            <p className="lead mt-3 fs-3 banner-paragrap-content">
              Welcome to Cybomb Technologies, your partner for cutting-edge
              mobile and web app development, AI integration, and SaaS
              solutions.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link
                to="/services"
                className="btn px-5 py-3 fw-semibold Explore-btn"
              >
                Explore Services <i className="ms-2 bi bi-arrow-right"></i>
              </Link>
              <a
                href="#consultation"
                className="btn btn-outline-light px-5 py-3 fw-semibold Consultation"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-5 my-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card shadow-lg" style={{backgroundColor:"rgb(255 255 255 / 18%)"}}>
                  <div className="card-body py-3 px-4">
                    <h2
                      className="card-title text-center mb-3 mt-0"
                      style={{ color: "white" }}
                    >
                      Start a Conversation
                    </h2>


                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control p-1"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                            <label htmlFor="name" style={{ color: "#7f8c8d" }}>
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className="form-floating">
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phone"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                            <label htmlFor="phone" style={{ color: "#7f8c8d" }}>
                              Phone Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="email" style={{ color: "#7f8c8d" }}>
                            Email Address
                          </label>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            style={{ height: "150px" }}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                          <label htmlFor="message" style={{ color: "#7f8c8d" }}>
                            Your Message
                          </label>
                        </div>
                      </div>

                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{
                            backgroundColor: "#3498db",
                            borderColor: "#3498db",
                          }}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
