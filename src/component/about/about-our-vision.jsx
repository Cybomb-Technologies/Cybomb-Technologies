import "./about-our-vision.css";

function Aboutourvision() {
  return (
    <>
      <section className="our-vision" style={{ padding: "60px 0px"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-7 mx-auto">
              <h2 className="text-center text-primary">🚀Our vision</h2>
              <div className="card mt-5 ourvision-card" data-aos="zoom-in">
                <p className="p-4 mb-0 text-secondary fw-bold border-0 shadow">
                  To be the leading technology partner for innovative businesses
                  worldwide, recognized for our technical excellence, creative
                  problem-solving, and client-centered approach. We aspire to
                  shape the future of digital transformation by consistently
                  delivering solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutourvision;
