import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#1e1e2f",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2>Admin Panel</h2>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        <li style={{ margin: "15px 0" }}>
          <Link to="/admin/home" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/admin/users" style={{ color: "#fff", textDecoration: "none" }}>
            Users
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/admin/settings" style={{ color: "#fff", textDecoration: "none" }}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
