import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { FaBriefcase } from "react-icons/fa"; // Optional: icon for header
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Successstoriesdropdown1({ onLinkClick, isMobile }) {
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
        Success Stories 
        <span className={styles.arrow}>
          {isDropdownOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isDropdownOpen ? styles.show : ""}`}
        style={{
          display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
          width: !isMobile && window.innerWidth >= 1400 ? "260px" : "100%",
        }}
      >
        <li>
          <div className={styles.dropdownColumn}>
            {/* Optional header */}
            <div className={styles.dropdownHeader}>
              <FaBriefcase className={styles.icon} />
              Our Work
            </div>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              Case Studies
            </Link>
            <Link className={styles.dropdownItem} onClick={onLinkClick}>
              Portfolio
            </Link>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Successstoriesdropdown1;
