import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./banner-custom.css";
import { Carousel } from "react-bootstrap";
function HomeBanner() {
  const rotatingPhrases = [
    "Powerful Digital Solutions",
    "Scalable Mobile Apps",
    "AI-Powered Platforms",
    "Custom SaaS Systems",
  ];

  const [setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-banner text-white d-flex align-items-center">
      <Carousel fade interval={3000} controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-banner-img"
            src="/images/banner/banner-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption">
            <div className="row">
              <div className="col-xl-7">
                <div className="caption-box">
                  <h1>Innovating Your Vision Into AI-Powered Platforms</h1>
                  <p>
                    We empower businesses with scalable mobile apps, intelligent
                    AI systems, and seamless SaaS platforms — custom-built to
                    fuel your growth.
                  </p>
                  <div style={{ textAlign: "left" }}>
                    <Link to="/services" className="btn btn-primary btn-lg">
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
            src="/images/banner/banner-2.jpg"
            alt="Second slide"
          />
          <div className="row">
            <div className="col-sm-5"></div>
          </div>
          <Carousel.Caption className="custom-caption">
            <div className="row">
              <div className="col-xl-7">
                <div className="caption-box">
                  <h1>Transforming Ideas Into Digital Excellence</h1>
                  <p>
                    From concept to launch, we craft user-focused solutions that
                    merge sleek design with powerful technology
                  </p>
                  <div style={{ textAlign: "left" }}>
                    <Link to="/services" className="btn btn-primary btn-lg">
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
            src="/images/banner/banner-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="custom-caption">
            <div className="row">
              <div className="col-xl-7">
                <div className="caption-box">
                  <h1>Driving Growth Through Smart Technology</h1>
                  <p>
                    Our expertise in AI, cloud solutions, and cross-platform
                    development enables businesses to streamline operations,
                    enhance customer engagement, and unlock new revenue streams.
                  </p>
                  <div style={{ textAlign: "left" }}>
                    <Link to="/services" className="btn btn-primary btn-lg">
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
