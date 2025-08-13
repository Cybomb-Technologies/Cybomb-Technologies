import "./about-our-journey.css";
function Aboutourjourney() {
  return (
    <>
      <section className="ourjourney" style={{ padding: "60px 0px"}}>
        <div className="container">
          <h2 className="text-primary text-center">🧩 Our Journey</h2>

          <div className="row mt-5">
            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 journey-card h-100" data-aos="zoom-in-left">
                <h6 className="text-white fs-5">✅ 2021 - Foundation</h6>
                <p className="mt-2 text-white">
                  Cybomb Tecnology was founded by a tech enthusiast with a
                  vision of creating impactful digital solutions. Starting with
                  a small office and a team of 5, we began our journey
                  developing mobile applications for local businesses.
                </p>
              </div>
            </div>

            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 journey-card h-100" data-aos="zoom-in-up">
                <h6 className="text-white fs-5">✅ 2022 - Expension</h6>
                <p className="mt-2 text-white">
                  Expanded our services to include web application development
                  and SaaS solutions. Our team grew to 10 talented
                  professionals, and we opened our second office in a Chennai.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 journey-card h-100" data-aos="zoom-in-down">
                <h6 className="text-white fs-5">✅ 2023 - AI Integration</h6>
                <p className="mt-2 text-white">
                  Recognized the growing importance of AI, we established a
                  specialized AI integration team. This strategic move allowed
                  us to offer cutting-edge solutions that leverage machine
                  learning and data analytics.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
              <div className="card p-4 journey-card h-100" data-aos="zoom-in-right">
                <h6 className="text-white fs-5">✅ 2025 - Today</h6>
                <p className="mt-2 text-white">
                  Now a team of 80+ experts, we've successfully delivered over
                  300+ projects across various industries. Our client base spans
                  from innovative startups to established SMEs looking for
                  digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Aboutourjourney;
