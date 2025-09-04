import { Link, useNavigate } from "react-router-dom";

function Home() {

   const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();                  // prevent default link behavior
    localStorage.removeItem("token");    // remove JWT token
    navigate("/");                  // redirect to login
  };

  return (
    <div className="container-fluid px-4">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center pb-3 pt-1 mb-4 border-bottom">
        <div className="d-flex align-items-center">
          {/* <i className="fas fa-shield-alt text-primary me-2 fs-3"></i> */}
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
               <Link to="/" className="dropdown-item" onClick={handleLogout}>
          Logout
        </Link>
            </ul>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="row mb-4">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100 py-2 stats-card-primary">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Total Submissions
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">1,284</div>
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
                  <div className="h5 mb-0 fw-bold text-gray-800">243</div>
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
                  <div className="h5 mb-0 fw-bold text-gray-800">87</div>
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
          <div className="card border-0 shadow-sm h-100 py-2 stats-card-warning">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Pending Actions
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">12</div>
                  <div className="mt-2 small">
                    <span className="text-danger">
                      <i className="fas fa-exclamation-circle me-1"></i> Needs attention
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-tasks fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Submissions Overview */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 fw-bold text-primary">Form Submissions by Type</h6>
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  This Month
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">This Week</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <div className="dummy-chart bg-light rounded p-5 text-center text-muted">
                  <i className="fas fa-chart-bar fa-3x mb-3"></i>
                  <p>Form submissions chart would be displayed here</p>
                </div>
              </div>
              <div className="row mt-4 text-center">
                <div className="col-md-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">Home Page</h5>
                      <p className="card-text fw-bold">542</p>
                      <span className="badge bg-success">+24%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">Banner Form</h5>
                      <p className="card-text fw-bold">318</p>
                      <span className="badge bg-success">+18%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">Popup Form</h5>
                      <p className="card-text fw-bold">275</p>
                      <span className="badge bg-success">+32%</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">Contact Page</h5>
                      <p className="card-text fw-bold">149</p>
                      <span className="badge bg-success">+12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 fw-bold text-primary">Recent Form Submissions</h6>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">John Doe</h6>
                    <small>15 min ago</small>
                  </div>
                  <p className="mb-1">Home page form - Interested in services</p>
                  <small className="text-muted">john@example.com | +1234567890</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Jane Smith</h6>
                    <small>42 min ago</small>
                  </div>
                  <p className="mb-1">Popup form - Downloading whitepaper</p>
                  <small className="text-muted">jane@example.com | +0987654321</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Robert Johnson</h6>
                    <small>1 hour ago</small>
                  </div>
                  <p className="mb-1">Contact form - Project inquiry</p>
                  <small className="text-muted">robert@example.com | +1122334455</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Sarah Williams</h6>
                    <small>2 hours ago</small>
                  </div>
                  <p className="mb-1">Banner form - Newsletter subscription</p>
                  <small className="text-muted">sarah@example.com | +5566778899</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Applications and Blog Management */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 fw-bold text-primary">Recent Job Applications</h6>
              <button className="btn btn-sm btn-outline-primary">View All</button>
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
                    <tr>
                      <td>Michael Brown</td>
                      <td>Frontend Developer</td>
                      <td>2023-05-15</td>
                      <td><span className="badge bg-warning">Review</span></td>
                    </tr>
                    <tr>
                      <td>Emily Davis</td>
                      <td>UX Designer</td>
                      <td>2023-05-14</td>
                      <td><span className="badge bg-info">Interview</span></td>
                    </tr>
                    <tr>
                      <td>David Wilson</td>
                      <td>Backend Developer</td>
                      <td>2023-05-14</td>
                      <td><span className="badge bg-success">Hired</span></td>
                    </tr>
                    <tr>
                      <td>Jennifer Taylor</td>
                      <td>Marketing Manager</td>
                      <td>2023-05-13</td>
                      <td><span className="badge bg-secondary">Rejected</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 fw-bold text-primary">Blog Management</h6>
              <button className="btn btn-sm btn-outline-primary">New Post</button>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Introduction to React Hooks</h6>
                    <span className="badge bg-success">Published</span>
                  </div>
                  <p className="mb-1">Views: 1,243 | Comments: 28</p>
                  <small className="text-muted">Last updated: 2023-05-10</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">CSS Best Practices for 2023</h6>
                    <span className="badge bg-warning">Draft</span>
                  </div>
                  <p className="mb-1">Views: 842 | Comments: 15</p>
                  <small className="text-muted">Last updated: 2023-05-08</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Building Secure Web Applications</h6>
                    <span className="badge bg-success">Published</span>
                  </div>
                  <p className="mb-1">Views: 2,187 | Comments: 42</p>
                  <small className="text-muted">Last updated: 2023-05-05</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Optimizing Website Performance</h6>
                    <span className="badge bg-info">Scheduled</span>
                  </div>
                  <p className="mb-1">Views: 956 | Comments: 19</p>
                  <small className="text-muted">Last updated: 2023-05-03</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row">
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
      </div>

      {/* Footer */}
      <footer className="pt-3 mt-4 text-muted border-top">
        <div className="d-flex justify-content-between">
          <div>© 2023 Cybomb Admin Dashboard</div>
          <div>Total Form Submissions: 1,284 | Job Applications: 243 | Blog Posts: 87</div>
        </div>
      </footer>

      {/* Custom CSS */}
      <style>
        {`
          body {
            background-color: #f8f9fa;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
          
          .stats-card-warning:hover {
            border-left: 4px solid #f6c23e !important;
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
          
          .btn {
            border-radius: 0.375rem;
          }
        `}
      </style>
    </div>
  );
}

export default Home;