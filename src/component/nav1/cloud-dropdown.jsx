import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaCogs,
  FaCloud
} from "react-icons/fa";

function Clouddropdown1({  
  onLinkClick,
  isMobile,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <li className={styles.dropdownWrapper}
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
        Cloud
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
            <div className={styles.dropdownGrid}>
                <div className={styles.dropdownColumn}>
                  <div className={styles.dropdownHeader}>
                    <FaCloud className={styles.icon} />
                    Cloud Services
                    </div>

                  <Link
                    to="/Services/aws-cloud"
                    className={styles.dropdownItem}
                    onClick={onLinkClick}
                  >
                    <FaAws className={styles.icon} /> AWS
                  </Link>

                  <Link
                    to="/Services/azure-cloud"
                    className={styles.dropdownItem}
                    onClick={onLinkClick}
                  >
                    <FaMicrosoft className={styles.icon} /> Azure
                  </Link>

                  <Link
                    to="/Services/google-cloud"
                    className={styles.dropdownItem}
                    onClick={onLinkClick}
                  >
                    <FaGoogle className={styles.icon} /> Google Cloud
                  </Link>

                  <Link
                    to="/Services/devops"
                    className={styles.dropdownItem}
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
