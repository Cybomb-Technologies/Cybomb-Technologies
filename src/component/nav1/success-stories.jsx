import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
        onMouseEnter={() => !isMobile && onToggle(true)}
        onMouseLeave={() => !isMobile && onToggle(false)}
      >
        Success Stories
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
                  <FaBriefcase className={styles.icon} /> Our Work
                </div>
                <Link
                  to="/case-studies"
                  className={styles.dropdownItem}
                  onClick={onLinkClick}
                >
                  Case Studies
                </Link>
                <Link
                  to="/portfolio"
                  className={styles.dropdownItem}
                  onClick={onLinkClick}
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Successstoriesdropdown1;
