// BlogManager.jsx
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  PlusCircle,
  Edit,
  Trash2,
  Clock,
  Star,
  Image,
  Tag,
  Loader,
  CheckCircle,
  Eye,
  Calendar,
  AlertCircle,
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BlogForm = ({ blogToEdit, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(blogToEdit?.title || "");
  const [content, setContent] = useState(blogToEdit?.content || "");
  const [author, setAuthor] = useState(blogToEdit?.author || "");
  const [image, setImage] = useState(blogToEdit?.image || "");
  const [tags, setTags] = useState(blogToEdit?.tags?.join(", ") || "");
  const [readTime, setReadTime] = useState(blogToEdit?.readTime || "");
  const [featured, setFeatured] = useState(blogToEdit?.featured || false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isEditMode = !!blogToEdit;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !author) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const blogData = {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      image: image || "",
      tags: tags
        ? tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag)
        : [],
      readTime: readTime || "",
      featured,
    };

    try {
      const url = isEditMode
        ? `${API_BASE_URL}/api/blog/${blogToEdit._id}`
        : `${API_BASE_URL}/api/blog`;
      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify(blogData),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.slice(0, 100)}`
        );
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage(
          isEditMode
            ? "Blog post updated successfully!"
            : "Blog post created successfully!"
        );
        if (!isEditMode) {
          setTitle("");
          setContent("");
          setAuthor("");
          setImage("");
          setTags("");
          setReadTime("");
          setFeatured(false);
        }
        setTimeout(() => {
          onSubmit();
        }, 1500);
      } else {
        throw new Error(
          data.message || data.errors?.[0] || "Failed to save blog"
        );
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-body">
          <h3 className="card-title h4 mb-4">
            {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Title *</label>
                <input
                  type="text"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  required
                  maxLength={200}
                />
                <div className="form-text">{title.length}/200 characters</div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Author *</label>
                <input
                  type="text"
                  placeholder="Author name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="form-control"
                  required
                  maxLength={100}
                />
                <div className="form-text">{author.length}/100 characters</div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <div className="input-group">
                <span className="input-group-text">
                  <Image
                    className="text-muted"
                    style={{ width: "16px", height: "16px" }}
                  />
                </span>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="form-control"
                />
              </div>
              {image && (
                <div className="mt-2">
                  <small className="text-muted">Image Preview:</small>
                  <img
                    src={image}
                    alt="Preview"
                    className="img-thumbnail mt-1"
                    style={{ maxHeight: "100px", maxWidth: "100%" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Tags</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Tag
                      className="text-muted"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="react, javascript, webdev"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-text">
                  Separate tags with commas (max 30 characters each)
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Read Time</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Clock
                      className="text-muted"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="5 min read"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-text">Leave empty to auto-calculate</div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Content *</label>
              <textarea
                placeholder="Write your blog content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="12"
                className="form-control"
                required
                minLength={100}
                style={{ resize: "vertical" }}
              ></textarea>
              <div className="form-text">
                {content.length} characters (minimum 100 required)
                {content.length < 100 && (
                  <span className="text-danger">
                    {" "}
                    - {100 - content.length} more characters needed
                  </span>
                )}
              </div>
            </div>

            <div className="form-check mb-4">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="form-check-input"
              />
              <label
                htmlFor="featured"
                className="form-check-label d-flex align-items-center"
              >
                <Star
                  className="me-2 text-warning"
                  style={{ width: "16px", height: "16px" }}
                />
                Mark as featured post
              </label>
            </div>

            <div className="d-flex justify-content-end gap-3 pt-3">
              <button
                type="button"
                onClick={onCancel}
                className="btn btn-outline-secondary"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || content.length < 100}
                className="btn btn-primary d-flex align-items-center"
              >
                {isLoading ? (
                  <Loader
                    className="animate-spin me-2"
                    style={{ width: "16px", height: "16px" }}
                  />
                ) : isEditMode ? (
                  <Edit
                    className="me-2"
                    style={{ width: "16px", height: "16px" }}
                  />
                ) : (
                  <PlusCircle
                    className="me-2"
                    style={{ width: "16px", height: "16px" }}
                  />
                )}
                {isEditMode ? "Update Blog" : "Publish Blog"}
              </button>
            </div>
            {message && (
              <div
                className={`mt-3 alert ${
                  message.includes("Error") ? "alert-danger" : "alert-success"
                } d-flex align-items-center`}
              >
                {!message.includes("Error") && (
                  <CheckCircle
                    className="me-2"
                    style={{ width: "16px", height: "16px" }}
                  />
                )}
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [statsError, setStatsError] = useState("");

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/blog`);

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.slice(0, 100)}`
        );
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setBlogs(data.data);
      } else {
        throw new Error(data.message || "Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setMessage(`Error loading blogs: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch blog statistics
  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setStatsError("Authentication required");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/blog/admin/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        if (response.status === 401) {
          setStatsError("Authentication failed. Please log in again.");
          return;
        }
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.slice(0, 100)}`
        );
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setStats(data.data);
        setStatsError("");
      } else {
        throw new Error(data.message || "Failed to fetch statistics");
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
      setStatsError(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchStats();
  }, []);

  const handleEdit = (blog) => {
    setBlogToEdit(blog);
    setIsFormVisible(true);
    setMessage("");
  };

  const handleCreateNew = () => {
    setBlogToEdit(null);
    setIsFormVisible(true);
    setMessage("");
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setBlogToEdit(null);
    fetchBlogs();
    fetchStats();
  };

  const handleDelete = async (blogId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this blog post? This action cannot be undone."
      )
    )
      return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/blog/${blogId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.slice(0, 100)}`
        );
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage("Blog post deleted successfully!");
        fetchBlogs();
        fetchStats();
        setTimeout(() => setMessage(""), 3000);
      } else {
        throw new Error(data.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      setMessage(`Error deleting blog: ${error.message}`);
    }
  };

  const toggleFeatured = async (blogId, currentFeatured) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/blog/${blogId}/featured`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.slice(0, 100)}`
        );
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage(
          `Blog ${
            !currentFeatured ? "marked as featured" : "removed from featured"
          }!`
        );
        fetchBlogs();
        setTimeout(() => setMessage(""), 3000);
      } else {
        throw new Error(data.message || "Failed to update featured status");
      }
    } catch (error) {
      console.error("Error toggling featured:", error);
      setMessage(`Error: ${error.message}`);
    }
  };

  const calculateBasicStats = () => {
    const totalBlogs = blogs.length;
    const featuredBlogs = blogs.filter((blog) => blog.featured).length;
    const allTags = blogs.flatMap((blog) => blog.tags || []);
    const uniqueTags = [...new Set(allTags)].length;

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const recentBlogs = blogs.filter(
      (blog) => new Date(blog.createdAt) >= sixMonthsAgo
    );

    return {
      totalBlogs,
      featuredBlogs,
      totalTags: uniqueTags,
      recentBlogs: recentBlogs.length,
    };
  };

  const basicStats = calculateBasicStats();

  if (isFormVisible) {
    return (
      <BlogForm
        blogToEdit={blogToEdit}
        onSubmit={handleCancel}
        onCancel={handleCancel}
      />
    );
  }

  // Common style objects to prevent overflow for long unbroken text
  const safeBreak = { overflowWrap: "anywhere", wordBreak: "break-word" };
  const clampedTitle = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    minHeight: "48px",
    ...safeBreak, // FIX: prevent horizontal overflow on long words
  };
  const clampedExcerpt = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    minHeight: "60px",
    ...safeBreak, // FIX: prevent horizontal overflow on long words
  };

  return (
    // FIX: ensure no accidental horizontal scroll from inner children
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div style={safeBreak}>
          <h2
            className="h3 fw-bold d-flex align-items-center text-primary mb-1"
            style={safeBreak}
          >
            <BookOpen
              className="me-3 text-primary"
              style={{ width: "24px", height: "24px" }}
            />
            Blog Management
          </h2>
          <p className="text-muted mb-0">Manage your blog posts and content</p>
        </div>
        <button
          onClick={handleCreateNew}
          className="btn btn-primary d-flex align-items-center"
        >
          <PlusCircle
            className="me-2"
            style={{ width: "16px", height: "16px" }}
          />
          New Post
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="row mb-4 g-3">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card bg-primary text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="card-title mb-0">{basicStats.totalBlogs}</h4>
                  <p className="card-text mb-0">Total Blogs</p>
                </div>
                <BookOpen
                  style={{ width: "48px", height: "48px", opacity: 0.7 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card bg-warning text-dark h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="card-title mb-0">
                    {basicStats.featuredBlogs}
                  </h4>
                  <p className="card-text mb-0">Featured</p>
                </div>
                <Star style={{ width: "48px", height: "48px", opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card bg-success text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="card-title mb-0">{basicStats.totalTags}</h4>
                  <p className="card-text mb-0">Unique Tags</p>
                </div>
                <Tag style={{ width: "48px", height: "48px", opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card bg-info text-white h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="card-title mb-0">{basicStats.recentBlogs}</h4>
                  <p className="card-text mb-0">Last 6 Months</p>
                </div>
                <Calendar
                  style={{ width: "48px", height: "48px", opacity: 0.7 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {statsError && (
        <div className="alert alert-warning d-flex align-items-center mb-4">
          <AlertCircle
            className="me-2"
            style={{ width: "16px", height: "16px" }}
          />
          <small>Advanced statistics unavailable: {statsError}</small>
        </div>
      )}

      {message && (
        <div
          className={`alert ${
            message.includes("Error") ? "alert-danger" : "alert-success"
          } mb-4`}
        >
          {message}
        </div>
      )}

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading blogs...</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-5">
          <BookOpen
            className="mb-3 text-muted"
            style={{ width: "64px", height: "64px" }}
          />
          <h3 className="h4 text-dark mb-2">No blog posts yet</h3>
          <p className="text-muted mb-4">
            Get started by creating your first blog post!
          </p>
          <button onClick={handleCreateNew} className="btn btn-primary">
            Create First Post
          </button>
        </div>
      ) : (
        <div className="row g-3">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm border-0">
                {blog.image ? (
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="card-img-top h-100 w-100 object-fit-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.style.height = "0";
                      }}
                    />
                    {blog.featured && (
                      <div className="position-absolute top-0 end-0 m-2">
                        <Star
                          className="text-warning"
                          fill="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="position-relative bg-light d-flex align-items-center justify-content-center"
                    style={{ height: "200px" }}
                  >
                    <Image
                      className="text-muted"
                      style={{ width: "48px", height: "48px" }}
                    />
                    {blog.featured && (
                      <div className="position-absolute top-0 end-0 m-2">
                        <Star
                          className="text-warning"
                          fill="currentColor"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className={`badge ${
                        blog.featured ? "bg-warning text-dark" : "bg-secondary"
                      }`}
                    >
                      {blog.featured ? "Featured" : "Standard"}
                    </span>
                    {blog.readTime && (
                      <small
                        className="text-muted d-flex align-items-center"
                        style={safeBreak}
                      >
                        <Clock
                          className="me-1"
                          style={{ width: "14px", height: "14px" }}
                        />
                        {blog.readTime}
                      </small>
                    )}
                  </div>

                  <h5
                    className="card-title text-dark mb-2"
                    style={clampedTitle}
                  >
                    {blog.title}
                  </h5>

                  <p className="text-primary mb-3" style={safeBreak}>
                    by {blog.author}
                  </p>
                  <p
                    className="card-text text-muted small mb-3 flex-grow-1"
                    style={clampedExcerpt}
                  >
                    {blog.content
                      ? blog.content.replace(/<[^>]*>/g, "").slice(0, 150)
                      : "No content available"}
                    {blog.content &&
                    blog.content.replace(/<[^>]*>/g, "").length > 150
                      ? "..."
                      : ""}
                  </p>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="badge bg-light text-dark border"
                          style={safeBreak}
                        >
                          #{tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="badge bg-light text-muted border">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="d-flex justify-content-between align-items-center text-xs text-muted mb-3">
                    <span>
                      Created: {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <span className="d-flex align-items-center">
                      <Eye
                        className="me-1"
                        style={{ width: "14px", height: "14px" }}
                      />
                      {blog.views || 0}
                    </span>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="btn btn-outline-primary btn-sm d-flex align-items-center flex-grow-1 justify-content-center"
                    >
                      <Edit
                        className="me-1"
                        style={{ width: "14px", height: "14px" }}
                      />
                      Edit
                    </button>
                    <button
                      onClick={() => toggleFeatured(blog._id, blog.featured)}
                      className={`btn btn-sm d-flex align-items-center justify-content-center ${
                        blog.featured ? "btn-warning" : "btn-outline-warning"
                      }`}
                      title={
                        blog.featured
                          ? "Remove from featured"
                          : "Mark as featured"
                      }
                      style={{ width: "40px" }}
                    >
                      <Star
                        className={blog.featured ? "text-white" : ""}
                        style={{ width: "14px", height: "14px" }}
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center"
                      title="Delete blog"
                      style={{ width: "40px" }}
                    >
                      <Trash2 style={{ width: "14px", height: "14px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogManager;
