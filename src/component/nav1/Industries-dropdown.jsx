import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { FaChevronDown, FaChevronUp, FaHotel, FaFilm, FaTruck, FaGasPump, FaHandHoldingUsd, FaCar, FaFutbol, FaUniversity, FaPlane, FaHardHat, FaOilCan, FaBook, FaMoneyCheckAlt, FaBuilding, FaHeartbeat, FaShoppingCart } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

function Industriesdropdown1({ onLinkClick, isMobile }) {
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
        Industries
        <span className={styles.arrow}>
          {isDropdownOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isDropdownOpen ? styles.show : ""}`}
        style={{
          display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
          width: !isMobile && window.innerWidth >= 1400 ? "1050px" : "100%",
        }}
      >
        <li>
          <div className={styles.dropdownGrid}>
            <div className={styles.dropdownColumn}>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaHotel className={styles.icon} /> Travel & Hospitality</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaFilm className={styles.icon} /> Media & Entertainment</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTruck className={styles.icon} /> Logistics</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><MdOutlineEnergySavingsLeaf className={styles.icon} /> Energy & Utilities</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaHandHoldingUsd className={styles.icon} /> Mortgage & Lending</Link>
            </div>

            <div className={styles.dropdownColumn}>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMoneyCheckAlt className={styles.icon} /> CRM Solutions</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCar className={styles.icon} /> Automotive</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaFutbol className={styles.icon} /> Sports</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaUniversity className={styles.icon} /> Banking & Payment</Link>
            </div>

            <div className={styles.dropdownColumn}>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaPlane className={styles.icon} /> Aviation</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaHardHat className={styles.icon} /> Construction</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaOilCan className={styles.icon} /> Oil & Gas</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaBook className={styles.icon} /> Publishing</Link>
            </div>

            <div className={styles.dropdownColumn}>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMoneyCheckAlt className={styles.icon} /> Fintech</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaBuilding className={styles.icon} /> Real Estate</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaHeartbeat className={styles.icon} /> Healthcare</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}><FaShoppingCart className={styles.icon} /> Retail/FMCG</Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Industriesdropdown1;
