import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { FaChevronDown, FaChevronUp, FaAws, FaMicrosoft, FaGoogle, FaCogs } from "react-icons/fa";

function Clouddropdown1({ onLinkClick, isMobile }) {
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
        className={styles.dropdownToggle}
        to="#"
        role="button"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={handleToggleClick}
      >
        Cloud
        <span className={styles.arrow}>
          {isDropdownOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isDropdownOpen ? styles.show : ""}`}
        style={isMobile ? { display: isDropdownOpen ? "block" : "none" } : {}}
      >
        <li>
          <div className={styles.dropdownGrid}>
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}>Cloud Services</div>
              <Link
                className={styles.dropdownItem}
                to="/Services/aws-cloud"
                onClick={onLinkClick}
              >
                <FaAws className={styles.icon} /> AWS
              </Link>
              <Link
                className={styles.dropdownItem}
                to="/Services/azure-cloud"
                onClick={onLinkClick}
              >
                <FaMicrosoft className={styles.icon} /> Azure
              </Link>
              <Link
                className={styles.dropdownItem}
                to="/Services/google-cloud"
                onClick={onLinkClick}
              >
                <FaGoogle className={styles.icon} /> Google Cloud
              </Link>
              <Link
                className={styles.dropdownItem}
                to="/Services/devops"
                onClick={onLinkClick}
              >
                <FaCogs className={styles.icon} /> DevOps
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Clouddropdown1;
