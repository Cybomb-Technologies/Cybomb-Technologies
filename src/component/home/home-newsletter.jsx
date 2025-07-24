import React from "react";
import "./home-newsletter.css";

function Homenewsletter() {
  return (
    <section className="newsletter-section text-center text-white" style={{ padding:"60px 0px" }}>
      <div className="container" data-aos="zoom-out-up">
        <h4 className="fw-bold mb-2">
          <span className="bg-primary px-4 p-2 rounded text-white">
            Stay in the Loop
          </span>
        </h4>
        <p className="text-light mt-5 fs-5">
          Get the latest updates on technology trends, project insights, and
          exclusive offers
        </p>

        <form className="row justify-content-center mt-5">
          <div className="col-md-6 mb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="col-auto mb-2">
            <button
              type="submit"
              className="btn btn-light btn-lg px-4 fw-semibold"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="form-check d-flex justify-content-center my-5">
          <input
            type="checkbox"
            className="form-check-input me-2 fs-5"
            id="newsletterCheck"
          />{" "}
          <p className="fs-5">Yes, subscribe me to your fresh release</p>
        </div>

        <div className="d-flex justify-content-center gap-4 small mt-2 text-light">
          <span>
            <i className="bi bi-shield-lock-fill me-1"></i>
            Privacy Protected
          </span>
          <span>
            <i className="bi bi-exclamation-triangle-fill me-1"></i>
            No Spam
          </span>
          <span>
            <i className="bi bi-arrow-repeat me-1"></i>
            Unsubscribe Anytime
          </span>
        </div>
      </div>
    </section>
  );
}

export default Homenewsletter;
