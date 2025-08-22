import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer1.module.css";

const API_URL = import.meta.env.VITE_API_BASE; 

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

const defaultLegalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Services" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/cookie-policy", label: "Cookie Policy" },
];

function Footer1({ 
  socialLinks = defaultSocialLinks, 
  legalLinks = defaultLegalLinks 
}) {
  const [email, setEmail] = useState();
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/api/footer-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("✅ Subscription successful!");
        setEmail("");
      } else {
        setStatus("❌ Failed to subscribe. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Server error.");
    }
  };

  const contactItems = [
    {
      icon: "bi-geo-alt-fill",
      label: "Address",
      text: "Cybomb Technologies LLP, Prime Plaza No.54/1, 1st street, Sripuram colony, St. Thomas Mount, Chennai, Tamil Nadu - 600 016, India",
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
    { to: "/aboutus", label: "About Us" },
    { to: "/services", label: "Services" },
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
        <div className={styles.desktopLayout}>
          {/* Row 1 */}
          <div className={styles.footerTopRow1}>
            <div className={styles.subscribeSection}>
              <h4 className={styles.subTitle}>Subscribe</h4>
              <p>Stay updated with our latest news and offers.</p>

              <form className={styles.rowAlign} onSubmit={handleSubscribe}>
                <input                   
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
                <button type="submit">Subscribe</button>
              </form>

              {status && <p className={styles.statusMsg}>{status}</p>}
            </div>

            <div className={styles.logoCol}>
              <img src="/images/logo-1-white.png" alt="logo" className={styles.logo} />
              <div className={styles.socials}>{renderSocialIcons()}</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.footerTopRow2}>
            <div className={styles.quickLinks}>
              <h4 className={`${styles.sectionTitle} ${styles.footerQuickLinks}`}>Quick Links</h4>
              <ul>{renderListLinks(quickLinks)}</ul>
            </div>

            <div className={styles.services}>
              <h4 className={`${styles.sectionTitle} ${styles.footerServices}`}>Services</h4>
              <ul>{renderListLinks(servicesLinks)}</ul>
            </div>

            <div className={styles.quickLinks}>
              <h4 className={`${styles.sectionTitle} ${styles.footerLegalLinks}`}>Legal</h4>
              <ul>{renderListLinks(legalLinks)}</ul>
            </div>

            <div className={styles.getInTouch}>
              <h4 className={`${styles.sectionTitle} ${styles.footerGetInTouch}`}>Get in Touch</h4>
              {contactItems.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <i className={`bi ${item.icon} ${styles.icon}`}></i>
                  <div className={styles.contactTextBlock}>
                    <p><strong>{item.label}</strong></p>
                    <p className={item.label === "Address" ? styles.addressText : ""}>
                      {item.label === "Address" ? item.text : item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightSection}>
            <p>© {new Date().getFullYear()} Cybomb Technologies LLP. All rights reserved.</p>
          </div>

          <div className={styles.certificateSection}>
            <div className={styles.certificateItem}>
              <img
                src="/images/footer/dpiit-logo.png"
                alt="Certificate 1"
                className={styles.certificateLogo}
              />
              <div className={styles.certificateText}>
                <span className={styles.certificateLabel}>Cert ID:</span>
                <span className={styles.certificateValue}>#DIPP115093</span>
              </div>
            </div>

            <div className={styles.certificateItem}>
              <img
                src="/images/footer/dgft-logo.png"
                alt="Certificate 2"
                className={styles.certificateLogo}
              />
              <div className={styles.certificateText}>
                <span className={styles.certificateLabel}>Cert ID:</span>
                <span className={styles.certificateValue}>IEC - #AARFC1378G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
