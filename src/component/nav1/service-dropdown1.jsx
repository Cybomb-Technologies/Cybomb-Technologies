import { Link } from "react-router-dom";
import {
  FaCode, FaCloud, FaCogs, FaBullhorn, FaMobileAlt, FaShoppingCart,
  FaTools, FaProjectDiagram, FaHeadset, FaUsersCog, FaServer, FaChartLine,
  FaSearch, FaFacebook, FaGoogle, FaThumbsUp, FaRocket, FaChalkboardTeacher
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineCloudQueue, MdDesignServices } from "react-icons/md";
import styles from "./dropdown.module.css";

function Servicedropdown1({
  onLinkClick,
  isMobile,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}) {

  // console.log("dropdown")

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
          //  onMouseEnter={() => !isMobile && onToggle(true)}
          //  onMouseLeave={() => !isMobile && onToggle(false)}
         >
           Services
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
                      transform: "translateX(-25%)",
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

              {/* Column 1: Design & Development */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}>
                  <FaCode className={styles.icon} /> Design & Development
                </div>
                <Link to="/services/ui-ux-design" className={styles.dropdownItem} onClick={onLinkClick}> <MdDesignServices className={styles.icon} /> UI/UX Design </Link>
                <Link to="/services/web-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaProjectDiagram className={styles.icon} /> Website Development
                </Link>
                <Link to="/services/mobile-app-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaMobileAlt className={styles.icon} /> Mobile App Development
                </Link>
                <Link to="/services/ecommerce-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaShoppingCart className={styles.icon} /> E-commerce Development
                </Link>
                <Link to="/services/software-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaTools className={styles.icon} /> Software Development
                </Link>
                <Link to="/services/game-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaRocket className={styles.icon} /> Game Development
                </Link>
                <Link to="/services/bespoke-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaProjectDiagram className={styles.icon} /> Bespoke Development
                </Link>
                <Link to="/services/api-development" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaCogs className={styles.icon} /> API Development
                </Link>
                <Link to="/services/custom-software-integration-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaUsersCog className={styles.icon} /> Software Integration
                </Link>                

              </div>

              {/* Column 2: Enterprise Services */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}>
                  <FaCloud className={styles.icon} /> Enterprise Services
                </div>
                <Link to="/services/crm-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaUsersCog className={styles.icon} /> CRM Solutions
                </Link>
                <Link to="/services/zoho-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaCogs className={styles.icon} /> Zoho
                </Link>
                <Link to="/services/cloud-solution" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaCloud className={styles.icon} /> Cloud Solutions
                </Link>
                <Link to="/services/data-engineering" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaServer className={styles.icon} /> Data Engineering
                </Link>
                <Link to="/services/ai-ml-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaCogs className={styles.icon} /> AI/ML
                </Link>
                <Link to="/services/salesforce-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaUsersCog className={styles.icon} /> Salesforce
                </Link>
                <Link to="/services/hubspot-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaBullhorn className={styles.icon} /> HubSpot
                </Link>
                <Link to="services/saas-solutions" className={styles.dropdownItem} onClick={onLinkClick}> <MdOutlineCloudQueue className={styles.icon} /> SAAS Solutions </Link>
              </div>

              {/* Column 3: Support Services */}
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}>
                  <FaCogs className={styles.icon} /> Support Services
                </div>
                <Link to="/services/hosting-service" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaServer className={styles.icon} /> Hosting
                </Link>
                <Link to="/services/support-service" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaHeadset className={styles.icon} /> Server Support
                </Link>
                <Link to="/services/development-support" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaTools className={styles.icon} /> Dev Support
                </Link>
                <Link to="/services/staff-agumentation" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaUsersCog className={styles.icon} /> Staff Augmentation
                </Link>
                <Link to="/services/digital-fulfilment-support" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaTools className={styles.icon} /> Digital Fulfilment
                </Link>
                <Link to="/services/it-support" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaHeadset className={styles.icon} /> IT Support
                </Link>
                <Link to="/services/devops-support" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaCogs className={styles.icon} /> DevOps
                </Link>
                <Link  to="/services/tech-consulting" className={styles.dropdownItem} onClick={onLinkClick}> <FaChalkboardTeacher className={styles.icon} /> Tech Consulting </Link>
              </div>
{/* 
              Column 4: Digital Marketing
              <div className={styles.dropdownColumn}>
                <div className={styles.dropdownHeader}>
                  <FaBullhorn className={styles.icon} /> Digital Marketing
                </div>
                <Link to="/services/search-engine-optimization" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaSearch className={styles.icon} /> SEO
                </Link>
                <Link to="/services/social-media-marketing" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaFacebook className={styles.icon} /> Social Media Marketing
                </Link>
                <Link to="/services/Pay-per-click" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaGoogle className={styles.icon} /> Pay Per Click
                </Link>
                <Link to="/services/ORM-services" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaThumbsUp className={styles.icon} /> ORM
                </Link>
                <Link to="/services/performance-optimization" className={styles.dropdownItem} onClick={onLinkClick}>
                  <FaChartLine className={styles.icon} /> Performance Optimization
                </Link>
              </div> */}

            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Servicedropdown1;
