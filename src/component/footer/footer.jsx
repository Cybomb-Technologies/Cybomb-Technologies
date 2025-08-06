import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  const contactItems = [
    {
      icon: "bi-geo-alt-fill",
      label: "Address",
      // text: "Cybomb Technologies LLP, Hygee Works, Guindy, Chennai",
      text: "Cybomb Technologies LLP, Hygee Works - PS Industrials, No.53, Jawaharlal Nehru Road, Guindy Chennai, Tamil Nadu, India",
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Branch Address",
      // text: "Prime Plaza, St.Thomas Mount, Chennai - 600016",
      text: "Cybomb Technologies LLP, Hygee Works - Prime Plaza No.54/1, 1st street, Sripuram colony,Viralur, Chakrapani Colony, St.Thomas Mount Chennai - 600016, Tamil Nadu, India",
    },
    {
      icon: "bi-telephone-fill",
      label: "Phone",
      text: <a href="tel:+919715092104">+91 9715092104</a>,
    },
    {
      icon: "bi-envelope-fill",
      label: "Email",
      text: <a href="mailto:support@cybomb.com">support@cybomb.com</a>,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ========== DESKTOP VIEW ========== */}
        <div className={styles.desktopGrid}>
          {/* Column 1: Logo + Socials */}
          <div className={styles.logoCol}>
            <img src="/images/nav-logo.jpeg" alt="logo" className={styles.logo} />
            {/* <p className={styles.footerText}>
              Transforming Ideas into Digital reality with Cutting-Edge Mobile and web app development, AI integration, and SaaS solutions.
            </p> */}
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/cybomb_tech/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/cybomb/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/CybombTech" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.quickLinks}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.services}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul>
              <li><Link to="/services/mobile-app-development">Mobile Apps</Link></li>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/saas-solutions">SaaS Solutions</Link></li>
              <li><Link to="/services/ai-integration">AI Integration</Link></li>
              <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link to="/services/tech-consulting">Tech Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className={styles.getInTouch}>
            <h4 className={styles.sectionTitle}>Get in Touch</h4>
            {contactItems.map((item, i) => (
              <div key={i} className={styles.contactItem}>
                <i className={`bi ${item.icon} ${styles.icon}`}></i>
                <div className={styles.contactTextBlock}>
                  <p><strong>{item.label}</strong></p>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== TABLET VIEW ========== */}
        <div className={styles.tabletView}>
          {/* Row 1: Logo + Socials */}
          <div className={styles.mobileTop}>
            <img src="/images/nav-logo.jpeg" alt="logo" className={styles.logo} />
            {/* <p className={styles.footerText}>
              Transforming Ideas into Digital reality with Cutting-Edge Mobile and web app development, AI integration, and SaaS solutions.
            </p> */}
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/cybomb_tech/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/cybomb/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/CybombTech" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Row 2: Quick Links + Services + Get in Touch */}
          <div className={styles.tabletMiddle}>
            <div className={styles.quickLinks}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <div className={styles.linkGroup}>
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/career">Career</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>

            <div className={styles.services}>
              <h4 className={styles.sectionTitle}>Services</h4>
              <div className={styles.linkGroup}>
                <Link to="/services/mobile-app-development">Mobile Apps</Link>
                <Link to="/services/web-development">Web Development</Link>
                <Link to="/services/saas-solutions">SaaS Solutions</Link>
                <Link to="/services/ai-integration">AI Integration</Link>
                <Link to="/services/ui-ux-design">UI/UX Design</Link>
                <Link to="/services/tech-consulting">Tech Consulting</Link>
              </div>
            </div>

            <div className={styles.mobileGetInTouch}>
              <h4 className={styles.sectionTitle}>Get in Touch</h4>
              {contactItems.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <i className={`bi ${item.icon} ${styles.icon}`}></i>
                  <div>
                    <p><strong>{item.label}</strong></p>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== MOBILE VIEW ========== */}
        <div className={styles.mobileView}>
          {/* Row 1: Logo + Socials */}
          <div className={styles.mobileTop}>
            <img src="/images/nav-logo.jpeg" alt="logo" className={styles.logo} />
            <p className={styles.footerText}>
              Transforming Ideas into Digital reality with Cutting-Edge development & SaaS solutions.
            </p>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/cybomb_tech/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/cybomb/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/CybombTech" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Row 2: Quick Links + Services side-by-side */}
          <div className={styles.mobileLinks}>
            <div className={styles.quickLinks}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <div className={`${styles.linkGroup} ${styles.pageLinks}`}>
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/career">Career</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>

            <div className={styles.services}>
              <h4 className={styles.sectionTitle}>Services</h4>
              <div className={styles.linkGroup}>
                <Link to="/services/mobile-app-development">Mobile Apps</Link>
                <Link to="/services/web-development">Web Development</Link>
                <Link to="/services/saas-solutions">SaaS Solutions</Link>
                <Link to="/services/ai-integration">AI Integration</Link>
                <Link to="/services/ui-ux-design">UI/UX Design</Link>
                <Link to="/services/tech-consulting">Tech Consulting</Link>
              </div>
            </div>
          </div>

          {/* Row 3: Full-width Get in Touch */}
          <div className={styles.mobileGetInTouch}>
            <h4 className={styles.sectionTitle}>Get in Touch</h4>
            {contactItems.map((item, i) => (
              <div key={i} className={styles.contactItem}>
                <i className={`bi ${item.icon} ${styles.icon}`}></i>
                <div>
                  <p><strong>{item.label}</strong></p>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== FOOTER BOTTOM ========== */}
        <div className={styles.footerBottom}>
          <div className={styles.legalLinks}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
          <p>© 2025 Cybomb Technologies LLP | All Rights Reserved</p>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
