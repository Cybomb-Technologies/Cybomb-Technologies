import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./banner-custom.css";

function HomeBanner() {
  const rotatingPhrases = [
    "Powerful Digital Solutions",
    "Scalable Mobile Apps",
    "AI-Powered Platforms",
    "Custom SaaS Systems"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const rotatingRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-banner text-white d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className="banner-content-wrapper">
              <h1 className="display-3 display-lg-2 fw-bold mb-4">
  <span className="gradient-text">Innovating Your Vision</span>
  <br />
  into <span className="dynamic-text-container">
    <strong className="dynamic-text">{rotatingPhrases[currentPhraseIndex]}</strong>
  </span>
</h1>
              <p className="lead fs-5 banner-paragraph-content px-3 px-md-5">
                We empower businesses with scalable mobile apps, intelligent AI systems, and seamless SaaS platforms — custom-built to fuel your growth.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-5 justify-content-center">
                <Link
                  to="/services"
                  className="btn px-4 px-lg-5 py-3 fw-semibold explore-btn"
                >
                  Explore Services <i className="ms-2 bi bi-arrow-right"></i>
                </Link>
                <a
                  href="#consultation"
                  className="btn btn-outline-light px-4 px-lg-5 py-3 fw-semibold consultation-btn"
                >
                  Let's Build Together
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