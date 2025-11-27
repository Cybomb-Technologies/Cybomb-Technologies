import React, { useState } from 'react';
import { Mail, Trash2, User, MessageSquare, Calendar, Phone, Bell, Copy, Check } from 'lucide-react';

const DataTableView = ({ title, icon: Icon, data, headers, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [copiedField, setCopiedField] = useState('');

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setCopiedField('');
  };

  const renderFieldWithCopy = (label, value, fieldKey, isLink = false) => {
    const displayValue = value || 'N/A';
    
    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="form-label fw-medium text-dark mb-1">{label}</label>
          {value && (
            <button
              className="btn btn-sm btn-outline-secondary border-0"
              onClick={() => copyToClipboard(value, fieldKey)}
              title={`Copy ${label}`}
            >
              {copiedField === fieldKey ? (
                <Check className="text-success" style={{width: '14px', height: '14px'}} />
              ) : (
                <Copy style={{width: '14px', height: '14px'}} />
              )}
            </button>
          )}
        </div>
        <div className="p-3 bg-light rounded border">
          {isLink && value ? (
            <a 
              href={fieldKey === 'email' ? `mailto:${value}` : `tel:${value}`} 
              className="text-primary text-decoration-none"
            >
              {displayValue}
            </a>
          ) : (
            <span className={!value ? 'text-muted' : ''}>{displayValue}</span>
          )}
        </div>
      </div>
    );
  };

  const getSourceBadge = (source) => {
    switch (source) {
      case 'banner-form':
        return { label: 'Banner Form', class: 'bg-info' };
      case 'contact-form':
        return { label: 'Contact Form', class: 'bg-primary' };
      case 'newsletter':
        return { label: 'Newsletter', class: 'bg-success' };
      default:
        return { label: source || 'Unknown', class: 'bg-secondary' };
    }
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

      case 'source':
        const sourceBadge = getSourceBadge(content);
        return (
          <span className={`badge ${sourceBadge.class}`}>
            {sourceBadge.label}
          </span>
        );
      
      default:
        if (content && content.length > 50) {
          content = content.substring(0, 47) + '...';
        }
        return content;
    }
  };

  return (
    <>
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

      {/* Enhanced Modal */}
      {showModal && selectedItem && (
        <div 
          className="modal fade show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          onClick={closeModal}
        >
          <div 
            className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title d-flex align-items-center">
                  <MessageSquare className="me-2" style={{width: '20px', height: '20px'}} />
                  Contact Message Details
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeModal}
                ></button>
              </div>
              
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    {renderFieldWithCopy('Name', selectedItem.name, 'name')}
                  </div>
                  <div className="col-md-6">
                    {renderFieldWithCopy('Email', selectedItem.email, 'email', true)}
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    {renderFieldWithCopy('Phone', selectedItem.phone, 'phone', true)}
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-medium text-dark mb-2">Source</label>
                      <div className="p-3 bg-light rounded border">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            {selectedItem.source ? (
                              <span className={`badge ${getSourceBadge(selectedItem.source).class}`}>
                                {getSourceBadge(selectedItem.source).label}
                              </span>
                            ) : (
                              <span className="badge bg-secondary">Unknown</span>
                            )}
                          </div>
                          {selectedItem.source && (
                            <button
                              className="btn btn-sm btn-outline-secondary border-0"
                              onClick={() => copyToClipboard(selectedItem.source, 'source')}
                              title="Copy Source"
                            >
                              {copiedField === 'source' ? (
                                <Check className="text-success" style={{width: '14px', height: '14px'}} />
                              ) : (
                                <Copy style={{width: '14px', height: '14px'}} />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-medium text-dark mb-2">Newsletter Subscription</label>
                      <div className="p-3 bg-light rounded border">
                        <div className="d-flex align-items-center">
                          <Bell className={`me-2 ${selectedItem.subscribe ? 'text-success' : 'text-muted'}`} style={{width: '16px', height: '16px'}} />
                          <span className={`badge ${selectedItem.subscribe ? 'bg-success' : 'bg-secondary'}`}>
                            {selectedItem.subscribe ? 'Subscribed' : 'Not Subscribed'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {selectedItem.company && renderFieldWithCopy('Company', selectedItem.company, 'company')}
                  </div>
                </div>

                {/* Enhanced Message Section */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="form-label fw-medium text-dark mb-1">Message</label>
                    {selectedItem.message && (
                      <button
                        className="btn btn-sm btn-outline-secondary border-0"
                        onClick={() => copyToClipboard(selectedItem.message, 'message')}
                        title="Copy Message"
                      >
                        {copiedField === 'message' ? (
                          <Check className="text-success me-1" style={{width: '14px', height: '14px'}} />
                        ) : (
                          <Copy className="me-1" style={{width: '14px', height: '14px'}} />
                        )}
                        Copy Message
                      </button>
                    )}
                  </div>
                  <div className="p-3 bg-light rounded border">
                    {selectedItem.message ? (
                      <div className="whitespace-pre-wrap" style={{ 
                        maxHeight: '300px', 
                        overflowY: 'auto',
                        lineHeight: '1.5',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                      }}>
                        {selectedItem.message}
                      </div>
                    ) : (
                      <span className="text-muted">No message provided</span>
                    )}
                  </div>
                  {selectedItem.message && (
                    <div className="mt-2 d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {selectedItem.message.length} characters • {selectedItem.message.split(/\s+/).length} words
                      </small>
                      <small className="text-muted">
                        Lines: {selectedItem.message.split('\n').length}
                      </small>
                    </div>
                  )}
                </div>

                {selectedItem.createdAt && (
                  <div className="mb-3">
                    <label className="form-label fw-medium text-dark mb-2">Submission Details</label>
                    <div className="p-3 bg-light rounded border">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center text-muted">
                          <Calendar className="me-2" style={{width: '16px', height: '16px'}} />
                          <span>{formatDate(selectedItem.createdAt)}</span>
                        </div>
                        <button
                          className="btn btn-sm btn-outline-secondary border-0"
                          onClick={() => copyToClipboard(selectedItem.createdAt, 'createdAt')}
                          title="Copy Timestamp"
                        >
                          {copiedField === 'createdAt' ? (
                            <Check className="text-success" style={{width: '14px', height: '14px'}} />
                          ) : (
                            <Copy style={{width: '14px', height: '14px'}} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this contact message?')) {
                      onDelete(selectedItem._id);
                      closeModal();
                    }
                  }}
                >
                  <Trash2 className="me-1" style={{width: '16px', height: '16px'}} />
                  Delete Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ContactManager = ({ contacts, onDelete }) => {
  return (
    <DataTableView 
      title="Contact" 
      icon={Mail} 
      data={contacts} 
      headers={['Name', 'Email', 'Phone', 'Message', 'Subscribe', 'Source']} 
      onDelete={onDelete} 
    />
  );
};

export default ContactManager;