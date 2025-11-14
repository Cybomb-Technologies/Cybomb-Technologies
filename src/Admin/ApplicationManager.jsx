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
  Eye, 
} from "lucide-react";
const API_BASE_URL1 = import.meta.env.VITE_API_BASE_URL;

// Helper component for the Details Modal (kept for context, but not changed)
const DetailsModal = ({ isOpen, application, onClose }) => {
  if (!isOpen || !application) return null;

  // Function to render field value
  const renderValue = (key, value) => {
    if (key === 'isReferral') {
      return (
        <span className={`badge ${value ? 'bg-success' : 'bg-secondary'} text-white`}>
          {value ? 'Yes' : 'No'}
        </span>
      );
    }
    if (key === 'createdAt' || key === 'updatedAt') {
      return new Date(value).toLocaleString();
    }
    // Handle multiline text for coverLetter/experience
    if (key === 'coverLetter' || key === 'experience') {
        return <p style={{whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto'}} className="mb-0 border p-2 rounded bg-light">{value || 'N/A'}</p>;
    }
    return value || "N/A";
  };
  
  // Define the order and labels for fields to display (matches Application.js schema)
  const fields = [
      { key: 'name', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'role', label: 'Applied Role' },
      { key: 'experience', label: 'Experience Summary' },
      { key: 'coverLetter', label: 'Cover Letter' },
      { key: 'isReferral', label: 'Is Referral?' },
      { key: 'referredBy', label: 'Referred By' },
      { key: 'createdAt', label: 'Applied On' },
      { key: 'updatedAt', label: 'Last Updated' },
  ];

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header text-white" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
            <h5 className="modal-title d-flex align-items-center">
              <Eye className="me-2 flex-shrink-0" />
              <span className="text-truncate">Application Details: {application.name}</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              {fields.map(({ key, label }) => {
                // Skip the 'resume' object as it's handled by the other modal
                if (key === 'resume') return null; 

                // Use the application data
                const value = application[key];
                
                return (
                  <div key={key} className={`col-12 mb-3 ${key === 'coverLetter' || key === 'experience' ? 'col-lg-12' : 'col-lg-6'}`}>
                    <p className="mb-1 text-muted fw-medium small text-uppercase">{label}</p>
                    {key === 'coverLetter' || key === 'experience' ? (
                        renderValue(key, value)
                    ) : (
                        <p className="fw-bold mb-0 text-break">{renderValue(key, value)}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button onClick={onClose} className="btn btn-outline-primary">
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const DataTableView = ({ title, icon: Icon, data, headers, onDelete }) => {
  const [resumePopup, setResumePopup] = useState({
    isOpen: false,
    content: null,
    fileName: "",
    isLoading: false,
  });

  // STATE for Details Modal
  const [detailsPopup, setDetailsPopup] = useState({
    isOpen: false,
    application: null,
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
          // Use 'createdAt' for sorting/filtering 'Date Applied'
          const key = header.toLowerCase().replace(/\s/g, "") === 'dateapplied' ? 'createdat' : header.toLowerCase().replace(/\s/g, "");
          const value = item[key]?.toString().toLowerCase() || "";
          return value.includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      // If sorting by 'dateapplied', use 'createdat' property
      const sortKey = sortConfig.key === 'dateapplied' ? 'createdat' : sortConfig.key;
      
      result.sort((a, b) => {
        const aValue = a[sortKey]?.toString().toLowerCase() || "";
        const bValue = b[sortKey]?.toString().toLowerCase() || "";

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(result);
  }, [data, searchTerm, sortConfig, headers]);

  const handleSort = (header) => {
    // Map 'Date Applied' back to 'createdat' for internal state
    const key = header.toLowerCase().replace(/\s/g, "") === 'dateapplied' ? 'createdat' : header.toLowerCase().replace(/\s/g, "");
    
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
  
  // function to open the Details Modal
  const handleViewDetails = (application) => {
    setDetailsPopup({
      isOpen: true,
      application: application,
    });
  };

  // function to close the Details Modal
  const closeDetailsPopup = (e) => {
    // Only close if the backdrop or X button is clicked (to allow scrolling in modal)
    if (e.target === e.currentTarget || e.target.closest('.btn-close')) { 
      setDetailsPopup({
        isOpen: false,
        application: null,
      });
    }
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
      if (e.key === "Escape") {
        if (resumePopup.isOpen) {
            closeResumePopup();
        } else if (detailsPopup.isOpen) { 
            closeDetailsPopup({ target: { closest: () => null }, currentTarget: {} }); 
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [resumePopup.isOpen, detailsPopup.isOpen]);


  const renderCellContent = (item, header) => {
    const key = header.toLowerCase().replace(/\s/g, "");
    let content = item[key] || "N/A";

    if (key === "resume") {
      if (item.resume && item.resume.filename) {
        return (
          <button
            onClick={() => handleViewResume(item._id, item.resume.originalName)}
            className="btn btn-primary btn-sm d-flex align-items-center justify-content-center w-100"
            style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', border: 'none', minWidth: '120px'}}
          >
            <FileText className="me-1 flex-shrink-0" style={{width: '14px', height: '14px'}} />
            <span className="text-truncate">View Resume</span>
          </button>
        );
      } else {
        return (
          <span className="badge bg-secondary text-white p-2 d-inline-block text-center w-100" style={{minWidth: '100px'}}>
            No Resume
          </span>
        );
      }
    }

    // NEW CASE: Render the formatted creation date
    if (key === "dateapplied") {
        // 'createdAt' is the actual database field name 
        if (item.createdAt) {
            return new Date(item.createdAt).toLocaleDateString();
        }
        return "N/A";
    }

    // Default truncation logic
    if (content && content.length > 30) {
      content = content.substring(0, 27) + "...";
    }

    return content;
  };

  const renderMobileCard = (item, index) => (
    <div
      key={item._id || index}
      className="card mb-3 border-0 shadow-sm"
      style={{background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'}}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title text-truncate me-2 mb-0 flex-grow-1 text-primary">
            {item.name || "N/A"}
          </h5>
          <div className="d-flex align-items-center flex-shrink-0">
            <button
              onClick={() => handleViewDetails(item)} 
              className="btn btn-link text-primary p-1 me-1"
              title="View Details"
            >
              <Eye style={{width: '16px', height: '16px'}} />
            </button>
            <button
              onClick={() => onDelete(item._id, title.toLowerCase())}
              className="btn btn-link text-danger p-1 me-1"
            >
              <Trash2 style={{width: '16px', height: '16px'}} />
            </button>
            <button
              onClick={() => toggleRowExpand(item._id)}
              className="btn btn-link text-primary p-1"
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
            <span className="text-muted small fw-medium">Applied On:</span>
            <span className="small text-end ms-2">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A"}</span>
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
                // Filter out the fields already shown above 
                (header) => !["Name", "Email", "Role", "Date Applied", "Resume"].includes(header) 
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
                      {renderCellContent(item, header)}
                    </span>
                  </div>
                );
              })}
              {/* Adding referral info to mobile details - which is in the full schema, but not in table headers */}
              {item.isReferral && (
                <div key="referredBy" className="d-flex justify-content-between mb-2">
                    <span className="text-muted small fw-medium">
                      Referred By:
                    </span>
                    <span className="small text-end ms-2">
                      {item.referredBy || "N/A"}
                    </span>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );

  const SortIcon = ({ columnKey }) => {
    // Map back 'dateapplied' to 'createdat' for comparison
    const internalKey = columnKey === 'dateapplied' ? 'createdat' : columnKey;
    
    if (sortConfig.key !== internalKey) {
      return <ChevronDown style={{width: '16px', height: '16px', opacity: '0.3'}} />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp style={{width: '16px', height: '16px'}} />
    ) : (
      <ChevronDown style={{width: '16px', height: '16px'}} />
    );
  };

  // Function to get column width based on header
  const getColumnWidth = (header) => {
    switch(header.toLowerCase()) {
      case 'name':
        return '15%';
      case 'email':
        return '20%';
      case 'role':
        return '20%';
      case 'date applied':
        return '15%';
      case 'resume':
        return '20%';
      case 'actions':
        return '10%';
      default:
        return 'auto';
    }
  };

  return (
    <div className="card shadow-lg border-0" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'}}>
      <div className="card-body">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <h2 className="h4 fw-bold d-flex align-items-center text-white mb-0 px-3 py-2 rounded" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
            <Icon className="me-2 me-md-3 text-white" style={{width: '20px', height: '20px'}} />
            {title} Data ({filteredData.length})
          </h2>

          {/* Search and Filter Section */}
          <div className="d-flex flex-column flex-md-row gap-2 w-100 w-md-auto">
            <div className="input-group flex-grow-1 flex-md-grow-0" style={{maxWidth: '300px'}}>
              <span className="input-group-text text-white border-end-0" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
                <Search style={{width: '16px', height: '16px'}} />
              </span>
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control border-start-0"
                style={{borderColor: '#3b82f6'}}
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="btn btn-outline-primary"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Data Display */}
        <div>
          {filteredData.length === 0 ? (
            <div className="text-center py-5 border rounded" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'}}>
              <p className="text-muted fst-italic mb-3">
                {searchTerm
                  ? `No ${title.toLowerCase()} records match your search.`
                  : `No ${title.toLowerCase()} records found.`}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="btn text-white"
                  style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', border: 'none'}}
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
            // Desktop Table View with fixed widths and no horizontal scroll
            <div className="table-responsive" style={{overflowX: 'hidden'}}>
              <table className="table table-hover mb-0" style={{tableLayout: 'fixed', width: '100%', minWidth: '100%'}}>
                <thead className="text-white" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
                  <tr>
                    {headers.map((header) => {
                      const key = header.toLowerCase().replace(/\s/g, "");
                      return (
                        <th
                          key={header}
                          className="cursor-pointer"
                          onClick={() => handleSort(header)}
                          style={{width: getColumnWidth(header), padding: '12px 8px'}}
                        >
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-truncate">{header}</span>
                            <SortIcon columnKey={key} />
                          </div>
                        </th>
                      );
                    })}
                    <th className="text-nowrap" style={{width: getColumnWidth('actions'), padding: '12px 8px'}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item._id || index} style={{background: index % 2 === 0 ? '#ffffff' : '#f8fafc'}}>
                      {headers.map((header) => (
                        <td 
                          key={`${item._id}-${header}`} 
                          className="text-truncate"
                          style={{width: getColumnWidth(header), padding: '12px 8px'}}
                          title={item[header.toLowerCase().replace(/\s/g, "")] || "N/A"}
                        >
                          {renderCellContent(item, header)}
                        </td>
                      ))}
                      <td className="d-flex gap-1" style={{width: getColumnWidth('actions'), padding: '12px 8px'}}>
                        <button
                          onClick={() => handleViewDetails(item)} 
                          className="btn btn-sm text-white flex-shrink-0"
                          title="View Details"
                          style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', border: 'none', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <Eye style={{width: '14px', height: '14px'}} />
                        </button>
                        <button
                          onClick={() => onDelete(item._id, title.toLowerCase())}
                          className="btn btn-sm btn-outline-danger flex-shrink-0"
                          title="Delete"
                          style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                          <Trash2 style={{width: '14px', height: '14px'}} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {resumePopup.isOpen && (
  <div
    className="modal fade show d-block"
    style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
    onClick={handleBackdropClick}
  >
    {/* Changed to modal-xl for maximum width and increased height */}
    <div className="modal-dialog modal-xl modal-dialog-centered" style={{maxWidth: '95vw', height: '95vh'}}>
      <div className="modal-content border-0 shadow-lg h-100">
        <div className="modal-header text-white" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
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

        <div className="modal-body d-flex flex-column">
          {resumePopup.isLoading ? (
            <div className="d-flex justify-content-center align-items-center py-5 flex-grow-1">
              <div className="spinner-border text-primary me-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="fw-medium text-dark">Loading Resume...</span>
            </div>
          ) : resumePopup.content ? (
            <div className="d-flex flex-column flex-grow-1">
              {/* Increased iframe height to take most of the available space */}
              <iframe
                src={resumePopup.content}
                className="w-100 border rounded flex-grow-1"
                style={{minHeight: '70vh', height: '100%'}}
                title="Resume Preview"
              />
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-3">
                <a
                  href={resumePopup.content}
                  download={resumePopup.fileName}
                  className="btn text-white d-flex align-items-center justify-content-center"
                  style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', border: 'none'}}
                >
                  <FileText className="me-2" />
                  Download Resume
                </a>
                <button
                  onClick={closeResumePopup}
                  className="btn btn-outline-primary"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-muted flex-grow-1 d-flex flex-column justify-content-center">
              <FileText className="mb-2 opacity-50 mx-auto" style={{width: '48px', height: '48px'}} />
              <p>Unable to load resume content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}
        
        {/* Details Popup Modal */}
        <DetailsModal
            isOpen={detailsPopup.isOpen}
            application={detailsPopup.application}
            onClose={closeDetailsPopup}
        />
        
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
      // UPDATED headers: Replaced "Is Referral" with "Date Applied"
      headers={["Name", "Email", "Role", "Date Applied", "Resume"]} 
      onDelete={onDelete}
    />
  );
};

export default ApplicationManager;