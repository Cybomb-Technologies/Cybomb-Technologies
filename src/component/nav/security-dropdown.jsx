import { Link } from "react-router-dom";
import { useState } from "react";

function Securitydropdown({ onLinkClick, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        to="#"
        role="button"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={handleToggleClick}
      >
        Security
      </Link>

      <div
        className={`dropdown-menu mega-dropdown w-auto ${isMobile && isDropdownOpen ? "show" : ""}`}
        style={isMobile ? { display: isDropdownOpen ? "block" : "none" } : {}}
      >
        <div className="row p-3">
          <div className="col-sm-12">
            <Link className="dropdown-item" onClick={onLinkClick}>
              AWS Web Application Security
            </Link>
            <Link className="dropdown-item" onClick={onLinkClick}>
              Mobile Application Services
            </Link>
            <Link className="dropdown-item" onClick={onLinkClick}>
              API Security
            </Link>
            <Link className="dropdown-item" onClick={onLinkClick}>
              Cloud Security Services
            </Link>
            <Link className="dropdown-item" onClick={onLinkClick}>
              Network Penetration Testing
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Securitydropdown;
