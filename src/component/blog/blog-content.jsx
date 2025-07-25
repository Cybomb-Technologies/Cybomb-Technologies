import "./blog.css";

function Blogcontent() {
  // IT Solutions focused blog data
  const itSolutionsPosts = [
    {
      id: 1,
      title: "Enterprise IT Infrastructure Modernization",
      excerpt:
        "How to strategically upgrade legacy systems without disrupting business operations.",
      date: "July 10, 2025",
      category: "Infrastructure",
      image: "images/blog/blog-1.jpg",
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      excerpt:
        "Step-by-step guide to migrating your business applications to the cloud securely.",
      date: "July 15, 2025",
      category: "Cloud",
      image: "images/blog/blog-2.jpg",
    },
    {
      id: 3,
      title: "AI-Powered IT Operations",
      excerpt:
        "Leveraging artificial intelligence for predictive IT maintenance and issue resolution.",
      date: "July 20, 2023",
      category: "AI",
      image: "images/blog/blog-3.jpg",
    },
  ];

  return (
    <>
      <section class="blog-section">
        <div className="container  py-5">
          <div className="row mb-5 text-center">
            <div className="col">
              <h2 className="text-primary">
                Expert knowledge and innovative solutions <br /> for your IT
                challenges
              </h2>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {itSolutionsPosts.map((post) => (
              <div className="col" key={post.id}>
                <div className="card h-100 blog-card border-0 shadow-sm">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-white h5">{post.title}</h3>
                    <p className="card-text text-primary small">{post.date}</p>
                    <p className="card-text text-white">{post.excerpt}</p>
                  </div>
                  <div className="border-0 pb-2  ms-2">
                    <a
                      href="#"
                      className="btn btn-link text-decoration-none"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5 py-4 text-white rounded" style={{backgroundColor:"#003459"}}>
            <div className="col-md-10 mx-auto">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div>
                  <h3 className="mb-3 text-white">Need Custom IT Solutions?</h3>
                  <p className="mb-md-0 text-white">
                    Our experts can design and implement tailored IT solutions
                    for your specific business needs.
                  </p>
                </div>
                <a href="#" className="btn btn-outline-light px-4 mt-3 mt-md-0 bg-primary">
                  Contact Our Solutions Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogcontent;
