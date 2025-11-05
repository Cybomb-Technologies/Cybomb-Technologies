import "./home-contact.css";

function Homecontact() {
  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#FFFFFF" }}>
      <div className="container" id="home-contact" style={{ padding: "0px" }}>
        <h2
          className="text-center"
          style={{ color: "#003459", borderRadius: "8px" }}
        >
          Get in Touch
        </h2>
        <p
          className="text-secondary fs-5 text-center mt-3"
          
        >
          Ready to start your project? We're here to help you every step of the
          way
        </p>

        <div className="contact-flex-container">
          {/* Left Card */}
          <div className="contact-card-wrapper">
            <div className="card p-4 contact-card border-0 shadow">
              <h3 className="text-white">Contact Information</h3>

              {/* Address */}
              <div className="d-flex mt-3 align-items-start">
                <div className="pt-3">
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                </div>
                <div className="ms-3">
                  <p className="contact-text-color mb-0">
                    <b>India</b>
                  </p>
                  <p className="mb-0 fs-6 contact-text-color">
                    Cybomb Technologies Pvt Ltd <br />  Prime Plaza No.54/1, 1st street, Sripuram colony,
                    <br />
                    St.Thomas Mount, Chennai, India
                  </p>
                </div>
                
              </div>
              <div className="d-flex mt-3 align-items-start">
                <div className="pt-3">
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                </div>
                <div className="ms-3">
                  <p className="contact-text-color mb-0">
                    <b>USA</b>
                  </p>
                  <p className="mb-0 fs-6 contact-text-color">
                    Cybomb Technologies Inc, <br />  30 N Gould St Ste R,
                    <br />
                    Sheridan, Wyoming 82801
                  </p>
                </div>
                
              </div>

              {/* Phone */}
              <div className="d-flex mt-5 align-items-start">
                <div className="pt-3">
                  <i
                    className="bi bi-telephone-fill contact-icon"
                    style={{ backgroundColor: "#16A34A" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 text-white">
                    <b className="contact-text-color">Phone</b>
                  </p>
                  <p className="mb-0">
                    <a
                      href="tel:+919715092104"
                      className="text-decoration-none contact-text-color"
                    >
                      +91 9715092104
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex mt-5 align-items-start">
                <div className="pt-3">
                  <i
                    className="bi bi-envelope-fill contact-icon"
                    style={{ backgroundColor: "#9333EA" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 contact-text-color">
                    <b>Email</b>
                  </p>
                  <p className="mb-0">
                    <a
                      href="mailto:support@cybomb.com"
                      className="text-decoration-none contact-text-color"
                    >
                      support@cybomb.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="d-flex mt-5 align-items-start">
                <div className="pt-3">
                  <i
                    className="bi bi-clock-fill contact-icon"
                    style={{ backgroundColor: "#EA5800" }}
                  ></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 contact-text-color">
                    <b>Working Hours</b>
                  </p>
                  <p className="mb-0 contact-text-color">
                    Mon–Fri: 9:00 AM – 6:00 PM
                  </p>
                  <p className="mb-0 contact-text-color">
                    Saturday: 10:00 AM – 4:00 PM
                  </p>
                  <p className="mb-0 contact-text-color">Sunday: Closed</p>
                </div>
              </div>

              <hr />
              {/* Social Icons */}
              <div className="d-flex justify-content-center social-icons">
                <a
                  href="https://www.instagram.com/cybomb_tech/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="mx-3 bi bi-instagram fs-4 text-white"></i>
                </a>
                <a
                  href=" https://www.linkedin.com/company/cybomb/"
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

          {/* Right Card (Map) */}
          <div
              className="contact-card-wrapper"
              
              style={{ color: "#003459" }}
            >
              <div
                className="card border-0 shadow map-card"
                style={{ borderRadius: "8px", overflow: "hidden" }} // 👈 Important
              >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.4279204989957!2d80.19743463488764!3d13.008399400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scybomb!5e0!3m2!1sen!2sin!4v1754650616642!5m2!1sen!2sin"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
              <div className="p-5" style={{backgroundColor:"#003459"}}>
                <h5 className="text-white">Visit Our Office</h5>
                <p className="text-white">
                  Located in the heart of Chennai's tech hub, our office is
                  easily accessible and equipped with modern facilities for
                  client meetings and collaboration.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Homecontact;
