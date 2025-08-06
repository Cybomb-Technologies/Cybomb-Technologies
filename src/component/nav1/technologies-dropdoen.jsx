import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  FaMobileAlt, FaShoppingCart, FaTools, FaLaptopCode, FaServer,
  FaCogs, FaUnity, FaCloud, FaCode, FaGamepad
} from "react-icons/fa";

function Technologiesdropdown1({ onLinkClick, isMobile }) {
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
        Technologies
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

            {/* Mobile Apps */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaMobileAlt className={styles.icon} /> Mobile Apps</div>
              {["Android", "React Native", "Ios", "Flutter", "Swift", "Kotlin", "Xamarin"].map(item => (
                <Link key={item} className={styles.dropdownItem} onClick={onLinkClick}>{item}</Link>
              ))}
            </div>

            {/* Ecommerce */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaShoppingCart className={styles.icon} /> Ecommerce</div>
              {["Adobe Commerce", "Shopify", "Symfony", "WooCommerce", "BigCommerce", "Magento"].map(item => (
                <Link key={item} className={styles.dropdownItem} onClick={onLinkClick}>{item}</Link>
              ))}
            </div>

            {/* CMS */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaTools className={styles.icon} /> CMS</div>
              {["Wordpress", "Drupal", "Craft", "Acquia", "Joomla", "SharePoint", "Umbraco", "Sitecore", "Pantheon", "AEM Development"].map(item => (
                <Link key={item} className={styles.dropdownItem} onClick={onLinkClick}>{item}</Link>
              ))}
            </div>

            {/* Custom Development */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaLaptopCode className={styles.icon} /> Custom Development</div>
              {["PHP", "Laravel", "ROR", "Power Platform", "HTML5", "JavaScript", "Zoho Creator", "Python", "DotNet", "NodeJS", "Angular", "Spring", "C#"].map(item => (
                <Link key={item} className={styles.dropdownItem} onClick={onLinkClick}>{item}</Link>
              ))}
            </div>

            {/* Full Stack */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaServer className={styles.icon} /> Full Stack Development</div>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>Full Stack MERN</Link>
            </div>

            {/* CRM */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaCogs className={styles.icon} /> CRM</div>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>ServiceNow</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>Salesforce</Link>
            </div>

            {/* Games */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaGamepad className={styles.icon} /> Games</div>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>Unity</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>Unreal</Link>
            </div>

            {/* Cloud */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaCloud className={styles.icon} /> Cloud</div>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>AWS</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>Azure</Link>
            </div>

            {/* Other */}
            <div className={styles.dropdownColumn}>
              <div className={styles.dropdownHeader}><FaCode className={styles.icon} /> Other</div>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>Golang</Link>
              <Link className={styles.dropdownItem} onClick={onLinkClick}>AR/VR</Link>
            </div>

          </div>
        </li>
      </ul>
    </li>
  );
}

export default Technologiesdropdown1;
