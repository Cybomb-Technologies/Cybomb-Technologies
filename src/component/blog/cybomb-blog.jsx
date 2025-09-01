import { useNavigate } from "react-router-dom";
import styles from "./cybomb-blog.module.css";
import { useState } from "react";
export const blogData = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "Aug 25, 2025",
    image: "/images/blog/future-web-development.jpg",
    description:
      "Web development is constantly evolving with new frameworks, tools, and best practices. From serverless architectures to AI-powered coding assistants, the future looks exciting. Developers are moving towards faster, scalable, and secure applications. Progressive Web Apps (PWAs) and WebAssembly are bridging the gap between web and native apps. In this article, we explore upcoming trends and how they impact businesses worldwide.",
    fullContent:
      "Web development is constantly evolving with new frameworks, tools, and best practices. From serverless architectures to AI-powered coding assistants, the future looks exciting. Developers are moving towards faster, scalable, and secure applications. Progressive Web Apps (PWAs) and WebAssembly are bridging the gap between web and native apps. In this article, we explore upcoming trends and how they impact businesses worldwide."
  },
  {
    id: 2,
    title: "Why React is Still King",
    date: "Aug 20, 2025",
    image: "/images/blog/react.jpg",
    description:
      "React has been around for years, yet it continues to dominate the frontend landscape. Its component-based structure, huge community, and ecosystem make it unmatched...",
    fullContent:
      "React has been around for years, yet it continues to dominate the frontend landscape. Its component-based structure, huge community, and ecosystem make it unmatched. While other frameworks are gaining traction, React’s flexibility and wide adoption keep it as the top choice for developers and companies alike."
  },
  {
    id: 3,
    title: "Boosting SEO with Modern Practices",
    date: "Aug 15, 2025",
    image: "/images/blog/modern-seo.jpg",
    description:
      "SEO is not just about keywords anymore. With Google’s latest updates, content quality, page performance, and user experience matter more than ever...",
    fullContent:
      "SEO is not just about keywords anymore. With Google’s latest updates, content quality, page performance, and user experience matter more than ever. Businesses that embrace these practices will see sustainable growth in organic traffic. Structured data, Core Web Vitals, and voice search optimization are must-haves in modern SEO."
  },
  {
    id: 4,
    title: "Cloud Computing Trends in 2025",
    date: "Aug 10, 2025",
    image: "/images/blog/cloud-blog.png",
    description:
      "Cloud computing is the backbone of modern business. In 2025, we see trends like multi-cloud strategies, serverless adoption, and AI-driven cloud management...",
    fullContent:
      "Cloud computing is the backbone of modern business. In 2025, we see trends like multi-cloud strategies, serverless adoption, and AI-driven cloud management. Security and cost optimization are also shaping how companies use cloud services. This article covers the major shifts to expect in the cloud landscape."
  },
  {
    id: 5,
    title: "The Rise of No-Code Development",
    date: "Aug 05, 2025",
    image: "/images/blog/no-code.png",
    description:
      "No-code platforms are making it easier for businesses and entrepreneurs to build apps without coding knowledge. But will they replace developers? Let’s find out...",
    fullContent:
      "No-code platforms are making it easier for businesses and entrepreneurs to build apps without coding knowledge. But will they replace developers? Let’s find out. No-code is great for MVPs and rapid prototyping, but complex systems will still need professional developers. The rise of no-code is changing the way businesses approach software development."
  },
  {
    id: 6,
    title: "Cybersecurity Essentials for Businesses",
    date: "Aug 01, 2025",
    image: "/images/blog/cyber-security.png",
    description:
      "With cyber threats on the rise, businesses need to adopt strong security practices. From encryption to zero-trust policies, here’s what you should know...",
    fullContent:
      "With cyber threats on the rise, businesses need to adopt strong security practices. From encryption to zero-trust policies, here’s what you should know. Cybersecurity is no longer optional — it’s a must for businesses of all sizes. This article highlights key security measures every business should implement in 2025."
  },
  {
  id: 7,
  title: "TypeScript: From Optional to Essential",
  date: "Sep 01, 2025",
  image: "/images/blog/typescript.png",
  description:
    "How TypeScript evolved from a nice-to-have to a non-negotiable standard for professional web development. It catches errors early, enhances developer experience, and enables robust architectural patterns.",
  fullContent:
    "TypeScript's journey to becoming the de facto standard is a lesson in scaling code quality. Its primary value is shifting bug detection from runtime to compile time, preventing a whole class of exceptions. It acts as living documentation, providing intelligent code completion and safe refactoring. For any project beyond a simple prototype, starting without TypeScript now incurs significant technical debt."
},
{
  id: 8,
  title: "Technical SEO Audit: A Checklist for Developers",
  date: "Aug 28, 2025",
  image: "/images/blog/technical-seo.png",
  description:
    "A developer-focused guide to the critical technical foundations for SEO. Covers crawlability, site architecture, Core Web Vitals, and structured data implementation.",
  fullContent:
    "Marketing creates content, but developers build the foundation. This guide covers the essential technical checklist: ensuring crawlability with proper robots.txt and sitemaps, creating a logical site architecture, optimizing for Core Web Vitals (LCP, CLS, INP), and implementing structured data (Schema.org) to earn rich results. A quarterly technical audit is essential for maintaining SEO health."
},
{
  id: 9,
  title: "Kubernetes in Production: Lessons from the Field",
  date: "Aug 12, 2025",
  image: "/images/blog/Kubernetes.png",
  description:
    "A practical guide to the operational challenges of running Kubernetes. Covers resource management, security, GitOps, and knowing when to use alternatives.",
  fullContent:
    "Kubernetes has won the container orchestration war, but operationalizing it remains a challenge. Key lessons include: managing day-two operations like monitoring and logging, configuring resource requests and limits to prevent instability, implementing Pod Security Standards and secrets management, embracing GitOps for declarative cluster management, and knowing when simpler solutions like managed services are more appropriate."
},
{
  id: 10,
  title: "Securing the API Economy",
  date: "Aug 05, 2025",
  image: "/images/blog/secure-api.png",
  description:
    "APIs are the backbone of modern applications but are a primary attack vector. Learn to protect against the OWASP API Security Top 10 risks like BOLA and excessive data exposure.",
  fullContent:
    "With APIs powering everything from mobile apps to microservices, their security is critical. This article addresses the OWASP API Security Top 10, including Broken Object Level Authorization (BOLA—the #1 vulnerability), authentication failures, excessive data exposure, lack of rate limiting, and security misconfiguration. Security must be integrated into the API lifecycle from design to runtime."
},
{
  id: 11,
  title: "The State of DevOps: Scaling CI/CD in 2025",
  date: "Aug 10, 2025",
  image: "/images/blog/devops.png",
  description:
    "How leading organizations are evolving CI/CD beyond basic automation. Explores platform engineering, AI-powered pipelines, and shift-left security practices.",
  fullContent:
    "Modern CI/CD is about creating a seamless, automated path to production. The new paradigm involves platform engineering—providing developers with self-service internal platforms that abstract away complexity. Trends include AI-powered pipelines that predict test flakiness and optimize builds, integrating shift-left security (SAST, SCA) directly into pull requests, and using sophisticated deployment strategies like canary releases and feature flags."
}
];

export default function CybombBlog() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 blogs if collapsed, else show all
  const visibleBlogs = showAll ? blogData : blogData.slice(0, 3);
  return (
    <div className={styles.blogSection}>
      {/* Dynamic Heading */}
      <h2 className={styles.blogHeading}>Cybomb Blogs</h2>
      <div className={styles.blogGrid}>
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <img
              src={blog.image}
              alt={blog.title}
              className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogDate}>{blog.date}</p>
              <p className={styles.blogDescription}>
                {blog.description.length > 120
                  ? blog.description.slice(0, 120) + "..."
                  : blog.description}
              </p>
            </div>
            <button
              className={styles.readMoreBtn}
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              Read More...
            </button>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      <div className={styles.toggleButtonWrapper}>
        <button
          className={styles.toggleButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}