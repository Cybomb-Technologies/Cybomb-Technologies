import { Link } from "react-router-dom";

function Datadropdown({ onLinkClick}) {
  return (
    <li className="nav-item dropdown custom-nav-item position-static">
      <Link
        className="nav-link dropdown-toggle custom-nav-link"
         to="#" 
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
            <a className="dropdown-item text-primary">Data</a>
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Strategy Consulting
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Processing
            </a>
            <a
              className="dropdown-item"
              href="/demo/grocery/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Governance Solution
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Storage Solution
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Quality Management
            </a>{" "}
           
           
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Modelling Design
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Architecture
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Analytics & Visualization
            </a>
            <a
              className="dropdown-item"
              href="/demo/school-mangement"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              Cloud Data Migration
            </a>
          </div>
          <div className="col-xxl-7">
            <a className="dropdown-item text-primary">AI</a>
            <a
              className="dropdown-item"
              href="/demo/ai-agent/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Custom AI Development
            </a>
            <a
              className="dropdown-item"
              href="/demo/HRMS/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             AI Consulting Strategy
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
              AI Business Intelligence
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             Large Language Models Solutions
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
             AI Personalized Customer Experience
            </a>
            <a
              className="dropdown-item"
              href="/demo/E-Commerce/"
              target="_blank"
              onClick={onLinkClick}
            >
              {/* <i
                className="bi bi-arrow-right arrow-right-icon bg-primary"
                style={{ fontSize: "10px" }}
              ></i>{" "} */}
            Blockchain
            </a>
           
          </div>

         
        </div>
      </div>
    </li>
  );
}

export default Datadropdown;
