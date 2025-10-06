import "./about-news-letter.css";
import { Link } from "react-router-dom";
function Aboutnewsletter() {
  return (
    <>
      <section className="news-letter" style={{ padding: "60px 0px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card border-0 newsletter-card p-5 text-center d-flex align-items-center mt-2 mt-lg-0 h-100"  data-aos="fade-up">
                <h2 className="text-primary fw-bold">Get in Touch</h2>
                <Link to="/contact-us" className="news-letter-btn mt-3 text-decoration-none">
                  Start Your Project
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 newsletter-card p-3 text-center d-flex justify-content-center align-items-center mt-4 mt-md-0 h-100"  data-aos="fade-up">
                <div className="row">
                  <div className="col-sm-10 mx-auto">
                    <img
                      src="./images/about-img3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 mt-3">
              <div className="card border-0 newsletter-card p-4 text-center h-100" data-aos="fade-up">
                <h5 className="text-secondary">Explore Our Services</h5>
                <p
                  className="text-center mb-0 text-secondary mt-2"
                  style={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  Discover the power of custom app development, AI integration,
                  and SaaS solutions tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card border-0 newsletter-card p-4 text-center h-100"  data-aos="fade-up">
                <h5 className="text-secondary">Join Us Today</h5>
                <p
                  className="text-center mb-0 text-secondary mt-2"
                  style={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  Looking to join a dynamic and innovative team? Explore our
                  career opportunities and take the next step in your career.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card border-0 newsletter-card p-4 text-center h-100"  data-aos="fade-up">
                <h5 className="text-secondary">Subscribe to Newsletter</h5>
                <p
                  className="text-center mb-0 text-secondary mt-2"
                  style={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  Stay updated with the latest tech
                  trends and industry insights by subscribing to our newsletter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutnewsletter;
