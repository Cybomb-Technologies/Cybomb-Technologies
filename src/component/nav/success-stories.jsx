import { Link } from "react-router-dom";

function Successstoriesdropdown({ onLinkClick, onDropdownClick }) {
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
        Success Stories
      </Link>

      <ul className="dropdown-menu mt-3">
        <li>
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
           Case Studies
          </a>
        </li>
        <li>
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
            Portfolio
          </a>
        </li>
       
      </ul>
    </li>
  );
}

export default Successstoriesdropdown;
