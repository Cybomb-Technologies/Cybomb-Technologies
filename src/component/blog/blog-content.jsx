import { useState } from "react";
import styles from"./blogcontent.module.css";

function Blogcontent() {
const [selectedTopic, setSelectedTopic] = useState("Cloud Computing");

const blogPosts = [
  // Cloud Computing
  {
    id: 1,
    title: "Cloud Migration Blueprint: Secure, Scalable, Seamless",
    excerpt: "Explore the roadmap to successful cloud migration with minimal downtime.",
    date: "August 03, 2025",
    category: "Cloud Computing",
    image: "images/blog/cloud-1.png",
  },
  {
    id: 2,
    title: "Cloud Cost Optimization: Save Without Sacrificing Performance",
    excerpt: "Learn practical ways to cut cloud bills and maintain performance.",
    date: "August 10, 2025",
    category: "Cloud Computing",
    image: "images/blog/cloud-2.png",
  },
  {
    id: 3,
    title: "Best Practices for Multi-Cloud Architecture",
    excerpt: "Avoid vendor lock-in and design resilient, multi-cloud solutions.",
    date: "August 15, 2025",
    category: "Cloud Computing",
    image: "images/blog/cloud-3.png",
  },
  {
    id: 4,
    title: "Serverless Architectures: When and Why to Use Them",
    excerpt: "Get clarity on serverless benefits, drawbacks, and best use cases.",
    date: "August 20, 2025",
    category: "Cloud Computing",
    image: "images/blog/cloud-4.jpg",
  },
  {
    id: 5,
    title: "Top 10 Cloud Monitoring Tools in 2025",
    excerpt: "Compare leading cloud observability platforms for your stack.",
    date: "August 22, 2025",
    category: "Cloud Computing",
    image: "images/blog/cloud-5.png",
  },
  {
    id: 6,
    title: "Disaster Recovery in the Cloud: Step-by-Step Guide",
    excerpt: "Build a cloud-first recovery strategy to ensure business continuity.",
    date: "August 26, 2025",
    category: "Cloud Computing",
    image: "images/blog/cloud-6.png",
  },

  // AI & Machine Learning
  {
    id: 7,
    title: "AI for IT Operations (AIOps): A Game-Changer in 2025",
    excerpt: "Enable predictive maintenance and automated resolution.",
    date: "August 06, 2025",
    category: "AI & Machine Learning",
    image: "images/blog/ai-1.jpg",
  },
  {
    id: 8,
    title: "Top AI Use Cases for Enterprises",
    excerpt: "From chatbots to fraud detection—AI in real-world business.",
    date: "August 11, 2025",
    category: "AI & Machine Learning",
    image: "images/blog/ai-2.png",
  },
  
  // {
  //   id: 9,
  //   title: "Responsible AI: Ethics and Transparency in 2025",
  //   excerpt: "Ensure fairness, explainability, and compliance in AI systems.",
  //   date: "August 14, 2025",
  //   category: "AI & Machine Learning",
  //   image: "images/blog/ai-3.jpg",
  // },
  // {
  //   id: 10,
  //   title: "The Rise of Generative AI in Business",
  //   excerpt: "Discover how generative AI is disrupting design, content, and dev.",
  //   date: "August 19, 2025",
  //   category: "AI & Machine Learning",
  //   image: "images/blog/ai-4.jpg",
  // },
  // {
  //   id: 11,
  //   title: "Data Engineering for Machine Learning Pipelines",
  //   excerpt: "Build scalable pipelines to feed your ML models.",
  //   date: "August 25, 2025",
  //   category: "AI & Machine Learning",
  //   image: "images/blog/ai-5.jpg",
  // },
  // {
  //   id: 12,
  //   title: "MLOps Best Practices for Continuous Learning",
  //   excerpt: "Automate retraining, testing, and deployment of ML models.",
  //   date: "August 29, 2025",
  //   category: "AI & Machine Learning",
  //   image: "images/blog/ai-6.jpg",
  // },

  // // Zero Trust Security
  // {
  //   id: 13,
  //   title: "Zero Trust Security: Principles, Pillars & Practices",
  //   excerpt: "Why Zero Trust is the new standard in enterprise security.",
  //   date: "August 07, 2025",
  //   category: "Zero Trust Security",
  //   image: "images/blog/zero-1.jpg",
  // },
  // {
  //   id: 14,
  //   title: "Identity and Access Management in Zero Trust",
  //   excerpt: "Control and verify every user and device every time.",
  //   date: "August 12, 2025",
  //   category: "Zero Trust Security",
  //   image: "images/blog/zero-2.jpg",
  // },
  // {
  //   id: 15,
  //   title: "Microsegmentation Strategies for Zero Trust",
  //   excerpt: "Limit lateral movement by isolating workloads effectively.",
  //   date: "August 16, 2025",
  //   category: "Zero Trust Security",
  //   image: "images/blog/zero-3.jpg",
  // },
  // {
  //   id: 16,
  //   title: "Zero Trust vs. Traditional Security: Key Differences",
  //   excerpt: "Understand how Zero Trust shifts the security paradigm.",
  //   date: "August 18, 2025",
  //   category: "Zero Trust Security",
  //   image: "images/blog/zero-4.jpg",
  // },
  // {
  //   id: 17,
  //   title: "Implementing ZTNA: A Technical Walkthrough",
  //   excerpt: "Secure your remote workforce with Zero Trust Network Access.",
  //   date: "August 23, 2025",
  //   category: "Zero Trust Security",
  //   image: "images/blog/zero-5.jpg",
  // },
  // {
  //   id: 18,
  //   title: "Top Tools for Zero Trust Security in 2025",
  //   excerpt: "Compare leading platforms and vendors supporting Zero Trust.",
  //   date: "August 27, 2025",
  //   category: "Zero Trust Security",
  //   image: "images/blog/zero-6.jpg",
  // },

  // // Edge Computing
  // {
  //   id: 19,
  //   title: "Top 5 Emerging Technologies Impacting Enterprise IT",
  //   excerpt: "Edge computing, quantum security, and more innovations.",
  //   date: "August 09, 2025",
  //   category: "Edge Computing",
  //   image: "images/blog/edge-1.jpg",
  // },
  // {
  //   id: 20,
  //   title: "What is Edge AI? Use Cases & Trends",
  //   excerpt: "Run intelligent models closer to data sources with Edge AI.",
  //   date: "August 13, 2025",
  //   category: "Edge Computing",
  //   image: "images/blog/edge-2.jpg",
  // },
  // {
  //   id: 21,
  //   title: "5G and Edge Computing: Perfect Match?",
  //   excerpt: "Unlock low-latency apps with this powerful combo.",
  //   date: "August 17, 2025",
  //   category: "Edge Computing",
  //   image: "images/blog/edge-3.jpg",
  // },
  // {
  //   id: 22,
  //   title: "Edge vs Cloud: Where Should You Process Data?",
  //   excerpt: "Decide between centralized and decentralized architectures.",
  //   date: "August 21, 2025",
  //   category: "Edge Computing",
  //   image: "images/blog/edge-4.jpg",
  // },
  // {
  //   id: 23,
  //   title: "Securing Edge Devices: Challenges and Solutions",
  //   excerpt: "Tackle the unique risks of edge computing environments.",
  //   date: "August 24, 2025",
  //   category: "Edge Computing",
  //   image: "images/blog/edge-5.jpg",
  // },
  // {
  //   id: 24,
  //   title: "Edge-Oriented Architectures in IoT Systems",
  //   excerpt: "Streamline sensor data processing using edge paradigms.",
  //   date: "August 28, 2025",
  //   category: "Edge Computing",
  //   image: "images/blog/edge-6.jpg",
  // },

  // // DevOps Automation
  // {
  //   id: 25,
  //   title: "Building Resilient DevOps Pipelines for Rapid Deployment",
  //   excerpt: "Automate and scale with CI/CD best practices.",
  //   date: "August 08, 2025",
  //   category: "DevOps Automation",
  //   image: "images/blog/devops-1.jpg",
  // },
  // {
  //   id: 26,
  //   title: "Top CI/CD Tools in 2025: Jenkins vs GitHub Actions",
  //   excerpt: "Compare performance, flexibility, and usability.",
  //   date: "August 13, 2025",
  //   category: "DevOps Automation",
  //   image: "images/blog/devops-2.jpg",
  // },
  // {
  //   id: 27,
  //   title: "Infrastructure as Code (IaC) with Terraform",
  //   excerpt: "Automate cloud infrastructure for consistency and speed.",
  //   date: "August 17, 2025",
  //   category: "DevOps Automation",
  //   image: "images/blog/devops-3.jpg",
  // },
  // {
  //   id: 28,
  //   title: "DevSecOps: Integrating Security into DevOps",
  //   excerpt: "Secure your pipeline without slowing it down.",
  //   date: "August 20, 2025",
  //   category: "DevOps Automation",
  //   image: "images/blog/devops-4.jpg",
  // },
  // {
  //   id: 29,
  //   title: "Monitoring DevOps KPIs that Matter",
  //   excerpt: "Focus on DORA metrics, cycle time, and error rates.",
  //   date: "August 22, 2025",
  //   category: "DevOps Automation",
  //   image: "images/blog/devops-5.jpg",
  // },
  // {
  //   id: 30,
  //   title: "Automated Testing Strategies for Large-Scale Systems",
  //   excerpt: "Improve quality and speed with smart test coverage.",
  //   date: "August 27, 2025",
  //   category: "DevOps Automation",
  //   image: "images/blog/devops-6.jpg",
  // },

  // // IT Strategy
  // {
  //   id: 31,
  //   title: "Future-Proofing Your IT Strategy in 2025",
  //   excerpt: "Align your technology roadmap with long-term goals.",
  //   date: "August 12, 2025",
  //   category: "IT Strategy",
  //   image: "images/blog/strategy-1.jpg",
  // },
  // {
  //   id: 32,
  //   title: "CIO Priorities in the Age of Digital Acceleration",
  //   excerpt: "Focus areas and investments for enterprise IT leaders.",
  //   date: "August 14, 2025",
  //   category: "IT Strategy",
  //   image: "images/blog/strategy-2.jpg",
  // },
  // {
  //   id: 33,
  //   title: "IT-Business Alignment: Closing the Gap",
  //   excerpt: "Bridge strategy execution between tech and operations.",
  //   date: "August 16, 2025",
  //   category: "IT Strategy",
  //   image: "images/blog/strategy-3.jpg",
  // },
  // {
  //   id: 34,
  //   title: "CapEx vs OpEx in Cloud Strategy",
  //   excerpt: "How cloud adoption shifts budget strategy.",
  //   date: "August 18, 2025",
  //   category: "IT Strategy",
  //   image: "images/blog/strategy-4.jpg",
  // },
  // {
  //   id: 35,
  //   title: "IT Risk Management in a Hybrid World",
  //   excerpt: "Anticipate risks across cloud, edge, and on-prem.",
  //   date: "August 21, 2025",
  //   category: "IT Strategy",
  //   image: "images/blog/strategy-5.jpg",
  // },
  // {
  //   id: 36,
  //   title: "KPIs for Measuring IT Success in 2025",
  //   excerpt: "Track performance and impact with meaningful metrics.",
  //   date: "August 26, 2025",
  //   category: "IT Strategy",
  //   image: "images/blog/strategy-6.jpg",
  // },

  // // Kubernetes
  // {
  //   id: 37,
  //   title: "Kubernetes for Enterprise: Scaling Made Simple",
  //   excerpt: "Run containers at scale with security and reliability.",
  //   date: "August 11, 2025",
  //   category: "Kubernetes",
  //   image: "images/blog/k8s-1.jpg",
  // },
  // {
  //   id: 38,
  //   title: "Helm Charts for Efficient Kubernetes Deployment",
  //   excerpt: "Simplify app deployment with reusable templates.",
  //   date: "August 15, 2025",
  //   category: "Kubernetes",
  //   image: "images/blog/k8s-2.jpg",
  // },
  // {
  //   id: 39,
  //   title: "Service Mesh Explained: Istio & Linkerd",
  //   excerpt: "Manage traffic, security, and observability in clusters.",
  //   date: "August 17, 2025",
  //   category: "Kubernetes",
  //   image: "images/blog/k8s-3.jpg",
  // },
  // {
  //   id: 40,
  //   title: "Kubernetes Security Best Practices",
  //   excerpt: "Avoid common pitfalls and secure workloads.",
  //   date: "August 20, 2025",
  //   category: "Kubernetes",
  //   image: "images/blog/k8s-4.jpg",
  // },
  // {
  //   id: 41,
  //   title: "Auto-Scaling Kubernetes Clusters with HPA",
  //   excerpt: "Right-size workloads with Horizontal Pod Autoscaler.",
  //   date: "August 23, 2025",
  //   category: "Kubernetes",
  //   image: "images/blog/k8s-5.jpg",
  // },
  // {
  //   id: 42,
  //   title: "Managing Stateful Workloads in Kubernetes",
  //   excerpt: "Leverage StatefulSets and persistent volumes effectively.",
  //   date: "August 27, 2025",
  //   category: "Kubernetes",
  //   image: "images/blog/k8s-6.jpg",
  // },

  // // Hybrid Cloud
  // {
  //   id: 43,
  //   title: "Mastering Hybrid Cloud Management in 2025",
  //   excerpt: "Balance public and private cloud environments efficiently.",
  //   date: "August 10, 2025",
  //   category: "Hybrid Cloud",
  //   image: "images/blog/hybrid-1.jpg",
  // },
  // {
  //   id: 44,
  //   title: "Hybrid Cloud Security Challenges & Solutions",
  //   excerpt: "Secure data across cloud and on-prem systems.",
  //   date: "August 13, 2025",
  //   category: "Hybrid Cloud",
  //   image: "images/blog/hybrid-2.jpg",
  // },
  // {
  //   id: 45,
  //   title: "Cloud Bursting: The Hybrid Advantage",
  //   excerpt: "Automatically scale into the cloud during demand spikes.",
  //   date: "August 16, 2025",
  //   category: "Hybrid Cloud",
  //   image: "images/blog/hybrid-3.jpg",
  // },
  // {
  //   id: 46,
  //   title: "Hybrid Cloud Monitoring Tools in 2025",
  //   excerpt: "Gain full-stack visibility across environments.",
  //   date: "August 19, 2025",
  //   category: "Hybrid Cloud",
  //   image: "images/blog/hybrid-4.jpg",
  // },
  // {
  //   id: 47,
  //   title: "Unified Identity Management in Hybrid Environments",
  //   excerpt: "Ensure seamless access control across platforms.",
  //   date: "August 21, 2025",
  //   category: "Hybrid Cloud",
  //   image: "images/blog/hybrid-5.jpg",
  // },
  // {
  //   id: 48,
  //   title: "Cost Governance for Hybrid Cloud Workloads",
  //   excerpt: "Monitor, analyze, and optimize hybrid expenses.",
  //   date: "August 25, 2025",
  //   category: "Hybrid Cloud",
  //   image: "images/blog/hybrid-6.jpg",
  // },
];

const trendingTopics = [
  "Cloud Computing",
  "AI & Machine Learning",
  // "Zero Trust Security",
  // "Edge Computing",
  // "DevOps Automation",
  // "IT Strategy",
  // "Kubernetes",
  // "Hybrid Cloud",
];

const filteredPosts = blogPosts.filter((post) => post.category === selectedTopic);
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const otherPosts = filteredPosts.slice(1);

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

        {/* Featured Post */}
        {featuredPost && (
  <section className={`position-relative overflow-hidden py-5 px-3 px-md-5 rounded-4 ${styles.featuredCreative}`}>
    {/* Artistic background gradient */}
    <div className={styles.decorativeBlob}></div>

    <div className="row align-items-center">
      {/* Left Textual Content */}
      <div className="col-lg-6 mb-5 mb-lg-0 z-2">
        <span className={`badge rounded-pill mb-3 ${styles.topicTag}`}>
          🔥 Trending Topic: {featuredPost.category}
        </span>

        <h2 className={`fw-bold display-6 mb-4 ${styles.featuredTitle}`}>
          {featuredPost.title}
        </h2>

        <p className={`lead mb-4 ${styles.featuredExcerpt}`}>
          {featuredPost.excerpt} This spotlight post decodes the strategic adoption of cloud technology and what it means for modern infrastructure.
        </p>

        {/* Metadata Row */}
        <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
          <div className={styles.metaItem}>
            📅 {featuredPost.date}
          </div>
          <div className={styles.metaItem}>
            ⏱️ 6 min read
          </div>
          <div className={styles.metaItem}>
            👁️ 2.3k Views
          </div>
        </div>

        {/* Author CTA */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="images/authors/editorial-team.jpg"
            alt="Author"
            className={`${styles.authorImage}`}
          />
          <div>
            <div className="fw-semibold">Editorial Team</div>
            <div className="text-muted small">Senior Content Writers</div>
          </div>
        </div>
      </div>

      {/* Right Side Image with Tilt Effect */}
      <div className="col-lg-6 z-2">
        <div className={`shadow rounded-4 overflow-hidden ${styles.imageWrap}`}>
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  </section>
)}

        {/* Blog Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {otherPosts.length > 0 ? (
            otherPosts.map((post) => (
              <div className="col" key={post.id}>
                <div className={`card h-100 ${styles.blogCard}`}>
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className={`card-text text-primary small mb-1`}>
                      {post.date} · {post.category}
                    </p>
                    <p className="card-text">{post.excerpt}</p>
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