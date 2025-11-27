// job-detail-modal.jsx
import React from "react";
import { FiBriefcase, FiList, FiAward, FiDollarSign, FiMapPin, FiClock, FiCalendar, FiX } from "react-icons/fi";

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
    <div className="modal fade show" style={{ display: "block", backgroundColor: 'rgba(0, 52, 89, 0.8)' }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <div className="modal-header text-white" style={{ background: 'linear-gradient(135deg, #007ea7 0%, #005f7a 100%)', borderBottom: 'none' }}>
            <div className="flex-grow-1">
              <h5 className="modal-title mb-1 fw-bold">{job.title}</h5>
              <p className="small mb-0 opacity-90">
                {job.department} • {job.location} • {job.type}
              </p>
              {job.experience && (
                <p className="small mb-0 opacity-90">
                  Experience: {job.experience}
                </p>
              )}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body p-4">
            <div className="mb-4">
              <div className="row mb-4">
                {job.salary && (
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-success fw-bold">
                      <FiDollarSign className="me-2" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                )}
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center text-muted">
                    <FiMapPin className="me-2" style={{ color: '#007ea7' }} />
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center text-muted">
                    <FiClock className="me-2" style={{ color: '#007ea7' }} />
                    <span>{job.type}</span>
                  </div>
                </div>
                {job.applicationDeadline && (
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-muted">
                      <FiCalendar className="me-2" style={{ color: '#007ea7' }} />
                      <span>Apply by: {formatDate(job.applicationDeadline)}</span>
                    </div>
                  </div>
                )}
              </div>

              <h6 className="mb-3 fw-bold" style={{ color: '#003459' }}>About This Role</h6>
              <p className="mb-4 text-muted" style={{ lineHeight: '1.6' }}>{job.short}</p>

              {job.responsibilities && job.responsibilities.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3 fw-bold d-flex align-items-center" style={{ color: '#003459' }}>
                    <FiBriefcase className="me-2" style={{ color: '#007ea7' }} />
                    Key Responsibilities
                  </h6>
                  <ul className="mb-4 ps-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="mb-2 text-muted" style={{ lineHeight: '1.5' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {job.requirements && job.requirements.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3 fw-bold d-flex align-items-center" style={{ color: '#003459' }}>
                    <FiList className="me-2" style={{ color: '#007ea7' }} />
                    Requirements
                  </h6>
                  <ul className="mb-4 ps-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="mb-2 text-muted" style={{ lineHeight: '1.5' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {job.benefits && job.benefits.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3 fw-bold d-flex align-items-center" style={{ color: '#003459' }}>
                    <FiAward className="me-2" style={{ color: '#007ea7' }} />
                    Benefits & Perks
                  </h6>
                  <ul className="mb-4 ps-3">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="mb-2 text-muted" style={{ lineHeight: '1.5' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {job.skills && job.skills.length > 0 && (
                <>
                  <h6 className="mt-4 mb-3 fw-bold" style={{ color: '#003459' }}>Required Skills</h6>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge"
                        style={{
                          background: 'rgba(0, 52, 89, 0.08)',
                          color: '#003459',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          border: '1px solid rgba(0, 52, 89, 0.1)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="modal-footer border-top-0 pt-0">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              style={{
                borderRadius: '8px',
                padding: '10px 20px',
                background: '#f8f9fa',
                border: '1.5px solid #dee2e6',
                color: '#495057',
                fontWeight: '500'
              }}
            >
              Close
            </button>
            
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;
