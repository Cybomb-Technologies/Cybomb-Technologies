import "./about-ourteam.css";

function Aboutourteam() {
  return (
    <>
      <section className="our-team" style={{ padding: "60px 0px"}}>
        <div className="container text-center">
          <h2 className="text-primary">Meet our Leadership Team</h2>
          <div className="row" data-aos="fade-left">
            <div className="col-lg-4 mx-auto mt-4">
              <img
                src="images/about-img1.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
              <div className="mt-3">
                <h4 className="text-black">Dev Venkatesan</h4>
                <h6 className="text-primary">CEO & Founder</h6>
                <p className="text-black">
                  With over 8 years in software development and business
                  leadership, Dev drives our strategic vision and growth
                  initiatives.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4" data-aos="fade-right">
            <div className="col-lg-8 mx-auto">
              <img className="img-fluid w-100"
                src="images/about-img2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutourteam;
