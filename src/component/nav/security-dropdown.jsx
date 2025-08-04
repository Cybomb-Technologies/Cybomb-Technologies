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

      <ul
        className={`dropdown-menu mt-3 dropdown-click security-ul ${isMobile && isDropdownOpen ? "show" : ""}`}
        style={{
          display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
          width: !isMobile && window.innerWidth >= 1400 ? "320px" : "100%",
        }}
      >
        <li className="w-100">
          <div className="row p-3 bg-white shadow rounded-3 m-0">
            <div className="col-12">
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
        </li>
      </ul>
    </li>
  );
}

export default Securitydropdown;
