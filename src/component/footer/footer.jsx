import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer style={{ padding: "60px 0px 0px", backgroundColor: "#003459" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3" data-aos="fade-up">
              <img
                src="/images/nav-logo.jpg"
                alt=""
                style={{ height: "60px", width: "130px" }}
              />
              <p className="footer-para-color mt-4">
                Transforming Ideas into Digital reality with Cutting-Ddge Mobile
                and web app development, AI integration, and SaaS solutions.
              </p>
              <div className="d-flex ">
                <a
                  href="https://www.instagram.com/cybomb_tech/?hl=en"
                  target="_blank"
                >
                  <i className="footer-para-color mx-3 bi bi-instagram fs-4"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/cybomb/"
                  target="_blank"
                >
                  <i className="footer-para-color mx-3 bi bi-linkedin fs-4"></i>
                </a>
                <a href="https://x.com/CybombTech" target="_blank">
                  <i className="footer-para-color mx-3 fa-brands fa-x-twitter fs-3 pt-1"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3 ps-3 ps-lg-5" data-aos="fade-up">
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

            <div className="col-md-2 " data-aos="fade-up">
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

            <div className="col-md-4" data-aos="zoom-out-right">
              <h4 className="text-primary">Get in Touch</h4>
              <div className="d-flex align-items-start">
                <i class="bi bi-geo-alt-fill bg-primary p-1 px-2 rounded mt-1 text-white"></i>
                <div className="ms-3">
                  <p className="text-white mb-0">
                    <b>Address</b>
                  </p>
                  <p className="text-white">
                    Cybomb Technologies LLP, Hygee Works - PS Industrials,
                    No.53, Jawaharlal Nehru Road, Guindy Chennai, Tamil Nadu,
                    India
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i class="bi bi-geo-alt-fill bg-primary p-1 px-2 rounded mt-1 text-white"></i>
                <div className="ms-3">
                  <p className="text-white mb-0">
                    <b>Branch Address</b>
                  </p>
                  <p className="text-white">
                    Cybomb Technologies LLP, Hygee Works - Prime Plaza No.54/1,
                    1st street, Sripuram colony,Viralur, Chakrapani Colony,
                    St.Thomas Mount Chennai - 600016, Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i class="bi bi-telephone-fill bg-primary p-1 px-2 rounded mt-1 text-white"></i>
                <div className="ms-3">
                  <p className="text-white mb-0">
                    <b>Phone</b>
                  </p>
                  <a
                    href="tel:+919715092104"
                    class="text-decoration-none contact-text-color"
                  >
                    +91 9715092104
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i class="bi bi-envelope-fill bg-primary p-1 px-2 rounded mt-1 text-white"></i>
                <div className="ms-3">
                  <p className="text-white mb-0">
                    <b>Email</b>
                  </p>
                  <a
                    href="mailto:support@cybomb.com"
                    class="text-decoration-none contact-text-color"
                  >
                    support@cybomb.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-primary mt-5" />

          <div className="d-flex justify-content-around">
            <p className="footer-para-color">
              © 2025 Cybomb Technologies LLP | All Rights Reserved
            </p>

            <ul className="list-unstyled d-flex justify-content-between">
              <li className="mx-2">
                <Link
                  className="text-decoration-none footer-para-color"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="text-decoration-none footer-para-color"
                  to="/terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="text-decoration-none footer-para-color"
                  to="/refund-policy"
                >
                  Refund Policy
                </Link>
              </li>
              <li className="mx-2">
                <a className="text-decoration-none footer-para-color" to="">
                  Cookie Policy
                </a>
              </li>
            </ul>

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
