import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./nav.css";

import Servicedropdown from "./service-dropdown";
import Clouddropdown from "./cloud-dropdown";
import Datadropdown from "./data-ai";
import Securitydropdown from "./security-dropdown";
import Industriesdropdown from "./Industries-dropdown";
import Technologiesdropdown from "./technologies-dropdown";
import Successstoriesdropdown from "./success-stories";

function Nav() {
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 1400;

  const handleCloseOffcanvas = () => {
    const closeBtn = document.querySelector(
      "#offcanvasWithBothOptions .btn-close"
    );
    if (closeBtn) closeBtn.click();
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".custom-navbar");

    if (location.pathname === "/") {
      navbar?.classList.add("transparent");

      const handleScroll = () => {
        if (window.scrollY > 100) {
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
      navbar?.classList.remove("transparent");
      navbar?.classList.remove("scrolled");
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-xxl custom-navbar fixed-top">
        <div className="container">
          <Link className="navbar-brand text-white test" to="/">
           <img src="/images/logo-11.png" alt=""
            style={{width:"150px", height:"52px", background:"#ffffff", padding: "8px", borderRadius:"4px"}}
            />
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
              <img src="/images/nav-logo.jpeg" alt="" style={{width:"150px", height:"60px"}}/>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Servicedropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />
                <Clouddropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />
                <Datadropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />
                <Securitydropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />
                <Industriesdropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />

                <li className="nav-item custom-nav-item">
                  <Link
                    className="nav-link custom-nav-link"
                    to="#"
                    onClick={handleCloseOffcanvas}
                  >
                    On-Demand Developer
                  </Link>
                </li>

                <Technologiesdropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />
                <Successstoriesdropdown onLinkClick={handleCloseOffcanvas} isMobile={isMobile} />
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
