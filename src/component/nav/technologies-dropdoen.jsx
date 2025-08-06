import { Link } from "react-router-dom";
import { useState } from "react";

function Technologiesdropdown({ onLinkClick, isMobile }) {
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
        Technologies
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
            {/* Each column can be placed inside its own <ul><li> */}
            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">Mobile Apps</Link>
              <Link to="/services/android-app-development" className="dropdown-item" onClick={onLinkClick}>Android</Link>
              <Link to="/services/react-native-development" className="dropdown-item" onClick={onLinkClick}>React Native</Link>
              <Link to="/services/ios-app-development" className="dropdown-item" onClick={onLinkClick}>Ios</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Flutter</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Swift</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Kotlin</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>Xamarin</Link>
            </div>

            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">Ecommerce</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Adobe Commerce
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Shopify
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Symfony
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                WooCommerce
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                BigCommerce
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Magento
              </Link>
            </div>

            <div className="col-xxl-4 col-xl-6 col-md-12 col-12 mb-3">
              <Link className="dropdown-item text-primary">CMS</Link>
              <div className="row">
                <div className="col-md-6">
                  <Link to="/services/wordpress"className="dropdown-item" onClick={onLinkClick}>
                    Wordpress
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Drupal
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Craft
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Acquia
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Joomla
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    SharePoint
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Umbraco
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Sitecore
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Pantheon
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    AEM Development
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-6 col-md-12 col-12 mb-3">
              <Link className="dropdown-item text-primary">
                Custom Development
              </Link>
              <div className="row">
                <div className="col-md-6">
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    PHP
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Laravel
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    ROR
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Power Platform
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    HTML5
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    JavaScript
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Zoho Creator
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Python
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    DotNet
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    NodeJS
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Angular
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    Spring
                  </Link>
                  <Link className="dropdown-item" onClick={onLinkClick}>
                    C#
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">
                Full Stack Development
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Full Stack MERN
              </Link>
            </div>

            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">CRM</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                ServiceNow
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Salesforce
              </Link>
            </div>

            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">Games</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Unity
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Unreal
              </Link>
            </div>

            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">Cloud</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                AWS
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Azure
              </Link>
            </div>

            <div className="col-xxl-2 col-xl-12 col-md-6 col-12 mb-3">
              <Link className="dropdown-item text-primary">Other</Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                Golang
              </Link>
              <Link className="dropdown-item" onClick={onLinkClick}>
                AR/VR
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Technologiesdropdown;
