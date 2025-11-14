import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import { FaBriefcase, FaChevronDown, FaChevronUp,FaMicrosoft,FaGlobe,
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
  FaIndustry,
  } from "react-icons/fa";
import { FaFolderOpen, FaBlog, FaInfoCircle, FaBookOpen } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

function Successstoriesdropdown1({
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
        // onMouseEnter={() => !isMobile && onToggle(true)}
        // onMouseLeave={() => !isMobile && onToggle(false)}
      >
        About Us
        <span className={styles.arrow}>
          {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isOpen ? styles.show : ""}`}
        // onMouseEnter={() => !isMobile && onToggle(true)}
        // onMouseLeave={() => !isMobile && onToggle(false)}
        style={
          !isMobile
            ? {
                display: isOpen ? "block" : "none",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-80%)",
                width: "max-content",
                maxWidth: "calc(-40px + 100vw)",
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
                {/* Column 1: Our Work */}
                <div className={styles.dropdownColumn}>
                  <div className={styles.dropdownHeader}>
                    <FaBriefcase className={styles.icon} /> Our Work
                  </div>
                   <Link to="/white-label-app" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaMicrosoft className={styles.icon} /> White Label App
                  </Link>

                  <Link to="/portfolio" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaFolderOpen className={styles.icon} /> Portfolio
                  </Link>

                  <Link to="/blog" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaBlog className={styles.icon} /> Blogs
                  </Link>
                  {/* <Link to="/case-study" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaBookOpen className={styles.icon} />  Case Study
                  </Link> */}
                </div>
              </div>

              <div className={styles.dropdownGrid}>
                <div className={styles.dropdownColumn}>
                  <Link to="/about-us" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaInfoCircle className={styles.icon} /> About Us
                  </Link>
                  <Link to="/global-presence" className={styles.dropdownItem} onClick={onLinkClick}>
                    <FaGlobe className={styles.icon} /> Global Presence
                  </Link>
                </div>
              </div>
              
                {/* Column 2: Industries We Serve — Part 1*/}
                {/* <div className={styles.dropdownColumn}>
                  <div className={styles.dropdownHeader}> 
                    <Link to="/portfolio"  className={styles.dropdownItem} onClick={onLinkClick}> <FaBriefcase className={styles.icon} /> Portfolio </Link>
                  </div>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaHotel className={styles.icon} /> Travel & Hospitality </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaFilm className={styles.icon} /> Media & Entertainment </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaTruck className={styles.icon} /> Logistics </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <MdOutlineEnergySavingsLeaf className={styles.icon} /> Energy & Utilities </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaHandHoldingUsd className={styles.icon} /> Mortgage & Lending </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaPlane className={styles.icon} /> Aviation </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaMoneyCheckAlt className={styles.icon} /> Fintech </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaBuilding className={styles.icon} /> Real Estate </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaHeartbeat className={styles.icon} /> Healthcare </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaShoppingCart className={styles.icon} /> Retail/FMCG </Link>
                </div> */}

                {/* Column 3 */}
                {/* <div className={styles.dropdownColumn}>
                  <div className={styles.dropdownHeader}>
                    {/* <FaIndustry className={styles.icon} /> More Industries }
                  </div>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaHardHat className={styles.icon} /> Construction </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaOilCan className={styles.icon} /> Oil & Gas </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaBook className={styles.icon} /> Publishing </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaCar className={styles.icon} /> Automotive </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaFutbol className={styles.icon} /> Sports </Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}> <FaUniversity className={styles.icon} /> Banking & Payment </Link>
                </div> */}

              </div>


        </li>
      </ul>
    </li>
  );
}

export default Successstoriesdropdown1;
