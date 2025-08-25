import { Link } from "react-router-dom";
import "./home-service.css";

function HomeService() {
  return (
    <section
      className="text-black home-service-bg"
      style={{ padding: "60px 0px" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-2" data-aos="zoom-in-left" style={{color:"#003459"}}>
          Our Services
        </h2>
        <p className="black fs-6" data-aos="zoom-in-right">
          Comprehensive digital solutions tailored to your business needs
        </p>

        <div className="row mt-5">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm service-card text-start border-0 custom-card"
              data-aos="zoom-in-left"
            >
              <div
                className="card-img-top service-img"
                style={{
                  backgroundImage: `url('images/home-image-1.jpg')`,
                }}
              ></div>
              <div className="card-body custom-card-body p-4">
                <h4 className="card-title display-7 fw-bold text-white">
                  Mobile App Development
                </h4>
                <h6 className="text-primary">Native & cross-platform apps</h6>
                <p className="card-text custom-card-text">
                  Build powerful iOS and Android applications using the latest
                  technologies like React Native, Flutter, and native
                  frameworks.
                </p>
                <a href="/services/mobile-app-development" className="btn btn-gradient text-white fw-bold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm service-card text-start border-0 custom-card"
              data-aos="zoom-in-up"
            >
              <div
                className="card-img-top service-img"
                style={{
                  backgroundImage: `url('images/home-image-2.jpg')`,
                }}
              ></div>
              <div className="card-body custom-card-body p-4">
                <h4 className="card-title display-7 fw-bold text-white ">
                  Web Development
                </h4>
                <h6 className="text-primary">High-performance websites</h6>
                <p className="card-text custom-card-text">
                  Create responsive, fast-loading websites and web applications
                  using modern frameworks like React, Next.js, and cutting-edge
                  web technologies.
                </p>
                <a href="/services/web-development" className="btn btn-gradient text-white fw-bold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-12 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm service-card text-start border-0 custom-card"
              data-aos="zoom-in-right"
            >
              <div
                className="card-img-top service-img"
                style={{
                  backgroundImage: `url('images/home-image-3.jpg')`,
                }}
              ></div>
              <div className="card-body custom-card-body p-4">
                <h4 className="card-title display-7 fw-bold text-white">
                  AI Integration 
                </h4>
                <h6 className="text-primary">Enhance-products,workflows and decisions.</h6>
                <p className="card-text custom-card-text">
                  Our AI integration services help you seamlessly embed artificial intelligence into your products, operations, and customer experiences.
                </p>
                <a href="/services/ai-integration" className="btn btn-gradient text-white fw-bold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5" data-aos="zoom-in-up">
          <Link to="services" className="btn btn-gradient text-white fw-bold">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeService;
