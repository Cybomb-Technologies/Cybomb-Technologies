import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  FaChartPie,
  FaCloudUploadAlt,
  FaCogs,
  FaDatabase,
  FaProjectDiagram,
  FaClipboardCheck,
  FaPuzzlePiece,
  FaRegLightbulb,
  FaRobot,
  FaNetworkWired,
  FaUserCog,
  FaCube
} from "react-icons/fa";
import { MdStorage, MdOutlineAutoGraph } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

function Datadropdown1({ onLinkClick, isMobile }) {
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
        Data & AI
        <span className={styles.arrow}>
          {isDropdownOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isDropdownOpen ? styles.show : ""}`}
        style={{
          display: isMobile ? (isDropdownOpen ? "block" : "none") : undefined,
          width: !isMobile && window.innerWidth >= 1400 ? "650px" : "100%",
        }}
      >
        <li>
          <div className={styles.dropdownGrid}>
            {/* Data Column */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}>Data</div>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaRegLightbulb className={styles.icon} /> Strategy Consulting
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaCogs className={styles.icon} /> Processing
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaClipboardCheck className={styles.icon} /> Governance Solution
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <MdStorage className={styles.icon} /> Storage Solution
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaProjectDiagram className={styles.icon} /> Quality Management
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaPuzzlePiece className={styles.icon} /> Modelling Design
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaDatabase className={styles.icon} /> Architecture
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <SiGoogleanalytics className={styles.icon} /> Analytics & Visualization
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaCloudUploadAlt className={styles.icon} /> Cloud Data Migration
              </Link>
            </div>

            {/* AI Column */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}>AI</div>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <GiArtificialIntelligence className={styles.icon} /> Custom AI Development
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaRegLightbulb className={styles.icon} /> AI Consulting Strategy
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaChartPie className={styles.icon} /> AI Business Intelligence
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaRobot className={styles.icon} /> Large Language Models Solutions
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaUserCog className={styles.icon} /> AI Personalized Customer Experience
              </Link>
              <Link className={styles.dropdownItem} to="#" onClick={onLinkClick}>
                <FaCube className={styles.icon} /> Blockchain
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Datadropdown1;
