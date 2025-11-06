import React from 'react';
import { Mail, Trash2, User, MessageSquare, Calendar, Phone, Bell } from 'lucide-react';

const DataTableView = ({ title, icon: Icon, data, headers, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderCellContent = (item, header) => {
    const key = header.toLowerCase().replace(/\s/g, '');
    let content = item[key] || 'N/A';

    // Special formatting for different fields
    switch (key) {
      case 'name':
        return (
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '32px', height: '32px'}}>
              <User className="text-white" style={{width: '16px', height: '16px'}} />
            </div>
            <div>
              <div className="fw-medium text-dark">{content}</div>
              {item.createdAt && (
                <div className="text-muted small d-flex align-items-center">
                  <Calendar className="me-1" style={{width: '12px', height: '12px'}} />
                  {formatDate(item.createdAt)}
                </div>
              )}
            </div>
          </div>
        );
      
      case 'email':
        return (
          <a 
            href={`mailto:${content}`}
            className="text-primary text-decoration-none"
          >
            {content}
          </a>
        );
      
      case 'phone':
        return content !== 'N/A' ? (
          <div className="d-flex align-items-center">
            <Phone className="text-muted me-2" style={{width: '16px', height: '16px'}} />
            <a href={`tel:${content}`} className="text-decoration-none text-dark">
              {content}
            </a>
          </div>
        ) : (
          <span className="text-muted">Not provided</span>
        );
      
      case 'message':
        return (
          <div className="position-relative">
            <div className="text-truncate" style={{maxWidth: '200px'}}>
              {content}
            </div>
            {content.length > 100 && (
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-center opacity-0 hover-opacity-100">
                <span className="badge bg-primary bg-opacity-90">Click to expand</span>
              </div>
            )}
          </div>
        );

      case 'subscribe':
        return (
          <div className="d-flex align-items-center">
            <Bell className={`me-2 ${item.subscribe ? 'text-success' : 'text-muted'}`} style={{width: '16px', height: '16px'}} />
            <span className={`badge ${item.subscribe ? 'bg-success' : 'bg-secondary'}`}>
              {item.subscribe ? 'Subscribed' : 'Not Subscribed'}
            </span>
          </div>
        );
      
      default:
        if (content && content.length > 50) {
          content = content.substring(0, 47) + '...';
        }
        return content;
    }
  };

  const handleRowClick = (item) => {
    const modal = document.createElement('div');
    modal.className = 'modal fade show d-block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title d-flex align-items-center">
              <i class="me-2">💬</i>
              Contact Message Details
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-medium">Name</label>
                <div class="p-3 bg-light rounded">${item.name || 'N/A'}</div>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-medium">Email</label>
                <div class="p-3 bg-light rounded">
                  <a href="mailto:${item.email}" class="text-primary text-decoration-none">${item.email || 'N/A'}</a>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label fw-medium">Phone</label>
                <div class="p-3 bg-light rounded">
                  ${item.phone ? `<a href="tel:${item.phone}" class="text-decoration-none text-dark">${item.phone}</a>` : 'Not provided'}
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-medium">Newsletter</label>
                <div class="p-3 bg-light rounded">
                  <span class="badge ${item.subscribe ? 'bg-success' : 'bg-secondary'}">
                    ${item.subscribe ? 'Subscribed' : 'Not Subscribed'}
                  </span>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">Message</label>
              <div class="p-3 bg-light rounded whitespace-pre">${item.message || 'N/A'}</div>
            </div>
            ${item.createdAt ? `
            <div class="mb-3">
              <label class="form-label fw-medium">Submitted</label>
              <div class="p-3 bg-light rounded">
                <i class="me-2">📅</i>
                ${formatDate(item.createdAt)}
              </div>
            </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside or using close button
    const closeModal = () => modal.remove();
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    modal.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', closeModal);
  };

  return (
    <div className="card shadow border-0">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0 d-flex align-items-center">
          <Icon className="me-3" style={{width: '24px', height: '24px'}} />
          {title} Messages ({data.length})
        </h2>
        <p className="mb-0 opacity-75 mt-1">Manage all contact form submissions from your website</p>
      </div>
      
      <div className="card-body p-0">
        {data.length === 0 ? (
          <div className="text-center py-5">
            <Mail className="text-muted mb-3" style={{width: '64px', height: '64px'}} />
            <h3 className="h5 text-dark mb-2">No {title.toLowerCase()} messages yet</h3>
            <p className="text-muted">Contact form submissions will appear here once users start submitting.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="text-nowrap">
                      {header}
                    </th>
                  ))}
                  <th className="text-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr 
                    key={item._id || index} 
                    className="cursor-pointer"
                    onClick={() => handleRowClick(item)}
                  >
                    {headers.map((header) => (
                      <td key={`${item._id}-${header}`} className="align-middle">
                        {renderCellContent(item, header)}
                      </td>
                    ))}
                    <td className="align-middle">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm('Are you sure you want to delete this contact message?')) {
                            onDelete(item._id);
                          }
                        }}
                        className="btn btn-outline-danger btn-sm"
                        title="Delete message"
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
    </div>
  );
};

const ContactManager = ({ contacts, onDelete }) => {
  return (
    <DataTableView 
      title="Contact" 
      icon={Mail} 
      data={contacts} 
      headers={['Name', 'Email', 'Phone', 'Message', 'Subscribe']} 
      onDelete={onDelete} 
    />
  );
};

export default ContactManager;