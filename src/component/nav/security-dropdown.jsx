import { Link } from "react-router-dom";

function Securitydropdown({ onLinkClick, onDropdownClick }) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        role="button"
        aria-expanded="false"
          data-bs-toggle="dropdown"
        // onClick={onDropdownClick}
      >
       Security
      </Link>

      <div className="dropdown-menu mega-dropdown w-auto">
    
          <div className="row p-3">
            <div className="col-sm-12">
             <Link
                className="dropdown-item"
                // to="/demo/ai-agent/"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
                AWSWeb Application Security
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/ai-agent/"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
               Mobile Application Services
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/HRMS/"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
               API Security
              </Link>
              <Link
                className="dropdown-item"
                // to="/demo/E-Commerce/"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
              Cloud Security Services
              </Link>

                <Link
                className="dropdown-item"
                // to="/demo/E-Commerce/"
                onClick={onLinkClick}
              >
                {/* <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "} */}
            Network Penetration Testing
              </Link>
           
        
            </div>

          </div>
       
      </div>
    </li>
  );
}

export default Securitydropdown;
