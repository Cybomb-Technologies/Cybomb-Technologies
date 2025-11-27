// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  Inbox,
  Mail,
  Users,
  Briefcase,
  BookOpen,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  Settings,
  User,
  FileText,
  Smartphone,
  CreditCard,
} from "lucide-react";

import Overview from "./Overview";
import EnquiryManager from "./EnquiryManager";
import ContactManager from "./ContactManager";
import ApplicationManager from "./ApplicationManager";
import JobOpeningManager from "./JobOpeningManager";
import BlogManager from "./BlogManager";
import NewsletterManager from "./NewsletterManager";
import AdminPressrelease from "./Press-Release";
import MobileApp from "./MobileApp";
import PaymentUser from "./payment-user";

/** Replace with your real auth impl if available */
const useAuth = () => ({
  user: { 
    email: "admin@cybomb.com", 
    uid: "mock_admin_id",
    name: "Admin User",
    avatar: null
  },
  logout: () => {
    console.log("Mock Logout triggered.");
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  },
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminDashboard = () => {
  // UI state
  const [activeTab, setActiveTab] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 992 : false
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState([]);

  // data/loading
  const [loadingData, setLoadingData] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [jobOpenings, setJobOpenings] = useState([]);
  const [pressReleases, setPressReleases] = useState([]);
  const [mobileAppData, setMobileAppData] = useState([]);
  const [paymentUsers, setPaymentUsers] = useState([]);

  const { user, logout } = useAuth();

  // Responsive handling
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mock notifications
  useEffect(() => {
    setNotifications([
      { id: 1, message: "New contact form submission", type: "info", time: "5 min ago" },
      { id: 2, message: "3 new job applications", type: "success", time: "1 hour ago" },
      { id: 3, message: "System backup completed", type: "info", time: "2 hours ago" },
    ]);
  }, []);

  // Fetch all dashboard data
  const fetchData = async () => {
    setLoadingData(true);
    try {
      const token = localStorage.getItem("adminToken");

      const [
        contactsRes,
        applicationsRes,
        popupFormsRes,
        blogsRes,
        jobOpeningsRes,
        pressReleasesRes,
        mobileAppRes,
        paymentUsersRes,
      ] = await Promise.all([
        fetch(`${API_BASE_URL}/api/contact`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/application`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/popup-mail`, {
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
        fetch(`${API_BASE_URL}/api/mobile-app`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/api/web-payment/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      // Handle responses with better error checking
      if (contactsRes.ok) {
        const data = await contactsRes.json();
        setContacts(data.data || data);
      } else {
        console.error("Failed to fetch contacts:", contactsRes.status);
      }

      if (applicationsRes.ok) {
        const data = await applicationsRes.json();
        setApplications(data.data || data);
      } else {
        console.error("Failed to fetch applications:", applicationsRes.status);
      }

      if (popupFormsRes.ok) {
        const data = await popupFormsRes.json();
        setEnquiries(data);
      } else {
        console.error("Failed to fetch popup forms:", popupFormsRes.status);
      }

      if (blogsRes.ok) {
        const data = await blogsRes.json();
        setBlogs(data.data || data);
      } else {
        console.error("Failed to fetch blogs:", blogsRes.status);
      }

      if (jobOpeningsRes.ok) {
        const data = await jobOpeningsRes.json();
        setJobOpenings(data.data || data);
      } else {
        console.error("Failed to fetch job openings:", jobOpeningsRes.status);
      }

      // Handle press releases response
      if (pressReleasesRes.ok) {
        const data = await pressReleasesRes.json();
        setPressReleases(data.data || data);
      } else {
        console.error("Failed to fetch press releases:", pressReleasesRes.status);
      }

      // Handle mobile app data response
      if (mobileAppRes.ok) {
        const data = await mobileAppRes.json();
        setMobileAppData(data.data || data);
      } else {
        console.error("Failed to fetch mobile app data:", mobileAppRes.status);
      }

      // Handle payment users response
      if (paymentUsersRes.ok) {
        const data = await paymentUsersRes.json();
        setPaymentUsers(data.data || data.orders || data);
      } else {
        console.error("Failed to fetch payment users:", paymentUsersRes.status);
      }

    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Computed counts for badges
  const counts = {
    Enquiries: enquiries?.length || 0,
    Contacts: contacts?.length || 0,
    Application: applications?.length || 0,
    JobOpenings: jobOpenings?.length || 0,
    Blogs: blogs?.length || 0,
    PressReleases: pressReleases?.length || 0,
    MobileApp: mobileAppData?.length || 0,
    PaymentUser: paymentUsers?.length || 0,
  };

  // Navigation definition
  const navItems = [
    { id: "Overview", label: "Dashboard Overview", icon: LayoutDashboard },
    { id: "Enquiries", label: "Popup Form Submissions", icon: Inbox, count: counts.Enquiries },
    { id: "Contacts", label: "Contact Forms", icon: Mail, count: counts.Contacts },
    { id: "Application", label: "Applications", icon: Users, count: counts.Application },
    { id: "JobOpenings", label: "Job Openings", icon: Briefcase, count: counts.JobOpenings },
    { id: "Blogs", label: "Blog Manager", icon: BookOpen, count: counts.Blogs },
    { id: "PressReleases", label: "Press Releases", icon: FileText, count: counts.PressReleases },
    { id: "MobileApp", label: "Mobile App", icon: Smartphone, count: counts.MobileApp },
    { id: "PaymentUser", label: "Payment Users", icon: CreditCard, count: counts.PaymentUser },
    { id: "Newsletter", label: "Newsletter Subscribers", icon: Megaphone },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (isMobile) setSidebarOpen(false);
  };

  const handleRefresh = () => {
    fetchData();
  };

  const renderContent = () => {
    if (loadingData) {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <div className="spinner-border text-primary mb-3" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="text-muted">Loading Dashboard Data...</h5>
          <p className="text-muted">Please wait while we fetch the latest information</p>
        </div>
      );
    }

    switch (activeTab) {
      case "Overview":
        return <Overview onNavigateToTab={handleTabChange} counts={counts} />;
      case "Contacts":
        return <ContactManager contacts={contacts} onDelete={handleDelete} onRefresh={handleRefresh} />;
      case "Application":
        return (
          <ApplicationManager
            applications={applications}
            onDelete={handleDelete}
            onRefresh={handleRefresh}
          />
        );
      case "JobOpenings":
        return (
          <JobOpeningManager
            applications={jobOpenings}
            onApplicationsUpdate={fetchData}
            onRefresh={handleRefresh}
          />
        );
      case "Enquiries":
        return <EnquiryManager popupForms={enquiries} onDelete={handleDelete} onRefresh={handleRefresh} />;
      case "Blogs":
        return <BlogManager blogs={blogs} onBlogsUpdate={fetchData} onRefresh={handleRefresh} />;
      case "PressReleases":
        return <AdminPressrelease />;
      case "MobileApp":
        return <MobileApp mobileAppData={mobileAppData} onMobileAppUpdate={fetchData} onRefresh={handleRefresh} />;
      case "PaymentUser":
        return <PaymentUser paymentUsers={paymentUsers} onPaymentUsersUpdate={fetchData} onRefresh={handleRefresh} />;
      case "Newsletter":
        return <NewsletterManager onRefresh={handleRefresh} />;
      default:
        return <Overview onNavigateToTab={handleTabChange} counts={counts} />;
    }
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const token = localStorage.getItem("adminToken");
      
      // Determine the correct API endpoint based on type
      let endpoint = '';
      if (type === 'popup') {
        endpoint = `${API_BASE_URL}/api/popup-mail/${id}`;
      } else if (type === 'mobile-app') {
        endpoint = `${API_BASE_URL}/api/mobile-app/${id}`;
      } else if (type === 'payment-user') {
        endpoint = `${API_BASE_URL}/api/web-payment/order/${id}`;
      } else {
        endpoint = `${API_BASE_URL}/api/${type}/${id}`;
      }

      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        fetchData(); // Refresh the data
      } else {
        throw new Error("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Error deleting item");
    }
  };

  const SIDEBAR_W = isCollapsed ? 80 : 260;

  return (
    <div className="d-flex bg-gray-50 min-vh-100 admin-dashboard">
      {/* Enhanced CSS with Professional Theme */}
      <style jsx>{`
        .admin-dashboard {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .sidebar {
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          color: #f1f5f9;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
          border-right: 1px solid #334155;
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        
        .sidebar-header {
          border-bottom: 1px solid #334155;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          flex-shrink: 0;
          z-index: 10;
        }
        
        .sidebar-content {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .sidebar-nav {
          flex: 1;
          padding-bottom: 20px;
        }
        
        .sidebar-footer {
          border-top: 1px solid #334155;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          flex-shrink: 0;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }
        
        .sidebar-brand {
          font-weight: 700;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.25rem;
        }
        
        .nav-item {
          margin-bottom: 6px;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          font-weight: 500;
        }
        
        .nav-link:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          transform: translateX(4px);
          border-left: 3px solid #3b82f6;
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
          border-left: 3px solid #ffffff;
        }
        
        .badge {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 6px 10px;
          font-size: 11px;
          font-weight: 600;
          color: #f1f5f9;
          min-width: 26px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-link.active .badge {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .collapse-btn {
          border: 0;
          background: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          padding: 10px;
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .collapse-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1040;
        }
        
        .top-bar {
          background: #ffffff;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid #e2e8f0;
          backdrop-filter: blur(10px);
        }
        
        .search-container {
          position: relative;
          max-width: 400px;
        }
        
        .search-input {
          padding-left: 44px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        
        .search-input:focus {
          background: #ffffff;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }
        
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          z-index: 5;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .dropdown-menu {
          border: none;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 8px;
          border: 1px solid #e2e8f0;
          backdrop-filter: blur(10px);
        }
        
        .dropdown-item {
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        
        .dropdown-item:hover {
          background: #3b82f6;
          color: white;
          transform: translateX(2px);
        }
        
        .main-content {
          background: #f8fafc;
          min-height: calc(100vh - 56px);
        }
        
        .breadcrumb {
          background: transparent;
          padding: 0;
          margin-bottom: 1.5rem;
        }
        
        .breadcrumb-item a {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .breadcrumb-item a:hover {
          color: #3b82f6;
        }
        
        .breadcrumb-item.active {
          color: #1e293b;
          font-weight: 600;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: none;
          border-radius: 10px;
          padding: 10px 20px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .btn-primary:disabled {
          opacity: 0.7;
          transform: none;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        /* Custom scrollbar for sidebar */
        .sidebar-content::-webkit-scrollbar {
          width: 6px;
        }
        
        .sidebar-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        
        .sidebar-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        
        .sidebar-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        /* Hide scrollbar when collapsed */
        .sidebar-collapsed .sidebar-content::-webkit-scrollbar {
          display: none;
        }
        
        .sidebar-collapsed .sidebar-content {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @media (max-width: 991.98px) {
          .sidebar-fixed {
            transform: translateX(-100%);
          }
          .sidebar-fixed.open {
            transform: translateX(0);
          }
          .sidebar-anim {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .bg-gray-50 {
          background-color: #f8fafc;
        }
      `}</style>

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="drawer-overlay" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar position-fixed top-0 start-0 h-100 sidebar-anim ${
          isMobile ? `sidebar-fixed ${sidebarOpen ? "open" : ""}` : ""
        } ${isCollapsed ? 'sidebar-collapsed' : ''}`}
        style={{ width: SIDEBAR_W, zIndex: 1050 }}
      >
        {/* Header */}
        <div className="sidebar-header d-flex align-items-center px-3 py-3">
          {!isMobile && (
            <button
              className="collapse-btn me-3"
              title={isCollapsed ? "Expand" : "Collapse"}
              onClick={() => setIsCollapsed((v) => !v)}
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          )}
          
          {!isCollapsed && (
            <div className="d-flex align-items-center justify-content-between flex-grow-1">
              <div className="sidebar-brand">Cybomb Admin</div>
            </div>
          )}
          
          {isMobile && (
            <button
              className="collapse-btn ms-auto"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Navigation - Scrollable Area */}
        <div className="sidebar-content">
          <div className="sidebar-nav px-3 pt-4">
            <nav>
              {navItems.map(({ id, label, icon: Icon, count }) => {
                const active = activeTab === id;
                
                return (
                  <div key={id} className="nav-item">
                    <button
                      className={`nav-link ${active ? "active" : ""}`}
                      title={isCollapsed ? label : undefined}
                      onClick={() => handleTabChange(id)}
                    >
                      <Icon size={20} />
                      {!isCollapsed && (
                        <>
                          <span className="flex-grow-1 text-truncate">{label}</span>
                          {count !== undefined && count > 0 && (
                            <span className="badge">{count}</span>
                          )}
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="sidebar-footer p-3">
          <div className="d-flex align-items-center mb-3">
            <div className="user-avatar me-3">
              {user.name?.charAt(0) || user.email?.charAt(0) || 'A'}
            </div>
            {!isCollapsed && (
              <div className="flex-grow-1">
                <div className="fw-medium text-white">{user.name || 'Admin User'}</div>
                <div className="small text-slate-300">{user.email}</div>
              </div>
            )}
          </div>
          
          <button
            className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center py-2"
            onClick={logout}
            style={{ 
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontWeight: '500'
            }}
          >
            <LogOut size={16} className="me-2" />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </aside>

      {/* Top Bar */}
      <div className="flex-grow-1">
        {isMobile && (
          <div className="top-bar position-fixed top-0 start-0 end-0 d-flex align-items-center px-3 py-2">
            <button
              className="btn btn-light me-2"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              style={{ borderRadius: '10px' }}
            >
              <Menu size={20} />
            </button>
            <div className="fw-semibold fs-5 text-slate-800">Cybomb Admin</div>
            
            <div className="ms-auto">
              <div className="user-avatar">
                {user.name?.charAt(0) || user.email?.charAt(0) || 'A'}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main 
          className="main-content p-4"
          style={{
            marginLeft: isMobile ? 0 : SIDEBAR_W,
            width: isMobile ? "100%" : `calc(100% - ${SIDEBAR_W}px)`,
            marginTop: isMobile ? 56 : 0,
            transition: "margin .3s ease, width .3s ease",
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none">Admin</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {activeTab}
              </li>
            </ol>
          </nav>
          
          {/* Page Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1 text-slate-800">{activeTab}</h2>
              <p className="text-slate-600 mb-0">
                Manage your {activeTab.toLowerCase()} and related content
              </p>
            </div>
            <button 
              className="btn btn-primary d-flex align-items-center"
              onClick={handleRefresh}
              disabled={loadingData}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className={`me-2 ${loadingData ? 'spin' : ''}`}
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              Refresh
            </button>
          </div>

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;