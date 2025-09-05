import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_BASE; // your API base URL

function CareerPage() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${API_URL}/api/career`);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        // Only keep the fields needed for the table
        const basicData = data.map(c => ({
          _id: c._id,
          name: c.name,
          email: c.email,
          phone: c.phone,
          jobTitle: c.jobTitle || 'Not mentioned', // Handle empty job titles
          createdAt: c.createdAt
        }));
        setCandidates(basicData);
      } catch (error) {
        console.error('Error fetching candidates:', error);
        setCandidates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredCandidates = candidates.filter(candidate => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.email.toLowerCase().includes(searchLower) ||
      candidate.jobTitle.toLowerCase().includes(searchLower) ||
      candidate.phone.toLowerCase().includes(searchLower)
    );
  });

  // Download resume on-demand
  const handleViewResume = async (id, name) => {
    try {
      const res = await fetch(`${API_URL}/api/career/${id}/resume`);
      if (!res.ok) throw new Error('Failed to fetch resume');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name}-Resume.pdf`;
      link.click();
    } catch (err) {
      console.error(err);
      alert('Failed to download resume');
    }
  };

  const handleViewDetails = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCandidate(null);
  };

  if (loading) {
    return (
      <div className="career-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading career applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="career-container">
      <div className="header-card">
        <h6 className="dashboard-title">
          Career Applications Dashboard
        </h6>
        {/* <p className="dashboard-subtitle">Manage and review job applications</p> */}
      </div>

      {/* Stats Cards Row */}
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-value">{candidates.length}</div>
            <div className="stats-label">Total Applications</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-value">{new Set(candidates.map(c => c.jobTitle)).size}</div>
            <div className="stats-label">Different Roles</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-value">
              {candidates.filter(c => new Date(c.createdAt) > new Date(Date.now() - 7 * 86400000)).length}
            </div>
            <div className="stats-label">This Week</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="stats-card">
            <div className="stats-value">
              {filteredCandidates.length}
            </div>
            <div className="stats-label">Filtered Results</div>
          </div>
        </div>
      </div>

      <div className="dashboard-controls">
        <div className="row">
          <div className="col-md-8">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search candidates by name, email, job title or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <span className="badge bg-primary rounded-pill p-2 px-3">
              <i className="fas fa-file-alt me-1"></i>
              {filteredCandidates.length} {filteredCandidates.length === 1 ? 'Application' : 'Applications'}
            </span>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="applications-table">
          <colgroup>
            <col style={{width: '8%'}} />
            <col style={{width: '22%'}} />
            <col style={{width: '20%'}} />
            <col style={{width: '15%'}} />
            <col style={{width: '15%'}} />
            <col style={{width: '10%'}} />
          </colgroup>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Resume</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map((candidate, index) => (
                <tr key={candidate._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="fw-bold text-truncate" title={candidate.name}>
                    {candidate.name}
                  </td>
                  <td>
                    <span className="job-badge bg-info bg-opacity-10 text-info border border-info border-opacity-25">
                      {candidate.jobTitle}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleViewResume(candidate._id, candidate.name)}
                      className="resume-btn"
                    >
                      <i className="fas fa-file-pdf text-danger"></i>
                      View Resume
                    </button>
                  </td>
                  <td>{formatDate(candidate.createdAt)}</td>
                  <td>
                    <button
                      onClick={() => handleViewDetails(candidate)}
                      className="view-btn"
                    >
                      <i className="fas fa-eye"></i>
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-5">
                  <div className="no-data">
                    <i className="fas fa-inbox"></i>
                    <h3>No applications found</h3>
                    {searchTerm && <p>No results for "{searchTerm}"</p>}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for candidate details */}
      {showModal && selectedCandidate && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Candidate Details</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{selectedCandidate.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{selectedCandidate.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{selectedCandidate.phone}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Job Title:</span>
                <span className="detail-value">{selectedCandidate.jobTitle}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Date Applied:</span>
                <span className="detail-value">{formatDate(selectedCandidate.createdAt)}</span>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="resume-btn"
                onClick={() => handleViewResume(selectedCandidate._id, selectedCandidate.name)}
              >
                <i className="fas fa-file-pdf text-danger"></i>
                View Resume
              </button>
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          :root {
            --primary: #4e54c8;
            --primary-gradient: linear-gradient(120deg, #4e54c8, #8f94fb);
            --secondary: #6c757d;
            --light: #f8f9fa;
            --dark: #343a40;
            --success: #28a745;
            --danger: #dc3545;
            --warning: #ffc107;
            --info: #17a2b8;
          }
          
          .career-container {
           padding: 10px 5px 20px 26px;
            min-height: 100vh;
            background-color: #f5f7fb;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .header-card {
            background: var(--primary-gradient);
            color: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          
          .dashboard-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .dashboard-subtitle {
            opacity: 0.9;
            margin-bottom: 0;
          }
          
          .dashboard-controls {
            margin-bottom: 24px;
          }
          
          .search-container {
            position: relative;
          }
          
          .search-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            z-index: 10;
          }
          
          .search-input {
            width: 100%;
            padding: 10px 10px 10px 40px;
            border: 1px solid #ced4da;
            border-radius: 8px;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            background-color: white;
          }
          
          .search-input:focus {
            border-color: var(--primary);
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(78, 84, 200, 0.25);
          }
          
          .stats-card {
            background-color: white;
            border-radius: 12px;
            padding: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            text-align: center;
            margin-bottom: 20px;
            transition: transform 0.2s;
          }
          
          .stats-card:hover {
            transform: translateY(-5px);
          }
          
          .stats-value {
            font-size: 32px;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 5px;
          }
          
          .stats-label {
            color: #6c757d;
            font-weight: 500;
            font-size: 14px;
          }
          
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
          }
          
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .table-container {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          
          .applications-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
          }
          
          .applications-table th {
            background-color: var(--primary);
            color: white;
            padding: 16px;
            text-align: left;
            font-weight: 600;
          }
          
          .applications-table td {
            padding: 14px 16px;
            border-bottom: 1px solid #e9ecef;
            vertical-align: middle;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .applications-table tr:last-child td {
            border-bottom: none;
          }
          
          .applications-table tr:hover {
            background-color: #f8f9fa;
          }
          
          .job-badge {
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 0.85rem;
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .resume-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--danger);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s;
            background: none;
            border: none;
            padding: 0;
            white-space: nowrap;
          }
          
          .resume-btn:hover {
            color: #b02a37;
            text-decoration: underline;
            cursor: pointer;
          }
          
          .view-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s;
            background: none;
            border: none;
            padding: 8px 12px;
            border-radius: 6px;
            background-color: rgba(78, 84, 200, 0.1);
            white-space: nowrap;
          }
          
          .view-btn:hover {
            background-color: rgba(78, 84, 200, 0.2);
            cursor: pointer;
          }
          
          .no-data {
            text-align: center;
            padding: 60px 20px;
            color: #6c757d;
          }
          
          .no-data i {
            font-size: 56px;
            margin-bottom: 16px;
            color: #ced4da;
          }
          
          .no-data h3 {
            margin-bottom: 8px;
            color: #495057;
          }
          
          /* Modal Styles */
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }
          
          .modal-content {
            background-color: white;
            border-radius: 12px;
            width: 100%;
            max-width: 500px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
          
          .modal-header {
            padding: 20px;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .modal-header h3 {
            margin: 0;
            color: var(--primary);
          }
          
          .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #6c757d;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }
          
          .modal-close:hover {
            background-color: #f8f9fa;
          }
          
          .modal-body {
            padding: 20px;
          }
          
          .detail-row {
            display: flex;
            margin-bottom: 15px;
          }
          
          .detail-label {
            font-weight: 600;
            width: 120px;
            color: #495057;
          }
          
          .detail-value {
            flex: 1;
            color: #6c757d;
          }
          
          .modal-footer {
            padding: 20px;
            border-top: 1px solid #e9ecef;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }
          
          .close-btn {
            padding: 8px 16px;
            background-color: #6c757d;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
          
          .close-btn:hover {
            background-color: #5a6268;
          }
          
          @media (max-width: 768px) {
            .applications-table {
              display: block;
              overflow-x: auto;
            }
            
            .header-card {
              text-align: center;
            }
            
            .detail-row {
              flex-direction: column;
              margin-bottom: 20px;
            }
            
            .detail-label {
              margin-bottom: 5px;
              width: 100%;
            }
            
            .modal-content {
              margin: 0 10px;
            }
            
            .applications-table colgroup col {
              width: auto !important;
            }
          }

          .text-truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .text-center {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default CareerPage;