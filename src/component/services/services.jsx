import { Link } from "react-router-dom";
import "./services.css";
function Services() {
  return (
    <>
      <div className="about-banner-img" style={{ padding: "110px 0px 60px" }}>
        <div className="container">
          <h1 className="text-white text-center">Our Services </h1>
          <div className="text-center mt-3">
            <a href="" className="text-white text-decoration-none">
              <i className="bi bi-house-door text-black"></i> Home
            </a>{" "}
            <a className="text-white text-decoration-none mt-2">
              <i className="bi bi-arrow-right text-black"></i> Services
            </a>
          </div>
        </div>
      </div>

      <section className="service-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="card services-card h-100" data-aos="zoom-out-up">
                <img
                  src="images/services-1.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">
                    Mobile App Development
                  </h5>
                  <p className="card-text text-center text-black">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <div className="text-center">
                    <Link to="/services/mobile-app" className="btn btn-primary">
                      Viwe More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="card services-card h-100" data-aos="zoom-out-up">
                <img
                  src="images/services-2.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">
                    Web Application Development
                  </h5>
                  <p className="card-text text-center text-black">
                    Scalable, responsive web applications built with modern
                    frameworks and technologies to power your business.
                  </p>
                  <div className="text-center">
                    <Link to="/services/web-app" className="btn btn-primary">
                      Viwe More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="card services-card h-100" data-aos="zoom-out-up">
                <img
                  src="images/services-3.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">
                    AI & Machine Learning Solutions
                  </h5>
                  <p className="card-text text-center text-black">
                    Harness the power of artificial intelligence and machine
                    learning to gain insights and automate processes.
                  </p>
                  <div className="text-center">
                    <Link to="/services/ai-machine-learning" className="btn btn-primary">
                      Viwe More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <div className="card services-card h-100" data-aos="zoom-out-up">
                <img
                  src="images/services-4.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">
                    SaaS Product Development
                  </h5>
                  <p className="card-text text-center text-black">
                    End-to-end development of cloud-based software-as-a-service
                    products with subscription management.
                  </p>
                  <div className="text-center">
                    <Link to="/services/saas-product" className="btn btn-primary">
                      Viwe More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <div className="card services-card h-100" data-aos="zoom-out-up">
                <img
                  src="images/services-5.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">
                    UI/UX Design Services
                  </h5>
                  <p className="card-text text-center text-black">
                    User-centered design services that create intuitive,
                    engaging, and accessible digital experiences.
                  </p>
                  <div className="text-center">
                    <Link to="/services/ui-ux" className="btn btn-primary">
                      Viwe More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <div className="card services-card h-100" data-aos="zoom-out-up">
                <img
                  src="images/services-6.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">
                    Software Consulting & Strategy
                  </h5>
                  <p className="card-text text-center text-black">
                    Strategic technology consulting to help you make informed
                    decisions and plan your digital roadmap.  
                  </p>
                  <div className="text-center">
                    <Link to="/services/software-consulting-Strategy" className="btn btn-primary">
                      Viwe More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
