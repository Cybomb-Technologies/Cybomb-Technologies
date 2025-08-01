import { Link } from "react-router-dom";
import { useState } from "react";

function Servicedropdown({ onLinkClick, isMobile }) {
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
        Services
      </Link>

      <div
        className={`dropdown-menu mega-dropdown container ${isMobile && isDropdownOpen ? "show" : ""}`}
        style={isMobile ? { display: isDropdownOpen ? "block" : "none" } : {}}
      >
        <div className="row">
          {/* Column 1 */}
          <div className="col-xxl-3">
            <Link className="dropdown-item text-primary">Design & Developments</Link>
            <Link to="/services/web-development" className="dropdown-item" onClick={onLinkClick}>Website Development</Link>
            <Link to="/services/mobile-app-development" className="dropdown-item" onClick={onLinkClick}>Mobile App Development</Link>
            <Link to="/services/Ecommerce-development" className="dropdown-item" onClick={onLinkClick}>E-commerce Development</Link>
            <Link to="/services/software-development" className="dropdown-item" onClick={onLinkClick}>Software Development</Link>
            <Link to="/services/game-development" className="dropdown-item" onClick={onLinkClick}>Game Development</Link>
            <Link to="/services/bespoke-development" className="dropdown-item" onClick={onLinkClick}>Bespoke Development</Link>
            <Link to="/services/api-development" className="dropdown-item" onClick={onLinkClick}>API Development</Link>
            <Link to="/services/custom-software-integration-services" className="dropdown-item" onClick={onLinkClick}>Custom Software Integration</Link>
          </div>

          {/* Column 2 */}
          <div className="col-xxl-3">
            <Link className="dropdown-item text-primary">Enterprise Services</Link>
            <Link to="/services/crm-services" className="dropdown-item" onClick={onLinkClick}>CRM Solutions</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Cloud Solutions</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Data Engineering</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>AI/ML</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Salesforce</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>HubSpot</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Zoho</Link>
          </div>

          {/* Column 3 */}
          <div className="col-xxl-3">
            <Link className="dropdown-item text-primary">Support Services</Link>
            <Link to ="services/hosting-service" className="dropdown-item" onClick={onLinkClick}>Hosting</Link>
            <Link to ="/services/support-service" className="dropdown-item" onClick={onLinkClick}>Server Support</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Development Support</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Staff Augmentation</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Digital Fulfilment</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>IT Support Services</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>DevOps</Link>
          </div>

          {/* Column 4 */}
          <div className="col-xxl-3">
            <Link className="dropdown-item text-primary">Digital Marketing</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Search Engine Optimization</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Social Media Marketing</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Pay Per Click</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>ORM</Link>
            <Link className="dropdown-item" onClick={onLinkClick}>Performance Optimization</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Servicedropdown;
