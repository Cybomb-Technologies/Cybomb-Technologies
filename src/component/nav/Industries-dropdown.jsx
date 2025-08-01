import { Link } from "react-router-dom";

function Industriesdropdown({ onLinkClick, onDropdownClick }) {
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
        Industries
      </Link>

      <div className="dropdown-menu mega-dropdown container">
        <div className="row">
          <div className="col-xxl-3">
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Travel & Hospitality
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
             Media & Entertainment
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
              Logistics
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
             Energy & Utilities
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
              Mortgage & Lending
            </Link>
           
          </div>

          <div className="col-xxl-3">
          
            <Link
              className="dropdown-item"
              // to="/demo/grocery/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              CRM Solutions
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
              Automotive
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/grocery/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Sports
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
             Sports
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
           Banking & Payment
            </Link>{" "}
           
          </div>

          <div className="col-xxl-3">
            
            <Link
              className="dropdown-item"
              // to="/demo/grocery/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Aviation
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
            Construction
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
             Construction
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
            Oil & Gas
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
              Publishing
            </Link>
          
          </div>

          <div className="col-xxl-3">
           
            <Link
              className="dropdown-item"
              // to="/demo/taxi-booking-app"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Fintech
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
            Real Estate
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
             Healthcare
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
            Retail/FMCG
            </Link>
        
          </div>
        </div>
      </div>
    </li>
  );
}

export default Industriesdropdown;
