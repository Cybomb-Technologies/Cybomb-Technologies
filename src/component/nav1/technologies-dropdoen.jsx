import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";

import {
  FaMobileAlt, FaShoppingCart, FaTools, FaLaptopCode, FaServer,
  FaCogs, FaCloud, FaCode, FaGamepad, FaChevronDown, FaChevronUp,
  FaAndroid, FaApple, FaReact, FaSwift, FaJava, FaMicrosoft,
  FaShopify, FaMagento, FaWordpress, FaDrupal, FaLaravel,
  FaPhp, FaPython, FaJs, FaHtml5, FaNodeJs, FaAngular,
  FaAws, FaMicrosoft as FaAzure, FaUnity, FaCube, FaGofore, FaRocket
} from "react-icons/fa";

function Technologiesdropdown1({ onLinkClick, isMobile, isOpen, onToggle }) {
  return (
    <li
      className={styles.dropdownWrapper}
      onMouseEnter={() => !isMobile && onToggle(true)}
      onMouseLeave={() => !isMobile && onToggle(false)}
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
      >
        Technologies
        <span className={styles.arrow}>
          {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </span>
      </Link>

      <ul
        className={`${styles.dropdownMenu} ${isMobile && isOpen ? styles.show : ""}`}
        style={
          isMobile
            ? {
                display: isOpen ? "block" : "none",
                position: "static",
                width: "100%",
                transform: "none",
                padding: "0.5rem 1rem",
              }
            : {
                display: isOpen ? "block" : "none",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-80%)",
                minWidth: "250px",
                maxWidth: "calc(60vw - 16px)",
              }
        }
      >
        <li>
          <div className="container">
            <div className={styles.dropdownGrid}>

              {/* Mobile Apps */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaMobileAlt className={styles.icon} /> Mobile Apps</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaAndroid className={styles.icon} /> Android</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaReact className={styles.icon} /> React Native</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaApple className={styles.icon} /> iOS</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaReact className={styles.icon} /> Flutter</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaSwift className={styles.icon} /> Swift</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaJava className={styles.icon} /> Kotlin</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMicrosoft className={styles.icon} /> Xamarin</Link>
              </div>

              {/* Ecommerce */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaShoppingCart className={styles.icon} /> Ecommerce</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMagento className={styles.icon} /> Adobe Commerce</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaShopify className={styles.icon} /> Shopify</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> Symfony</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaShoppingCart className={styles.icon} /> WooCommerce</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaShoppingCart className={styles.icon} /> BigCommerce</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMagento className={styles.icon} /> Magento</Link>
              </div>

              {/* CMS */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaTools className={styles.icon} /> CMS</div>
                <div className={styles.subGrid2x}>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaWordpress className={styles.icon} /> WordPress</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaDrupal className={styles.icon} /> Drupal</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTools className={styles.icon} /> Craft</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTools className={styles.icon} /> Acquia</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTools className={styles.icon} /> Joomla</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMicrosoft className={styles.icon} /> SharePoint</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTools className={styles.icon} /> Umbraco</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTools className={styles.icon} /> Sitecore</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaTools className={styles.icon} /> Pantheon</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> AEM Development</Link>
                </div>
              </div>

              {/* Custom Development */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaLaptopCode className={styles.icon} /> Custom Development</div>
                <div className={styles.subGrid2x}>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaPhp className={styles.icon} /> PHP</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaLaravel className={styles.icon} /> Laravel</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> ROR</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMicrosoft className={styles.icon} /> Power Platform</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaHtml5 className={styles.icon} /> HTML5</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaJs className={styles.icon} /> JavaScript</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> Zoho Creator</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaPython className={styles.icon} /> Python</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaMicrosoft className={styles.icon} /> DotNet</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaNodeJs className={styles.icon} /> NodeJS</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaAngular className={styles.icon} /> Angular</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> Spring</Link>
                  <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> C#</Link>
                </div>
              </div>

              {/* Full Stack */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaServer className={styles.icon} /> Full Stack Development</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaServer className={styles.icon} /> Full Stack MERN</Link>
              </div>

              {/* CRM */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaCogs className={styles.icon} /> CRM</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> ServiceNow</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCode className={styles.icon} /> Salesforce</Link>
              </div>

              {/* Games */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaGamepad className={styles.icon} /> Games</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaUnity className={styles.icon} /> Unity</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaCube className={styles.icon} /> Unreal</Link>
              </div>

              {/* Cloud */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaCloud className={styles.icon} /> Cloud</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaAws className={styles.icon} /> AWS</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaAzure className={styles.icon} /> Azure</Link>
              </div>

              {/* Other */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaCode className={styles.icon} /> Other</div>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaGofore className={styles.icon} /> Golang</Link>
                <Link className={styles.dropdownItem} onClick={onLinkClick}><FaRocket className={styles.icon} /> AR/VR</Link>
              </div>

            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Technologiesdropdown1;
