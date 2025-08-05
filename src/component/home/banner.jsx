import { Link } from "react-router-dom";
import "./banner-custom.css";
import React from "react";

function HomeBanner() {
  return (
    <section className="home-banner text-white d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          {/* Centered Content */}
          <div className="col-12 col-lg-8 text-center">
            <div className="banner-content-wrapper">
              <h1 className="display-3 display-lg-2 fw-bold mb-4">
                <span className="gradient-text">Transforming Ideas</span>
                <br />
                <span>
                  into <strong>Digital Reality</strong>
                </span>
              </h1>
              <p className="lead fs-5 banner-paragrap-content px-3 px-md-5">
                Welcome to Cybomb Technologies, your partner for cutting-edge
                mobile and web app development, AI integration, and SaaS
                solutions.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-5 justify-content-center">
                <Link
                  to="/services"
                  className="btn px-4 px-lg-5 py-3 fw-semibold Explore-btn"
                >
                  Explore Services <i className="ms-2 bi bi-arrow-right"></i>
                </Link>
                <a
                  href="#consultation"
                  className="btn btn-outline-light px-4 px-lg-5 py-3 fw-semibold Consultation"
                >
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;