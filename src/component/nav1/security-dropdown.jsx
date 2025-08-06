import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaLock,
  FaMobileAlt,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt
} from "react-icons/fa";

function Securitydropdown1({ onLinkClick, isMobile, isOpen, onToggle }) {
  return (
    <li
      className={styles.dropdownWrapper}
      onMouseEnter={() => !isMobile && onToggle(true)}
      onMouseLeave={() => !isMobile && onToggle(false)}
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
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}>
                <FaLock className={styles.icon} /> Security Services
              </div>

              <Link className={styles.dropdownItem} onClick={onLinkClick}>
                <FaShieldAlt className={styles.icon} /> AWS Web Application Security
              </Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>
                <FaMobileAlt className={styles.icon} /> Mobile Application Services
              </Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>
                <FaLock className={styles.icon} /> API Security
              </Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>
                <FaCloud className={styles.icon} /> Cloud Security Services
              </Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>
                <FaNetworkWired className={styles.icon} /> Network Penetration Testing
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Securitydropdown1;
