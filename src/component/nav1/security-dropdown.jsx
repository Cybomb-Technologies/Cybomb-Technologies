import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaLock,
  FaMobileAlt,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

function Securitydropdown1({
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
        Security
        <span className={styles.arrow}>
          {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isOpen ? styles.show : ""}`}
        style={
          !isMobile
            ? {
                display: isOpen ? "block" : "none",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "max-content",
                maxWidth: "calc(100vw - 40px)",
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
                <div className={styles.dropdownColumn}>
                  <div className={styles.dropdownHeader}>
                    <FaLock className={styles.icon} /> Security Services
                  </div>

                  <Link to="/services/aws-web-app-security" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaShieldAlt className={styles.icon} /> AWS Web Application Security
                  </Link>
                  <Link to="/services/mobile-application-services" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaMobileAlt className={styles.icon} /> Mobile Application Services
                  </Link>
                  <Link to="/services/api-security" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaLock className={styles.icon} /> API Security
                  </Link>
                  <Link to="/services/cloud-security-services" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaCloud className={styles.icon} /> Cloud Security Services
                  </Link>
                  <Link to="/services/network-penetration-testing" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaNetworkWired className={styles.icon} /> Network Penetration Testing
                  </Link>
                </div>
              </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Securitydropdown1;
