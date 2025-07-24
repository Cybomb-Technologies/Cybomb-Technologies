import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./nav.css";
import Servicedropdown from "./service-dropdown";

function Nav() {
  const handleCloseOffcanvas = () => {
    const closeBtn = document.querySelector(
      "#offcanvasWithBothOptions .btn-close"
    );
    if (closeBtn) closeBtn.click();
  };

  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate("/services");
  };
  const handlePortfolioClick = (e) => {
    e.preventDefault();
    navigate("/portfolio");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand text-white test" href="#">
            <h2 style={{ color: "#6366f1" }}>Cybomb Logo</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasWithBothOptionsLabel"
              >
                Cybomb Logo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="/"
                    onClick={handleCloseOffcanvas}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="/about"
                    onClick={handleCloseOffcanvas}
                  >
                    About
                  </Link>
                </li>

                {/* service mega dropdown */}
                <Servicedropdown
                  onLinkClick={handleCloseOffcanvas}
                  onDropdownClick={handleServicesClick}
                />

                
                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="/blog"
                    onClick={handleCloseOffcanvas}
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item dropdown custom-nav-item">
                  <Link
                    className="nav-link dropdown-toggle custom-nav-link"
                    to="/services"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handlePortfolioClick}
                  >
                    Portfolio
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/ai-agent/"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        AI Agent
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/HRMS/"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        HRMS
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/E-Commerce/"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        E-Commerce
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/grocery/"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        Grocery Delivery App
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/school-mangement"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        School Management App
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/taxi-booking-app"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        Taxi Booking App
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/demo/real-estate-app"
                        target="_blank"
                        onClick={handleCloseOffcanvas}
                      >
                        <i
                          className="bi bi-arrow-right arrow-right-icon bg-primary"
                          style={{ fontSize: "10px" }}
                        ></i>{" "}
                        Real Estate App
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="/career"
                    onClick={handleCloseOffcanvas}
                  >
                    Career
                  </Link>
                </li>
                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="/faq"
                    onClick={handleCloseOffcanvas}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="/contact"
                    onClick={handleCloseOffcanvas}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item custom-nav-item custom-nav-button text-center mt-2 mt-lg-0">
                  <Link
                    className="nav-link custom-nav-link text-white"
                    to="/contact"
                    onClick={handleCloseOffcanvas}
                  >
                    Inquire Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="floating_btn">
        <a target="_blank" href="tel:+919715092104">
          <div className="contact_icon">
            <i className="bi bi-telephone-fill fs-4"></i>
          </div>
        </a>
      </div>
    </>
  );
}

export default Nav;
