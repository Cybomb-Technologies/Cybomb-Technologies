import { Link } from "react-router-dom";

function Datadropdown({ onLinkClick}) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
        //  to="#" 
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        // onClick={onDropdownClick}
      >
        Data & AI
      </Link>

      <div className="dropdown-menu mega-dropdown w-auto">
        <div className="row p-3">
             <div className="col-xxl-5">
            <Link className="dropdown-item text-primary">Data</Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Strategy Consulting
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Processing
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/grocery/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Governance Solution
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Storage Solution
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Quality Management
            </Link>{" "}
           
           
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Modelling Design
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Architecture
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Analytics & Visualization
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/school-mangement"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Cloud Data Migration
            </Link>
          </div>
          <div className="col-xxl-7">
            <Link className="dropdown-item text-primary">AI</Link>
            <Link
              className="dropdown-item"
              // to="/demo/ai-agent/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Custom AI Development
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/HRMS/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             AI Consulting Strategy
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              AI Business Intelligence
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Large Language Models Solutions
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             AI Personalized Customer Experience
            </Link>
            <Link
              className="dropdown-item"
              // to="/demo/E-Commerce/"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
            Blockchain
            </Link>
           
          </div>

         
        </div>
      </div>
    </li>
  );
}

export default Datadropdown;
