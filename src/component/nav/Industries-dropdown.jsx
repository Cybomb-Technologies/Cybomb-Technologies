import { Link } from "react-router-dom";
import { useState } from "react";

function Industriesdropdown({ onLinkClick, isMobile }) {
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
        Industries
      </Link>

  <ul
        className={`dropdown-menu mt-3 dropdown-click ${
          isMobile && isDropdownOpen ? "show" : ""
        }`}
        style={{
          display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
          width: !isMobile && window.innerWidth >= 1400 ? "1050px" : "100%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: 0,
          position: "absolute",
          right: "auto",
        }}
      >
        <li className="w-100">
          <div className="row p-3 bg-white shadow rounded-3 m-0">
            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <Link className="dropdown-item" onClick={onLinkClick}>Travel & Hospitality</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Media & Entertainment</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Logistics</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Energy & Utilities</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Mortgage & Lending</Link>
            </div>

            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <Link className="dropdown-item" onClick={onLinkClick}>CRM Solutions</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Automotive</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Sports</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Banking & Payment</Link>
            </div>

            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <Link className="dropdown-item" onClick={onLinkClick}>Aviation</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Construction</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Oil & Gas</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Publishing</Link>
            </div>

            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <Link className="dropdown-item" onClick={onLinkClick}>Fintech</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Real Estate</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Healthcare</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Retail/FMCG</Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Industriesdropdown;
