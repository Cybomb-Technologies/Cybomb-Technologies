import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./home-press-release.module.css";

const API_URL = import.meta.env.VITE_API_BASE_URL; 

function HomePressrelease() {
  const [press, setPress] = useState([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/pressrelease`);
        if (!response.ok) {
          throw new Error("Failed to fetch press releases");
        }
        const data = await response.json();
        setPress(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 3);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      published: { class: "bg-success", text: "Published" },
      draft: { class: "bg-secondary", text: "Draft" },
      archived: { class: "bg-warning", text: "Archived" },
    };
    const config = statusConfig[status?.toLowerCase()] || statusConfig.draft;
    return (
      <span
        className={`badge ${config.class} position-absolute top-0 end-0 m-2`}
      >
        {config.text}
      </span>
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      technology: "primary",
      business: "success",
      health: "info",
      education: "warning",
      entertainment: "danger",
      default: "secondary",
    };
    return colors[category?.toLowerCase()] || colors.default;
  };

  if (loading) {
    return (
      <div className="container text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Loading press releases...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">Oops! Something went wrong</h4>
          <p>{error}</p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:"#f4efef"}}>
      <div className={`container ${styles.pressContainer}`}>
        {/* ✅ Internal CSS for 2-line description */}
        <style>
          {`
          .description-limit {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 48px;
          }
        `}
        </style>

        {/* Header Section */}
        <div className="text-center mb-5">
          <h1
            className={`h1 fw-bold text-primary mb-3 ${styles.pressTitle}`}
          >
            Latest Press Releases
          </h1>
          <p className="lead text-muted">
            Stay updated with our latest news and announcements
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Press Releases Grid */}
        <div className="row g-4">
          {press.slice(0, visible).map((item) => (
            <div key={item._id} className="col-xl-4 col-lg-6 col-md-6 px-4 px-lg-0">
              <div
                className={`card h-100 shadow-lg border-0 overflow-hidden ${styles.pressCard}`}
              >
                {/* Image Section */}
                <div className={styles.imageContainer}>
                  {item.image ? (
                    <img
                      src={item.image}
                      className={`card-img-top ${styles.cardImage}`}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {!item.image && (
                    <div
                      className={`${styles.placeholderImage} bg-light d-flex align-items-center justify-content-center w-100`}
                    >
                      <i className="fas fa-newspaper fa-3x text-muted"></i>
                    </div>
                  )}
                  {getStatusBadge(item.status)}

                  {/* Category Badge */}
                  <div className="position-absolute top-0 start-0 m-2">
                    <span
                      className={`badge bg-${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold text-dark mb-3">
                    {item.title}
                  </h5>

                  {/* ✅ Only show short description (2 lines) */}
                  <p className="card-text text-muted flex-grow-1 mb-0 description-limit">
                    {item.description || "No description available"}
                  </p>

                  {/* Metadata */}
                  <div className="mt-3">
                    <div className="d-flex align-items-center text-muted small mb-2">
                      <i className="fas fa-user me-2"></i>
                      <span>By {item.author || "Unknown"}</span>
                    </div>

                    <div className="d-flex align-items-center text-muted small">
                      <i className="fas fa-calendar me-2"></i>
                      <span>
                        {item.publishedDate
                          ? new Date(item.publishedDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          : "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-4 pt-2">
                    <Link
                      to={`/pressrelease/${item._id}`}
                      className={`btn btn-primary w-100 ${styles.readMoreBtn}`}
                    >
                      Read More <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visible < press.length && (
          <div className="text-center mt-5">
            <button
              className={`btn btn-outline-primary btn-lg px-5 ${styles.loadMoreBtn}`}
              onClick={loadMore}
            >
              <i className="fas fa-plus me-2"></i> View More
            </button>
          </div>
        )}

        {/* No More Content Message */}
        {visible >= press.length && press.length > 3 && (
          <div className="text-center mt-5">
            <div className="alert alert-info d-inline-block">
              <i className="fas fa-check-circle me-2"></i> You've seen all press
              releases!
            </div>
          </div>
        )}

        {/* Empty State */}
        {press.length === 0 && !loading && (
          <div className="text-center py-5">
            <div className={styles.emptyState}>
              <i className="fas fa-newspaper fa-4x text-muted mb-4"></i>
              <h3 className="text-muted">No Press Releases Available</h3>
              <p className="text-muted">Check back later for updates</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePressrelease;