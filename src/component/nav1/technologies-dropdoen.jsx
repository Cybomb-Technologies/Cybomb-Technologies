import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import { useRef, useEffect, useState } from "react";

import {
  FaMobileAlt,
  FaShoppingCart,
  FaTools,
  FaLaptopCode,
  FaServer,
  FaCogs,
  FaCloud,
  FaCode,
  FaGamepad,
  FaChevronDown,
  FaChevronUp,
  FaAndroid,
  FaApple,
  FaReact,
  FaSwift,
  FaJava,
  FaMicrosoft,
  FaShopify,
  FaMagento,
  FaWordpress,
  FaDrupal,
  FaLaravel,
  FaPhp,
  FaPython,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaAngular,
  FaAws,
  FaMicrosoft as FaAzure,
  FaUnity,
  FaCube,
  FaGofore,
  FaRocket,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

function Technologiesdropdown1({
  onLinkClick,
  isMobile,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}) {
  const dropdownRef = useRef(null);
  const [columnCount, setColumnCount] = useState(0);

  useEffect(() => {
    if (dropdownRef.current) {
      // Count only the top-level headers (direct techColumn children)
      const columns = dropdownRef.current.querySelectorAll(
        `.${styles.techColumn}`
      );
      setColumnCount(columns.length);
    }
  }, [isOpen]);

  return (
    <li
      className={styles.dropdownWrapper}
      onMouseEnter={onMouseEnter || (() => !isMobile && onToggle(true))}
      onMouseLeave={onMouseLeave || (() => !isMobile && onToggle(false))}
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
        className={`${styles.dropdownMenu} ${
          isMobile && isOpen ? styles.show : ""
        }`}
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
                transform: "translateX(-70%)",
                minWidth: "1000px",
                maxWidth: "1200px",
                width: `${Math.min(columnCount, 4) * 220}px`,
              }
        }
      >
        <li>
          <div className="container">
            <div className={styles.dropdownGrid} ref={dropdownRef}>
              {/* Mobile Apps */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}>
                  {" "}
                  <FaMobileAlt className={styles.icon} /> Mobile Apps{" "}
                </div>
                <Link
                  to="/services/android-app-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <FaAndroid className={styles.icon} /> Android{" "}
                </Link>
                <Link
                  to="/services/ios-app-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <FaApple className={styles.icon} /> iOS{" "}
                </Link>
                <Link
                  to="/services/flutter-app-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <SiFlutter className={styles.icon} /> Flutter
                </Link>
                <Link
                  to="/services/react-native-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <FaReact className={styles.icon} /> React Native{" "}
                </Link>
                <Link
                  to="/services/swift-app-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <FaSwift className={styles.icon} /> Swift{" "}
                </Link>
                <Link
                  to="/services/kotlin-app-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <FaJava className={styles.icon} /> Kotlin{" "}
                </Link>
                <Link
                  to="/services/xamarin-app-development"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  {" "}
                  <FaMicrosoft className={styles.icon} /> Xamarin{" "}
                </Link>
              </div>

              {/* Ecommerce */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}>
                  <FaShoppingCart className={styles.icon} /> Ecommerce
                </div>
                <Link
                  to="/services/adobe-commerce"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaMagento className={styles.icon} /> Adobe Commerce
                </Link>
                <Link
                  to="/services/shopify"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaShopify className={styles.icon} /> Shopify
                </Link>
                <Link
                  to="/services/symfony"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaCode className={styles.icon} /> Symfony
                </Link>
                <Link
                  to="/services/woo-commerce"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaShoppingCart className={styles.icon} /> WooCommerce
                </Link>
                <Link
                  to="/services/big-commerce"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaShoppingCart className={styles.icon} /> BigCommerce
                </Link>
                <Link
                  to="/services/magento"
                  className={styles.dropdownItem1}
                  onClick={onLinkClick}
                >
                  <FaMagento className={styles.icon} /> Magento
                </Link>
              </div>

              {/* CMS */}
              <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}>
                  {" "}
                  <FaTools className={styles.icon} /> CMS{" "}
                </div>
                <div className={styles.subColumnWrapper}>
                  <div className={styles.subColumn}>
                    <Link
                      to="/services/wordpress"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaWordpress className={styles.icon} /> WordPress{" "}
                    </Link>
                    <Link
                      to="/services/drupal"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaDrupal className={styles.icon} /> Drupal{" "}
                    </Link>
                    <Link
                      to="/services/craft"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaTools className={styles.icon} /> Craft{" "}
                    </Link>
                    <Link
                      to="/services/acquia"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaTools className={styles.icon} /> Acquia{" "}
                    </Link>
                    <Link
                      to="/services/joomla"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaTools className={styles.icon} /> Joomla{" "}
                    </Link>
                  </div>
                  <div className={styles.subColumn}>
                    <Link
                      to="/services/sharepoint"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaMicrosoft className={styles.icon} /> SharePoint{" "}
                    </Link>
                    <Link
                      to="/services/umbraco"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaTools className={styles.icon} /> Umbraco{" "}
                    </Link>
                    <Link
                      to="/services/sitecore"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaTools className={styles.icon} /> Sitecore{" "}
                    </Link>
                    <Link
                      to="/services/pantheon"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaTools className={styles.icon} /> Pantheon{" "}
                    </Link>
                    <Link
                      to="/services/aem"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      {" "}
                      <FaCode className={styles.icon} /> AEM Development{" "}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Custom Development */}
              <div className={styles.techColumn1}>
                <div className={styles.dropdownHeader}>
                  <FaLaptopCode className={styles.icon} /> Custom Development
                </div>
                <div className={styles.subColumnWrapper}>
                  <div className={styles.subColumn}>
                    <Link
                      to="/services/php-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaPhp className={styles.icon} /> PHP
                    </Link>
                    <Link
                      to="/services/laravel-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaLaravel className={styles.icon} /> Laravel
                    </Link>
                    <Link
                      to="/services/ror-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> ROR
                    </Link>
                    <Link
                      to="/services/power-platform-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaMicrosoft className={styles.icon} /> Power Platform
                    </Link>
                    <Link
                      to="/services/html5-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaHtml5 className={styles.icon} /> HTML5
                    </Link>
                     <Link
                      to="/services/css"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaHtml5 className={styles.icon} /> CSS 3
                    </Link>
                    <Link
                      to="/services/javascript-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaJs className={styles.icon} /> JavaScript
                    </Link>
                    <Link
                      to="/services/zohocreator-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> Zoho Creator
                    </Link>
                  </div>
                  <div className={styles.subColumn}>
                    <Link
                      to="/services/python-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaPython className={styles.icon} /> Python
                    </Link>
                    <Link
                      to="/services/dotnet-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaMicrosoft className={styles.icon} /> DotNet
                    </Link>
                    <Link
                      to="/services/nodejs-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaNodeJs className={styles.icon} /> NodeJS
                    </Link>
                    <Link
                      to="/services/angular-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaAngular className={styles.icon} /> Angular
                    </Link>
                    <Link
                      to="/services/spring-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> Spring
                    </Link>
                    <Link
                      to="/services/csharp-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> C#
                    </Link>
                    <Link
                      to="/services/react-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> React
                    </Link>
                      <Link
                      to="/services/database-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> Database
                    </Link>
                     {/* <Link
                      to="/services/versioncontrol-development-service"
                      className={styles.dropdownItem1}
                      onClick={onLinkClick}
                    >
                      <FaCode className={styles.icon} /> Version Control
                    </Link> */}
                    
                  </div>
                </div>
              </div>

              {/* Full Stack */}
              {/* <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaServer className={styles.icon} /> Full Stack </div>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaServer className={styles.icon} /> Full Stack MERN</Link>
              </div> */}

              {/*  CRM */}
              {/* <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaCogs className={styles.icon} /> CRM</div>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaCode className={styles.icon} /> ServiceNow</Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaCode className={styles.icon} /> Salesforce</Link>
              </div> */}

              {/* Games */}
              {/* <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaGamepad className={styles.icon} /> Games</div>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaUnity className={styles.icon} /> Unity</Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaCube className={styles.icon} /> Unreal</Link>
              </div> */}

              {/* Cloud */}
              {/* <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaCloud className={styles.icon} /> Cloud</div>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaAws className={styles.icon} /> AWS</Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaAzure className={styles.icon} /> Azure</Link>
              </div> */}

              {/* Other*/}
              {/* <div className={styles.techColumn}>
                <div className={styles.dropdownHeader}><FaCode className={styles.icon} /> Other</div>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaGofore className={styles.icon} /> Golang</Link>
                <Link className={styles.dropdownItem1} onClick={onLinkClick}><FaRocket className={styles.icon} /> AR/VR</Link>
              </div> */}
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Technologiesdropdown1;
