import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";

function Datadropdown({ onLinkClick, isMobile }) {
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
        Data & AI
      </Link>

      <ul
        className={`dropdown-menu mt-2 dropdown-click datadropdown-ul ${isMobile && isDropdownOpen ? "show" : ""}`}
         style={{
    display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
    width: !isMobile && window.innerWidth >= 1400 ? "650px" : "100%",
   
  }}
      >
        <li className="w-100">
          <div className="row p-3 bg-white shadow rounded-3 m-0">
            {/* Data Column */}
            <div className="col-xl-12 col-xxl-6 mb-3">
              <span className="dropdown-item text-primary fw-bold">Data</span>
              <Link to="/services/stratergy-consulting" className="dropdown-item"  onClick={onLinkClick}>Strategy Consulting</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Processing</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Governance Solution</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Storage Solution</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Quality Management</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Modelling Design</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Architecture</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Analytics & Visualization</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Cloud Data Migration</Link>
            </div>

            {/* AI Column */}
            <div className="col-xl-12 col-xxl-6">
              <span className="dropdown-item text-primary fw-bold">AI</span>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Custom AI Development</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>AI Consulting Strategy</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>AI Business Intelligence</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Large Language Models Solutions</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>AI Personalized Customer Experience</Link>
              <Link className="dropdown-item" to="#" onClick={onLinkClick}>Blockchain</Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Datadropdown;
