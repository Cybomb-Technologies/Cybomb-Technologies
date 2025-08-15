import { Link } from "react-router-dom";
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
  FaUserCog,
  FaCube,
  FaBrain 
} from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

function Datadropdown1({
  onLinkClick,
  isMobile,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <li
      className={styles.dropdownWrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        className={styles.dropdownToggle}
        to="#"
        role="button"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            onToggle(); // toggle dropdown
          }
        }}
        // onMouseEnter={() => !isMobile && onToggle(true)}
        // onMouseLeave={() => !isMobile && onToggle(false)}
      >
        Data & AI
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
                transform: "translateX(-50%)",
                width: "max-content",
                maxWidth: "calc(100vw - 40px)"
              }
            : {
                display: isOpen ? "block" : "none",
                width: "100%"
              }
        }
      >
        <li>
          <div className="container">
            <div className={styles.dropdownGrid}>
              {/* Data Column */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}><FaDatabase className={styles.icon} /> Data</div>
                <Link className={styles.dropdownItem} to="/services/stratergy-consulting" onClick={onLinkClick}>
                  <FaRegLightbulb className={styles.icon} /> Strategy Consulting
                </Link>
                <Link className={styles.dropdownItem} to="/services/processing" onClick={onLinkClick}>
                  <FaCogs className={styles.icon} /> Processing
                </Link>
                <Link className={styles.dropdownItem} to="/services/governance-solution" onClick={onLinkClick}>
                  <FaClipboardCheck className={styles.icon} /> Governance Solution
                </Link>
                <Link className={styles.dropdownItem} to="/services/storage-solution" onClick={onLinkClick}>
                  <MdStorage className={styles.icon} /> Storage Solution
                </Link>
                <Link className={styles.dropdownItem} to="/services/quality-management" onClick={onLinkClick}>
                  <FaProjectDiagram className={styles.icon} /> Quality Management
                </Link>
                <Link className={styles.dropdownItem} to="/services/modeling-design" onClick={onLinkClick}>
                  <FaPuzzlePiece className={styles.icon} /> Modelling Design
                </Link>
                <Link className={styles.dropdownItem} to="/services/architecture" onClick={onLinkClick}>
                  <FaDatabase className={styles.icon} /> Architecture
                </Link>
                <Link className={styles.dropdownItem} to="/services/analyticsandvisualization" onClick={onLinkClick}>
                  <SiGoogleanalytics className={styles.icon} /> Analytics & Visualization
                </Link>
                <Link className={styles.dropdownItem} to="/services/cloud-data-migration" onClick={onLinkClick}>
                  <FaCloudUploadAlt className={styles.icon} /> Cloud Data Migration
                </Link>
              </div>

              {/* AI Column */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}> <FaBrain className={styles.icon} /> AI</div>
                <Link className={styles.dropdownItem} to="/services/custom-ai-development" onClick={onLinkClick}>
                  <GiArtificialIntelligence className={styles.icon} /> Custom AI Development
                </Link>
                <Link className={styles.dropdownItem} to="/services/ai-consulting-strategy" onClick={onLinkClick}>
                  <FaRegLightbulb className={styles.icon} /> AI Consulting Strategy
                </Link>
                <Link className={styles.dropdownItem} to="/services/ai-business-intelligence" onClick={onLinkClick}>
                  <FaChartPie className={styles.icon} /> AI Business Intelligence
                </Link>
                <Link className={styles.dropdownItem} to="services/large-language-model" onClick={onLinkClick}>
                  <FaRobot className={styles.icon} /> Large Language Models Solutions
                </Link>
                <Link className={styles.dropdownItem} to="/services/ai-persolized-customer-experience" onClick={onLinkClick}>
                  <FaUserCog className={styles.icon} /> AI Personalized Customer Experience
                </Link>
                <Link className={styles.dropdownItem} to="/services/blockchain" onClick={onLinkClick}>
                  <FaCube className={styles.icon} /> Blockchain
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Datadropdown1;
