import "./home-form.css";

function Homeform() {
  return (
    <section className="contact-form-section" style={{padding:"60px 0px"}}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6" data-aos="zoom-out-up">
            <h2 className="text-primary">Let's Talk About Your Project</h2>
            <p className="text-white fs-5 mt-3">
              Ready to transform your ideas into digital reality? Get in touch
              with our experts and let's discuss how we can bring your vision
              to life.
            </p>
            <img
              src="images/form-img.jpg"
              className="img-fluid rounded mt-3"
              alt="Team Discussion"
            />
            <div className="d-flex gap-3 mt-3">
              <span className="text-success small">✔️ Privacy Protected</span>
              <span className="text-danger small">🚫 No Spam</span>
              <span className="text-primary small">🔄 Unsubscribe Anytime</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-6" data-aos="zoom-out-up">
            <div className="card p-5 rounded-4 shadow-sm text-white border-0 form mt-1">
              <form>
                <div className="mb-3">
                  <label className="form-label fs-7 text-white fw-bold">First Name *</label>
                  <input type="text" className="form-control forminput" placeholder="Enter your first name" required />
                </div>

                <div className="mb-3">
                  <label className="form-label fs-7 text-white fw-bold">Email *</label>
                  <input type="email" className="form-control forminput" placeholder="Enter your email address" required />
                </div>

                <div className="mb-3">
                  <label className="form-label fs-7 text-white fw-bold">Phone (+91)</label>
                  <input type="tel" className="form-control forminput" placeholder="Enter your phone number" />
                </div>

                <div className="mb-3">
                  <label className="form-label fs-7 text-white fw-bold ">Where did you find us?</label>
                  <select className="form-select forminput">
                    <option>Select an option</option>
                    <option>Google</option>
                    <option>LinkedIn</option>   
                    <option>Referral</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fs-7 text-white fw-bold">Message *</label>
                  <textarea
                    className="form-control forminput"
                    rows="4"
                    maxLength="500"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <small className="text-muted float-end">0/500</small>
                </div>

                <button type="submit" className="btn btn-gradient w-100 text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homeform;
