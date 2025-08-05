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
            {/* Column 1 */}
            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <span className="dropdown-item text-primary fw-bold">Design & Developments</span>
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
            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <span className="dropdown-item text-primary fw-bold">Enterprise Services</span>
              <Link to="/services/crm-services" className="dropdown-item" onClick={onLinkClick}>CRM Solutions</Link>
              <Link to="/services/cloud-solution" className="dropdown-item" onClick={onLinkClick}>Cloud Solutions</Link>
              <Link to="/services/data-engineering" className="dropdown-item" onClick={onLinkClick}>Data Engineering</Link>
              <Link to="/services/ai-ml-services" className="dropdown-item" onClick={onLinkClick}>AI/ML</Link>
              <Link to="/services/salesforce-services" className="dropdown-item" onClick={onLinkClick}>Salesforce</Link>
              <Link to="/services/hubspot-services" className="dropdown-item" onClick={onLinkClick}>HubSpot</Link>
              <Link to="/services/zoho-services" className="dropdown-item" onClick={onLinkClick}>Zoho</Link>
            </div>

            {/* Column 3 */}
            <div className="col-xxl-3 col-xl-12 col-12 mb-3">
              <span className="dropdown-item text-primary fw-bold">Support Services</span>
              <Link to="/services/hosting-service" className="dropdown-item" onClick={onLinkClick}>Hosting</Link>
              <Link to="/services/support-service" className="dropdown-item" onClick={onLinkClick}>Server Support</Link>
              <Link to ="/services/development-support" className="dropdown-item" onClick={onLinkClick}>Development Support</Link>
              <Link to="/services/Staff-augmentation" className="dropdown-item" onClick={onLinkClick}>Staff Augmentation</Link>
              <Link to="/services/digital-fulfilment-support" className="dropdown-item" onClick={onLinkClick}>Digital Fulfilment</Link>
              <Link to="/services/it-support" className="dropdown-item" onClick={onLinkClick}>IT Support Services</Link>
              <Link to="/services/devops-support" className="dropdown-item" onClick={onLinkClick}>DevOps</Link>
            </div>

          {/* Column 4 */}
          <div className="col-xxl-3">
            <Link className="dropdown-item text-primary">Digital Marketing</Link>
            <Link to="/services/search-engine-optimization" className="dropdown-item" onClick={onLinkClick}>Search Engine Optimization</Link>
            <Link to="/services/social-media-marketing" className="dropdown-item" onClick={onLinkClick}>Social Media Marketing</Link>
            <Link to="/services/Pay-per-click" className="dropdown-item" onClick={onLinkClick}>Pay Per Click</Link>
            <Link to="/services/ORM-services" className="dropdown-item" onClick={onLinkClick}>ORM</Link>
            <Link to="/services/performance-optimization" className="dropdown-item" onClick={onLinkClick}>Performance Optimization</Link>
          </div>
          </div>
        </li>
      </ul>
      
    </li>
    
  );
}

export default Servicedropdown;
