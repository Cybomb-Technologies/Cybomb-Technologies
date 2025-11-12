// career-card.jsx
import React, { useState } from "react";
import { FiClock, FiMapPin, FiAward, FiDollarSign, FiArrowRight } from "react-icons/fi";
import styles from "./career-content.module.css";
import QuickApplyModal from "./job-apply-modal";

const CareerCard = ({ job, onView, onApply}) => {
  const [showQuickApply, setShowQuickApply] = useState(false);


  // This is kept for backward compatibility if QuickApplyModal ever calls onApply earlier
  const handleApplySuccess = (jobFromModal) => {
    console.log("Application submitted (early callback) for:", job?.title || jobFromModal?.title);
    // don't close here — let the modal finish its success display and call handleApplyFinished afterwards
    if (typeof onApply === "function") {
      try { onApply(jobFromModal || job); } catch (e) { console.error(e); }
    }
  };

  const handleCloseModal = () => {
    console.log("Closing Quick Apply modal");
    setShowQuickApply(false);
  };

  return (
    <>
      <div
        className={`card h-100 shadow-sm border-0 overflow-hidden ${styles.jobCard}`}
      >
        <div className="card-body d-flex flex-column position-relative">
          {job.isNew && (
            <div className={`position-absolute top-0 end-0 m-3 ${styles.newBadge}`}>
              <FiAward className="me-1" /> New
            </div>
          )}

          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="flex-grow-1 pe-3">
              <h5 className={`card-title fw-bold mb-2 ${styles.jobTitle}`}>{job.title}</h5>
              <span className={`badge ${styles.jobTypeBadge} me-2`}>{job.type}</span>
            </div>
            <span className={`badge ${styles.departmentBadge}`}>
              {job.department}
            </span>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <FiMapPin className={`me-2 ${styles.detailIcon}`} />
              <small className={styles.detailText}>{job.location}</small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FiClock className={`me-2 ${styles.detailIcon}`} />
              <small className={styles.detailText}>Experience: {job.experience}</small>
            </div>
            {job.salary && (
              <div className="d-flex align-items-center mb-3">
                <FiDollarSign className={`me-2 ${styles.salaryIcon}`} />
                <small className={styles.salaryText}>{job.salary}</small>
              </div>
            )}
            <p className={`card-text my-3 ${styles.jobDescription}`}>{job.short}</p>

            {job.skills && job.skills.length > 0 && (
              <div className="mb-3">
                <small className={`${styles.skillsLabel} d-block mb-2`}>Key Skills:</small>
                <div className="d-flex flex-wrap gap-2">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className={`badge ${styles.skillBadge}`}>
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className={`badge ${styles.moreSkillsBadge}`}>
                      +{job.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-auto pt-3">
            <div className="d-flex justify-content-between align-items-center">
              <button
                className={`btn ${styles.viewDetailsBtn}`}
                onClick={() => onView(job)}
              >
                View Details <FiArrowRight className="ms-1" />
              </button>
              <button
                className={`btn ${styles.applyNowBtn}`}
                onClick={() => {
                  console.log("Apply Now clicked for:", job.title);
                  setShowQuickApply(true);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Apply Modal */}
      {showQuickApply && (
        <QuickApplyModal
          show={showQuickApply}
          onClose={handleCloseModal}
          onApply={handleApplySuccess}           // optional early notification (kept for compatibility)
          // onApplyFinished={handleApplyFinished} // called AFTER success display (5s) to avoid reopen race
          jobTitle={job.title}
        />
      )}
    </>
  );
};

export default CareerCard;
