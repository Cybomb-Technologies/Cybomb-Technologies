import React, { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_BASE; 

function FormSubmission() {
  const [activeTab, setActiveTab] = useState("all");
  const [bannerData, setBannerData] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [homeContactData, setHomeContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerRes = await fetch(`${API_URL}/api/banner-mail`);
        const popupRes = await fetch(`${API_URL}/api/popup-mail`);
        const homeRes = await fetch(`${API_URL}/api/send-mail`);

        const bannerJson = await bannerRes.json();
        const popupJson = await popupRes.json();
        const homeJson = await homeRes.json();

        setBannerData(bannerJson);
        setPopupData(popupJson);
        setHomeContactData(homeJson);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterData = (data, fields) => {
    return data.filter((item) =>
      fields.some((field) =>
        item[field]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const renderBannerTable = (data) =>
    filterData(data, ["fullName", "email", "phone", "company", "requirement"]).map((item) => (
      <tr key={item._id}>
        <td>{item.fullName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.company}</td>
        <td>{item.requirement}</td>
        <td>{new Date(item.createdAt).toLocaleString()}</td>
      </tr>
    ));

  const renderPopupTable = (data) =>
    filterData(data, ["name", "email", "phone", "message"]).map((item) => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.message}</td>
        <td>{item.subscribe ? "Yes" : "No"}</td>
        <td>{new Date(item.createdAt).toLocaleString()}</td>
      </tr>
    ));

  const renderHomeTable = (data) =>
    filterData(data, ["firstName", "email", "phone", "message"]).map((item) => (
      <tr key={item._id}>
        <td>{item.firstName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.message}</td>
        <td>{new Date(item.createdAt).toLocaleString()}</td>
      </tr>
    ));

  return (
    <div className="form-submission-container">
      <div className="card header-card">
        <h6 className="dashboard-title">
          Form Submission Dashboard
        </h6>
        {/* <p className="dashboard-subtitle">View and manage all form submissions</p> */}
      </div>

      <div className="dashboard-controls">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="tab-container">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                <i className="fas fa-table"></i> All Submissions
              </button>
              <button
                className={`tab-btn ${activeTab === "banner" ? "active" : ""}`}
                onClick={() => setActiveTab("banner")}
              >
                <i className="fas fa-flag"></i> Banner Form
              </button>
              <button
                className={`tab-btn ${activeTab === "popup" ? "active" : ""}`}
                onClick={() => setActiveTab("popup")}
              >
                <i className="fas fa-window-restore"></i> Popup Form
              </button>
              <button
                className={`tab-btn ${activeTab === "home" ? "active" : ""}`}
                onClick={() => setActiveTab("home")}
              >
                <i className="fas fa-home"></i> Home Contact
              </button>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search submissions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading form submissions...</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="submissions-table">
            <thead>
              <tr>
                {activeTab === "banner" &&
                  ["Full Name", "Email", "Phone", "Company", "Requirement", "Date"].map(
                    (head) => <th key={head}>{head}</th>
                  )}
                {activeTab === "popup" &&
                  ["Name", "Email", "Phone", "Message", "Subscribe", "Date"].map(
                    (head) => <th key={head}>{head}</th>
                  )}
                {activeTab === "home" &&
                  ["First Name", "Email", "Phone", "Message", "Date"].map(
                    (head) => <th key={head}>{head}</th>
                  )}
                {activeTab === "all" && <th>Data Preview</th>}
              </tr>
            </thead>
            <tbody>
              {activeTab === "banner" && renderBannerTable(bannerData)}
              {activeTab === "popup" && renderPopupTable(popupData)}
              {activeTab === "home" && renderHomeTable(homeContactData)}
              {activeTab === "all" && (
                <>
                  {bannerData.length > 0 && (
                    <>
                      <tr className="table-section-header">
                        <td colSpan="10">
                          <i className="fas fa-flag"></i> Banner Form Submissions
                        </td>
                      </tr>
                      {renderBannerTable(bannerData)}
                    </>
                  )}
                  {popupData.length > 0 && (
                    <>
                      <tr className="table-section-header">
                        <td colSpan="10">
                          <i className="fas fa-window-restore"></i> Popup Form Submissions
                        </td>
                      </tr>
                      {renderPopupTable(popupData)}
                    </>
                  )}
                  {homeContactData.length > 0 && (
                    <>
                      <tr className="table-section-header">
                        <td colSpan="10">
                          <i className="fas fa-home"></i> Home Contact Submissions
                        </td>
                      </tr>
                      {renderHomeTable(homeContactData)}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
          
          {bannerData.length === 0 && popupData.length === 0 && homeContactData.length === 0 && (
            <div className="no-data">
              <i className="fas fa-inbox"></i>
              <h3>No form submissions yet</h3>
              <p>Form submissions will appear here once users start submitting forms.</p>
            </div>
          )}
        </div>
      )}

      <style>
        {`
          .form-submission-container {
            padding: 10px 5px 20px 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
            min-height: 100vh;
          }
          
          .header-card {
            background: linear-gradient(120deg, #4e54c8, #8f94fb);
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
          
          .tab-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .tab-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            background-color: white;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            color: #495057;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          
          .tab-btn:hover {
            background-color: #f8f9fa;
            border-color: #c6c7cb;
          }
          
          .tab-btn.active {
            background-color: #4e54c8;
            color: white;
            border-color: #4e54c8;
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
          }
          
          .search-input {
            width: 100%;
            padding: 10px 10px 10px 40px;
            border: 1px solid #ced4da;
            border-radius: 8px;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }
          
          .search-input:focus {
            border-color: #4e54c8;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(78, 84, 200, 0.25);
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
            border-top: 4px solid #4e54c8;
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
          
          .submissions-table {
            width: 100%;
            border-collapse: collapse;
          }
          
          .submissions-table th {
            background-color: #4e54c8;
            color: white;
            padding: 16px;
            text-align: left;
            font-weight: 600;
          }
          
          .submissions-table td {
            padding: 14px 16px;
            border-bottom: 1px solid #e9ecef;
          }
          
          .submissions-table tr:last-child td {
            border-bottom: none;
          }
          
          .submissions-table tr:hover {
            background-color: #f8f9fa;
          }
          
          .table-section-header {
            background-color: #e9ecef !important;
          }
          
          .table-section-header td {
            font-weight: 600;
            font-size: 16px;
            padding: 12px 16px;
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
          
          @media (max-width: 768px) {
            .tab-container {
              margin-bottom: 16px;
            }
            
            .tab-btn {
              flex: 1;
              justify-content: center;
              min-width: 120px;
            }
            
            .submissions-table {
              display: block;
              overflow-x: auto;
            }
            
            .header-card {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FormSubmission;