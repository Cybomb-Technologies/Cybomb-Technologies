import "./contact.css";
function Contactcontent() {
  return (
    <>
      <section className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" data-aos="zoom-out-up">
              <div className="card p-4 contact-card h-100 border-0 shadow">
                <h3 className="text-primary">Contact Information</h3>
                <div className="d-flex mt-3 align-items-start">
                  <div className="pt-3">
                    <i className="bi bi-geo-alt-fill contact-icon"></i>
                  </div>
                  <div className="ms-3">
                    <p className="contact-text-color mb-0">
                      <b>Address</b>
                    </p>
                    <p className="mb-0 fs-6 contact-text-color">
                      Cybomb Technologies LLP <br /> Hygee Works – PS
                      Industrials
                      <br />
                      Guindy, Chennai, India
                    </p>
                  </div>
                </div>
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
                <div className="d-flex mt-5 align-items-start">
                  <div className="pt-3">
                    <i
                      className="bi bi-envelope-fill contact-icon"
                      style={{ backgroundColor: "#9333EA" }}
                    ></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 contact-text-color">
                      <b className="contact-text-color">Email</b>
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
                <div className="d-flex mt-5 align-items-start">
                  <div className="pt-3">
                    <i
                      className="bi bi-clock-fill contact-icon"
                      style={{ backgroundColor: "#EA5800C" }}
                    ></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 contact-text-color">
                      <b className="contact-text-color">Working Hours</b>
                    </p>
                    <p className="mb-0 contact-text-color">
                      Mon-Fri: 9:00 AM – 6:00 PM
                    </p>
                    <p className="mb-0 contact-text-color">
                      Saturday: 10:00 AM – 4:00 PM
                    </p>
                    <p className="mb-0 contact-text-color">Sunday: Closed</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex ">
                <a
                  href="https://www.instagram.com/cybomb_tech/?hl=en"
                  target="_blank"
                >
                  <i className="footer-para-color mx-3 bi bi-instagram fs-4"></i>
                </a>
                <a href="https://www.linkedin.com/company/cybomb/" target="_blank">
                  <i className="footer-para-color mx-3 bi bi-linkedin fs-4"></i>
                </a>
                <a
                  href="https://x.com/CybombTech" 
                  target="_blank"
                >
                  <i className="footer-para-color mx-3 fa-brands fa-x-twitter fs-3 pt-1"></i>
                </a>
              </div>
              </div>
            </div>

            {/* form */}
            <div className="col-md-6" data-aos="zoom-out-up">
              <div className="card h-100 p-5 rounded-4 shadow-sm text-white border-0 form mt-1">
                <form>
                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="form-control forminput"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control forminput"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">
                      Phone (+91)
                    </label>
                    <input
                      type="tel"
                      className="form-control forminput"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold ">
                      Where did you find us?
                    </label>
                    <select className="form-select forminput">
                      <option>Select an option</option>
                      <option>Google</option>
                      <option>LinkedIn</option>
                      <option>Referral</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fs-7 text-secondary fw-bold">
                      Message *
                    </label>
                    <textarea
                      className="form-control forminput"
                      rows="4"
                      maxLength="500"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                    <small className="text-muted float-end">0/500</small>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gradient w-100 text-white"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d80.2234567890123!3d13.0123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="400px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contactcontent;
