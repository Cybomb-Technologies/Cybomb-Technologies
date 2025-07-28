import Bannerform from "../../../banner-form/banner-form";
import styles from "./Ecommbanner.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Ecommbanner() {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className={`${styles.title} mb-4 text-white`}>
                E-commerce Development Services
              </h1>
              <p className={`${styles.subtitle} lead mb-4 text-white`}>
                We build online stores that convert visitors into loyal
                customers
              </p>

              <button
                className={`${styles.ctaButton} btn btn-lg mb-4 bg-black text-white`}
              >
                Book Free Consultation
              </button>

              <p className={styles.description} style={{ color: "white" }}>
                Whether you're starting small or scaling big, we create powerful
                e-commerce solutions tailored to your brand. From design to
                secure payments and smooth checkout experiences—we develop
                online stores that sell.
              </p>
            </div>
          </div>
          <Bannerform />
        </div>
      </div>

      <div >
        <div className="container">
          <div className="card border-0 shadow" style={{position:"relative", bottom:"90px"}}>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 px-5 pt-3 p-lg-5 ">
                <div className="d-flex">
                  <div>
                    <h2 className="text-primary display-6 fw-bold">$06</h2>
                  </div>
                  <div className="ms-4 pt-1">
                    <p className="fs-5">
                      Global e-commerce <br />
                      salse crossed
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 px-5 pt-3 p-lg-5 ">
                <div className="d-flex">
                  <div>
                    <h2 className="text-primary display-6 fw-bold">70%</h2>
                  </div>
                  <div className="ms-3 pt-1">
                    <p className="fs-5">
                      of shoppers prefer <br />
                      mobile-friendly online <br /> stores
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 px-5 pt-3 p-lg-5  ">
                <div className="d-flex">
                  <div>
                    <h2 className="text-primary display-6 fw-bold">50%</h2>
                  </div>
                  <div className="ms-3 pt-1">
                    <p className="fs-5">
                      A great online shopping  experience increases trust,
                      engagement, and repeat purchases
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center" style={{position:"relative", bottom:"50px"}}>Partnered with Startup and and foutune 500 Companies</h2>
        </div>
      </div>
    </>
  );
}

export default Ecommbanner;
