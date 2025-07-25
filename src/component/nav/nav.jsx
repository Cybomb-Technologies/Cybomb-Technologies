import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./nav.css";

import Servicedropdown from "./service-dropdown";
import Clouddropdown from "./cloud-dropdown";
import Datadropdown from "./data-ai";
import Securitydropdown from "./security-dropdown";
import Industriesdropdown from "./Industries-dropdown";
import Technologiesdropdown from "./technologies-dropdoen";
import Successstoriesdropdown from "./success-stories";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseOffcanvas = () => {
    const closeBtn = document.querySelector(
      "#offcanvasWithBothOptions .btn-close"
    );
    if (closeBtn) closeBtn.click();
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate("/services");
  };

  useEffect(() => {
    const navbar = document.querySelector(".custom-navbar");

    if (location.pathname === "/") {
      // Home page: make it transparent first
      navbar?.classList.add("transparent");

      const handleScroll = () => {
        if (window.scrollY > 600) {
          navbar?.classList.add("scrolled");
        } else {
          navbar?.classList.remove("scrolled");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        navbar?.classList.remove("scrolled");
        navbar?.classList.remove("transparent");
      };
    } else {
      // Other pages: remove scroll logic and show solid color
      navbar?.classList.remove("transparent");
      navbar?.classList.remove("scrolled");
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-xxl custom-navbar fixed-top">
        <div className="container">
          <Link className="navbar-brand text-white test" to="/">
            <h2 style={{ color: "#f2f2f5ff" }}>Cybomb Logo</h2>
          </Link>
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
              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
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
                <Servicedropdown
                  onLinkClick={handleCloseOffcanvas}
                  onDropdownClick={handleServicesClick}
                />
                <Clouddropdown />
                <Datadropdown />
                <Securitydropdown />
                <Industriesdropdown />

                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="#"
                    onClick={handleCloseOffcanvas}
                  >
                    On-Demand Developer
                  </Link>
                </li>

                <Technologiesdropdown />
                <Successstoriesdropdown />
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
