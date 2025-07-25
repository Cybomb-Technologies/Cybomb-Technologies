import "./home-keydiffer.css";

function HomeKeydiffer() {
  return (
    <section className="black text-center HomeKeydiffer" style={{ padding: "60px 0px"}}>
      <div className="container">
        <h2 className="fw-bold mb-2 text-primary" data-aos="zoom-out-right">
          Our Key Differentiators
        </h2>
        <p className="text-black mb-5 text-white" data-aos="zoom-out-left">
          What sets us apart in the competitive technology landscape
        </p>

        {/* Top Boxes */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 p-4 rounded-4 border-0 differentiator-card" data-aos="zoom-out-left">
              <div className="icon-box bg-success mb-3">
                <i className="bi bi-arrow-repeat"></i>
              </div>
              <h5 className="fw-bold text-start black">
                 Agile Development Methodology
              </h5>
              <p className="text-start small mb-0 " style={{color:"#9b9494ff", fontWeight:"600",fontSize:"17px" }}>
                We follow agile practices ensuring faster delivery, continuous feedback, and adaptive planning throughout the development process.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 p-4 rounded-4 border-0 differentiator-card" data-aos="zoom-out-up">
              <div className="icon-box bg-primary mb-3">
                <i className="bi bi-person-badge"></i>
              </div>
              <h5 className="fw-bold text-start black">
                Dedicated Project Manager
              </h5>
              <p className="text-start small mb-0" style={{color:"#9b9494ff", fontWeight:"600",fontSize:"17px" }}>
                Each project gets a dedicated manager ensuring seamless communication, timeline adherence, and quality deliverables.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 p-4 rounded-4 border-0 differentiator-card" data-aos="zoom-out-down">
              <div className="icon-box bg-purple mb-3">
                <i className="bi bi-headset"></i>
              </div>
              <h5 className="fw-bold text-start black">
                Post-Launch Support
              </h5>
              <p className="text-start small mb-0" style={{color:"#9b9494ff", fontWeight:"600",fontSize:"17px" }}>
                Comprehensive support and maintenance services to keep your applications running smoothly and up-to-date.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 p-4 rounded-4 border-0 differentiator-card" data-aos="zoom-out-right">
              <div className="icon-box bg-warning mb-3">
                <i className="bi bi-sliders"></i>
              </div>
              <h5 className="fw-bold text-start black">
                 Technology-Agnostic Approach
              </h5>
              <p className="text-start small mb-0" style={{color:"#9b9494ff", fontWeight:"600",fontSize:"17px" }}>
                We choose the best technology stack for your specific needs rather than forcing a one-size-fits-all solution.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row g-4 mt-5" style={{backgroundColor:"#FFFFFF"}} data-aos="zoom-out-up">
          <div className="col-6 col-md-3">
            <div className="stat-box rounded-4 py-3">
              <h5 className="text-secondary fw-bold mb-1">24/7</h5>
              <p className="fw-bold text-secondary">Support Available</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-box rounded-4 py-3">
              <h5 className="text-success fw-bold mb-1">100%</h5>
              <p className="fw-bold text-secondary">Quality Assurance</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-box rounded-4 py-3">
              <h5 className="text-purple fw-bold mb-1">48h</h5>
              <p className="fw-bold text-secondary">Response Time</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-box rounded-4 p-3">
              <h5 className="text-warning fw-bold mb-1">ISO</h5>
              <p className="fw-bold text-secondary">Certified Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeKeydiffer;

