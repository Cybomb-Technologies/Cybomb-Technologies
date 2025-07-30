import { Link } from "react-router-dom";

function Clouddropdown({ onLinkClick}) {
  return (
 <li className="nav-item dropdown custom-nav-item">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        to="/services"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        // onClick={handlePortfolioClick}
      >
        Cloud
      </Link>

      <ul className="dropdown-menu mt-3">
        <li>
          <a
            className="dropdown-item"
            href="/Services/aws-cloud"
            target="_blank"
            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
         AWS
          </a>
        </li>
        <li>
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
          Azure
          </a>
        </li>
         <li>
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
        Google Cloud
          </a>
        </li>
         <li>
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
       DevOps
          </a>
        </li>
       
      </ul>
    </li>
  );
}

export default Clouddropdown;
