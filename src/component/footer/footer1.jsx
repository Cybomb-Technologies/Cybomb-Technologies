import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./footer1.module.css";
import DpiitLogo from "./../../assets/footer/dpiit-logo.png";
import DgftLogo from "./../../assets/footer/dgft-logo.png";
import AicteLogo from "./../../assets/footer/aicte-logo.png";

/* Track device “type” for address formatting */
function useDeviceType() {
  const [device, setDevice] = useState(getDeviceType());
  function getDeviceType() {
    if (window.innerWidth < 768) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  }
  useEffect(() => {
    const onResize = () => setDevice(getDeviceType());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return device;
}

/* Track viewport width so we can do inline “media-query-like” logic */
function useViewportWidth() {
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return vw;
}

const defaultLegalLinks = [
  { to: "/privacy-policy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/refund-policy", label: "Refund" },
  { to: "/cookie-policy", label: "Cookie" },
];

function Footer1({ legalLinks = defaultLegalLinks }) {
  const device = useDeviceType();
  const vw = useViewportWidth();

  /* Breakpoints for layout */
  const isNarrow = vw < 897;     // your requested breakpoint
  const isMobile = vw < 480;     // extra small

  /* ===== Certificate card sizing (tight spacing, bigger logos, equalized) ===== */
  const CERT_CARD_H = isMobile ? 74 : 72;
  const LOGO_BOX_W = isMobile ? 118 : 110;
  const LOGO_BOX_H = isMobile ? 58 : 55;

  const certCardStyle = {
    width: isNarrow ? "100%" : 280,         // full width on narrow, fixed on desktop
    maxWidth: isNarrow ? 420 : 280,
    height: CERT_CARD_H,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: isMobile ? "0.55rem" : "0.5rem",
    padding: isMobile ? "0.45rem 0.7rem" : "0.4rem 0.7rem",
    background: "rgba(0, 52, 89, 0.85)",
    borderRadius: 8,
    overflow: "hidden",
    boxSizing: "border-box",
    margin: isNarrow ? "0 auto" : 0,        // center the card block on narrow
  };

  const logoBoxStyle = {
    width: LOGO_BOX_W,
    height: LOGO_BOX_H,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const logoImgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    display: "block",
  };

  const certTextStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.2,
  };

  /* Top grid content (unchanged) */
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/career", label: "Career" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/global-presence", label: "Global Presence" },
  ];

  const servicesLinks = [
    { to: "/services/mobile-app-development", label: "Mobile Apps" },
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/saas-solutions", label: "SaaS Solutions" },
    { to: "/services/ai-integration", label: "AI Integration" },
    { to: "/services/ui-ux-design", label: "UI/UX Design" },
    { to: "/services/tech-consulting", label: "Tech Consulting" },
  ];

  const contactItems = [
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

  const renderListLinks = (links) =>
    links.map((link, i) => (
      <li key={i}>
        <Link to={link.to}>{link.label}</Link>
      </li>
    ));

  /* Addresses */
  const addressText =
    device === "desktop"
      ? `Cybomb Technologies Pvt Ltd,
         Prime Plaza No.54/1, 1st street, Sripuram colony,
         St. Thomas Mount, Chennai, Tamil Nadu - 600 016, India`
      : `Cybomb Technologies Pvt Ltd,
         Prime Plaza No.54/1, 1st street,
         Sripuram colony, Chennai, Tamil Nadu - 600 016, India`;

  const addressText1 = `Cybomb Technologies Inc,
                        30 N Gould St Ste R,
                        Sheridan, Wyoming 82801`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ===== Top grid: Quick Links | Services | Get in Touch | Address ===== */}
        <div className={styles.desktopLayout}>
          <div className={styles.footerTopRow2}>
            <div className={styles.quickLinks}>
              <h4 className={`${styles.sectionTitle} ${styles.footerQuickLinks}`}>Quick Links</h4>
              <ul>{renderListLinks(quickLinks)}</ul>
            </div>

            <div className={styles.services}>
              <h4 className={`${styles.sectionTitle} ${styles.footerServices}`}>Services</h4>
              <ul>{renderListLinks(servicesLinks)}</ul>
            </div>

            <div className={styles.getInTouch}>
              <h4 className={`${styles.sectionTitle} ${styles.footerGetInTouch}`}>Get in Touch</h4>
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

            <div>
              <h4 className={styles.sectionTitle}>Address</h4>

              <div className="w-100 mb-3">
                <div className={styles.contactItem}>
                  <i className={`bi bi-geo-alt-fill ${styles.icon}`}></i>
                  <div className={styles.contactTextBlock}>
                    <p><strong>India</strong></p>
                    <p className={styles.addressText}>{addressText}</p>
                  </div>
                </div>
              </div>

              <div className="w-100">
                <div className={styles.contactItem}>
                  <i className={`bi bi-geo-alt-fill ${styles.icon}`}></i>
                  <div className={styles.contactTextBlock}>
                    <p><strong>USA</strong></p>
                    <p className={styles.addressText}>{addressText1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom: Links + Certificates + Copyright (responsive) ===== */}
        <div
          style={{
            marginTop: "1rem",
            borderTop: "1px solid #00bfff",
            paddingTop: isNarrow ? "0.8rem" : "1rem",
            paddingBottom: isNarrow ? "0.8rem" : "1rem",
            display: "flex",
            flexDirection: "column",
            gap: isNarrow ? "0.6rem" : "0.8rem",
          }}
        >
          {/* Row 1 */}
          <div
            style={{
              display: "flex",
              flexDirection: isNarrow ? "column" : "row",
              justifyContent: isNarrow ? "center" : "space-between",
              alignItems: isNarrow ? "center" : "center",
              flexWrap: "wrap",
              gap: isNarrow ? "0.8rem" : "1rem",
            }}
          >
            {/* Legal Links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: isNarrow ? "center" : "flex-start",
                gap: isNarrow ? "14px" : "18px",
                minWidth: 240,
                width: isNarrow ? "100%" : "auto",
              }}
            >
              {legalLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: isNarrow ? "0.9rem" : "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#3fc5ff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.9)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Certificates */}
            <div
              style={{
                display: "flex",
                flexDirection: isNarrow ? "column" : "row",
                justifyContent: isNarrow ? "center" : "flex-end",
                alignItems: "center",
                gap: isNarrow ? "0.75rem" : "0.8rem",
                flexWrap: "wrap",
                width: isNarrow ? "100%" : "auto",
              }}
            >
              <div style={certCardStyle}>
                <div style={logoBoxStyle}>
                  <img src={DpiitLogo} alt="DPIIT" style={logoImgStyle} />
                </div>
                <div style={certTextStyle}>
                  <span style={{ fontSize: "0.8rem", color: "#fff" }}>Cert ID:</span>
                  <span style={{ fontSize: "0.8rem", color: "#ddd", fontWeight: 600 }}>
                    #DIPP115093
                  </span>
                </div>
              </div>

              <div style={certCardStyle}>
                <div style={logoBoxStyle}>
                  <img src={DgftLogo} alt="DGFT" style={logoImgStyle} />
                </div>
                <div style={certTextStyle}>
                  <span style={{ fontSize: "0.8rem", color: "#fff" }}>Cert ID: IEC</span>
                  <span style={{ fontSize: "0.8rem", color: "#ddd", fontWeight: 600 }}>
                    #AARFC1378G
                  </span>
                </div>
              </div>

              <div style={certCardStyle}>
                <div style={logoBoxStyle}>
                  <img src={AicteLogo} alt="AICTE" style={logoImgStyle} />
                </div>
                <div style={certTextStyle}>
                  <span style={{ fontSize: "0.8rem", color: "#fff" }}>AICTE Reg.</span>
                  <span style={{ fontSize: "0.8rem", color: "#ddd", fontWeight: 600 }}>
                    Internship Partner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Copyright */}
          <div
            style={{
              textAlign: isNarrow ? "center" : "left",
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: isNarrow ? "0.85rem" : "0.9rem",
            }}
          >
            © {new Date().getFullYear()} Cybomb Technologies Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
