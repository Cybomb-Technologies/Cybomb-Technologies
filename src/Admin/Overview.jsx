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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL1 = import.meta.env.VITE_API_BASE_URL;

// Accept the new prop for internal navigation
const Overview = ({ onNavigateToTab }) => {
  const [stats, setStats] = useState({
    enquiries: 0,
    contacts: 0,
    applications: 0,
    blogs: 0,
    jobOpenings: 0,
    total: 0,
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const navigate = useNavigate(); // Still needed for fallback/external navigation
  const API_BASE_URL = `${API_BASE_URL1}`;

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE_URL}/api/dashboard/overview`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch dashboard data: ${response.status}`);
      }

      const data = await response.json();

      // FIX: Ensure correct data structure is used (data.data.key)
      setStats({
        enquiries: data.data.enquiriesCount || 0,
        contacts: data.data.contactsCount || 0,
        applications: data.data.applicationsCount || 0,
        blogs: data.data.blogsCount || 0,
        jobOpenings: data.data.jobOpeningsCount || 0,
        total: data.data.totalInteractions || 0,
      });

      setRecentActivities(data.data.recentActivities || []);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message);
      // Fallback to mock data for demo purposes
      setFallbackData();
    } finally {
      setLoading(false);
    }
  };

  // Fallback mock data for demo
  const setFallbackData = () => {
    setStats({
      enquiries: 45,
      contacts: 23,
      applications: 67,
      blogs: 12,
      jobOpenings: 8,
      total: 155,
    });

    setRecentActivities([
      {
        type: "application",
        title: "New Job Application",
        description: "John Doe applied for Senior Developer position",
        time: "5 minutes ago",
      },
      {
        type: "enquiry",
        title: "New Service Enquiry",
        description: "ABC Corp enquired about web development services",
        time: "15 minutes ago",
      },
      {
        type: "contact",
        title: "Contact Form Submission",
        description: "Sarah Wilson sent a message via contact form",
        time: "1 hour ago",
      },
      {
        type: "blog",
        title: "New Blog Comment",
        description: 'New comment on "React Best Practices" post',
        time: "2 hours ago",
      },
      {
        type: "application",
        title: "Job Application Received",
        description: "Jane Smith applied for UX Designer role",
        time: "3 hours ago",
      },
    ]);
  };

  // Calculate percentage change (mock function - replace with actual data from API)
  const calculateChange = (currentValue, previousValue = 0) => {
    if (previousValue === 0) return "+0%";
    const change = ((currentValue - previousValue) / previousValue) * 100;
    return `${change >= 0 ? "+" : ""}${Math.round(change)}%`;
  };

  const statCards = [
    {
      title: "Total Enquiries",
      value: stats.enquiries,
      icon: TrendingUp,
      color: "bg-primary",
      change: calculateChange(
        stats.enquiries,
        Math.round(stats.enquiries * 0.88)
      ),
      trend: "up",
      route: "Enquiries", // Tab ID
    },
    {
      title: "Contact Forms",
      value: stats.contacts,
      icon: Mail,
      color: "bg-success",
      change: calculateChange(
        stats.contacts,
        Math.round(stats.contacts * 0.92)
      ),
      trend: "up",
      route: "Contacts", // Tab ID
    },
    {
      title: "Job Applications",
      value: stats.applications,
      icon: Users,
      color: "bg-purple",
      change: calculateChange(
        stats.applications,
        Math.round(stats.applications * 0.77)
      ),
      trend: "up",
      route: "Application", // Tab ID
    },
    {
      title: "Blog Posts",
      value: stats.blogs,
      icon: BookOpen,
      color: "bg-warning",
      change: calculateChange(stats.blogs, Math.round(stats.blogs * 0.95)),
      trend: "up",
      route: "Blogs", // Tab ID
    },
    {
      title: "Active Job Openings",
      value: stats.jobOpenings,
      icon: Briefcase,
      color: "bg-info",
      change: calculateChange(
        stats.jobOpenings,
        Math.round(stats.jobOpenings * 0.85)
      ),
      trend: "up",
      route: "JobOpenings", // Tab ID
    },
  ];

  // Modified handleQuickAction to use the prop for internal navigation
  const handleQuickAction = (tabId) => {
    if (onNavigateToTab) {
      onNavigateToTab(tabId);
    } else {
      // Fallback: If prop is missing, navigate as a standard route (less ideal)
      navigate(tabId);
    }
  };

  // Refresh data
  const handleRefresh = () => {
    fetchDashboardData();
  };

  // Initial data fetch
  useEffect(() => {
    fetchDashboardData();

    // Set up periodic refresh every 5 minutes
    const interval = setInterval(fetchDashboardData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading && recentActivities.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "256px" }}>
        <div className="spinner-border text-primary me-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="fw-medium text-dark">Loading Dashboard...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section with Refresh */}
      <div className="card bg-primary text-white mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <h1 className="h3 mb-2">Welcome back, Admin! 👋</h1>
              <p className="mb-0 opacity-75">
                Here's what's happening with your website today. You have{" "}
                {stats.total} total interactions this month.
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="btn btn-light btn-sm opacity-75"
              title="Refresh Data"
            >
              <RefreshCw className={`${loading ? "spinner-border spinner-border-sm" : ""}`} />
            </button>
          </div>
          {lastUpdated && (
            <p className="mb-0 opacity-75 small mt-2">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>

      {error && (
        <div className="alert alert-danger d-flex align-items-center mb-4">
          <AlertCircle className="me-3" style={{width: '20px', height: '20px'}} />
          <div>
            <p className="fw-bold mb-1">Error loading dashboard data</p>
            <p className="mb-0">{error}</p>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="row mb-4">
        {statCards.map((stat, index) => (
          <div key={index} className="col-md-4 col-lg mb-3">
            <div 
              className="card h-100 shadow-sm border-0 cursor-pointer"
              onClick={() => handleQuickAction(stat.route)}
            >
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className={`p-3 rounded ${stat.color} text-white`}>
                    <stat.icon style={{width: '20px', height: '20px'}} />
                  </div>
                  <span className={`small fw-medium ${stat.trend === "up" ? "text-success" : "text-danger"}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="h4 fw-bold text-dark mb-1">{stat.value}</h3>
                <p className="text-muted small mb-0">{stat.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="row">
        {/* Recent Activity */}
        <div className="col-lg-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h3 className="h5 fw-bold mb-0 d-flex align-items-center">
                <Eye className="me-2 text-primary" style={{width: '20px', height: '20px'}} />
                Recent Activity
              </h3>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                {recentActivities.length === 0 ? (
                  <div className="text-center py-4 text-muted">
                    <Eye className="mb-2 opacity-50" style={{width: '48px', height: '48px'}} />
                    <p>No recent activity</p>
                  </div>
                ) : (
                  recentActivities.slice(0, 5).map((activity, index) => (
                    <div key={index} className="list-group-item border-0 px-0">
                      <div className="d-flex align-items-start">
                        <div
                          className={`rounded-circle me-3 flex-shrink-0 ${activity.type === "enquiry" ? "bg-primary" : activity.type === "application" ? "bg-purple" : activity.type === "contact" ? "bg-success" : "bg-warning"}`}
                          style={{width: '8px', height: '8px', marginTop: '6px'}}
                        ></div>
                        <div className="flex-grow-1">
                          <p className="fw-medium text-dark mb-1">{activity.title}</p>
                          <p className="text-muted small mb-1">{activity.description}</p>
                          <p className="text-muted small mb-0">{activity.time}</p>
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
        <div className="col-lg-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h3 className="h5 fw-bold mb-0 d-flex align-items-center">
                <Download className="me-2 text-primary" style={{width: '20px', height: '20px'}} />
                Quick Actions
              </h3>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-6">
                  <button
                    onClick={() => handleQuickAction("Enquiries")}
                    className="btn btn-outline-primary w-100 h-100 py-3"
                  >
                    <Mail className="mb-2 d-block mx-auto" style={{width: '24px', height: '24px'}} />
                    <span className="small fw-medium">View Enquiries</span>
                  </button>
                </div>

                <div className="col-6">
                  <button
                    onClick={() => handleQuickAction("JobOpenings")}
                    className="btn btn-outline-success w-100 h-100 py-3"
                  >
                    <Briefcase className="mb-2 d-block mx-auto" style={{width: '24px', height: '24px'}} />
                    <span className="small fw-medium">Manage Jobs</span>
                  </button>
                </div>

                <div className="col-6">
                  <button
                    onClick={() => handleQuickAction("Blogs")}
                    className="btn btn-outline-purple w-100 h-100 py-3"
                  >
                    <BookOpen className="mb-2 d-block mx-auto" style={{width: '24px', height: '24px'}} />
                    <span className="small fw-medium">Write Blog</span>
                  </button>
                </div>

                <div className="col-6">
                  <button
                    onClick={() => handleQuickAction("Application")}
                    className="btn btn-outline-warning w-100 h-100 py-3"
                  >
                    <Users className="mb-2 d-block mx-auto" style={{width: '24px', height: '24px'}} />
                    <span className="small fw-medium">Applications</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;