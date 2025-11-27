import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaCogs,
  FaCloud,
  FaLock,
  FaMobileAlt,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa";

function CloudSecurityDropdown({
  onLinkClick,
  isMobile,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <li
      className={styles.dropdownWrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to="#"
        className={styles.dropdownToggle}
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen ? "true" : "false"}
      >
        Cloud & Security
        <span className={styles.arrow}>
          {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${
          isMobile && isOpen ? styles.show : ""
        }`}
        style={
          !isMobile
            ? {
                display: isOpen ? "block" : "none",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "650px",
                maxWidth: "calc(100vw - 20px)",
              }
            : {
                display: isOpen ? "block" : "none",
                width: "100%",
              }
        }
      >
        <li>
          <div className="container">
            <div className={styles.dropdownGrid}>
              {/* Cloud Column */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}>
                  <FaCloud className={styles.icon} />
                  Cloud Services
                </div>

                <Link
                  to="/services/aws-cloud"
                  className={styles.dropdownItem}
                  onClick={onLinkClick}
                >
                  <FaAws className={styles.icon} /> AWS
                </Link>

                <Link
                  to="/services/azure-cloud"
                  className={styles.dropdownItem}
                  onClick={onLinkClick}
                >
                  <FaMicrosoft className={styles.icon} /> Azure
                </Link>

                <Link
                  to="/services/google-cloud"
                  className={styles.dropdownItem}
                  onClick={onLinkClick}
                >
                  <FaGoogle className={styles.icon} /> Google Cloud
                </Link>

                <Link
                  to="/services/devops"
                  className={styles.dropdownItem}
                  onClick={onLinkClick}
                >
                  <FaCogs className={styles.icon} /> DevOps
                </Link>
              </div>

              {/* Security Column */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}>
                  <FaLock className={styles.icon} /> Security Services
                </div>

                <Link
                  to="/services/aws-web-app-security"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaShieldAlt className={styles.icon} /> AWS Web Application
                  Security
                </Link>
                <Link
                  to="/services/mobile-application-services"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaMobileAlt className={styles.icon} /> Mobile Application
                  Services
                </Link>
                <Link
                  to="/services/api-security"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaLock className={styles.icon} /> API Security
                </Link>
                <Link
                  to="/services/cloud-security-services"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaCloud className={styles.icon} /> Cloud Security Services
                </Link>
                <Link
                  to="/services/network-penetration-testing"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaNetworkWired className={styles.icon} /> Network Penetration
                  Testing
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default CloudSecurityDropdown;