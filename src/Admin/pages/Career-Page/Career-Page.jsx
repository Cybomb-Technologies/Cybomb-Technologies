import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_BASE; // your API base URL

function CareerPage() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
          jobTitle: c.jobTitle,
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

  if (loading) {
    return (
      <div
        className="career-container"
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="career-container">
      <div className="container py-3">
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0">
                <i className="fas fa-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Search candidates by name, email, job title or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <span className="badge bg-primary rounded-pill p-2">
              {filteredCandidates.length} {filteredCandidates.length === 1 ? 'Application' : 'Applications'}
            </span>
          </div>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Job Title</th>
                    <th>Resume</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCandidates.length > 0 ? (
                    filteredCandidates.map(candidate => (
                      <tr key={candidate._id}>
                        <td className="fw-bold">{candidate.name}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.phone}</td>
                        <td>
                          <span className="badge bg-info text-dark">{candidate.jobTitle}</span>
                        </td>
                        <td>
                          <button
                            onClick={() => handleViewResume(candidate._id, candidate.name)}
                            className="btn btn-link text-primary p-0"
                          >
                            <i className="fas fa-file-pdf me-1 text-danger"></i>
                            View Resume
                          </button>
                        </td>
                        <td>{formatDate(candidate.createdAt)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5">
                        <i className="fas fa-inbox display-1 text-muted mb-3"></i>
                        <p className="lead">No applications found</p>
                        {searchTerm && <p>No results for "{searchTerm}"</p>}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}

export default CareerPage;
