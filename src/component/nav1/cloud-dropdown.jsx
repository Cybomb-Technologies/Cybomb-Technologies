import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaCogs
} from "react-icons/fa";

function Clouddropdown1({ onLinkClick, isMobile, isOpen, onToggle }) {
  return (
    <li
      className={styles.dropdownWrapper}
      onMouseEnter={() => !isMobile && onToggle(true)}
      onMouseLeave={() => !isMobile && onToggle(false)}
    >
      <Link
        className={styles.dropdownToggle}
        to="#"
        role="button"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            onToggle(); // Toggle on mobile
          }
        }}
      >
        Cloud
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
                width: "max-content"
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
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Clouddropdown1;
