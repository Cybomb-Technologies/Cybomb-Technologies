import React from "react";

const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <div>
              <h5 className="modal-title mb-1">{job.title}</h5>
              <p className="text-muted small mb-0">
                {job.department} • {job.location} • {job.type}
              </p>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <div className="mb-4">
              <h6 className="mb-3">About This Role</h6>
              <p className="mb-3">{job.short}</p>

              {job.responsibilities && (
                <>
                  <h6 className="mt-4 mb-3">Key Responsibilities</h6>
                  <ul className="mb-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {job.skills && (
                <>
                  <h6 className="mt-4 mb-3">Required Skills</h6>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="badge bg-light text-dark">
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;
