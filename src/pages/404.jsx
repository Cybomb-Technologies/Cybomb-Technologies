import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="fs-3 text-secondary">Page Not Found</h2>
        <p className="lead mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/" className="btn btn-primary px-4">
            <i className="fas fa-home me-2"></i>Go Home
          </Link>
          <a href="/contact" className="btn btn-outline-secondary px-4">
            <i className="fas fa-envelope me-2"></i>Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;