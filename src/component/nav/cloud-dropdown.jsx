import { Link } from "react-router-dom";
import { useState } from "react";

function Clouddropdown({ onLinkClick, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  return (
    <li className="nav-item dropdown custom-nav-item">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        to="#"
        role="button"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={handleToggleClick}
      >
        Cloud
      </Link>

      <ul
        className={`dropdown-menu dropdown-click mt-3 ${isMobile && isDropdownOpen ? "show" : ""}`}
        style={isMobile ? { display: isDropdownOpen ? "block" : "none" } : {}}
      >
        <li>
          <Link className="dropdown-item" to="/Services/aws-cloud" onClick={onLinkClick}>
            AWS
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/Services/azure-cloud" onClick={onLinkClick}>
            Azure
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/Services/google-cloud" onClick={onLinkClick}>
            Google Cloud
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/Services/devops" onClick={onLinkClick}>
            DevOps
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default Clouddropdown;
