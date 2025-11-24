import { Link } from "react-router-dom";
import "./banner-custom.css";
import { Carousel } from "react-bootstrap";
function HomeBanner() {
  
  return (
    <section className="home-banner">
      <Carousel fade interval={3000} controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-banner-img"
            src="/images/banner/banner-1.webp"
            alt="First slide"
          />

          <Carousel.Caption className="custom-caption">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="caption-box text-start">
                    <h2 className="h1 fw-bold">Innovating Your Vision Into AI-Powered Platforms</h2>
                    <p>
                      We empower businesses with scalable mobile apps,
                      intelligent AI systems, and seamless SaaS platforms —
                      custom-built to fuel your growth.
                    </p>
                    <Link to="/services" className="btn btn-lg" style={{backgroundColor: "#0098e8", color:"white"}}>
                      Explore Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-banner-img"
            src="/images/banner/banner-2.webp"
            alt="Second slide"
          />

          <Carousel.Caption className="custom-caption">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="caption-box text-start">
                    <h2 className="h1 fw-bold">Transforming Ideas Into Digital Excellence</h2>
                    <p>
                      From concept to launch, we craft user-focused solutions
                      that merge sleek design with powerful technology
                    </p>
                    <Link to="/services" className="btn btn-lg" style={{backgroundColor: "#0098e8", color:"white"}}>
                      Explore Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-banner-img"
            src="/images/banner/banner-3.webp"
            alt="Third slide"
          />
          <Carousel.Caption className="custom-caption">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="caption-box text-start">
                    <h2 className="">Driving Growth Through Smart Technology</h2>
                    <p>
                      Our expertise in AI, cloud solutions, and cross-platform
                      development enables businesses to streamline operations,
                      enhance customer engagement, and unlock new revenue
                      streams.
                    </p>
                    <Link to="/services" className="btn btn-lg" style={{backgroundColor: "#0098e8", color:"white"}}>
                      Explore Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HomeBanner;
