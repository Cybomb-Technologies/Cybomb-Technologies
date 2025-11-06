import { Link } from "react-router-dom";
import "./usa-home-service.css";

function HomeService() {
  return (
    <section
      className="usa-home-service-section"
      style={{ padding: "60px 0px" }}
    >
      <div className="container text-center">
        <h2 className="usa-home-service-title fw-bold mb-2">
          Cybomb Technologies Speciality
        </h2>
        <p className="usa-home-service-subtitle">
          Comprehensive digital solutions tailored to your business needs
        </p>

        <div className="row mt-5">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm usa-service-card text-start border-0">
              <div
                className="card-img-top usa-service-img"
                style={{
                  backgroundImage: `url('images/home-image-1.jpg')`,
                }}
              ></div>
              <div className="card-body usa-service-card-body p-4">
                <h4 className="card-title display-7 fw-bold usa-service-card-title">
                  Mobile App Development
                </h4>
                <h6 className="text-primary">Native & cross-platform apps</h6>
                <p className="card-text usa-service-card-text">
                  Build powerful iOS and Android applications using the latest
                  technologies like React Native, Flutter, and native
                  frameworks.
                </p>
                <Link
                  to="/services/mobile-app-development"
                  className="btn usa-service-btn text-white fw-bold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm usa-service-card text-start border-0">
              <div
                className="card-img-top usa-service-img"
                style={{
                  backgroundImage: `url('images/home-image-2.jpg')`,
                }}
              ></div>
              <div className="card-body usa-service-card-body p-4">
                <h4 className="card-title display-7 fw-bold usa-service-card-title">
                  Web Development
                </h4>
                <h6 className="text-primary">High-performance websites</h6>
                <p className="card-text usa-service-card-text">
                  Create responsive, fast-loading websites and web applications
                  using modern frameworks like React, Next.js, and cutting-edge
                  web technologies.
                </p>
                <Link
                  to="/services/web-development"
                  className="btn usa-service-btn text-white fw-bold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-12 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm usa-service-card text-start border-0">
              <div
                className="card-img-top usa-service-img"
                style={{
                  backgroundImage: `url('images/home-image-3.jpg')`,
                }}
              ></div>
              <div className="card-body usa-service-card-body p-4">
                <h4 className="card-title display-7 fw-bold usa-service-card-title">
                  AI Integration
                </h4>
                <h6 className="text-primary">
                  Enhance-products,workflows and decisions
                </h6>
                <p className="card-text usa-service-card-text">
                  Our AI integration services help you seamlessly embed
                  artificial intelligence into your products, operations, and
                  customer experiences.
                </p>
                <Link
                  to="/services/ai-integration"
                  className="btn usa-service-btn text-white fw-bold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link
            to="services"
            className="btn usa-service-btn-view-all text-white fw-bold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeService;
