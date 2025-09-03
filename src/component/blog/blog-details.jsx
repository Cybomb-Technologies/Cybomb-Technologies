import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaCalendar, FaUser, FaClock, FaTag } from "react-icons/fa";
import styles from "./blog-details.module.css";
import { Link } from "react-router-dom";
import { blogDetails } from "./blog-details-data";
import BlogTags from "./blog-tags";
function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog with matching ID
  const blog = blogDetails.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <Container className="my-5 py-5 text-center">
        <h2>Blog not found</h2>
        <Button variant="primary" onClick={() => navigate("/blog")} className="mt-3">
          Back to Blog
        </Button>
      </Container>
    );
  }

  // Filter related blogs (same category, excluding current)
  const related = blogDetails
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  // Format reading time
  const readingTime = Math.ceil(blog.content.split(" ").length / 200);

  return (
    <Container className={`my-5 ${styles.blogDetailPage}`}>
      

      {/* Blog Header */}
      <Row className="mb-4">
        <Col>
          <Badge className={styles.customCategoryBadge}>
            <FaTag className="me-1" /> {blog.category}
          </Badge>
          <h1 className={styles.enhancedBlogTitle}>{blog.title}</h1>
          <div className={styles.metaInfo}>
            <span className={styles.metaItem}>
              <FaUser /> {blog.author}
            </span>
            <span className={styles.metaItem}>
              <FaCalendar /> {blog.date}
            </span>
            <span className={styles.metaItem}>
              <FaClock /> {readingTime} min read
            </span>
          </div>
        </Col>
      </Row>

      {/* Featured Image */}
      <Row className="mb-4">
        <Col>
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.enhancedDetailImage}
          />
          {blog.imageCaption && (
            <div className={styles.imageCaption}>
              {blog.imageCaption}
            </div>
          )}
        </Col>
      </Row>
{/* Blog Content + Sidebar */}
<Row className="mb-5">
  {/* Left Column: Blog Content */}
  <Col lg={8}>
    <div className={`${styles.enhancedContent} ${styles.animatedContent}`}>
      <p className={styles.leadParagraph}>{blog.excerpt}</p>
      {blog.content.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <BlogTags tags={blog.tags} />


    {/* Author Bio */}
    {blog.authorBio && (
      <Card className={`mt-5 ${styles.enhancedAuthorBio}`}>
        <Card.Body className="p-4 text-white">
          <Row className="align-items-center">
            <Col xs={3} md={2}>
              <img
                src={blog.authorImage}
                alt={blog.author}
                className={`${styles.authorImage} rounded-circle`}
              />
            </Col>
            <Col xs={9} md={10}>
              <h4>About {blog.author}</h4>
              <p className="mb-0">{blog.authorBio}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )}

    {/* Share Section */}
    <div className={`mt-5 ${styles.enhancedShareSection}`}>
      <span className={styles.shareTitle}>Share this article:</span>
      <div className="d-flex flex-wrap gap-2 mt-2">
        {/* Facebook */}
        <Button
          variant="outline"
          className={`${styles.customShareBtn} ${styles.facebookBtn}`}
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
              "_blank"
            )
          }
        >
          <FaFacebook /> Facebook
        </Button>

        {/* X (Twitter) */}
        <Button
          variant="outline"
          className={`${styles.customShareBtn} ${styles.twitterBtn}`}
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`,
              "_blank"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="me-1"
          >
            <path d="M18.244 2H21l-7.845 9.157L22 22h-7.422l-5.422-6.611L3.244 22H1l8.646-10.09L2 2h7.489l4.754 5.792L18.244 2z" />
          </svg>
          X
        </Button>

        {/* LinkedIn */}
        <Button
          variant="outline"
          className={`${styles.customShareBtn} ${styles.linkedinBtn}`}
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
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
<Col lg={4} className={styles.sidebar}>
  {/* Related Blogs Section */}
  {related.length > 0 && (
    <div className={`${styles.enhancedRelatedSection} mb-5`}>
      <h3 className={styles.relatedTitle}>Related Articles</h3>
      {related.map((item) => (
        <Card
          key={item.id}
          className={`${styles.enhancedRelatedCard} mb-4`}
          onClick={() => navigate(`/blog/${item.id}`)}
        >
          <Card.Img
            variant="top"
            src={item.image}
            className={styles.enhancedRelatedImage}
          />
          <Card.Body className={styles.enhancedRelatedBody}>
            <Badge className={styles.customCategoryBadge1}>
              {item.category || "General"}
            </Badge>
            <Card.Title className={styles.enhancedRelatedTitle}>
              {item.title}
            </Card.Title>
            <Card.Text className={styles.enhancedRelatedDate}>
              <FaCalendar className="me-1" /> {item.date}
            </Card.Text>
            <Card.Text className={styles.enhancedRelatedExcerpt}>
              {item.description?.length > 100
                ? item.description.slice(0, 100) + "..."
                : item.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )}

{/* Extra Sidebar Content */}
<div className={styles.sidebarSection}>
  <h4 className={styles.sidebarTitle}>Popular Tags</h4>
  <div className="d-flex flex-wrap gap-2">
    {[
      { label: "WebDev", path: "#" },
      { label: "React", path: "#" },
      { label: "AI", path: "#" },
      { label: "Cloud", path: "#" }
    ].map((tag, index) => (
      <Link 
        key={index} 
        to={tag.path} 
        className={styles.tagLink}
      >
        <Badge className={styles.customTag}>
          #{tag.label}
        </Badge>
      </Link>
    ))}
  </div>
</div>
</Col>

</Row>
{/* Back Button */}
      <button onClick={() => navigate(-1)} className={styles.customBackBtn}>
        <FaArrowLeft /> Back to Articles
      </button>
    </Container>
  );
}

export default BlogDetail;