import { useState, useEffect } from "react";
import styles from "./blogcontent.module.css";

function Blogcontent() {
  const [selectedTopic, setSelectedTopic] = useState("Cloud Computing");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const trendingTopics = [
    "Cloud Computing",
    "AI & Machine Learning",
    "Zero Trust Security",
    "Edge Computing",
  ];

  const apiUrls = {
    "Cloud Computing": "https://gnews.io/api/v4/search?q=cloud computing&lang=en&max=5&apikey=72897f6130a3455063d852316099dfab",
    "AI & Machine Learning": "https://gnews.io/api/v4/search?q=AI OR \"machine learning\"&lang=en&max=5&apikey=72897f6130a3455063d852316099dfab",
    "Zero Trust Security": "https://gnews.io/api/v4/search?q=\"zero trust security\" OR \"zero trust\"&lang=en&max=5&apikey=72897f6130a3455063d852316099dfab",
    "Edge Computing": "https://gnews.io/api/v4/search?q=\"edge computing\"&lang=en&max=5&apikey=72897f6130a3455063d852316099dfab",
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrls[selectedTopic]);
        const data = await response.json();
        if (data.articles) {
          const formattedPosts = data.articles.map((article, index) => ({
            id: index,
            title: article.title,
            excerpt: article.description || article.content || "",
            category: selectedTopic,
            date: new Date(article.publishedAt).toLocaleDateString(),
            image: article.image || "images/default-blog.jpg",
            url: article.url,
          }));
          setBlogPosts(formattedPosts);
        } else {
          setBlogPosts([]);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogPosts([]);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [selectedTopic]);

  // 🔹 Excerpt with "Read More" toggle
  const ExcerptWithToggle = ({ text }) => {
    const [expanded, setExpanded] = useState(false);

    return (
      <p className="card-text">
        {expanded ? (
          text
        ) : (
          <span className={styles.truncateTwoLines}>{text}</span>
        )}
        {text.length > 100 && (
          <span
            className={styles.readMore}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? " Show Less" : "... Read More"}
          </span>
        )}
      </p>
    );
  };

  return (
    <section className={styles.blogSection}>
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-5 ${styles.sectionHeader}`}>
          <h2>Insights, Trends & Solutions from IT Experts</h2>
          <p>
            Curated knowledge on cloud, AI, DevOps, security & infrastructure
            modernization to power your business transformation.
          </p>
        </div>

        {/* Trending Topics */}
        <div className={`text-center mb-5 ${styles.trendingTopics}`}>
          <h4 className="mb-3">Trending Topics</h4>
          <div className={styles.badgeWrapper}>
            {trendingTopics.map((topic, index) => (
              <span
                key={index}
                className={`${styles.trendingBadge} ${
                  selectedTopic === topic ? styles.activeBadge : ""
                }`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Cards - Dynamic from API */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {loading ? (
            <p className="text-center">Loading posts...</p>
          ) : blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <div className="col" key={post.id}>
                <div className={`card h-100 ${styles.blogCard}`}>
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    {/* Title clamp */}
                    <h5 className={`card-title ${styles.truncateTwoLines}`}>
                      {post.title}
                    </h5>
                    <p className={`card-text text-primary small mb-1`}>
                      {post.date} · {post.category}
                    </p>
                    {/* Excerpt with toggle */}
                    <ExcerptWithToggle text={post.excerpt} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No articles found for this topic.</p>
          )}
        </div>

        {/* CTA Section */}
        <div className={`mt-5 ${styles.ctaSection}`}>
          <div className="row align-items-center">
            <div className="col-md-9">
              <h3>Looking for Expert Guidance?</h3>
              <p>
                Get customized IT solutions aligned with your business goals.
                Our consultants are ready to help you innovate and grow.
              </p>
            </div>
            <div className="col-md-3 text-md-end mt-4 mt-md-0">
              <a href="#" className="btn btn-light px-4 py-2 rounded-pill">
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mt-5 text-center ${styles.newsletterSection}`}>
          <h3>Stay Updated with the Latest Tech Insights</h3>
          <p>
            Subscribe to our newsletter for monthly updates on enterprise
            technology, AI innovations, and cloud strategies.
          </p>
          <form className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
            <input
              type="email"
              className="form-control w-50"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary px-4" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Blogcontent;
