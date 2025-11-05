import React from "react";
import { FiBriefcase, FiList, FiAward, FiDollarSign, FiMapPin, FiClock, FiCalendar } from "react-icons/fi";

const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <div className="flex-grow-1">
              <h5 className="modal-title mb-1">{job.title}</h5>
              <p className="text-muted small mb-0">
                {job.department} • {job.location} • {job.type}
              </p>
              {job.experience && (
                <p className="text-muted small mb-0">
                  Experience: {job.experience}
                </p>
              )}
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
              {/* Job Overview */}
              <div className="row mb-4">
                {job.salary && (
                  <div className="col-md-6 mb-2">
                    <div className="d-flex align-items-center text-success">
                      <FiDollarSign className="me-2" />
                      <strong>{job.salary}</strong>
                    </div>
                  </div>
                )}
                <div className="col-md-6 mb-2">
                  <div className="d-flex align-items-center text-muted">
                    <FiMapPin className="me-2" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="d-flex align-items-center text-muted">
                    <FiClock className="me-2" />
                    <span>{job.type}</span>
                  </div>
                </div>
                {job.applicationDeadline && (
                  <div className="col-md-6 mb-2">
                    <div className="d-flex align-items-center text-muted">
                      <FiCalendar className="me-2" />
                      <span>Apply by: {formatDate(job.applicationDeadline)}</span>
                    </div>
                  </div>
                )}
              </div>

              <h6 className="mb-3">About This Role</h6>
              <p className="mb-4">{job.short}</p>

              {job.responsibilities && job.responsibilities.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3">
                    <FiBriefcase className="me-2" />
                    Key Responsibilities
                  </h6>
                  <ul className="mb-4">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {job.requirements && job.requirements.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3">
                    <FiList className="me-2" />
                    Requirements
                  </h6>
                  <ul className="mb-4">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {job.skills && job.skills.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3">Required Skills</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="badge bg-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {job.benefits && job.benefits.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3">
                    <FiAward className="me-2" />
                    Benefits & Perks
                  </h6>
                  <ul className="mb-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="mb-2">{benefit}</li>
                    ))}
                  </ul>
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