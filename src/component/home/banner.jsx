import { Link } from "react-router-dom";
import "./banner.css";
function HomeBanner() {
  return (
    <section className="home-banner text-white d-flex align-items-center" 
>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-2 fw-bold">
              <span className="gradient-text">Transforming Ideas</span><br />
              <span>into <strong>Digital Reality</strong></span>
            </h1>
            <p className="lead mt-3 fs-3 banner-paragrap-content">
              Welcome to Cybomb Technologies, your partner for cutting-edge mobile and web app
              development, AI integration, and SaaS solutions.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">

              <Link to="/services" className="btn px-5 py-3 fw-semibold Explore-btn">
                Explore Services <i className="ms-2 bi bi-arrow-right"></i>
              </Link>
              <a href="#consultation" className="btn btn-outline-light px-5 py-3 fw-semibold Consultation">
                Get a Free Consultation
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-5 text-center d-none d-lg-block">
            <img
              src="images/banner-1.jpg" // Dummy Image URL
              alt="Devices Preview"
              className="img-fluid rounded shadow-lg banner-image w-100" style={{height:"600px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
