import { Link } from "react-router-dom";
import { useState } from "react";

function Datadropdown({ onLinkClick, isMobile }) {
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
        role="button"
        to="#"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={handleToggleClick}
      >
        Data & AI
      </Link>

      <div
        className={`dropdown-menu mega-dropdown w-auto ${isMobile && isDropdownOpen ? "show" : ""}`}
        style={isMobile ? { display: isDropdownOpen ? "block" : "none" } : {}}
      >
        <div className="row p-3">
          <div className="col-xxl-5">
            <Link className="dropdown-item text-primary">Data</Link>
            <Link className="dropdown-item" to="#" onClick={onLinkClick}>Strategy Consulting</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Processing</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Governance Solution</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Storage Solution</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Quality Management</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Modelling Design</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Architecture</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Analytics & Visualization</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Cloud Data Migration</Link>
          </div>

          <div className="col-xxl-7">
            <Link className="dropdown-item text-primary">AI</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Custom AI Development</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>AI Consulting Strategy</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>AI Business Intelligence</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Large Language Models Solutions</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>AI Personalized Customer Experience</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Blockchain</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Datadropdown;
