import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./nav.css";
import Servicedropdown from "./service-dropdown";
import Clouddropdown from "./cloud-dropdown";
import Datadropdown from "./data-ai";
import Securitydropdown from "./security-dropdown";
import Industriesdropdown from "./Industries-dropdown";
import Technologiesdropdown from "./technologies-dropdoen";
import Successstoriesdropdown from "./success-stories";

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
            <h2 style={{ color: "#f2f2f5ff" }}>Cybomb Logo</h2>
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
                {/* service dropdown */}
                <Servicedropdown
                  onLinkClick={handleCloseOffcanvas}
                  onDropdownClick={handleServicesClick}
                />
                {/* cloud dropdown */}
                <Clouddropdown />
                {/* Data dropdown */}
                <Datadropdown />
                {/* Data dropdown */}
                <Securitydropdown />
                {/* Industries dropdown */}
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

                <></>
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
