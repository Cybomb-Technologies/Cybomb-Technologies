import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Securitydropdown1({ onLinkClick, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  return (
    <li className={styles.dropdownWrapper}>
      <Link
        to="#"
        className={styles.dropdownToggle}
        onClick={handleToggleClick}
        aria-expanded={isDropdownOpen ? "true" : "false"}
      >
        Security
        <span className={styles.arrow}>
          {isDropdownOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isDropdownOpen ? styles.show : ""}`}
        style={{
          display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
          width: !isMobile && window.innerWidth >= 1400 ? "320px" : "100%",
        }}
      >
        <li>
          <div className={styles.dropdownColumn}>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              AWS Web Application Security
            </Link>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              Mobile Application Services
            </Link>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              API Security
            </Link>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              Cloud Security Services
            </Link>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              Network Penetration Testing
            </Link>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Securitydropdown1;
