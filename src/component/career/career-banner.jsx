import React, { useState } from "react";
import styles from "./career-banner.module.css";
import QuickApplyModal from "./job-apply-modal"; // import the modal

const CareerBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleApplySuccess = () => {
    console.log("Application submitted successfully!");
    // You can add any success handlers here
  };

  return (
    <>
      <section
        className={`${styles.banner} text-white text-center d-flex align-items-center`}
        style={{
          background: "linear-gradient(135deg, #00171f, #003459)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className={`${styles.overlay} container`}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3 mt-5">Build Your Future With Us</h1>
              <p className="lead mb-4 fs-4">
                Join a team of innovators shaping the future of technology. We're looking for passionate individuals to help us solve complex challenges.
              </p>
              <div className="d-flex justify-content-center flex-wrap">
                <a 
                  href="#openings" 
                  className="btn btn-primary btn-lg ms-3 py-3 me-3 mb-3 mb-md-0"
                  style={{ minWidth: "180px" }}
                >
                  Browse Open Roles
                </a>
                <button 
                  onClick={() => setShowModal(true)} 
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  style={{ minWidth: "180px" }}
                >
                  Submit Your CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply Modal */}
      {showModal && (
        <QuickApplyModal 
          show={showModal} 
          onClose={() => setShowModal(false)} 
          onApply={handleApplySuccess}
        />
      )}
    </>
  );
};

export default CareerBanner;