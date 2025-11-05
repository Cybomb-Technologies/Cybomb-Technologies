import { useNavigate } from "react-router-dom";
import styles from "./cybomb-blog.module.css";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_BASE_URL; 

export default function CybombBlog() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch blogs from DB
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/blog`);
        const data = await res.json();
        
        if (data.success) {
          setBlogs(data.data);
        } else {
          setError(data.message || "Failed to fetch blogs");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleCardClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  // Show only first 3 blogs if collapsed
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  if (loading) {
    return (
      <div className={styles.blogSection}>
        <h2 className={styles.blogHeading}>Cybomb Blogs</h2>
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="ms-3">Loading blogs...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.blogSection}>
        <h2 className={styles.blogHeading}>Cybomb Blogs</h2>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogSection}>
      <h2 className={styles.blogHeading}>Cybomb Blogs</h2>
      
      {blogs.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">No blog posts available yet.</p>
        </div>
      ) : (
        <>
          {/* Row wrapper for 3 columns */}
          <div className="row">
            {visibleBlogs.map((blog) => (
              <div className="col-lg-4 col-md-6 mb-4" key={blog._id}>
                <div
                  className={styles.blogCard}
                  onClick={() => handleCardClick(blog._id)}
                  style={{ cursor: "pointer" }}
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.blogImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <div className={styles.blogContent}>
                    <h3 className={styles.blogTitle} title={blog.title}>
                      {blog.title}
                    </h3>
                    <p className={styles.blogDate}>
                      {blog.formattedDate || new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    {blog.readTime && (
                      <p className={styles.blogReadTime}>
                        {blog.readTime}
                      </p>
                    )}
                    <p className={styles.blogDescription}>
                      {blog.content?.length > 120
                        ? blog.content.slice(0, 120) + "..."
                        : blog.content}
                    </p>
                    
                    {blog.tags && blog.tags.length > 0 && (
                      <div className={styles.blogTags}>
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className={styles.blogTag}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    className={styles.readMoreBtn}
                    onClick={(e) => {
                      e.stopPropagation(); 
                      navigate(`/blog/${blog._id}`);
                    }}
                  >
                    Read More...
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More / View Less Button */}
          {blogs.length > 3 && (
            <div className={styles.toggleButtonWrapper}>
              <button
                className={styles.toggleButton}
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}