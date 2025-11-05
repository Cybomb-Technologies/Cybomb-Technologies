import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Badge,
  Spinner,
  Alert
} from "react-bootstrap";
import styles from "./blog-details.module.css";

const API_URL = import.meta.env.VITE_API_BASE_URL;

import {
  FaArrowLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaCalendar,
  FaUser,
  FaClock,
  FaTag,
  FaExclamationTriangle
} from "react-icons/fa";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setError(null);
        
        console.log('Fetching blog from:', `${API_URL}/api/blog/${id}`);
        
        // Fetch blog details
        const res = await fetch(`${API_URL}/api/blog/${id}`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const response = await res.json();
        console.log('Full API response:', response);
        
        // Extract blog data from the nested structure - FIXED
        const blogData = response.data;
        console.log('Blog data extracted:', blogData);
        
        if (!blogData) {
          throw new Error('No blog data found in response');
        }
        
        // Set the actual blog data, not the response wrapper
        setBlog(blogData);

        // Fetch related blogs
        try {
          const relatedRes = await fetch(`${API_URL}/api/blog`);
          
          if (!relatedRes.ok) {
            console.warn('Failed to fetch related blogs');
            return;
          }
          
          const allBlogsResponse = await relatedRes.json();
          console.log('All blogs response:', allBlogsResponse);
          
          // Handle the API response structure
          let blogsArray = [];
          
          if (Array.isArray(allBlogsResponse)) {
            blogsArray = allBlogsResponse;
          } else if (allBlogsResponse.data && Array.isArray(allBlogsResponse.data)) {
            blogsArray = allBlogsResponse.data;
          } else {
            console.warn('Unexpected API response structure for blogs');
            return;
          }
          
          const relatedBlogs = blogsArray
            .filter((b) => b._id !== blogData._id && (b.tags?.some(tag => blogData.tags?.includes(tag))))
            .slice(0, 3)
            .map((b) => ({
              ...b,
              image: b.image || null,
            }));
          
          console.log('Related blogs found:', relatedBlogs);
          setRelated(relatedBlogs);
        } catch (relatedError) {
          console.warn('Error fetching related blogs:', relatedError);
          // Continue without related blogs
        }
        
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Container className="my-5 py-5 text-center">
        <Spinner animation="border" role="status" className="me-2" />
        <h2 className="d-inline">Loading...</h2>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5 py-5">
        <Alert variant="danger" className="text-center">
          <FaExclamationTriangle className="me-2" />
          <strong>Error loading blog:</strong> {error}
          <div className="mt-3">
            <small className="text-muted">
              API URL: {API_URL}/api/blog/{id}
            </small>
          </div>
        </Alert>
        <div className="text-center mt-4">
          <Button
            variant="primary"
            onClick={() => navigate("/blog")}
            className="me-3"
          >
            Back to Blog List
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container className="my-5 py-5 text-center">
        <h2>Blog not found</h2>
        <Button
          variant="primary"
          onClick={() => navigate("/blog")}
          className="mt-3"
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  console.log('Rendering blog object:', blog);
  console.log('Blog content:', blog.content);

  // Use the correct content field from your API response
  const blogContent = blog.content || '';
  const readingTime = blog.readTime || (blogContent ? Math.ceil(blogContent.split(" ").length / 200) + ' min read' : '1 min read');

  return (
    <Container className="blog-detail-page" style={{ paddingTop: "130px" }}>
      {/* Blog Header */}
      <Row className="mb-4">
        <Col>
          {blog.tags && blog.tags.length > 0 && (
            <Badge 
              bg="primary" 
              className="mb-3 p-2 px-3 rounded-pill fs-6"
              style={{
                background: 'linear-gradient(135deg, #007ea7 0%, #005f7a 100%)'
              }}
            >
              <FaTag className="me-1" /> {blog.tags[0]}
            </Badge>
          )}
          <h1 className={styles.enhancedBlogTitle}>{blog.title}</h1>

          <div className="d-flex flex-wrap align-items-center gap-3 text-muted mb-4">
            {blog.author && (
              <span className="d-flex align-items-center gap-1">
                <FaUser /> {blog.author}
              </span>
            )}
            <span className="d-flex align-items-center gap-1">
              <FaCalendar /> {blog.formattedDate || (blog.createdAt ? new Date(blog.createdAt).toDateString() : 'Invalid Date')}
            </span>
            <span className="d-flex align-items-center gap-1">
              <FaClock /> {readingTime}
            </span>
          </div>
        </Col>
      </Row>

      {/* Featured Image */}
      {blog.image && (
        <Row className="mb-5">
          <Col>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-100 rounded-3 shadow-lg mb-2"
              style={{ 
                maxHeight: "500px", 
                objectFit: "cover"
              }}
            />
            {blog.imageCaption && (
              <div className="text-center text-muted fst-italic mt-2">
                {blog.imageCaption}
              </div>
            )}
          </Col>
        </Row>
      )}

      {/* Blog Content + Sidebar */}
      <Row className="mb-5">
        {/* Left Column: Blog Content */}
        <Col lg={8}>
          <div className="blog-content">
            {/* Main Content */}
            {blog.content ? (
              blog.content.split("\n").map((paragraph, index) => (
                paragraph.trim() && (
                  <p 
                    key={index} 
                    className="fs-6 text-dark mb-4"
                    style={{ lineHeight: "1.8" }}
                  >
                    {paragraph}
                  </p>
                )
              ))
            ) : (
              <Alert variant="warning">
                No content available for this blog post.
                <div className="mt-2">
                  <small>Available fields: {Object.keys(blog).join(', ')}</small>
                  <br />
                  <small>Blog title: {blog.title}</small>
                </div>
              </Alert>
            )}
          </div>

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-5 pt-4 border-top">
              <h5 className="text-dark mb-3">Tags</h5>
              <div className="d-flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    bg="light"
                    text="dark"
                    className="p-2 px-3 rounded-pill border"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {blog.author && (
            <Card className="mt-5 border-0 shadow-lg">
              <Card.Body 
                className="p-4 text-white rounded-3"
                style={{
                  background: "linear-gradient(135deg, #204569 0%, #4585c5 100%)"
                }}
              >
                <Row className="align-items-center">
                  <Col xs={12}>
                    <h4>About:</h4>
                    <p className="mb-0">
                      {blog.authorBio || `This article was written by ${blog.author}.`}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}

          {/* Share Section */}
          <div className="mt-5 pt-4 border-top">
            <span className="fw-bold text-dark me-3">Share this article:</span>
            <div className="d-flex flex-wrap gap-2 mt-2">
              <Button
                variant="outline-primary"
                className="rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  )
                }
              >
                <FaFacebook /> Facebook
              </Button>
              <Button
                variant="outline-info"
                className="rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(blog.title)}`,
                    "_blank"
                  )
                }
              >
                <FaTwitter /> X
              </Button>
              <Button
                variant="outline-primary"
                className="rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  )
                }
              >
                <FaLinkedin /> LinkedIn
              </Button>
            </div>
          </div>
        </Col>

        {/* Sidebar */}
        <Col lg={4} className="mt-4 mt-lg-0">
          {/* Related Blogs Section */}
          {related.length > 0 && (
            <div className="mb-5">
              <h3 className="fw-bold text-dark mb-4">Related Articles</h3>
              {related.map((item) => (
                <Card
                  key={item._id}
                  className="border-0 shadow-sm rounded-3 mb-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/blog/${item._id}`)}
                >
                  {item.image && (
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ 
                        height: "180px", 
                        objectFit: "cover" 
                      }}
                    />
                  )}
                  <Card.Body>
                    {item.tags && item.tags.length > 0 && (
                      <Badge 
                        bg="primary"
                        className="mb-2 p-1 px-2 rounded-pill fs-7"
                        style={{
                          background: 'linear-gradient(135deg, #007ea7 0%, #005f7a 100%)'
                        }}
                      >
                        {item.tags[0]}
                      </Badge>
                    )}
                    <Card.Title className="fs-6 fw-bold text-dark mb-2">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted small mb-2">
                      <FaCalendar className="me-1" />
                      {item.formattedDate || (item.createdAt ? new Date(item.createdAt).toDateString() : 'Invalid Date')}
                    </Card.Text>
                    <Card.Text className="text-secondary small">
                      {item.content?.length > 100
                        ? item.content.slice(0, 100) + "..."
                        : item.content || 'No description available'}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Popular Tags Section */}
          <div className="mb-4">
            <h4 className="fw-semibold text-dark mb-3">Popular Tags</h4>
            <div className="d-flex flex-wrap gap-2">
              {["WebDev", "React", "AI", "Cloud", "JavaScript", "Node.js"].map((tag, index) => (
                <Link 
                  key={index} 
                  to="#" 
                  className="text-decoration-none"
                >
                  <Badge
                    bg="light"
                    text="dark"
                    className="p-2 px-3 rounded-pill border"
                  >
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Back Button */}
      <div className="text-center mt-4">
        <Button
          variant="link"
          onClick={() => navigate(-1)}
          className="text-decoration-none d-inline-flex align-items-center gap-2 text-primary p-3"
        >
          <FaArrowLeft /> Back to Articles
        </Button>
      </div>
    </Container>
  );
}

export default BlogDetail;