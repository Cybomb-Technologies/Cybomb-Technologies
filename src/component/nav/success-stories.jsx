import { Link } from "react-router-dom";

function Successstoriesdropdown({ onLinkClick, onDropdownClick }) {
  return (
    <li className="nav-item dropdown custom-nav-item">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        role="button"
        aria-expanded="false"
          data-bs-toggle="dropdown"
        // onClick={handlePortfolioClick}
      >
        Success Stories
      </Link>

      <ul className="dropdown-menu mt-3">
        <li>
          <Link
            className="dropdown-item"
            // to="/demo/ai-agent/"
            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
           Case Studies
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            // to="/demo/HRMS/"
            onClick={onLinkClick}
          >
            {/* <i
              className="bi bi-arrow-right arrow-right-icon bg-primary"
              style={{ fontSize: "10px" }}
            ></i>{" "} */}
            Portfolio
          </Link>
        </li>
       
      </ul>
    </li>
  );
}

export default Successstoriesdropdown;
