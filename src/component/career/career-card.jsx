import React, { useState } from "react";
import { FiClock, FiMapPin, FiAward } from "react-icons/fi";
import styles from "./career-content.module.css";
import QuickApplyModal from "./job-apply-modal"; // Import the quick apply modal

const CareerCard = ({ job, onView }) => {
  const [showQuickApply, setShowQuickApply] = useState(false);

  return (
    <>
      <div
        className={`card h-100 shadow-sm border-0 overflow-hidden ${styles.jobCard}`}
      >
        <div className="card-body d-flex flex-column">
          {/* Job Header */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="card-title fw-bold mb-1">{job.title}</h5>
              <span className="badge bg-primary me-2">{job.type}</span>
              {job.isNew && (
                <span className="badge bg-success">
                  <FiAward className="me-1" /> New
                </span>
              )}
            </div>
            <span className={`badge ${styles.departmentBadge}`}>
              {job.department}
            </span>
          </div>

          {/* Job Details */}
          <div className="mb-3">
            <div className="d-flex align-items-center text-muted mb-2">
              <FiMapPin className="me-2" />
              <small>{job.location}</small>
            </div>
            <div className="d-flex align-items-center text-muted mb-2">
              <FiClock className="me-2" />
              <small>Experience: {job.experience}</small>
            </div>
            <p className="card-text my-3">{job.short}</p>

            {job.skills && (
              <div className="mb-3">
                <small className="text-muted d-block mb-1">Key Skills:</small>
                <div className="d-flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="badge bg-light text-dark">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-auto pt-3">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-primary"
                onClick={() => onView(job)}
              >
                View Details
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setShowQuickApply(true)}
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
          job={job}
          onClose={() => setShowQuickApply(false)}
          onApply={() => {
            setShowQuickApply(false);
          }}
        />
      )}
    </>
  );
};

export default CareerCard;
