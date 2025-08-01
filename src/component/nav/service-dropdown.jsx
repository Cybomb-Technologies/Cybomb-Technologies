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
                to="/services/web-development"
                onClick={onLinkClick}
              >
               {/* <i className="bi bi-code me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Website Development
              </Link>
              <Link
                className="dropdown-item"
                to="services/mobile-app-development"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-phone me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Mobile App Development
              </Link>
              <Link
                className="dropdown-item"
                to="/services/Ecommerce-development"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-cart me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                E-commerce Development
              </Link>
              <Link
                className="dropdown-item"
                to="/Services/software-development"
                onClick={onLinkClick}
              >
             {/* <i class="bi bi-cpu me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Software Development
              </Link>
              <Link
                className="dropdown-item"
                to="/services/game-development"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-controller me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Game Development
              </Link>
              <Link
                className="dropdown-item"
                to="/Services/bespoke-development"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-bricks me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Bespoke Development
              </Link>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                onClick={onLinkClick}
              >
            {/* <i class="bi bi-cloud me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                API Development
              </a>
              <Link
                className="dropdown-item"
                to="/Services/custom-software-integration-services"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-plug"></i> */}
                Custom Software Integration
              </Link>
            </div>

            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Enterprise Services</a>
              <a
                className="dropdown-item"
                href="/demo/grocery/"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-person me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                CRM Solutions
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-cloud-upload me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Cloud Solutions
              </a>
              <a
                className="dropdown-item"
                href="/demo/grocery/"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-broadcast me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                IoT Solutions
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
               	{/* <i class="bi bi-hdd-stack"></i> */}
                Data Engineering
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-robot me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                AI/ML
              </a>{" "}
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-bar-chart-line me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Salesforce
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i class="bi bi-diagram-3 me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                HubSpot
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-shield-lock me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Zoho
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
               	{/* <i class="bi bi-journal-text me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                MS Dynamics
              </a>
            </div>

            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Support Services</a>
              <a
                className="dropdown-item"
                href="/demo/grocery/"
                onClick={onLinkClick}
              >
            {/* <i class="bi bi-puzzle me-1"></i> */}
                Services
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Hosting
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Server Support
              </a>{" "}
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Development Support
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Staff Augmentation
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Digital Fulfilment
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                IT Support Services
              </a>
              <a
                className="dropdown-item"
                href="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                DevOps
              </a>
            </div>

            <div className="col-xxl-3">
              <a className="dropdown-item text-primary">Digital Marketing</a>
              <a
                className="dropdown-item"
                href="/demo/taxi-booking-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Search Engine Optimization
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Social Media Marketing
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Pay Per Click
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                ORM
              </a>
              <a
                className="dropdown-item"
                href="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Performance Optimization
              </a>
            </div>
          </div>
       
      </div>
    </li>
  );
}

export default Servicedropdown;
