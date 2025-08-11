import React, { useState } from "react";
import { FiUpload, FiCheckCircle } from "react-icons/fi";

const QuickApplyModal = ({ job, onClose, onApply }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size should be less than 5MB",
      }));
    } else {
      setErrors((prev) => ({ ...prev, resume: "" }));
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (
      !formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
    )
      newErrors.email = "Valid email is required";
    if (
      !formData.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
    )
      newErrors.phone = "Valid phone number is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setTimeout(() => {
        onApply?.();
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content text-center py-5">
            <FiCheckCircle className="text-success mb-4" style={{ fontSize: "4rem" }} />
            <h3 className="mb-3">Application Submitted!</h3>
            <p className="text-muted">
              Thank you for applying for {job?.title}. We will get back to you soon.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {job ? `Quick Apply: ${job.title}` : "Quick Application"}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12">
                <label className="form-label">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="col-12">
                <label className="form-label">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="col-12">
                <label className="form-label">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="col-12">
                <label className="form-label">Resume/CV*</label>
                <div className={`border rounded p-3 ${errors.resume ? "border-danger" : ""}`}>
                  {formData.resume ? (
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <FiUpload className="me-2" />
                        {formData.resume.name}
                        <small className="text-muted ms-2">
                          {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                        </small>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => setFormData((prev) => ({ ...prev, resume: null }))}
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <>
                      <label className="btn btn-sm btn-outline-primary mb-0">
                        <FiUpload className="me-1" /> Upload File
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="d-none"
                          onChange={handleFileChange}
                        />
                      </label>
                      <small className="text-muted ms-2">
                        PDF, DOC, DOCX (Max 5MB)
                      </small>
                    </>
                  )}
                </div>
                {errors.resume && (
                  <div className="text-danger small mt-2">{errors.resume}</div>
                )}
              </div>

              {errors.submit && (
                <div className="alert alert-danger">{errors.submit}</div>
              )}

              <div className="col-12 text-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickApplyModal;
