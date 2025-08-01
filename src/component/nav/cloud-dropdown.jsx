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
          <Link
            className="dropdown-item"
            to="/Services/aws-cloud"

            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
         AWS
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="/Services/azure-cloud"
            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
          Azure
          </Link>
        </li>
         <li>
          <Link
            className="dropdown-item"
            to="/Services/google-cloud"
            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
        Google Cloud
          </Link>
        </li>
         <li>
          <Link
            className="dropdown-item"
            to="/Services/devops"
            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
       DevOps
          </Link>
        </li>
       
      </ul>
    </li>
  );
}

export default Clouddropdown;
