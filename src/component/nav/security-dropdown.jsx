import { Link } from "react-router-dom";

function Securitydropdown({ onLinkClick, onDropdownClick }) {
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
       Security
      </Link>

      <div className="dropdown-menu mega-dropdown w-auto">
    
          <div className="row p-3">
            <div className="col-sm-12">
             <a
                className="dropdown-item"
                href="/demo/ai-agent/"
                target="_blank"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                AWSWeb Application Security
              </a>
              <a
                className="dropdown-item"
                href="/demo/ai-agent/"
                target="_blank"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
               Mobile Application Services
              </a>
              <a
                className="dropdown-item"
                href="/demo/HRMS/"
                target="_blank"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
               API Security
              </a>
              <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
              Cloud Security Services
              </a>

                <a
                className="dropdown-item"
                href="/demo/E-Commerce/"
                target="_blank"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
            Network Penetration Testing
              </a>
           
        
            </div>

          </div>
       
      </div>
    </li>
  );
}

export default Securitydropdown;
