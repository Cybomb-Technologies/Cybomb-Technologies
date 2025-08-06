import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./nav1.module.css";
// Clouddropdown1
import Servicedropdown1 from "./service-dropdown1";
import Clouddropdown1 from "./cloud-dropdown";
import Datadropdown1 from "./data-ai";
import Industriesdropdown1 from "./Industries-dropdown";
import Securitydropdown1 from "./security-dropdown";
import Successstoriesdropdown1 from "./success-stories";
import Technologiesdropdown1 from "./technologies-dropdoen";

function Nav1() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 1400;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    if (location.pathname === "/") {
      navbar?.classList.add(styles.transparent);
      const handleScroll = () => {
        if (window.scrollY > 100) {
          navbar?.classList.add(styles.scrolled);
        } else {
          navbar?.classList.remove(styles.scrolled);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        navbar?.classList.remove(styles.scrolled);
        navbar?.classList.remove(styles.transparent);
      };
    } else {
      navbar?.classList.remove(styles.transparent);
      navbar?.classList.remove(styles.scrolled);
    }
  }, [location.pathname]);

  return (
    <>
      <nav className={`${styles.navbar} ${styles.fixedTop}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <Link to="/" className={styles.logo}>
              <img src="/images/logo-11.png" alt="Logo" />
            </Link>

            <button
              className={styles.menuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={styles.menuIcon}></span>
            </button>

            <div className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}>
              <ul className={styles.navItems}>
                <Servicedropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)} />
                <Clouddropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)} />
                <Datadropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)}/>
                <Securitydropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)} />
                <Industriesdropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)} />

                <li className={styles.navItem}>
                  <Link
                    to="#"
                    className={styles.navLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    On-Demand Developer
                  </Link>
                </li>

                <Technologiesdropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)}/>
                <Successstoriesdropdown1 isMobile={isMobile} onLinkClick={() => setIsMobileMenuOpen(false)} />
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.floatingBtn}>
        <a href="tel:+919715092104" target="_blank" rel="noreferrer">
          <div className={styles.contactIcon}>
            <i className="bi bi-telephone-fill"></i>
          </div>
        </a>
      </div>
    </>
  );
}

export default Nav1;
