import { Link } from "react-router-dom";

function Servicedropdown({ onLinkClick}) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        to="/services"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        // onClick={onDropdownClick}
      >
        Services
      </Link>

      <div className="dropdown-menu mega-dropdown container">
       
          <div className="row">
            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Design & Developments</a>
              <Link
                className="dropdown-item"
                to="/web-development"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Website Development
              </Link>
              <Link
                className="dropdown-item"
                to="services/mobile-app-development"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Mobile App Development
              </Link>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                E-commerce Development
              </a>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Software Development
              </a>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Game Development
              </a>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Bespoke Development
              </a>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                API Development
              </a>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Custom Software Integration
              </a>
            </div>

            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Enterprise Services</a>
              <a
                className="dropdown-item"
                href="/demo/grocery/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                CRM Solutions
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Cloud Solutions
              </a>
              <a
                className="dropdown-item"
                href="/demo/grocery/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                IoT Solutions
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Data Engineering
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                AI/ML
              </a>{" "}
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Salesforce
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                HubSpot
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Zoho
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                MS Dynamics
              </a>
            </div>

            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Support Services</a>
              <a
                className="dropdown-item"
                href="/demo/grocery/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Services
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Hosting
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Server Support
              </a>{" "}
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Development Support
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Staff Augmentation
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Digital Fulfilment
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                IT Support Services
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                DevOps
              </a>
            </div>

            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Digital Marketing</a>
              <a
                className="dropdown-item"
                href="/demo/taxi-booking-app"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Search Engine Optimization
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Social Media Marketing
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Pay Per Click
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                ORM
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Performance Optimization
              </a>
            </div>
          </div>
       
      </div>
    </li>
  );
}

export default Servicedropdown;
