import "./about-ourteam.css";
import { useEffect } from 'react';

function Aboutourteam() {
 
  useEffect(() => {

    if (typeof window !== 'undefined' && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(document.getElementById('aboutCarousel'), {
        interval: 1000,  
        pause: 'hover',  
        wrap: true      
      });
    }
  }, []);

  return (
    <>
      <section className="our-team" style={{ padding: "60px 0px" }}>
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
          
          {/* Carousel Section */}
          <div className="row mt-4" data-aos="fade-right">
            <div className="col-lg-8 mx-auto">
              <div 
                id="aboutCarousel" 
                className="carousel slide" 
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/about/about-1.jpg" className="d-block w-100" alt="Team photo 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/about/about-2.jpg" className="d-block w-100" alt="Team photo 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/about/about-3.jpg" className="d-block w-100" alt="Team photo 3" />
                  </div>
                    <div className="carousel-item">
                    <img src="images/about/about-4.jpg" className="d-block w-100" alt="Team photo 3" />
                  </div>
                    <div className="carousel-item">
                    <img src="images/about/about-5.jpg" className="d-block w-100" alt="Team photo 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutourteam;