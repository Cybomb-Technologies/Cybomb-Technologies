import "./about-our-core.css";
function Aboutourcore() {
  return (
    <>
      <section className="core-value" style={{ padding: "60px 0px"}}>
        <div className="container">
          <h2 className="text-center text-primary">📊 Our Core Values</h2>
          <p className="text-center text-white">
            Numbers that speak for our commitment to excellence
          </p>
          <div className="row mt-5">
            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 our-core-card h-100" data-aos="zoom-out-left">
                <h6
                  className="text-center"
                  style={{ color: "rgba(96, 165, 250, 1)" }}
                >
                  Quality Excellence
                </h6>
                <p className="text-center mb-0 mt-2 text-secondary fw-bold">
                  We're committed to delivering solutions that meet the highest
                  standards of quality and performance
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 our-core-card h-100" data-aos="zoom-out-up">
                <h6
                  className="text-center"
                  style={{ color: "rgba(74, 222, 128, 1)" }}
                >
                  Collaborative Spirit{" "}
                </h6>
                <p className="text-center mb-0 mt-2 text-secondary fw-bold">
                  We believe in the power of teamwork, both within our
                  organization and in partnership with our clients.
                </p>
              </div>
            </div>

            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 our-core-card h-100" data-aos="zoom-out-down">
                <h6
                  className="text-center"
                  style={{ color: "rgba(192, 132, 252, 1)" }}
                >
                  Agile Approach
                </h6>
                <p className="text-center mb-0 mt-2 text-secondary fw-bold">
                  We embrace flexibility and adaptability, allowing us to
                  respond quickly to changing requirements and technologies.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 our-core-card h-100" data-aos="zoom-out-right">
                <h6
                  className="text-center" 
                  style={{ color: "rgba(251, 146, 60, 1)" }}
                >
                  Innovative Thinking
                </h6>
                <p className="text-center mb-0 mt-2 text-secondary fw-bold">
                  We constantly explore new ideas and technologies to provide
                  forward-thinking solutions for our clients.   
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Aboutourcore;
