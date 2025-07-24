import { Link } from "react-router-dom";

function Clouddropdown({ onLinkClick, onDropdownClick }) {
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
       Cloud
      </Link>

      <div className="dropdown-menu mega-dropdown w-auto">
    
          <div className="row p-3">
            <div className="col-md-12">
             <a
                className="dropdown-item"
                href="/demo/ai-agent/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                AWS
              </a>
              <a
                className="dropdown-item"
                href="/demo/ai-agent/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
                Azure
              </a>
              <a
                className="dropdown-item"
                href="/demo/HRMS/"
                target="_blank"
                onClick={onLinkClick}
              >
                <i
                  className="bi bi-arrow-right arrow-right-icon bg-primary"
                  style={{ fontSize: "10px" }}
                ></i>{" "}
               Google Cloud
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
               DevOps
              </a>
           
        
            </div>

          </div>
       
      </div>
    </li>
  );
}

export default Clouddropdown;
