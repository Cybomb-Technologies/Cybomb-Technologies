import "./home-whychoose.css";

function Homewhychoose() {
  return (
    <section className="why-choose-bg text-white text-center" style={{ padding: "60px 0px"}}>
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold mb-2 text-white" data-aos="zoom-out-right">
          Why Choose Cybomb Technologies
        </h2>
        <p className="text-black mb-5" data-aos="zoom-out-left">Numbers that speak for our commitment to excellence</p>

        {/* Stats Row */}
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div className="card stat-card p-4 h-100 text-center border-0 rounded-4" data-aos="zoom-out-down">
              <div className="icon-box bg-primary mx-auto mb-2">
                <i className="bi bi-trophy-fill"></i>
              </div>
               <h4 className="text-primary fw-bold mb-0">300+</h4>
              <h6 className="mb-0 text-secondary">Projects Delivered</h6>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card stat-card p-4 h-100 text-center border-0 rounded-4" data-aos="zoom-out-down">
              <div className="icon-box bg-success mx-auto mb-2">
                <i className="bi bi-heart-fill"></i>
              </div>
              <h4 className="text-success fw-bold mb-0">98%</h4>
              <h6 className="mb-0 text-secondary">Client Satisfaction</h6>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card stat-card p-4 h-100 text-center border-0 rounded-4" data-aos="zoom-out-down">
              <div className="icon-box bg-purple mx-auto mb-2">
                <i className="bi bi-calendar-event-fill"></i>
              </div>
              <h4 className="text-purple fw-bold mb-0">4+</h4>
              <h6 className="mb-0  text-secondary">Years Experience</h6>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card stat-card p-4 h-100 text-center border-0 rounded-4 border-orange" data-aos="zoom-out-down">
              <div className="icon-box bg-warning mx-auto mb-2">
                <i className="bi bi-people-fill"></i>
              </div>
              <h4 className="text-warning fw-bold mb-0">25+</h4>
              <h6 className="mb-0 text-secondary">Industry Experts</h6>
            </div>
          </div>
        </div>

        {/* CTA Gradient Box */}
        <div className="cta-box mt-5 p-4 rounded-4 text-white" data-aos="zoom-out-up">
          <h2 className="fw-bold mb-1">Ready to Join Our Success Stories?</h2>
          <h2 className="text-light small mt-4">
            Transform your business with our proven expertise and dedicated support
          </h2>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
            <a href="#" className="btn btn-light px-4 fw-semibold text-primary p-2">
              Start Your Project
            </a>
            <a href="#" className="btn btn-outline-light px-4 fw-semibold p-2">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homewhychoose;