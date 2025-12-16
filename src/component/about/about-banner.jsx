import "./about-banner.css";

function Aboutbanner() {
  return (
    <>
      <section className="about-banner-img">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="banner-title">We are Cybomb</h1>

          <div className="banner-content-card">
            <p className="banner-content-text">
              Cybomb Technologies is a leading software development and IT services company in India, delivering high-quality custom web and mobile application solutions for startups, SMEs, and enterprises. We specialize in full-stack development, UI/UX design, SaaS platforms, and scalable digital products built for performance and growth.
            </p>
            <p className="banner-content-text">
              With a strong focus on innovation and reliability, our expert team transforms ideas into secure, user-centric, and future-ready software solutions. From MVP development to enterprise-level systems, we partner with businesses to streamline operations, enhance digital presence, and accelerate growth through technology.
            </p>
            <p className="banner-content-text">
              At Cybomb, we don’t just build software — we create technology solutions that drive business success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutbanner;
