import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="btn btn-primary d-md-none m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        ☰ Menu
      </button>

      <div className="container-fluid">
        <div className="row">
          {/* Desktop sidebar - col-md-4 for medium screens and up */}
          <div className="col-md-4 col-lg-2 d-md-block p-0">
            <Sidebar />
          </div>
          
          {/* Main content - col-md-8 for medium screens and up */}
          <div className="col-12 col-md-8 col-lg-10 p-3" style={{ background: "#f9f9f9", minHeight: "100vh" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;