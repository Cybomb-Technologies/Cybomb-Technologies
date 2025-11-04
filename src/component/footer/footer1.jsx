import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./footer1.module.css";
import DpiitLogo from "./../../assets/footer/dpiit-logo.png";
import DgftLogo from "./../../assets/footer/dgft-logo.png";
import AicteLogo from "./../../assets/footer/aicte-logo.png";

/**
 * Device type hook (unchanged)
 */
function useDeviceType() {
  const [device, setDevice] = useState(getDeviceType());

  function getDeviceType() {
    if (window.innerWidth < 768) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  }

  useEffect(() => {
    const handleResize = () => setDevice(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

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
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/cookie-policy", label: "Cookie Policy" },
];

function Footer1({
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,

  // You can pass custom addresses in through props if you like
    address1Label = "Address 1",
  address2Label = "USA Address",
  address1TextDesktop = `Cybomb Technologies LLP,
Prime Plaza No.54/1, 1st street, Sripuram colony,
St. Thomas Mount, Chennai, Tamil Nadu - 600 016, India`,
  address1TextTablet = `Cybomb Technologies LLP,
Prime Plaza No.54/1, 1st street,
Sripuram colony, St. Thomas Mount,
Chennai, TN - 600 016, India`,
  address1TextMobile = `Cybomb Technologies Pvt ,
Prime Plaza No.54/1, 1st street,
Sripuram colony, St. Thomas Mount,
Chennai, Tamil Nadu - 600 016, India`,
  address2Text = `Cybomb Technologies Inc,
30 N Gould St Ste R,
Sheridan, Wyoming 82801, USA`,

}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const device = useDeviceType();

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

  // Address 1 text mapped by device (kept like your default)
  let address1Text = "";
  if (device === "desktop") {
    address1Text = address1TextDesktop;
  } else if (device === "tablet") {
    address1Text = address1TextTablet;
  } else {
    address1Text = address1TextMobile;
  }

  // DEFAULT Get in Touch items (reverted: phone & email like before)
  const getInTouchItems = [
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
        {/* DESKTOP/TABLET/ MOBILE wrapper kept as-is */}
        <div className={styles.desktopLayout}>
          {/* Row 1 (unchanged) */}
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
              <img
                src="/images/logo-1-white.png"
                alt="logo"
                className={styles.logo}
              />
              <div className={styles.socials}>{renderSocialIcons()}</div>
            </div>
          </div>

          {/* Row 2 */}
<div className={styles.footerTopRow2}>
  {/* Quick Links */}
  <div className={styles.quickLinks}>
    <h4 className={`${styles.sectionTitle} ${styles.footerQuickLinks}`}>
      Quick Links
    </h4>
    <ul>{renderListLinks(quickLinks)}</ul>
  </div>

  {/* Services */}
  <div className={styles.services}>
    <h4 className={`${styles.sectionTitle} ${styles.footerServices}`}>
      Services
    </h4>
    <ul>{renderListLinks(servicesLinks)}</ul>
  </div>

  {/* Legal */}
  <div className={styles.quickLinks}>
    <h4 className={`${styles.sectionTitle} ${styles.footerLegalLinks}`}>
      Legal
    </h4>
    <ul>{renderListLinks(legalLinks)}</ul>
  </div>

  {/* Get in Touch */}
  <div className={styles.getInTouch}>
    <h4 className={`${styles.sectionTitle} ${styles.footerGetInTouch}`}>
      Get in Touch
    </h4>

    {getInTouchItems.map((item, i) => (
      <div key={i} className={styles.contactItem}>
        <i className={`bi ${item.icon} ${styles.icon}`}></i>
        <div className={styles.contactTextBlock}>
          <p>
            <strong>{item.label}</strong>
          </p>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* 🔹 New Address Row spanning entire footer width */}
<div className={styles.footerAddressRow}>
  {/* Address 1 */}
  <div className={styles.addressCard}>
    <div className={styles.contactItem}>
      <i className={`bi bi-geo-alt-fill ${styles.icon}`}></i>
      <div className={styles.contactTextBlock}>
        <p>
          <strong>{address1Label}</strong>
        </p>
        <p className={styles.addressText}>{address1Text}</p>
      </div>
    </div>
  </div>

  {/* Address 2 */}
  <div className={styles.addressCard}>
    <div className={styles.contactItem}>
      <i className={`bi bi-geo-alt-fill ${styles.icon}`}></i>
      <div className={styles.contactTextBlock}>
        <p>
          <strong>{address2Label}</strong>
        </p>
        <p className={styles.addressText}>{address2Text}</p>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* BOTTOM (unchanged) */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightSection}>
            <p>
              © {new Date().getFullYear()} Cybomb Technologies LLP.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className={styles.certificateSection}>
            <div className={styles.certificateItem}>
              <img
                src={DpiitLogo}
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
                src={DgftLogo}
                alt="Certificate 2"
                className={styles.certificateLogo}
              />
              <div className={styles.certificateText}>
                <span className={styles.certificateLabel}>Cert ID: IEC</span>
                <span className={styles.certificateValue}>#AARFC1378G</span>
              </div>
            </div>

            <div
              className={`${styles.certificateItem} ${styles.thirdCertificate}`}
            >
              <img
                src={AicteLogo}
                alt="Certificate 3"
                className={`${styles.certificateLogo} ${styles.thirdCertificateLogo}`}
              />
              <div className={styles.certificateText}>
                <span className={styles.certificateLabel}>AICTE Reg.</span>
                <span className={styles.certificateValue}>
                  Internship Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
