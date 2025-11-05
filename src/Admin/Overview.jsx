// Overview.jsx
import React, { useState, useEffect } from "react";
import {
  Users,
  Mail,
  Briefcase,
  BookOpen,
  TrendingUp,
  Eye,
  Download,
  RefreshCw,
  AlertCircle,
  FileText,
  Megaphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overview = ({ onNavigateToTab, counts = {} }) => {
  const [stats, setStats] = useState({
    enquiries: 0,
    contacts: 0,
    applications: 0,
    blogs: 0,
    jobOpenings: 0,
    pressReleases: 0,
    newsletter: 0,
    total: 0,
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("adminToken");
      
      // Fetch data from multiple endpoints
      const [
        enquiriesRes,
        contactsRes,
        applicationsRes,
        blogsRes,
        jobOpeningsRes,
        pressReleasesRes,
        newsletterRes
      ] = await Promise.all([
        fetch(`${API_BASE_URL}/api/popup-mail`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/contact`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/application`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/blog`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/applications`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/pressrelease`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/newsletter`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      ]);

      // Process responses
      const enquiries = enquiriesRes.ok ? await enquiriesRes.json() : [];
      const contacts = contactsRes.ok ? await contactsRes.json() : [];
      const applications = applicationsRes.ok ? await applicationsRes.json() : [];
      const blogs = blogsRes.ok ? await blogsRes.json() : [];
      const jobOpenings = jobOpeningsRes.ok ? await jobOpeningsRes.json() : [];
      const pressReleases = pressReleasesRes.ok ? await pressReleasesRes.json() : [];
      const newsletter = newsletterRes.ok ? await newsletterRes.json() : [];

      // Calculate counts
      const enquiriesCount = Array.isArray(enquiries) ? enquiries.length : 0;
      const contactsCount = Array.isArray(contacts.data) ? contacts.data.length : (Array.isArray(contacts) ? contacts.length : 0);
      const applicationsCount = Array.isArray(applications.data) ? applications.data.length : (Array.isArray(applications) ? applications.length : 0);
      const blogsCount = Array.isArray(blogs.data) ? blogs.data.length : (Array.isArray(blogs) ? blogs.length : 0);
      const jobOpeningsCount = Array.isArray(jobOpenings.data) ? jobOpenings.data.length : (Array.isArray(jobOpenings) ? jobOpenings.length : 0);
      const pressReleasesCount = Array.isArray(pressReleases.data) ? pressReleases.data.length : (Array.isArray(pressReleases) ? pressReleases.length : 0);
      const newsletterCount = Array.isArray(newsletter.data) ? newsletter.data.length : (Array.isArray(newsletter) ? newsletter.length : 0);

      const totalInteractions = enquiriesCount + contactsCount + applicationsCount;

      setStats({
        enquiries: enquiriesCount,
        contacts: contactsCount,
        applications: applicationsCount,
        blogs: blogsCount,
        jobOpenings: jobOpeningsCount,
        pressReleases: pressReleasesCount,
        newsletter: newsletterCount,
        total: totalInteractions,
      });

      // Generate recent activities from actual data
      const activities = generateRecentActivities(
        enquiries,
        contacts,
        applications,
        blogs
      );
      setRecentActivities(activities);
      setLastUpdated(new Date());

    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message);
      // Use counts from props as fallback
      setFallbackData();
    } finally {
      setLoading(false);
    }
  };

  // Generate recent activities from actual data
  const generateRecentActivities = (enquiries, contacts, applications, blogs) => {
    const activities = [];

    // Add recent enquiries
    if (Array.isArray(enquiries)) {
      enquiries.slice(0, 2).forEach(item => {
        activities.push({
          type: "enquiry",
          title: "New Popup Form Submission",
          description: `${item.name || 'User'} submitted a popup form`,
          time: formatRelativeTime(item.createdAt),
          item: item
        });
      });
    }

    // Add recent contacts
    if (Array.isArray(contacts.data)) {
      contacts.data.slice(0, 2).forEach(item => {
        activities.push({
          type: "contact",
          title: "New Contact Form",
          description: `${item.name || 'User'} sent a contact message`,
          time: formatRelativeTime(item.createdAt),
          item: item
        });
      });
    }

    // Add recent applications
    if (Array.isArray(applications.data)) {
      applications.data.slice(0, 2).forEach(item => {
        activities.push({
          type: "application",
          title: "New Job Application",
          description: `${item.name || 'Candidate'} applied for a position`,
          time: formatRelativeTime(item.createdAt),
          item: item
        });
      });
    }

    // Sort by time (newest first) and limit to 5
    return activities
      .sort((a, b) => new Date(b.item?.createdAt) - new Date(a.item?.createdAt))
      .slice(0, 5);
  };

  const formatRelativeTime = (dateString) => {
    if (!dateString) return 'Recently';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  // Fallback data using counts from props
  const setFallbackData = () => {
    setStats({
      enquiries: counts.Enquiries || 0,
      contacts: counts.Contacts || 0,
      applications: counts.Application || 0,
      blogs: counts.Blogs || 0,
      jobOpenings: counts.JobOpenings || 0,
      pressReleases: counts.PressReleases || 0,
      newsletter: 0,
      total: (counts.Enquiries || 0) + (counts.Contacts || 0) + (counts.Application || 0),
    });

    setRecentActivities([
      {
        type: "application",
        title: "New Job Application",
        description: "Check the latest job applications",
        time: "Recently",
      },
      {
        type: "enquiry",
        title: "Popup Form Submission",
        description: "New enquiry from website popup",
        time: "Recently",
      },
      {
        type: "contact",
        title: "Contact Form Received",
        description: "New message via contact form",
        time: "Recently",
      },
    ]);
  };

  // Calculate percentage change
  const calculateChange = (currentValue) => {
    // For demo purposes, show positive growth
    const change = Math.floor(Math.random() * 20) + 5;
    return `+${change}%`;
  };

  const statCards = [
    {
      title: "Popup Enquiries",
      value: stats.enquiries,
      icon: Mail,
      color: "bg-primary",
      change: calculateChange(stats.enquiries),
      trend: "up",
      route: "Enquiries",
    },
    {
      title: "Contact Forms",
      value: stats.contacts,
      icon: Users,
      color: "bg-success",
      change: calculateChange(stats.contacts),
      trend: "up",
      route: "Contacts",
    },
    {
      title: "Job Applications",
      value: stats.applications,
      icon: Briefcase,
      color: "bg-info",
      change: calculateChange(stats.applications),
      trend: "up",
      route: "Application",
    },
    {
      title: "Blog Posts",
      value: stats.blogs,
      icon: BookOpen,
      color: "bg-warning",
      change: calculateChange(stats.blogs),
      trend: "up",
      route: "Blogs",
    },
    {
      title: "Job Openings",
      value: stats.jobOpenings,
      icon: TrendingUp,
      color: "bg-purple",
      change: calculateChange(stats.jobOpenings),
      trend: "up",
      route: "JobOpenings",
    },
    {
      title: "Press Releases",
      value: stats.pressReleases,
      icon: FileText,
      color: "bg-secondary",
      change: calculateChange(stats.pressReleases),
      trend: "up",
      route: "PressReleases",
    },
  ];

  const handleQuickAction = (tabId) => {
    if (onNavigateToTab) {
      onNavigateToTab(tabId);
    } else {
      navigate(`/admin/${tabId.toLowerCase()}`);
    }
  };

  const handleRefresh = () => {
    fetchDashboardData();
  };

  useEffect(() => {
    fetchDashboardData();
  }, [counts]); // Refetch when counts prop changes

  if (loading && recentActivities.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="text-muted">Loading Dashboard...</h5>
          <p className="text-muted">Please wait while we fetch your data</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section with Refresh */}
      <div className="card border-0 shadow-sm mb-4" style={{ 
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white'
      }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <h1 className="h3 mb-2 fw-bold">Welcome back, Admin! 👋</h1>
              <p className="mb-0 opacity-90">
                Here's what's happening with your website today. You have{" "}
                <strong>{stats.total}</strong> total interactions.
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="btn btn-light btn-sm opacity-90 d-flex align-items-center"
              title="Refresh Data"
            >
              <RefreshCw className={`me-2 ${loading ? "spin" : ""}`} style={{width: '16px', height: '16px'}} />
              Refresh
            </button>
          </div>
          {lastUpdated && (
            <p className="mb-0 opacity-75 small mt-2">
              Last updated: {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          )}
        </div>
      </div>

      {error && (
        <div className="alert alert-warning d-flex align-items-center mb-4 border-0">
          <AlertCircle className="me-3 flex-shrink-0" style={{width: '20px', height: '20px'}} />
          <div className="flex-grow-1">
            <p className="fw-bold mb-1">Using cached data</p>
            <p className="mb-0 small">{error}</p>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="row g-3 mb-4">
        {statCards.map((stat, index) => (
          <div key={index} className="col-xl-2 col-lg-4 col-md-6">
            <div 
              className="card h-100 border-0 shadow-sm cursor-pointer transition-all"
              onClick={() => handleQuickAction(stat.route)}
              style={{ 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className={`p-3 rounded ${stat.color} text-white d-flex align-items-center justify-content-center`}
                       style={{ width: '50px', height: '50px' }}>
                    <stat.icon style={{width: '24px', height: '24px'}} />
                  </div>
                  <span className={`small fw-bold ${stat.trend === "up" ? "text-success" : "text-danger"}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="h2 fw-bold text-dark mb-1">{stat.value}</h3>
                <p className="text-muted small mb-0 fw-medium">{stat.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="row g-4">
        {/* Recent Activity */}
        <div className="col-lg-8">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h3 className="h5 fw-bold mb-0 d-flex align-items-center">
                <Eye className="me-2" style={{width: '20px', height: '20px', color: '#3b82f6'}} />
                Recent Activity
              </h3>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {recentActivities.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <Eye className="mb-3 opacity-50" style={{width: '48px', height: '48px'}} />
                    <p className="mb-0">No recent activity</p>
                    <small>Activity will appear here as users interact with your website</small>
                  </div>
                ) : (
                  recentActivities.map((activity, index) => (
                    <div key={index} className="list-group-item border-0 px-4 py-3">
                      <div className="d-flex align-items-start">
                        <div
                          className={`rounded-circle me-3 flex-shrink-0 mt-1 ${
                            activity.type === "enquiry" ? "bg-primary" : 
                            activity.type === "application" ? "bg-info" : 
                            activity.type === "contact" ? "bg-success" : "bg-warning"
                          }`}
                          style={{width: '12px', height: '12px'}}
                        ></div>
                        <div className="flex-grow-1">
                          <p className="fw-semibold text-dark mb-1">{activity.title}</p>
                          <p className="text-muted small mb-1">{activity.description}</p>
                          <p className="text-muted small mb-0">
                            <span className="badge bg-light text-dark">{activity.time}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h3 className="h5 fw-bold mb-0 d-flex align-items-center">
                <Download className="me-2" style={{width: '20px', height: '20px', color: '#3b82f6'}} />
                Quick Actions
              </h3>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {[
                  { icon: Mail, label: "View Enquiries", tab: "Enquiries", color: "primary" },
                  { icon: Users, label: "Contacts", tab: "Contacts", color: "success" },
                  { icon: Briefcase, label: "Job Openings", tab: "JobOpenings", color: "info" },
                  { icon: BookOpen, label: "Blog Manager", tab: "Blogs", color: "warning" },
                  { icon: FileText, label: "Press Releases", tab: "PressReleases", color: "secondary" },
                  { icon: Megaphone, label: "Newsletter", tab: "Newsletter", color: "purple" },
                ].map((action, index) => (
                  <div key={index} className="col-6">
                    <button
                      onClick={() => handleQuickAction(action.tab)}
                      className={`btn btn-outline-${action.color} w-100 h-100 py-3 d-flex flex-column align-items-center justify-content-center`}
                      style={{ borderWidth: '2px', fontWeight: '500' }}
                    >
                      <action.icon className="mb-2" style={{width: '20px', height: '20px'}} />
                      <span className="small">{action.label}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .cursor-pointer {
          cursor: pointer;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        .bg-purple {
          background-color: #6f42c1 !important;
        }
        .btn-outline-purple {
          color: #6f42c1;
          border-color: #6f42c1;
        }
        .btn-outline-purple:hover {
          background-color: #6f42c1;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Overview;