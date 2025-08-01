import { Link } from "react-router-dom";

function Servicedropdown({ onLinkClick}) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        // to="/services"
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
              <Link className="dropdown-item text-primary">Design & Developments</Link>
              <Link
                className="dropdown-item"
                // to="/services/web-development"
                onClick={onLinkClick}
              >
               {/* <i className="bi bi-code me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Website Development
              </Link>
              <Link
                className="dropdown-item"
                // to="services/mobile-app-development"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-phone me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Mobile App Development
              </Link>
              <Link
                className="dropdown-item"
                // to="/services/Ecommerce-development"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-cart me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                E-commerce Development
              </Link>
              <Link
                className="dropdown-item"
                // to="/Services/software-development"
                onClick={onLinkClick}
              >
             {/* <i class="bi bi-cpu me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Software Development
              </Link>
              <Link
                className="dropdown-item"
                // to="/services/game-development"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-controller me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Game Development
              </Link>
              <Link
                className="dropdown-item"
                // to="/Services/bespoke-development"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-bricks me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Bespoke Development
              </Link>

              <Link
                className="dropdown-item"
                // to="/services/api-development"
                onClick={onLinkClick}
              >
            {/* <i class="bi bi-cloud me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                API Development
              </Link>
            
              <Link
                className="dropdown-item"
                // to="/Services/custom-software-integration-services"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-plug"></i> */}
                Custom Software Integration
              </Link>
            </div>

            <div className="col-xxl-3">
              <Link className="dropdown-item text-primary">Enterprise Services</Link>
              <Link
                className="dropdown-item"
                // to="/services/crm-services"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-person me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                CRM Solutions
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-cloud-upload me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Cloud Solutions
              </Link>

              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
               	{/* <i class="bi bi-hdd-stack"></i> */}
                Data Engineering
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-robot me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                AI/ML
              </Link>{" "}
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
               {/* <i class="bi bi-bar-chart-line me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Salesforce
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i class="bi bi-diagram-3 me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                HubSpot
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
              {/* <i class="bi bi-shield-lock me-1" style={{ fontSize: "20px", color:"rgb(0, 52, 89)" }}></i> */}
                Zoho
              </Link>
            </div>

            <div className="col-xxl-3">
              <Link className="dropdown-item text-primary">Support Services</Link>
              <Link
                className="dropdown-item"
                // to="/demo/grocery/"
                onClick={onLinkClick}
              >
            {/* <i class="bi bi-puzzle me-1"></i> */}
                Services
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Hosting
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Server Support
              </Link>{" "}
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Development Support
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Staff Augmentation
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Digital Fulfilment
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                IT Support Services
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/school-mangement"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                DevOps
              </Link>
            </div>

            <div className="col-xxl-3">
              <Link className="dropdown-item text-primary">Digital Marketing</Link>
              <Link
                className="dropdown-item"
                // to="/demo/taxi-booking-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Search Engine Optimization
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Social Media Marketing
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Pay Per Click
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                ORM
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/real-estate-app"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                Performance Optimization
              </Link>
            </div>
          </div>
       
      </div>
    </li>
  );
}

export default Servicedropdown;
