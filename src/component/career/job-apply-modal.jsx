// job-apply-modal.jsx
import React, { useState, useEffect } from "react";
import { FiUpload, FiCheckCircle, FiUser, FiMail, FiPhone, FiBriefcase, FiClock, FiFileText, FiX, FiHeart } from "react-icons/fi";

const QuickApplyModal = ({ show, onClose, onApply, onApplyFinished, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: jobTitle || "General Application",
    experience: "",
    coverLetter: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [applicantName, setApplicantName] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const experienceOptions = [
    "Less than 1 year",
    "1 - 3 years",
    "3 - 5 years",
    "5 - 10 years",
    "10+ years",
  ];

  // Reset form when modal closes or jobTitle changes
  useEffect(() => {
    if (show) {
      setFormData(prev => ({
        ...prev,
        role: jobTitle || "General Application"
      }));
    } else {
      // Reset everything when modal closes
      setFormData({
        name: "",
        phone: "",
        email: "",
        role: jobTitle || "General Application",
        experience: "",
        coverLetter: "",
        resume: null,
      });
      setErrors({});
      setSubmitSuccess(false);
      setIsSubmitting(false);
      setApplicantName("");
    }
  }, [show, jobTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF or Word document (PDF, DOC, DOCX).",
        }));
        e.target.value = "";
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a file smaller than 5MB.",
        }));
        e.target.value = "";
        return;
      }

      setErrors((prev) => ({ ...prev, resume: "" }));
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      newErrors.email = "Valid email is required";
    }
    if (
      formData.phone &&
      !formData.phone.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      )
    ) {
      newErrors.phone = "Valid phone number is required";
    }
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started");
    
    if (!validate()) {
      console.log("Validation failed", errors);
      return;
    }
    
    setIsSubmitting(true);
    console.log("Submitting form data:", formData);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("role", formData.role);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("coverLetter", formData.coverLetter);

      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      console.log("Sending request to:", `${API_BASE_URL}/api/application`);
      
      const res = await fetch(`${API_BASE_URL}/api/application`, {
        method: "POST",
        body: formDataToSend,
      });

      const responseData = await res.json();
      console.log("Response received:", responseData);

      if (!res.ok) {
        throw new Error(responseData.message || "Failed to submit application");
      }

      // Mark local success UI
      setSubmitSuccess(true);
      setApplicantName(formData.name?.split(' ')[0] || 'Applicant');

      // If you want to notify parent immediately (optional), you could call onApply here.
      // But to avoid reopening race conditions, we will notify the parent AFTER the success display.
      // Wait for greeting to be visible, then notify parent and close:
      setTimeout(() => {
        // Notify parent that the whole success display is finished
        if (typeof onApplyFinished === 'function') {
          try { onApplyFinished({ title: jobTitle }); } catch (err) { console.error(err); }
        }

        // Now close the modal (existing behaviour)
        if (typeof onClose === 'function') onClose();
      }, 5000);

    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: error.message || "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !submitSuccess) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: 'rgba(0, 52, 89, 0.8)' }} 
      tabIndex="-1"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <div className="modal-header text-white" style={{ 
            background: submitSuccess 
              ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' 
              : 'linear-gradient(135deg, #007ea7 0%, #005f7a 100%)', 
            borderBottom: 'none' 
          }}>
            <h5 className="modal-title d-flex align-items-center mb-0">
              {submitSuccess ? (
                <>
                  <FiCheckCircle className="me-2" />
                  Application Successful!
                </>
              ) : (
                <>
                  <FiBriefcase className="me-2" />
                  Quick Application - {jobTitle || "Submit Your CV"}
                </>
              )}
            </h5>
            {!submitSuccess && (
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            )}
          </div>
          <div className="modal-body p-4">
            {submitSuccess ? (
              <div className="text-center py-4">
                <div className="mb-4">
                  <FiCheckCircle className="text-success" style={{ fontSize: "4rem" }} />
                </div>

                <h4 className="text-success mb-3" style={{ color: '#007ea7' }}>
                  Thank You{applicantName ? `, ${applicantName}` : ''}! 
                </h4>

                <div className="success-message mb-4">
                  <p className="lead text-dark mb-3">
                    Your application for <strong className="text-primary">{formData.role}</strong> has been successfully submitted!
                  </p>

                  <div className="alert alert-light border-0 mb-3" style={{ background: '#f8f9fa' }}>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <FiHeart className="text-danger me-2" />
                      <strong>What happens next?</strong>
                    </div>
                    <small className="text-muted">
                      • We've received your application and will review it carefully<br/>
                      • Our team will contact you if there's a match with our requirements<br/>
                      • You'll hear back from us within 3-5 business days
                    </small>
                  </div>

                  <div className="contact-info mt-4 p-3 rounded" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)' }}>
                    <small className="text-muted d-block">
                      <strong>Need to reach us?</strong>
                    </small>
                    <small className="text-muted">
                      Email: support@cybomb.com | Phone: +91 9715092104
                    </small>
                  </div>
                </div>

                <div className="progress mt-4" style={{ height: "6px", backgroundColor: '#e9ecef', borderRadius: '10px' }}>
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{ 
                      width: "100%", 
                      transition: "width 5s ease",
                      borderRadius: '10px'
                    }}
                    aria-valuenow="100" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted mt-2 d-block">
                  This window will close automatically in <strong>5 seconds</strong>...
                </small>

                <button 
                  className="btn btn-outline-success mt-3"
                  onClick={onClose}
                  style={{ borderRadius: '8px' }}
                >
                  Close Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiUser className="me-2" style={{ color: '#007ea7' }} />
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Jane Doe"
                    style={{ borderRadius: '8px', border: '1.5px solid #e9ecef', padding: '10px 12px' }}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiPhone className="me-2" style={{ color: '#007ea7' }} />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    style={{ borderRadius: '8px', border: '1.5px solid #e9ecef', padding: '10px 12px' }}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiMail className="me-2" style={{ color: '#007ea7' }} />
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="jane.doe@example.com"
                    style={{ borderRadius: '8px', border: '1.5px solid #e9ecef', padding: '10px 12px' }}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiBriefcase className="me-2" style={{ color: '#007ea7' }} />
                    Applying For*
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    readOnly
                    className="form-control bg-light"
                    style={{ borderRadius: '8px', border: '1.5px solid #e9ecef', padding: '10px 12px' }}
                  />
                  <small className="text-muted">
                    You are applying for: <strong>{formData.role}</strong>
                  </small>
                </div>

                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiClock className="me-2" style={{ color: '#007ea7' }} />
                    Total Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-control"
                    style={{ borderRadius: '8px', border: '1.5px solid #e9ecef', padding: '10px 12px' }}
                  >
                    <option value="">Select experience level</option>
                    {experienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiFileText className="me-2" style={{ color: '#007ea7' }} />
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="3"
                    className="form-control"
                    placeholder="Tell us about your skills, experience, and why you'd like to join our team..."
                    style={{ borderRadius: '8px', border: '1.5px solid #e9ecef', padding: '10px 12px' }}
                  ></textarea>
                </div>

                <div className="col-12">
                  <label className="form-label d-flex align-items-center fw-medium" style={{ color: '#003459' }}>
                    <FiUpload className="me-2" style={{ color: '#007ea7' }} />
                    Resume/CV*
                  </label>
                  <div className={`border rounded p-3 ${errors.resume ? "border-danger" : ""}`} style={{ borderRadius: '8px', border: '1.5px solid #e9ecef' }}>
                    {formData.resume ? (
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <FiUpload className="me-2" style={{ color: '#007ea7' }} />
                          <div>
                            <div className="fw-medium">{formData.resume.name}</div>
                            <small className="text-muted">
                              {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                            </small>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => setFormData((prev) => ({ ...prev, resume: null }))}
                          style={{ borderRadius: '6px' }}
                        >
                          <FiX className="me-1" />
                          Change
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <label className="btn btn-outline-primary mb-2" style={{ 
                          borderRadius: '8px',
                          border: '1.5px solid #007ea7',
                          
                        }}>
                          <FiUpload className="me-1" /> Upload File
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="d-none"
                            onChange={handleFileChange}
                          />
                        </label>
                        <div className="small text-muted">
                          PDF, DOC, DOCX (Max 5MB)
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.resume && (
                    <div className="text-danger small mt-2">{errors.resume}</div>
                  )}
                </div>

                {errors.submit && (
                  <div className="col-12">
                    <div className="alert alert-danger" style={{ borderRadius: '8px' }}>{errors.submit}</div>
                  </div>
                )}

                <div className="col-12">
                  <div className="d-flex gap-2 justify-content-end pt-3">
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={onClose}
                      disabled={isSubmitting}
                      style={{ 
                        borderRadius: '8px',
                        padding: '10px 20px',
                        background: '#f8f9fa',
                        border: '1.5px solid #dee2e6',
                        color: '#495057'
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={isSubmitting}
                      style={{ 
                        borderRadius: '8px',
                        padding: '10px 24px',
                        background: 'linear-gradient(135deg, #007ea7 0%, #005f7a 100%)',
                        border: 'none',
                        color: 'white'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickApplyModal;
