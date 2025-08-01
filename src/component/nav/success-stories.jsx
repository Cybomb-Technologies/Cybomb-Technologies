import { Link } from "react-router-dom";
import { useState } from "react";

function Successstoriesdropdown({ onLinkClick, isMobile }) {
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
        Success Stories
      </Link>

      <ul
        className={`dropdown-menu mt-3 ${isMobile && isDropdownOpen ? "show" : ""}`}
        style={isMobile ? { display: isDropdownOpen ? "block" : "none" } : {}}
      >
        <li>
          <Link className="dropdown-item" onClick={onLinkClick}>
            Case Studies
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" onClick={onLinkClick}>
            Portfolio
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default Successstoriesdropdown;
