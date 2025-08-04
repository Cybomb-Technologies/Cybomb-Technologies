import React from "react";
import "./home-newsletter.css";

function Homenewsletter() {
  return (
    <section className="newsletter-section text-white py-5">
      <div className="container" data-aos="zoom-out-up">
        <h4 className="headline mb-3 text-center">
          <span className="badge px-4 py-2 rounded-pill mx-auto d-inline-block">
            Stay in the Loop
          </span>
        </h4>

        <p className="description mb-4 text-center">
          Get the latest updates on technology trends, project insights, and exclusive offers.
        </p>

        <form className="newsletter-form d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <input
            type="email"
            className="form-control form-control-lg newsletter-input"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="btn btn-light btn-lg fw-semibold px-4 newsletter-btn"
          >
            Subscribe
          </button>
        </form>
          
              <div className="form-check d-flex justify-content-center align-items-center mt-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="newsletterCheck"
                />
                <label className="form-check-label mb-0" htmlFor="newsletterCheck">
                  Yes, subscribe me to your fresh releases
                </label>
              </div>

            
              <div className="extra-info text-light mt-4">
                <div className="d-flex justify-content-center gap-4 flex-wrap mb-2">
                  <span>
                    <i className="bi bi-shield-lock-fill me-1"></i>
                    Privacy Protected
                  </span>
                  <span>
                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                    No Spam
                  </span>
                </div>
                <div className="text-center">
                  <span>
                    <i className="bi bi-arrow-repeat me-1"></i>
                    Unsubscribe Anytime
                  </span>
                </div>
              </div>


      </div>
    </section>
  );
}

export default Homenewsletter;
