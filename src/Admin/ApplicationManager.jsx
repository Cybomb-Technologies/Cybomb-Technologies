import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Trash2,
  FileText,
  X,
  Loader,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
const API_BASE_URL1 = import.meta.env.VITE_API_BASE_URL;

const DataTableView = ({ title, icon: Icon, data, headers, onDelete }) => {
  const [resumePopup, setResumePopup] = useState({
    isOpen: false,
    content: null,
    fileName: "",
    isLoading: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filteredData, setFilteredData] = useState(data);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedRows, setExpandedRows] = useState(new Set());

  const API_BASE_URL = `${API_BASE_URL1}`;

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter and sort data
  useEffect(() => {
    let result = [...data];

    // Apply search filter
    if (searchTerm) {
      result = result.filter((item) =>
        headers.some((header) => {
          const key = header.toLowerCase().replace(/\s/g, "");
          const value = item[key]?.toString().toLowerCase() || "";
          return value.includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key]?.toString().toLowerCase() || "";
        const bValue = b[sortConfig.key]?.toString().toLowerCase() || "";

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(result);
  }, [data, searchTerm, sortConfig, headers]);

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const toggleRowExpand = (id) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleViewResume = async (applicationId, fileName) => {
    try {
      setResumePopup((prev) => ({
        ...prev,
        isOpen: true,
        isLoading: true,
        fileName,
      }));

      const token = localStorage.getItem("adminToken");
      const response = await fetch(
          `${API_BASE_URL}/api/application/${applicationId}/resume`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        setResumePopup((prev) => ({
          ...prev,
          content: url,
          isLoading: false,
        }));
      } else {
        throw new Error("Failed to fetch resume");
      }
    } catch (error) {
      console.error("Error viewing resume:", error);
      alert("Error opening resume file");
      closeResumePopup();
    }
  };

  const closeResumePopup = () => {
    if (resumePopup.content) {
      window.URL.revokeObjectURL(resumePopup.content);
    }

    setResumePopup({
      isOpen: false,
      content: null,
      fileName: "",
      isLoading: false,
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeResumePopup();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && resumePopup.isOpen) {
        closeResumePopup();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [resumePopup.isOpen]);

  const renderCellContent = (item, header) => {
    const key = header.toLowerCase().replace(/\s/g, "");
    let content = item[key] || "N/A";

    if (key === "resume") {
      if (item.resume && item.resume.filename) {
        return (
          <button
            onClick={() => handleViewResume(item._id, item.resume.originalName)}
            className="btn btn-primary btn-sm d-flex align-items-center justify-content-center w-100 w-sm-auto"
          >
            <FileText className="me-1 flex-shrink-0" style={{width: '14px', height: '14px'}} />
            <span className="text-truncate">View Resume</span>
          </button>
        );
      } else {
        return (
          <span className="badge bg-danger text-white p-2 d-inline-block text-center w-100 w-sm-auto">
            No Resume
          </span>
        );
      }
    }

    if (content && content.length > 50 && !isMobile) {
      content = content.substring(0, 47) + "...";
    }

    return content;
  };

  const renderMobileCard = (item, index) => (
    <div
      key={item._id || index}
      className="card mb-3"
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title text-truncate me-2 mb-0 flex-grow-1">
            {item.name || "N/A"}
          </h5>
          <div className="d-flex align-items-center flex-shrink-0">
            <button
              onClick={() => onDelete(item._id, title.toLowerCase())}
              className="btn btn-link text-danger p-1 me-1"
            >
              <Trash2 style={{width: '16px', height: '16px'}} />
            </button>
            <button
              onClick={() => toggleRowExpand(item._id)}
              className="btn btn-link text-secondary p-1"
            >
              {expandedRows.has(item._id) ? (
                <ChevronUp style={{width: '16px', height: '16px'}} />
              ) : (
                <ChevronDown style={{width: '16px', height: '16px'}} />
              )}
            </button>
          </div>
        </div>

        <div className="mb-2">
          <div className="d-flex justify-content-between mb-1">
            <span className="text-muted small fw-medium">Email:</span>
            <span className="small text-truncate ms-2">
              {item.email || "N/A"}
            </span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span className="text-muted small fw-medium">Role:</span>
            <span className="small">{item.role || "N/A"}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted small fw-medium">Resume:</span>
            <div className="ms-2">{renderCellContent(item, "Resume")}</div>
          </div>
        </div>

        {expandedRows.has(item._id) && (
          <div className="mt-3 pt-3 border-top">
            {headers
              .filter(
                (header) => !["Name", "Email", "Role", "Resume"].includes(header)
              )
              .map((header) => {
                const key = header.toLowerCase().replace(/\s/g, "");
                const value = item[key] || "N/A";
                return (
                  <div key={header} className="d-flex justify-content-between mb-2">
                    <span className="text-muted small fw-medium">
                      {header}:
                    </span>
                    <span className="small text-end ms-2">
                      {value}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronDown style={{width: '16px', height: '16px', opacity: '0.3'}} />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp style={{width: '16px', height: '16px'}} />
    ) : (
      <ChevronDown style={{width: '16px', height: '16px'}} />
    );
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <h2 className="h4 fw-bold d-flex align-items-center text-primary mb-0">
            <Icon className="me-2 me-md-3 text-primary" style={{width: '20px', height: '20px'}} />
            {title} Data ({filteredData.length})
          </h2>

          {/* Search and Filter Section */}
          <div className="d-flex flex-column flex-md-row gap-2 w-100 w-md-auto">
            <div className="input-group flex-grow-1 flex-md-grow-0" style={{maxWidth: '300px'}}>
              <span className="input-group-text bg-white border-end-0">
                <Search style={{width: '16px', height: '16px'}} />
              </span>
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control border-start-0"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="btn btn-outline-secondary"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Data Display */}
        <div>
          {filteredData.length === 0 ? (
            <div className="text-center py-5 border rounded bg-light">
              <p className="text-muted fst-italic mb-3">
                {searchTerm
                  ? `No ${title.toLowerCase()} records match your search.`
                  : `No ${title.toLowerCase()} records found.`}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="btn btn-primary"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : isMobile ? (
            // Mobile Card View
            <div>
              {filteredData.map((item, index) => renderMobileCard(item, index))}
            </div>
          ) : (
            // Desktop Table View
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    {headers.map((header) => {
                      const key = header.toLowerCase().replace(/\s/g, "");
                      return (
                        <th
                          key={header}
                          className="cursor-pointer"
                          onClick={() => handleSort(key)}
                        >
                          <div className="d-flex align-items-center gap-1">
                            <span>{header}</span>
                            <SortIcon columnKey={key} />
                          </div>
                        </th>
                      );
                    })}
                    <th className="text-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item._id || index}>
                      {headers.map((header) => (
                        <td key={`${item._id}-${header}`} className="text-nowrap">
                          {renderCellContent(item, header)}
                        </td>
                      ))}
                      <td className="text-nowrap">
                        <button
                          onClick={() => onDelete(item._id, title.toLowerCase())}
                          className="btn btn-sm btn-outline-danger"
                          title="Delete"
                        >
                          <Trash2 style={{width: '16px', height: '16px'}} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Resume Popup Modal */}
        {resumePopup.isOpen && (
          <div
            className="modal fade show d-block"
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            onClick={handleBackdropClick}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title d-flex align-items-center">
                    <FileText className="me-2 flex-shrink-0" />
                    <span className="text-truncate">Resume: {resumePopup.fileName}</span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeResumePopup}
                  ></button>
                </div>

                <div className="modal-body">
                  {resumePopup.isLoading ? (
                    <div className="d-flex justify-content-center align-items-center py-5">
                      <div className="spinner-border text-primary me-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <span className="fw-medium text-dark">Loading Resume...</span>
                    </div>
                  ) : resumePopup.content ? (
                    <div>
                      <iframe
                        src={resumePopup.content}
                        className="w-100 border rounded"
                        style={{height: '400px'}}
                        title="Resume Preview"
                      />
                      <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-3">
                        <a
                          href={resumePopup.content}
                          download={resumePopup.fileName}
                          className="btn btn-primary d-flex align-items-center justify-content-center"
                        >
                          <FileText className="me-2" />
                          Download Resume
                        </a>
                        <button
                          onClick={closeResumePopup}
                          className="btn btn-outline-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-muted">
                      <FileText className="mb-2 opacity-50" style={{width: '48px', height: '48px'}} />
                      <p>Unable to load resume content.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ApplicationManager = ({ applications, onDelete }) => {
  return (
    <DataTableView
      title="Application"
      icon={Briefcase}
      data={applications}
      headers={["Name", "Email", "Role", "Resume"]}
      onDelete={onDelete}
    />
  );
};

export default ApplicationManager;