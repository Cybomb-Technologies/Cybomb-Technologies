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
    <div style={{ padding: "0px 10px 10px 30px" }}>
      <div className="card border-0">
        <h3 style={{ textAlign: "center", color: "#007bff", padding: "10px 0px" }}>
          Form Submission Data
        </h3>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "banner" ? "active" : ""}`}
              onClick={() => setActiveTab("banner")}
            >
              Banner Form
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "popup" ? "active" : ""}`}
              onClick={() => setActiveTab("popup")}
            >
              Popup Form
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              Home Contact
            </button>
          </li>
        </ul>

        <input
          type="text"
          className="form-control"
          style={{ width: "250px" }}
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>
      ) : (
        <div className="table-responsive shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
          <table className="table table-hover table-striped">
            <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
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
                      <tr style={{ backgroundColor: "#e9ecef" }}>
                        <td colSpan="10" style={{ fontWeight: "bold" }}>
                          Banner Form
                        </td>
                      </tr>
                      {renderBannerTable(bannerData)}
                    </>
                  )}
                  {popupData.length > 0 && (
                    <>
                      <tr style={{ backgroundColor: "#e9ecef" }}>
                        <td colSpan="10" style={{ fontWeight: "bold" }}>
                          Popup Form
                        </td>
                      </tr>
                      {renderPopupTable(popupData)}
                    </>
                  )}
                  {homeContactData.length > 0 && (
                    <>
                      <tr style={{ backgroundColor: "#e9ecef" }}>
                        <td colSpan="10" style={{ fontWeight: "bold" }}>
                          Home Contact
                        </td>
                      </tr>
                      {renderHomeTable(homeContactData)}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}

      <style>
        {`
          .tab-gradient {
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            color: #fff;
            border-radius: 50px;
            padding: 8px 25px;
            margin-right: 10px;
            transition: 0.3s;
          }
          .tab-gradient.active {
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default FormSubmission;
