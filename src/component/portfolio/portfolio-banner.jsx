function Portfoliobanner() {
  return (
    <>
      <div
        className="portfolio-banner-wrapper d-flex align-items-center justify-content-center text-white"
        style={{
          padding: "120px 0 80px",
          background: "#003459",
          textAlign: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="mb-3">
            <i className="fas fa-briefcase fa-2x text-light mb-2"></i>
            <p className="small text-uppercase fw-semibold letter-spacing">
              Delivering Results. Driving Innovation.
            </p>
          </div>

          <h1 className="display-4 fw-bold mb-3">Portfolio</h1>

          <p
            className="lead text-light mx-auto"
            style={{ maxWidth: "700px", color: "#f1f1f1" }}
          >
            From startups to enterprises, we've helped clients across industries
            bring their digital vision to life. Explore some of our recent
            projects that reflect our versatility, expertise, and commitment to
            excellence.
          </p>

          {/* <a
            href="#consultation"
            className="btn btn-light mt-4 px-4 py-2 fw-semibold"
            style={{
              borderRadius: "50px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#00aaff";
              e.target.style.color = "#ffffff";
              e.target.style.borderColor = "transparent";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
              e.target.style.borderColor = "";
            }}
          >
            Book Free Consultation
          </a> */}
        </div>
      </div>

      {/* Embedded CSS */}
      <style>
        {`
          .letter-spacing {
            letter-spacing: 0.12em;
          }

          @media (max-width: 768px) {
            .portfolio-banner-wrapper h1 {
              font-size: 2rem;
            }

            .portfolio-banner-wrapper p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default Portfoliobanner;
