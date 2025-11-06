import { useState, useEffect } from "react";
import "./home-contact.css";

const LOCATIONS = {
  india: {
    key: "india",
    label: "India",
    companyName: "Cybomb Technologies Pvt Ltd",
    mapsQuery: "Cybomb%20Technologies%20Chennai%20Tamil%20Nadu",
    desc:
      "Cybomb Technologies is a global innovation partner headquartered in Chennai, India — specializing in custom software, AI-driven automation, and cloud-based enterprise solutions. We collaborate with startups and Fortune 500 companies to deliver technology that scales.",
  },
  usa: {
    key: "usa",
    label: "USA",
    companyName: "Cybomb Technologies Inc.",
    mapsQuery:
      "30%20N%20Gould%20St%20Ste%20R,%20Sheridan,%20Wyoming%2082801",
    desc:
      "Our US office in Sheridan, Wyoming, supports North American clients with product engineering, cloud integration, and enterprise software delivery. We ensure seamless communication and collaboration across time zones.",
  },
};

function Homecontact() {
  const [activeKey, setActiveKey] = useState("india");
  const active = LOCATIONS[activeKey];

  // Track viewport width for responsive layout
  const [vw, setVw] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = vw < 1024;
  const isMobile = vw < 768;
  const mapHeight = isMobile ? 260 : isNarrow ? 320 : 400;

  const bigMapSrc = `https://maps.google.com/maps?q=${active.mapsQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  // Button Styles
  const btnBase = {
    padding: "8px 14px",
    fontWeight: 600,
    borderRadius: "999px",
    border: "1px solid #0ea5e9",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "all .2s ease",
  };
  const btnPrimary = {
    ...btnBase,
    background: "#0ea5e9",
    color: "#fff",
  };
  const btnOutline = {
    ...btnBase,
    background: "transparent",
    color: "#0ea5e9",
  };

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="container" id="home-contact" style={{ padding: 0 }}>
        <h2
          className="text-center"
          style={{ color: "#003459", borderRadius: "8px" }}
        >
          Get in Touch
        </h2>
        <p className="text-secondary fs-5 text-center mt-3">
          Ready to start your project? We're here to help you every step of the way.
        </p>

        {/* Flex Container */}
        <div
          className="contact-flex-container"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "stretch",
            gap: isMobile ? "2rem" : "2.5rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left Contact Card */}
          <div
            className="contact-card-wrapper"
            style={{
              flex: 1,
              minWidth: isMobile ? "100%" : 350,
              maxWidth: 500,
            }}
          >
            <div
              className="card p-4 contact-card border-0 shadow"
              style={{
                backgroundColor: "#003459",
                color: "#fff",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <h3>Contact Information</h3>

              {/* India */}
              <div className="d-flex mt-3 align-items-start">
                <div className="pt-3">
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0">
                    <b>India</b>
                  </p>
                  <p className="mb-0 fs-6">
                    Cybomb Technologies Pvt Ltd <br /> Prime Plaza No.54/1, 1st street,
                    Sripuram colony, St.Thomas Mount, Chennai, India
                  </p>
                </div>
              </div>

              {/* USA */}
              <div className="d-flex mt-3 align-items-start">
                <div className="pt-3">
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0">
                    <b>USA</b>
                  </p>
                  <p className="mb-0 fs-6">
                    Cybomb Technologies Inc, <br /> 30 N Gould St Ste R, Sheridan, Wyoming 82801
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex mt-4 align-items-start">
                <div className="pt-3">
                  <i
                    className="bi bi-telephone-fill contact-icon"
                    style={{ backgroundColor: "#16A34A" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0">
                    <b>Phone</b>
                  </p>
                  <a
                    href="tel:+919715092104"
                    className="text-decoration-none text-light"
                  >
                    +91 9715092104
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex mt-4 align-items-start">
                <div className="pt-3">
                  <i
                    className="bi bi-envelope-fill contact-icon"
                    style={{ backgroundColor: "#9333EA" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0">
                    <b>Email</b>
                  </p>
                  <a
                    href="mailto:support@cybomb.com"
                    className="text-decoration-none text-light"
                  >
                    support@cybomb.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="d-flex mt-4 align-items-start">
                <div className="pt-3">
                  <i
                    className="bi bi-clock-fill contact-icon"
                    style={{ backgroundColor: "#EA5800" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0">
                    <b>Working Hours</b>
                  </p>
                  <p className="mb-0">Mon–Fri: 9:00 AM – 6:00 PM</p>
                  <p className="mb-0">Saturday: 10:00 AM – 4:00 PM</p>
                  <p className="mb-0">Sunday: Closed</p>
                </div>
              </div>

              <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />
              <div className="d-flex justify-content-center social-icons">
                <a
                  href="https://www.instagram.com/cybomb_tech/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="mx-3 bi bi-instagram fs-4 text-white"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/cybomb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="mx-3 bi bi-linkedin fs-4 text-white"></i>
                </a>
                <a
                  href="https://x.com/CybombTech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="mx-3 fa-brands fa-x-twitter fs-3 text-white pt-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Card */}
          <div
            className="contact-card-wrapper"
            style={{
              flex: 1,
              minWidth: isMobile ? "100%" : 350,
              maxWidth: 550,
            }}
          >
            <div
              className="card border-0 shadow"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                height: "100%",
              }}
            >
              {/* Header Toggle */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "#f8fafc",
                  borderBottom: "1px solid rgba(0,0,0,.06)",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    type="button"
                    onClick={() => setActiveKey("india")}
                    style={activeKey === "india" ? btnPrimary : btnOutline}
                  >
                    India
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveKey("usa")}
                    style={activeKey === "usa" ? btnPrimary : btnOutline}
                  >
                    USA
                  </button>
                </div>
                <span
                  style={{
                    fontSize: ".8rem",
                    color: "rgba(0,0,0,.55)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Tap to switch map
                </span>
              </div>

              {/* Map */}
              <iframe
                title={`Map - ${active.label}`}
                src={bigMapSrc}
                width="100%"
                height={mapHeight}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  display: "block",
                  filter: "grayscale(0%)",
                  transition: "filter .3s ease",
                }}
              />

              {/* Dynamic Company Description */}
              <div
                className="p-4"
                style={{
                  backgroundColor: "#003459",
                  color: "#ffffff",
                }}
              >
                <h5 style={{ marginBottom: "8px" }}>
                  About {active.companyName}
                </h5>
                <p style={{ marginBottom: "0px", opacity: 0.95 }}>{active.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homecontact;
