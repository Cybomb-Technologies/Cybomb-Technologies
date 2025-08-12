import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaHotel,
  FaFilm,
  FaTruck,
  FaHandHoldingUsd,
  FaCar,
  FaFutbol,
  FaUniversity,
  FaPlane,
  FaHardHat,
  FaOilCan,
  FaBook,
  FaMoneyCheckAlt,
  FaBuilding,
  FaHeartbeat,
  FaShoppingCart,
  FaBriefcase,
} from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

function Industriesdropdown1({
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
        onMouseEnter={() => !isMobile && onToggle(true)}
        onMouseLeave={() => !isMobile && onToggle(false)}
      >
        Industries We Serve 
        <span className={styles.arrow}>
          {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isOpen ? styles.show : ""}`}
        onMouseEnter={() => !isMobile && onToggle(true)}
        onMouseLeave={() => !isMobile && onToggle(false)}
        style={
          !isMobile
            ? {
                display: isOpen ? "block" : "none",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "max-content",
                maxWidth: "calc(45vw - 40px)",
              }
            : {
                display: isOpen ? "block" : "none",
                width: "100%",
              }
        }
      >
        <li>
          <div className="container">
            <div className={styles.dropdownHeader}>
                <FaBriefcase className={styles.icon} /> Industries We Serve
               </div>
            <div className={styles.dropdownGrid}>
              <div className={styles.dropdownColumn}>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaHotel className={styles.icon} /> Travel & Hospitality
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaFilm className={styles.icon} /> Media & Entertainment
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaTruck className={styles.icon} /> Logistics
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <MdOutlineEnergySavingsLeaf className={styles.icon} /> Energy & Utilities
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaHandHoldingUsd className={styles.icon} /> Mortgage & Lending
                </Link>

                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaPlane className={styles.icon} /> Aviation
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaHardHat className={styles.icon} /> Construction
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaOilCan className={styles.icon} /> Oil & Gas
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaBook className={styles.icon} /> Publishing
                </Link>
                
              </div>

              <div className={styles.dropdownColumn}>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaMoneyCheckAlt className={styles.icon} /> CRM Solutions
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaCar className={styles.icon} /> Automotive
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaFutbol className={styles.icon} /> Sports
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaUniversity className={styles.icon} /> Banking & Payment
                </Link>

                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaMoneyCheckAlt className={styles.icon} /> Fintech
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaBuilding className={styles.icon} /> Real Estate
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaHeartbeat className={styles.icon} /> Healthcare
                </Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}>
                  <FaShoppingCart className={styles.icon} /> Retail/FMCG
                </Link>
              </div>
{/* 
              <div className={styles.dropdownColumn}>
                
              </div>

              <div className={styles.dropdownColumn}>
                
              </div> */}
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Industriesdropdown1;
