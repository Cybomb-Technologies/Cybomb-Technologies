function Blogbanner() {
  return (
    <>
      <div
        className="blog-banner-wrapper d-flex align-items-center justify-content-center text-white"
        style={{
          padding: "120px 0 80px",
          background: "#003459",
          textAlign: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="mb-3">
            <i className="fas fa-lightbulb fa-2x text-light mb-2"></i>
            <p className="small text-uppercase fw-semibold letter-spacing">
              Discover. Learn. Transform.
            </p>
          </div>

          <h1 className="display-4 fw-bold mb-3">
            Tech Insights That Drive Innovation
          </h1>

          <p
            className="lead text-light mx-auto"
            style={{ maxWidth: "700px", color: "#f1f1f1" }}
          >
            Dive deep into expert articles, industry trends, and digital
            breakthroughs. Our blog empowers tech leaders with strategies,
            solutions, and foresight to thrive in the evolving IT landscape.
          </p>

          {/* <a
            href="#blogs"
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
            Explore Blogs
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
            .blog-banner-wrapper h1 {
              font-size: 2rem;
            }

            .blog-banner-wrapper p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default Blogbanner;
