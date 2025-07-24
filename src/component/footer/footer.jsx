import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer
        style={{ padding: "60px 0px 0px", backgroundColor: "rgb(219 223 223)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3" data-aos="fade-up">
              <h1 className="text-primary">LOGO</h1>
              <p className="footer-para-color">
                Transforming ideas into digital reality with cutting-edge mobile
                and web app development, AI integration, and SaaS solutions.
              </p>
              <div className="d-flex ">
                <a
                  href="https://www.instagram.com/cybomb_tech/?hl=en"
                  target="_blank"
                >
                  <i className="footer-para-color mx-3 bi bi-instagram fs-4"></i>
                </a>
                <a href="https://www.linkedin.com/company/cybomb/" target="_blank">
                  <i className="footer-para-color mx-3 bi bi-linkedin fs-4"></i>
                </a>
                <a
                  href="https://x.com/CybombTech" 
                  target="_blank"
                >
                  <i className="footer-para-color mx-3 fa-brands fa-x-twitter fs-3 pt-1"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up">
              <h4 className="text-primary">Quick Link</h4>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="mt-2">
                  <a className="text-decoration-none footer-para-color" href="">
                    Blog
                  </a>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                 <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/career"
                  >
                   Career
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3" data-aos="fade-up">
              <h4 className="text-primary">Services</h4>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services/mobile-app"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services/web-app"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services/saas-product"
                  >
                    SaaS Solutions
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services/ai-machine-learning"
                  >
                    AI Integration
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services/ui-ux"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/services/software-consulting-Strategy"
                  >
                    Tech Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3" data-aos="zoom-out-right">
              <h4 className="text-primary">Legal</h4>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/terms"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    className="text-decoration-none footer-para-color"
                    to="/refund-policy"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <a className="text-decoration-none footer-para-color" to="">
                    Cookie Policy
                  </a>
                </li>
              </ul>

              <div
                className="card p-4 border-0 text-center"
                style={{ backgroundColor: "#c2c6d1ff" }}
              >
                <p className="text-secondary fw-bold">Get Started Today</p>
                <p className="text-secondary fw-bold">
                  Ready to transform your ideas?
                </p>
                <Link to="/contact"
                  className="border-0 p-1 bg-primary rounded text-decoration-none text-white"
                  style={{ backgroundColor: "#e9e9f1ff" }}
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
          <hr className="text-primary mt-5" />

          <div className="d-flex justify-content-between">
            <div>
              <p className="footer-para-color">
                © 2025 Cybomb Technologies LLP | All Rights Reserved
              </p>
            </div>
            <div>
              {/* <p className="footer-para-color">Made with in Chennai, India</p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
