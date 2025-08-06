import { Link } from "react-router-dom";
import "./services.css";

function Servicesaside() {
  return (
    <>
      <aside className="services-aside">
        <div className="card services-aside-bg p-4 border-0 shadow">
          <ul className="list-unstyled">
            <li className="mt-4">
              <Link to="/services/mobile-app" className="text-decoration-none">
                Mobile App Development
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/services/web-app" className="text-decoration-none">
                Web Application Development
              </Link>
            </li>

            <li className="mt-4">
              <Link
                to="/services/ai-machine-learning"
                className="text-decoration-none"
              >
                AI & Machine Learning Solutions
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="/services/saas-product"
                className="text-decoration-none"
              >
                SaaS Product Development
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/services/ui-ux" className="text-decoration-none">
                UI/UX Design Services
              </Link>
            </li>

            <li className="mt-4">
              <Link
                to="/services/software-consulting-Strategy"
                className="text-decoration-none"
              >
                Software Consulting & Strategy
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div
        className="card mt-4 border-0 p-3"
        style={{ backgroundColor: "rgb(205 211 224)" }}
      >
        <h6 className="text-center text-primary"><i className="bi bi-telephone-fill me-2"></i> Phone</h6>
        <h5 className="text-center">
          <a href="tel:+919715092104" className="text-decoration-none text-secondary h5">
            {" "}
            +91 9715092104
          </a>
        </h5>
         <h6 className="text-center text-primary "><i className="bi bi-envelope-fill"></i> Email</h6>
        <h5 className="text-center">
          <a href="mailto:support@cybomb.com" className="text-decoration-none text-secondary h5">
            {" "}
         support@cybomb.com
          </a>
        </h5>
    
      </div>
    </>
  );
}

export default Servicesaside;
