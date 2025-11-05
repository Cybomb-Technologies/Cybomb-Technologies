import React from 'react';
import { MessageSquare, Trash2, Mail, User, Phone, Eye, Calendar } from 'lucide-react';

const EnquiryManager = ({ popupForms = [], onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const handleRowClick = (item) => {
    const modal = document.createElement('div');
    modal.className = 'modal fade show d-block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-info text-white">
            <h5 class="modal-title d-flex align-items-center">
              <span class="me-2">📧</span>
              Popup Form Details
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-medium text-info">Name</label>
                <div class="p-3 bg-light rounded d-flex align-items-center">
                  <span class="me-2">👤</span>
                  <strong>${item.name || 'N/A'}</strong>
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-medium text-info">Email</label>
                <div class="p-3 bg-light rounded">
                  <a href="mailto:${item.email || ''}" class="text-info text-decoration-none fw-medium">
                    ${item.email || 'N/A'}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-medium text-info">Phone</label>
                <div class="p-3 bg-light rounded d-flex align-items-center">
                  <span class="me-2">📞</span>
                  ${item.phone || 'N/A'}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-medium text-info">Newsletter</label>
                <div class="p-3 bg-light rounded">
                  <span class="badge ${item.subscribe ? 'bg-success' : 'bg-secondary'}">
                    ${item.subscribe ? 'Subscribed' : 'Not Subscribed'}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-medium text-info">Message</label>
              <div class="p-3 bg-light rounded" style="white-space: pre-wrap; min-height: 100px;">
                ${item.message || 'No message provided'}
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <label class="form-label fw-medium text-info">Submitted</label>
                <div class="p-3 bg-light rounded d-flex align-items-center">
                  <span class="me-2">📅</span>
                  ${formatDate(item.createdAt)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    
    const closeModal = () => {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
    };
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    const closeButton = modal.querySelector('[data-bs-dismiss="modal"]');
    if (closeButton) {
      closeButton.addEventListener('click', closeModal);
    }
  };

  // Safe data access with proper validation
  const safeData = Array.isArray(popupForms) ? popupForms : [];

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card bg-info bg-opacity-10 border-info">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h1 className="h3 mb-1 text-info">
                    <MessageSquare className="me-3" style={{ width: '32px', height: '32px' }} />
                    Popup Form Submissions
                  </h1>
                  <p className="text-muted mb-0">
                    Manage all contact form submissions from the website popup
                  </p>
                </div>
                <div className="col-md-4 text-end">
                  <div className="bg-info text-white rounded p-3 d-inline-block">
                    <h4 className="mb-0">{safeData.length}</h4>
                    <small>Total Submissions</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow border-0">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">
                <span className="me-2">📊</span>
                Recent Submissions ({safeData.length})
              </h5>
            </div>
            
            <div className="card-body p-0">
              {safeData.length === 0 ? (
                <div className="text-center py-5">
                  <MessageSquare className="text-muted mb-3" style={{ width: '64px', height: '64px' }} />
                  <h4 className="text-dark mb-2">No Popup Form Submissions Yet</h4>
                  <p className="text-muted">
                    Form submissions will appear here once users start contacting you through the popup.
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="text-nowrap">Name</th>
                        <th className="text-nowrap">Email</th>
                        <th className="text-nowrap">Phone</th>
                        <th className="text-nowrap">Message</th>
                        <th className="text-nowrap">Subscription</th>
                        <th className="text-nowrap">Date</th>
                        <th className="text-nowrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {safeData.map((item, index) => (
                        <tr key={item._id || index} className="cursor-pointer">
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <div className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                                   style={{width: '40px', height: '40px'}}>
                                <User className="text-info" style={{width: '20px', height: '20px'}} />
                              </div>
                              <div>
                                <strong className="d-block">{item.name || 'N/A'}</strong>
                              </div>
                            </div>
                          </td>
                          
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <Mail className="me-2 text-info" style={{width: '16px', height: '16px'}} />
                              <a 
                                href={`mailto:${item.email}`}
                                className="text-info text-decoration-none"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {item.email || 'N/A'}
                              </a>
                            </div>
                          </td>
                          
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <Phone className="me-2 text-info" style={{width: '16px', height: '16px'}} />
                              {item.phone || 'N/A'}
                            </div>
                          </td>
                          
                          <td className="align-middle">
                            <div 
                              className="text-truncate" 
                              style={{maxWidth: '200px'}}
                              title={item.message}
                            >
                              {item.message || 'No message'}
                            </div>
                          </td>
                          
                          <td className="align-middle">
                            <span className={`badge ${item.subscribe ? 'bg-success' : 'bg-secondary'}`}>
                              {item.subscribe ? 'Subscribed' : 'Not Subscribed'}
                            </span>
                          </td>
                          
                          <td className="align-middle">
                            <small className="text-muted">
                              {formatDate(item.createdAt)}
                            </small>
                          </td>
                          
                          <td className="align-middle">
                            <div className="d-flex gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRowClick(item);
                                }}
                                className="btn btn-outline-info btn-sm"
                                title="View details"
                              >
                                <Eye style={{width: '16px', height: '16px'}} />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDelete(item._id, 'popup');
                                }}
                                className="btn btn-outline-danger btn-sm"
                                title="Delete submission"
                              >
                                <Trash2 style={{width: '16px', height: '16px'}} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryManager;