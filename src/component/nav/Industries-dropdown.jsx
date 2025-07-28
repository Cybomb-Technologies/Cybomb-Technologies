import { Link } from "react-router-dom";

function Industriesdropdown({ onLinkClick, onDropdownClick }) {
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
        Industries
      </Link>

      <div className="dropdown-menu mega-dropdown container">
        <div className="row">
          <div className="col-xxl-3">
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
              Travel & Hospitality
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
             Media & Entertainment
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
              Logistics
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
             Energy & Utilities
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
              Mortgage & Lending
            </a>
           
          </div>

          <div className="col-xxl-3">
          
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              CRM Solutions
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Automotive
            </a>
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Sports
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Sports
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
           Banking & Payment
            </a>{" "}
           
          </div>

          <div className="col-xxl-3">
            
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Aviation
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
            Construction
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Construction
            </a>{" "}
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
            Oil & Gas
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Publishing
            </a>
          
          </div>

          <div className="col-xxl-3">
           
            <a
              className="dropdown-item"
              href="/demo/taxi-booking-app"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Fintech
            </a>
            <a
              className="dropdown-item"
              href="/demo/real-estate-app"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
            Real Estate
            </a>
            <a
              className="dropdown-item"
              href="/demo/real-estate-app"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Healthcare
            </a>
            <a
              className="dropdown-item"
              href="/demo/real-estate-app"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
            Retail/FMCG
            </a>
        
          </div>
        </div>
      </div>
    </li>
  );
}

export default Industriesdropdown;
