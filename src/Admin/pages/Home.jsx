import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";

const API_URL = import.meta.env.VITE_API_BASE; 

function Home() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    jobApplications: 0, // Now dynamic
    blogPosts: 0, // Keeping static for now
    newsletterSubscriptions: 0 // Keeping static for now
  });
  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentJobApplications, setRecentJobApplications] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [formTypeCounts, setFormTypeCounts] = useState({
    home: 0,
    banner: 0,
    popup: 0,
    contact: 0
  });
  const [loading, setLoading] = useState(false);

    // Check if user should be logged out based on login time
  const checkLoginExpiry = useCallback(() => {
    const loginTime = localStorage.getItem("loginTime");
    if (!loginTime) {
      // No login time found, redirect to login
      localStorage.removeItem("token");
      navigate("/admin/login");
      return false;
    }

    const currentTime = new Date().getTime();
    const loginDuration = currentTime - parseInt(loginTime);
    const twoHours = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    if (loginDuration > twoHours) {
      // Session expired
      localStorage.removeItem("token");
      localStorage.removeItem("loginTime");
      navigate("/admin/login");
      return false;
    }

    return true;
  }, [navigate]);

  // Auto logout function
  const autoLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  }, [navigate]);

  const handleLogout = (e) => {
    if (e) e.preventDefault();
    autoLogout();
  };

    // Set login time when component mounts (if not already set)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    // Set login time if not already set
    if (!localStorage.getItem("loginTime")) {
      localStorage.setItem("loginTime", new Date().getTime().toString());
    }

    // Check if session is still valid
    if (!checkLoginExpiry()) {
      return;
    }
  }, [navigate, checkLoginExpiry]);

  // Check session expiry every minute + inactivity timer
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
      return;
    }

    // Check session expiry every 1 minute
    const expiryCheckInterval = setInterval(() => {
      checkLoginExpiry();
    }, 60000); // Check every minute

    // Inactivity timer (2 hours - but will be overridden by session expiry)
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      // Set inactivity timer to 2 hours (same as session expiry)
      inactivityTimer = setTimeout(autoLogout, 2 * 60 * 60 * 1000);
    };
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    // Set initial timer
    resetTimer();

    // Add event listeners to reset timer on user activity
    events.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    // Also reset timer when component mounts
    resetTimer();

        events.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    // Cleanup function
    return () => {
      clearInterval(expiryCheckInterval);
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [autoLogout, checkLoginExpiry, navigate]);

    
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    if (!checkLoginExpiry()) {
      return;
    }  

    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch all form data and career applications
        const [bannerRes, popupRes, homeRes, careerRes, blogRes, newsletterRes] = await Promise.all([
          fetch(`${API_URL}/api/banner-mail`),
          fetch(`${API_URL}/api/popup-mail`),
          fetch(`${API_URL}/api/send-mail`),
          fetch(`${API_URL}/api/career`),
          fetch(`${API_URL}/api/blogs`),
          fetch(`${API_URL}/api/footer-mail`)
        ]);

        const bannerData = await bannerRes.json();
        const popupData = await popupRes.json();
        const homeData = await homeRes.json();
        const careerData = await careerRes.json();
        const blogData = await blogRes.json();
        const newsletterData = await newsletterRes.json();

        // Calculate totals
        const totalSubmissions = bannerData.length + popupData.length + homeData.length;
        const totalJobApplications = careerData.length;
        const totalBlogPosts = blogData.length;
        const totalNewsletterSubscriptions = newsletterData.length;
        
        // Format form type counts
        const counts = {
          home: homeData.length,
          banner: bannerData.length,
          popup: popupData.length,
          contact: 149 // Keeping static for contact page
        };

        // Get recent form submissions (last 4 from all forms)
        const allSubmissions = [
          ...bannerData.map(item => ({ 
            ...item, 
            type: 'banner', 
            displayName: item.fullName || item.name,
            email: item.email,
            phone: item.phone,
            message: item.requirement || item.message,
            createdAt: item.createdAt
          })),
          ...popupData.map(item => ({ 
            ...item, 
            type: 'popup', 
            displayName: item.name,
            email: item.email,
            phone: item.phone,
            message: item.message,
            createdAt: item.createdAt
          })),
          ...homeData.map(item => ({ 
            ...item, 
            type: 'home', 
            displayName: item.firstName,
            email: item.email,
            phone: item.phone,
            message: item.message,
            createdAt: item.createdAt
          }))
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
         .slice(0, 4);

        // Get recent job applications (last 4)
        const recentJobs = careerData
          .map(candidate => ({
            name: candidate.name,
            jobTitle: candidate.jobTitle || 'Not specified',
            createdAt: candidate.createdAt,
            status: 'Review' // Default status, you can modify based on your data
          }))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        const recentBlogs = blogData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);


        setStats(prev => ({
          ...prev,
          totalSubmissions: totalSubmissions,
          jobApplications: totalJobApplications,
          blogPosts: totalBlogPosts,
          newsletterSubscriptions: totalNewsletterSubscriptions
        }));

        setRecentBlogs(recentBlogs);
        setFormTypeCounts(counts);
        setRecentSubmissions(allSubmissions);
        setRecentJobApplications(recentJobs);
        
        setLoading(false);

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

    const handleBlogDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await fetch(`${API_URL}/api/blogs/${blogId}`, {
          method: "DELETE"
        });
        
        if (response.ok) {
          // Refresh the dashboard data
          const fetchDashboardData = async () => {
            const blogRes = await fetch(`${API_URL}/api/blogs`);
            const blogData = await blogRes.json();
            const recentBlogsData = blogData
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 5);
            setRecentBlogs(recentBlogsData);
            setStats(prev => ({ ...prev, blogPosts: blogData.length }));
          };
          fetchDashboardData();
        } else {
          throw new Error('Failed to delete blog');
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert('Error deleting blog. Please try again.');
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffMins < 60) {
      return `${diffMins} min ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hr${diffHours > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getFormTypeText = (type) => {
    switch (type) {
      case 'banner': return 'Banner form';
      case 'popup': return 'Popup form';
      case 'home': return 'Home page form';
      default: return 'Form';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Review': return 'bg-warning';
      case 'Interview': return 'bg-info';
      case 'Hired': return 'bg-success';
      case 'Rejected': return 'bg-secondary';
      default: return 'bg-warning';
    }
  };

  return (
    <div className="container-fluid px-4">
      {/* Header - No changes */}
      <header className="d-flex justify-content-between align-items-center pb-3 pt-1 mb-4 border-bottom">
        <div className="d-flex align-items-center">
          <h1 className="h4 mb-0 fw-bold">Cybomb Technologies LLP</h1>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown me-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              <i className="fas fa-bell"></i>
              <span className="badge bg-danger ms-1">3</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">New form submission</a></li>
              <li><a className="dropdown-item" href="#">New job application</a></li>
              <li><a className="dropdown-item" href="#">Blog post needs approval</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              <i className="fas fa-user-circle me-1"></i>Admin User
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider"/></li>
               <Link to="/admin/login" className="dropdown-item" onClick={handleLogout}>
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </header>

      {/* Stats Overview - Dynamic data */}
      <div className="row mb-4">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100 py-2 stats-card-primary">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Total Submissions
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">{stats.totalSubmissions}</div>
                  <div className="mt-2 small">
                    <span className="text-success">
                      <i className="fas fa-arrow-up me-1"></i> 24.5%
                    </span>
                    <span className="text-muted"> this week</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-file-alt fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100 py-2 stats-card-success">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Job Applications
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">{stats.jobApplications}</div>
                  <div className="mt-2 small">
                    <span className="text-success">
                      <i className="fas fa-arrow-up me-1"></i> 18.3%
                    </span>
                    <span className="text-muted"> this week</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-briefcase fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100 py-2 stats-card-info">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Blog Posts
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">{stats.blogPosts}</div>
                  <div className="mt-2 small">
                    <span className="text-success">
                      <i className="fas fa-arrow-up me-1"></i> 5.2%
                    </span>
                    <span className="text-muted"> this month</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-blog fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100 py-2 stats-card-newsletter">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Subscriptions
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">{stats.newsletterSubscriptions}</div>
                  <div className="mt-2 small">
                    <span className="text-success">
                      <i className="fas fa-arrow-up me-1"></i> 12.8%
                    </span>
                    <span className="text-muted"> this month</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-newspaper fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Submissions Overview - Dynamic data */}
      <div className="row mb-4">
         <div className="col-lg-6 d-flex">
    <div className="card shadow-sm mb-4 w-100">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 fw-bold text-primary">Recent Form Submissions</h6>
        <Link to="/admin/form-submission"> <button className="btn btn-sm btn-outline-primary">View All</button></Link>
      </div>
      <div className="card-body">
        <div className="list-group list-group-flush">
          {recentSubmissions.map((submission, index) => (
            <a key={index} className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{submission.displayName}</h6>
                <small>{formatDate(submission.createdAt)}</small>
              </div>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <p className="mb-1">{submission.message || 'No message'}</p>
                <span className={`badge ${
                  submission.type === 'banner' ? 'bg-primary' : 
                  submission.type === 'popup' ? 'bg-info' : 'bg-success'
                }`}>
                  {submission.type === 'banner' ? 'Banner' : 
                   submission.type === 'popup' ? 'Popup' : 'Home Contact'}
                </span>
              </div>
              <small className="text-muted">{submission.email} | {submission.phone}</small>
            </a>
          ))}
          {recentSubmissions.length === 0 && (
            <div className="text-center py-3 text-muted">
              <i className="fas fa-inbox fa-2x mb-2"></i>
              <p>No recent submissions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

        {/* Recent Job Applications - Now Dynamic */}
        <div className="col-lg-6 d-flex">
          <div className="card shadow-sm mb-4 w-100">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 fw-bold text-primary">Recent Job Applications</h6>
             <Link to="/admin/career-page"> <button className="btn btn-sm btn-outline-primary">View All</button></Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Applicant</th>
                      <th scope="col">Position</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentJobApplications.length > 0 ? (
                      recentJobApplications.map((application, index) => (
                        <tr key={index}>
                          <td>{application.name}</td>
                          <td>{application.jobTitle}</td>
                          <td>{formatDate(application.createdAt)}</td>
                          <td><span className={`badge ${getStatusBadge(application.status)}`}>{application.status}</span></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-3 text-muted">
                          <i className="fas fa-briefcase fa-2x mb-2"></i>
                          <p>No recent job applications</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Applications and Blog Management - Static data remains same */}
      {/* Blog Management - Now Dynamic */}
      {/* Blog Management - Table Format */}
      <div className="row">
  <div className="col">
    <div className="card shadow-sm mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 fw-bold text-primary">Blog Management</h6>
        <Link to="/admin/admin-blog">
          <button className="btn btn-sm btn-outline-primary">
            <i className="fas fa-plus me-1"></i>Manage Blogs
          </button>
        </Link>
      </div>
      <div className="card-body p-0">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading blogs...</p>
          </div>
        ) : recentBlogs.length > 0 ? (
          <div className="table-container">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="ps-4" style={{width: '30%'}}>Title</th>
                  <th scope="col" style={{width: '15%'}}>Publish Date</th>
                  <th scope="col" style={{width: '25%'}}>Description</th>
                  <th scope="col" style={{width: '10%'}}>Status</th>
                  <th scope="col" className="pe-4" style={{width: '10%'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentBlogs.map((blog) => (
                  <tr key={blog._id} className="blog-table-row">
                    <td className="ps-4">
                      <div className="d-flex align-items-center">
                        {blog.image && (
                          <img 
                            src={`${API_URL}${blog.image}`} 
                            alt={blog.title}
                            className="blog-thumbnail me-3"
                            style={{
                              width: '50px',
                              height: '40px',
                              objectFit: 'cover',
                              borderRadius: '6px'
                            }}
                          />
                        )}
                        <div className="flex-grow-1 min-w-0">
                          <h6 className="mb-1 fw-semibold text-dark text-truncate" style={{fontSize: '0.95rem'}}>
                            {blog.title.slice(0,20)}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        <span className="fw-medium text-dark">
                          {new Date(blog.date).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 text-muted text-truncate" style={{fontSize: '0.875rem', maxWidth: '200px'}}>
                        {blog.description.slice(0, 60)}...
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1">
                        <i className="fas fa-check-circle me-1"></i>Published
                      </span>
                    </td>
                    <td className="pe-4">
                      <div className="d-flex gap-2 justify-content-center">
                        <Link 
                          to="/admin/admin-blog" 
                          className="btn btn-sm btn-outline-primary px-2"
                          title="Edit Blog"
                          style={{minWidth: '40px'}}
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button 
                          className="btn btn-sm btn-outline-danger px-2"
                          title="Delete Blog"
                          onClick={() => handleBlogDelete(blog._id)}
                          style={{minWidth: '40px'}}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="empty-state">
              <i className="fas fa-blog fa-4x text-muted mb-3"></i>
              <h5 className="text-muted">No Blog Posts Found</h5>
              <p className="text-muted mb-4">Get started by creating your first blog post</p>
              <Link to="/admin/admin-blog">
                <button className="btn btn-primary">
                  <i className="fas fa-plus me-2"></i>Create First Blog
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
      {/* Quick Actions - No changes */}
      {/* <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header py-3">
              <h6 className="m-0 fw-bold text-primary">Quick Actions</h6>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary">
                  <i className="fas fa-download me-2"></i>Export Form Data
                </button>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-eye me-2"></i>View All Submissions
                </button>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-briefcase me-2"></i>Manage Job Postings
                </button>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-edit me-2"></i>Write Blog Post
                </button>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-cog me-2"></i>Form Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer - Dynamic data */}
      <footer className="pt-3 mt-4 text-muted border-top">
        <div className="d-flex justify-content-between">
          <div>© 2025 Cybomb Admin Dashboard</div>
          <div>Total Form Submissions: {stats.totalSubmissions} | Job Applications: {stats.jobApplications} | Blog Posts: {stats.blogPosts}</div>
        </div>
      </footer>

      {/* Custom CSS - No changes */}
      <style>
        {`
          body {
            background-color: #f8f9fa;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
            .blog-table-row {
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }
          
          .blog-table-row:hover {
            background-color: #f8f9fa;
            border-left: 3px solid #0d6efd;
            transform: translateX(2px);
          }
          
          .blog-thumbnail {
            transition: transform 0.3s ease;
          }
          
          .blog-table-row:hover .blog-thumbnail {
            transform: scale(1.05);
          }
          
          .stats-card-primary:hover {
            border-left: 4px solid #4e73df !important;
          }
          
          .stats-card-success:hover {
            border-left: 4px solid #1cc88a !important;
          }
          
          .stats-card-info:hover {
            border-left: 4px solid #36b9cc !important;
          }
          
          .stats-card-newsletter:hover {
            border-left: 4px solid #fbb605ff !important;
          }
          
          .card {
            border: none;
            border-radius: 0.5rem;
            transition: transform 0.2s;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
          
          .dummy-chart {
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .list-group-item {
            border: none;
            padding: 0.75rem 0;
          }
          
          .list-group-item:hover {
            background-color: #f8f9fa;
          }
            .table thead th {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-bottom: 2px solid #dee2e6;
            font-weight: 600;
            color: #495057;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.5px;
          }
          
          .table tbody td {
            border-color: #f1f3f4;
            padding: 1rem 0.75rem;
            vertical-align: middle;
          }
          
          .btn {
            border-radius: 0.375rem;
          }
            .btn-sm {
            padding: 0.35rem 0.65rem;
            border-radius: 6px;
            transition: all 0.3s ease;
          }
          
          .btn-sm:hover {
            transform: translateY(-1px);
          }
            .table-container {
    width: 100%;
    overflow-x: hidden; /* This hides the horizontal scrollbar */
  }
  
  .table {
    width: 100%;
    table-layout: fixed; /* This ensures fixed column widths */
    margin-bottom: 0;
  }
    .bg-warning {
    background-color: rgb(7, 143, 144) !important;
  }
          
          @media (max-width: 768px) {
            .table-responsive {
              font-size: 0.875rem;
            }
            
            .blog-thumbnail {
              width: 40px !important;
              height: 32px !important;
            }
        `}
      </style>
    </div>
  );
}

export default Home;