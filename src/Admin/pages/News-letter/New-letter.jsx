import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_BASE;

function Newsletter() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    today: 0
  });

  // Fetch newsletter subscriptions
  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/footer-mail`);
      if (!response.ok) {
        throw new Error('Failed to fetch subscriptions');
      }
      const data = await response.json();
      setSubscriptions(data);
      setFilteredSubscriptions(data);
      
      // Calculate stats
      const today = new Date().toDateString();
      const todaySubscriptions = data.filter(sub => 
        new Date(sub.subscribedAt || sub.createdAt).toDateString() === today
      );

      setStats({
        total: data.length,
        active: data.filter(sub => !sub.status || sub.status === 'active').length,
        today: todaySubscriptions.length
      });
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      // Set empty arrays in case of error
      setSubscriptions([]);
      setFilteredSubscriptions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  // Handle search
  useEffect(() => {
    const results = subscriptions.filter(sub =>
      sub.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSubscriptions(results);
  }, [searchTerm, subscriptions]);

  // Handle delete subscription
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this subscription?")) {
      try {
        const response = await fetch(`${API_URL}/api/footer-mail/${id}`, {
          method: "DELETE"
        });
        
        if (response.ok) {
          fetchSubscriptions(); // Refresh the list
        } else {
          throw new Error('Failed to delete subscription');
        }
      } catch (error) {
        console.error("Error deleting subscription:", error);
        alert('Error deleting subscription. Please try again.');
      }
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    if (subscriptions.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = ["Email", "Subscribed Date", "Status"];
    const csvData = subscriptions.map(sub => [
      sub.email,
      new Date(sub.subscribedAt || sub.createdAt).toLocaleDateString(),
      sub.status || 'active'
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscriptions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} min ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Custom styles
  const styles = `
    .newsletter-container {
      background: #f8f9fa;
      border-radius: 15px;
      padding: 30px;
      box-shadow: 0 5px 25px rgba(0,0,0,0.08);
      margin: 20px;
    }
    .newsletter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }
    .page-title {
      color: #2c3e50;
      font-weight: 800;
      font-size: 2rem;
      margin-bottom: 10px;
    }
    .page-subtitle {
      color: #6c757d;
      font-size: 1.1rem;
    }
    .stats-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 20px;
      color: white;
      margin-bottom: 20px;
      transition: transform 0.3s;
    }
    .stats-card:hover {
      transform: translateY(-5px);
    }
    .stats-card .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .stats-card .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }
    .search-box {
      position: relative;
      max-width: 400px;
    }
    .search-box input {
      border-radius: 25px;
      padding-left: 45px;
      border: 2px solid #e9ecef;
      transition: all 0.3s;
    }
    .search-box input:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
    }
    .search-icon {
      position: absolute;
      left: 15px;
      top: 12px;
      color: #6c757d;
      z-index: 10;
    }
    .action-buttons .btn {
      border-radius: 8px;
      padding: 10px 20px;
      font-weight: 600;
      margin-left: 10px;
      transition: all 0.3s;
    }
    .action-buttons .btn:hover {
      transform: translateY(-2px);
    }
    .export-btn {
      background: linear-gradient(45deg, #00b894, #00a885);
      border: none;
      color: white;
    }
    .export-btn:hover {
      box-shadow: 0 4px 15px rgba(0, 184, 148, 0.4);
    }
    .refresh-btn {
      background: linear-gradient(45deg, #0984e3, #74b9ff);
      border: none;
      color: white;
    }
    .refresh-btn:hover {
      box-shadow: 0 4px 15px rgba(9, 132, 227, 0.4);
    }
    .subscriptions-table {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }
    .table thead th {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 20px;
      font-weight: 600;
    }
    .table tbody td {
      padding: 20px;
      vertical-align: middle;
      border-color: #f1f3f4;
    }
    .table tbody tr {
      transition: all 0.3s;
    }
    .table tbody tr:hover {
      background-color: #f8f9fa;
      transform: translateX(5px);
    }
    .email-cell {
      font-weight: 600;
      color: #2c3e50;
    }
    .status-badge {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    .status-active {
      background: #d4edda;
      color: #155724;
    }
    .status-unsubscribed {
      background: #f8d7da;
      color: #721c24;
    }
    .delete-btn {
      background: #ff7675;
      border: none;
      border-radius: 6px;
      padding: 8px 15px;
      color: white;
      transition: all 0.3s;
    }
    .delete-btn:hover {
      background: #d63031;
      transform: scale(1.05);
    }
    .loading-spinner {
      color: #667eea;
    }
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #6c757d;
    }
    .empty-state i {
      font-size: 4rem;
      margin-bottom: 20px;
      opacity: 0.5;
    }
    @media (max-width: 768px) {
      .newsletter-header {
        flex-direction: column;
        align-items: flex-start;
      }
      .search-box {
        width: 100%;
        max-width: 100%;
        margin: 20px 0;
      }
      .action-buttons {
        width: 100%;
        display: flex;
        gap: 10px;
      }
      .action-buttons .btn {
        flex: 1;
        margin-left: 0;
      }
      .newsletter-container {
        margin: 10px;
        padding: 20px;
      }
    }
  `;

  return (
    <div className="container-fluid">
      <style>{styles}</style>
      
      <div className="newsletter-container">
        {/* Header */}
        <div className="newsletter-header">
          <div>
            <h1 className="page-title">Newsletter Subscriptions</h1>
            <p className="page-subtitle">Manage your email subscribers and newsletter campaigns</p>
          </div>
          <div className="d-flex align-items-center flex-wrap">
            <div className="search-box me-3">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search subscribers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="action-buttons d-flex">
              <button className="btn refresh-btn" onClick={fetchSubscriptions}>
                <i className="fas fa-sync-alt me-2"></i>Refresh
              </button>
              <button className="btn export-btn" onClick={exportToCSV}>
                <i className="fas fa-download me-2"></i>Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="stats-card">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">Total Subscribers</div>
              <i className="fas fa-users fa-2x opacity-50 float-end mt-3"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-card">
              <div className="stat-number">{stats.active}</div>
              <div className="stat-label">Active Subscribers</div>
              <i className="fas fa-check-circle fa-2x opacity-50 float-end mt-3"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-card">
              <div className="stat-number">{stats.today}</div>
              <div className="stat-label">New Today</div>
              <i className="fas fa-calendar-day fa-2x opacity-50 float-end mt-3"></i>
            </div>
          </div>
        </div>

        {/* Subscriptions Table */}
        <div className="subscriptions-table">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border loading-spinner" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading subscriptions...</p>
            </div>
          ) : filteredSubscriptions.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Email Address</th>
                  <th>Subscription Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscriptions.map((subscription) => (
                  <tr key={subscription._id}>
                    <td className="email-cell">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      {subscription.email}
                    </td>
                    <td>
                      <i className="fas fa-clock me-2 text-muted"></i>
                      {formatDate(subscription.subscribedAt || subscription.createdAt)}
                    </td>
                    <td>
                      <span className={`status-badge ${subscription.status === 'unsubscribed' ? 'status-unsubscribed' : 'status-active'}`}>
                        {subscription.status === 'unsubscribed' ? 'Unsubscribed' : 'Active'}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm delete-btn"
                        onClick={() => handleDelete(subscription._id)}
                        title="Delete Subscription"
                      >
                        <i className="fas fa-trash me-1"></i>Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <i className="fas fa-inbox"></i>
              <h4>No subscribers found</h4>
              <p className="text-muted">
                {searchTerm ? 'Try adjusting your search terms' : 'You currently have no newsletter subscribers'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;