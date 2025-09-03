import Sidebar from "./Sidebar";
import { useNavigate, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/admin/login"); // redirect to login
  };
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", background: "#f9f9f9" }}>
        <Outlet /> {/* Admin pages render here */}
      </div>
    </div>
  );
}

export default Dashboard;
