import React, { useState, useEffect } from "react";
import {
  Briefcase,
  PlusCircle,
  Edit,
  Trash2,
  Clock,
  Users,
  MapPin,
  DollarSign,
  Loader,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from "lucide-react";
const API_BASE_URL1 = import.meta.env.VITE_API_BASE_URL;

const ApplicationForm = ({ applicationToEdit, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: applicationToEdit?.title || "",
    department: applicationToEdit?.department || "Engineering",
    location: applicationToEdit?.location || "",
    type: applicationToEdit?.type || "Full-time",
    salary: applicationToEdit?.salary || "",
    description: applicationToEdit?.description || "",
    requirements: applicationToEdit?.requirements?.join(", ") || "",
    responsibilities: applicationToEdit?.responsibilities?.join(", ") || "",
    benefits: applicationToEdit?.benefits?.join(", ") || "",
    experienceLevel: applicationToEdit?.experienceLevel || "Mid",
    isActive: applicationToEdit?.isActive ?? true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const departments = [
    "Engineering",
    "Design",
    "Product",
    "Quality",
    "Marketing",
    "Sales",
    "Operations",
  ];
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
  ];
  const experienceLevels = ["Entry", "Mid", "Senior", "Lead", "Executive"];

  const isEditMode = !!applicationToEdit;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.department ||
      !formData.location ||
      !formData.type ||
      !formData.salary ||
      !formData.description
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const API_BASE_URL = `${API_BASE_URL1}`;
      const url = isEditMode
        ? `${API_BASE_URL}/api/applications/${applicationToEdit._id}`
        : `${API_BASE_URL}/api/applications`;

      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify({
          ...formData,
          requirements: formData.requirements
            ? formData.requirements
                .split(",")
                .map((req) => req.trim())
                .filter((req) => req)
            : [],
          responsibilities: formData.responsibilities
            ? formData.responsibilities
                .split(",")
                .map((resp) => resp.trim())
                .filter((resp) => resp)
            : [],
          benefits: formData.benefits
            ? formData.benefits
                .split(",")
                .map((benefit) => benefit.trim())
                .filter((benefit) => benefit)
            : [],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          isEditMode
            ? "Job opening updated successfully!"
            : "Job opening created successfully!"
        );
        setTimeout(() => {
          onSubmit();
        }, 1500);
      } else {
        throw new Error(data.message || "Failed to save job opening");
      }
    } catch (error) {
      console.error("Error submitting job opening:", error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card shadow border-0">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">
          {isEditMode ? "Edit Job Opening" : "Create New Job Opening"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Job Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Senior Full Stack Developer"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="form-select"
                required
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Location *</label>
              <input
                type="text"
                name="location"
                placeholder="Bangalore / Remote"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Job Type *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="form-select"
                required
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Salary Range *</label>
              <input
                type="text"
                name="salary"
                placeholder="₹15-25 LPA"
                value={formData.salary}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Experience Level</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="form-select"
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Job Description *</label>
            <textarea
              name="description"
              placeholder="Describe the role, responsibilities, and what you're looking for..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Requirements</label>
            <textarea
              name="requirements"
              placeholder="List requirements separated by commas..."
              value={formData.requirements}
              onChange={handleChange}
              rows="3"
              className="form-control"
            ></textarea>
            <div className="form-text">Separate requirements with commas</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Responsibilities</label>
            <textarea
              name="responsibilities"
              placeholder="List key responsibilities separated by commas..."
              value={formData.responsibilities}
              onChange={handleChange}
              rows="3"
              className="form-control"
            ></textarea>
            <div className="form-text">Separate responsibilities with commas</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Benefits</label>
            <textarea
              name="benefits"
              placeholder="List benefits separated by commas..."
              value={formData.benefits}
              onChange={handleChange}
              rows="3"
              className="form-control"
            ></textarea>
            <div className="form-text">Separate benefits with commas</div>
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="isActive" className="form-check-label">
              Active Job Opening
            </label>
          </div>

          <div className="d-flex justify-content-end gap-3 pt-3">
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-outline-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary d-flex align-items-center"
            >
              {isLoading ? (
                <Loader className="animate-spin me-2" style={{width: '16px', height: '16px'}} />
              ) : isEditMode ? (
                <Edit className="me-2" style={{width: '16px', height: '16px'}} />
              ) : (
                <PlusCircle className="me-2" style={{width: '16px', height: '16px'}} />
              )}
              {isEditMode ? "Update Opening" : "Create Opening"}
            </button>
          </div>
          {message && (
            <div className={`mt-3 alert ${message.includes("Error") ? "alert-danger" : "alert-success"} d-flex align-items-center`}>
              {!message.includes("Error") && <CheckCircle className="me-2" style={{width: '16px', height: '16px'}} />}
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const JobOpeningManager = ({ onApplicationsUpdate }) => {
  const [applications, setApplications] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [applicationToEdit, setApplicationToEdit] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job openings on component mount
  const fetchJobOpenings = async () => {
    try {
      setLoading(true);
      setError(null);
      const API_BASE_URL = `${API_BASE_URL1}`;
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_BASE_URL}/api/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch job openings: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setApplications(data.data || []);
      } else {
        throw new Error(data.message || "Failed to fetch job openings");
      }
    } catch (error) {
      console.error("Error fetching job openings:", error);
      setError(error.message);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobOpenings();
  }, []);

  const handleEdit = (application) => {
    setApplicationToEdit(application);
    setIsFormVisible(true);
  };

  const handleCreateNew = () => {
    setApplicationToEdit(null);
    setIsFormVisible(true);
    setMessage("");
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setApplicationToEdit(null);
    fetchJobOpenings(); // Refresh data
    if (onApplicationsUpdate) {
      onApplicationsUpdate();
    }
  };

  const handleDelete = async (applicationId) => {
    if (!window.confirm("Are you sure you want to delete this job opening?"))
      return;

    try {
      const API_BASE_URL = `${API_BASE_URL1}`;
      const response = await fetch(
        `${API_BASE_URL}/api/applications/${applicationId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      if (response.ok) {
        setMessage("Job opening deleted successfully!");
        fetchJobOpenings(); // Refresh data
        if (onApplicationsUpdate) {
          onApplicationsUpdate();
        }
        setTimeout(() => setMessage(""), 3000);
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete job opening");
      }
    } catch (error) {
      console.error("Error deleting job opening:", error);
      setMessage(`Error deleting job opening: ${error.message}`);
    }
  };

  const toggleStatus = async (applicationId, currentStatus) => {
    try {
      const API_BASE_URL = `${API_BASE_URL1}`;
      const response = await fetch(
        `${API_BASE_URL}/api/applications/${applicationId}/status`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      if (response.ok) {
        setMessage(
          `Job opening ${
            !currentStatus ? "activated" : "deactivated"
          } successfully!`
        );
        fetchJobOpenings(); // Refresh data
        if (onApplicationsUpdate) {
          onApplicationsUpdate();
        }
        setTimeout(() => setMessage(""), 3000);
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to update job status");
      }
    } catch (error) {
      console.error("Error toggling job status:", error);
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleRetry = () => {
    fetchJobOpenings();
  };

  if (isFormVisible) {
    return (
      <ApplicationForm
        applicationToEdit={applicationToEdit}
        onSubmit={handleCancel}
        onCancel={handleCancel}
      />
    );
  }

  if (loading) {
    return (
      <div className="card shadow border-0">
        <div className="card-body text-center py-5">
          <Loader className="animate-spin text-primary mb-3" style={{width: '48px', height: '48px'}} />
          <h3 className="h4 text-dark mb-2">Loading Job Openings</h3>
          <p className="text-muted">Please wait while we fetch the data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card shadow border-0">
        <div className="card-body text-center py-5">
          <AlertCircle className="text-danger mb-3" style={{width: '48px', height: '48px'}} />
          <h3 className="h4 text-dark mb-2">Failed to Load Job Openings</h3>
          <p className="text-muted mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="btn btn-primary d-flex align-items-center mx-auto"
          >
            <RefreshCw className="me-2" style={{width: '16px', height: '16px'}} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <h2 className="h3 fw-bold d-flex align-items-center text-primary mb-0">
          <Briefcase className="me-3 text-primary" style={{width: '24px', height: '24px'}} />
          Job Openings Management ({applications.length})
        </h2>
        <div className="d-flex gap-2">
          <button
            onClick={handleRetry}
            className="btn btn-outline-secondary d-flex align-items-center"
            title="Refresh data"
          >
            <RefreshCw style={{width: '16px', height: '16px'}} />
          </button>
          <button
            onClick={handleCreateNew}
            className="btn btn-primary d-flex align-items-center"
          >
            <PlusCircle className="me-2" style={{width: '16px', height: '16px'}} />
            New Opening
          </button>
        </div>
      </div>

      {message && (
        <div className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"} mb-4 d-flex align-items-center`}>
          {!message.includes("Error") ? (
            <CheckCircle className="me-2" style={{width: '16px', height: '16px'}} />
          ) : (
            <AlertCircle className="me-2" style={{width: '16px', height: '16px'}} />
          )}
          {message}
        </div>
      )}

      <div className="row">
        {applications.length === 0 ? (
          <div className="col-12 text-center py-5">
            <Briefcase className="mb-3 text-muted" style={{width: '64px', height: '64px'}} />
            <h3 className="h4 text-dark mb-2">No job openings yet</h3>
            <p className="text-muted mb-4">
              Get started by creating your first job opening!
            </p>
            <button
              onClick={handleCreateNew}
              className="btn btn-primary"
            >
              Create First Opening
            </button>
          </div>
        ) : (
          applications.map((application) => (
            <div key={application._id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className={`badge ${application.isActive ? "bg-success" : "bg-danger"}`}>
                      {application.isActive ? "Active" : "Inactive"}
                    </span>
                    <span className="text-muted small d-flex align-items-center">
                      <Clock className="me-1" style={{width: '14px', height: '14px'}} />
                      {new Date(application.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h5 className="card-title text-dark mb-2">{application.title}</h5>

                  <div className="mb-3">
                    <div className="d-flex align-items-center text-muted small mb-1">
                      <MapPin className="me-2" style={{width: '14px', height: '14px'}} />
                      {application.location}
                    </div>
                    <div className="d-flex align-items-center text-muted small mb-1">
                      <Users className="me-2" style={{width: '14px', height: '14px'}} />
                      {application.department}
                    </div>
                    <div className="d-flex align-items-center text-muted small">
                      <DollarSign className="me-2" style={{width: '14px', height: '14px'}} />
                      {application.salary}
                    </div>
                  </div>

                  <p className="card-text text-muted small mb-3" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {application.description}
                  </p>

                  <div className="d-flex gap-2">
                    <button
                      onClick={() => handleEdit(application)}
                      className="btn btn-outline-primary btn-sm d-flex align-items-center flex-grow-1"
                    >
                      <Edit className="me-1" style={{width: '14px', height: '14px'}} />
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStatus(application._id, application.isActive)}
                      className={`btn btn-sm ${application.isActive ? "btn-warning" : "btn-success"}`}
                    >
                      {application.isActive ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDelete(application._id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      <Trash2 style={{width: '14px', height: '14px'}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobOpeningManager;