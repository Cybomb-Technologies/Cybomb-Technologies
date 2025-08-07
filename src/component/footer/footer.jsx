import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const defaultSocialLinks = [
  {
    href: "https://www.instagram.com/cybomb_tech/",
    iconClass: "bi bi-instagram",
  },
  {
    href: "https://www.linkedin.com/company/cybomb/",
    iconClass: "bi bi-linkedin",
  },
  {
    href: "https://x.com/CybombTech",
    iconClass: "fa-brands fa-x-twitter",
  },
];

function Footer({ socialLinks = defaultSocialLinks }) {
  const contactItems = [
    {
      icon: "bi-geo-alt-fill",
      label: "Address",
      text: "Cybomb Technologies LLP, Hygee Works - PS Industrials, No.53, Jawaharlal Nehru Road, Guindy Chennai, Tamil Nadu, India",
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Branch Address",
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

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/career", label: "Career" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const servicesLinks = [
    { to: "/services/mobile-app-development", label: "Mobile Apps" },
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/saas-solutions", label: "SaaS Solutions" },
    { to: "/services/ai-integration", label: "AI Integration" },
    { to: "/services/ui-ux-design", label: "UI/UX Design" },
    { to: "/services/tech-consulting", label: "Tech Consulting" },
  ];

  const renderLinks = (links) =>
    links.map((link, i) => (
      <Link key={i} to={link.to}>
        {link.label}
      </Link>
    ));

  const renderListLinks = (links) =>
    links.map((link, i) => (
      <li key={i}>
        <Link to={link.to}>{link.label}</Link>
      </li>
    ));

  const renderSocialIcons = () =>
    socialLinks.map((item, index) => (
      <a key={index} href={item.href} target="_blank" rel="noreferrer">
        <i className={item.iconClass}></i>
      </a>
    ));

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* DESKTOP */}
        <div className={styles.desktopGrid}>
          <div className={styles.logoCol}>
            <img src="/images/logo-1-white.png" alt="logo" className={styles.logo} />
            <h4 className={`${styles.sectionTitle} mt-4`}>Follow Us</h4>
            <div className={styles.socials}>{renderSocialIcons()}</div>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul>{renderListLinks(quickLinks)}</ul>
          </div>

          <div className={styles.services}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul>{renderListLinks(servicesLinks)}</ul>
          </div>

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

        {/* TABLET */}
        <div className={styles.tabletView}>
          <div className={styles.mobileTop}>
            <img src="/images/logo-1-white.png" alt="logo" className={styles.logo} />
            <h4 className={`${styles.sectionTitle} mt-4`}>Follow Us</h4>
            <div className={styles.socials}>{renderSocialIcons()}</div>
          </div>

          <div className={styles.tabletMiddle}>
            <div className={styles.quickLinks}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <div className={styles.linkGroup}>{renderLinks(quickLinks)}</div>
            </div>

            <div className={styles.services}>
              <h4 className={styles.sectionTitle}>Services</h4>
              <div className={styles.linkGroup}>{renderLinks(servicesLinks)}</div>
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

        {/* MOBILE */}
        <div className={styles.mobileView}>
          <div className={styles.mobileTop}>
            <img src="/images/logo-1-white.png" alt="logo" className={styles.logo} />
            <h4 className={`${styles.sectionTitle} mt-4`}>Follow Us</h4>
            <div className={styles.socials}>{renderSocialIcons()}</div>
          </div>

          <div className={styles.mobileLinks}>
            <div className={styles.quickLinks}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <div className={`${styles.linkGroup} ${styles.pageLinks}`}>{renderLinks(quickLinks)}</div>
            </div>

            <div className={styles.services}>
              <h4 className={styles.sectionTitle}>Services</h4>
              <div className={styles.linkGroup}>{renderLinks(servicesLinks)}</div>
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

        {/* BOTTOM */}
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
