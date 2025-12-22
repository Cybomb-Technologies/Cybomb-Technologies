import { Routes, Route } from "react-router-dom";
import Blogbanner from "../component/blog/blog-banner";
import Blogcontent from "../component/blog/blog-content";
import CybombBlog from "../component/blog/cybomb-blog";
// import { BlogPost } from "../component/blog/cybomb-blog";
import Metatags from "../SEO/meta-tags";

function Blog() {
  const metaPropsData = {
    title: "Latest Web Development & AI Insights Articles | Cybomb Tech Blogs",
    description:
      "Explore Cybomb Technologies articles on web development, mobile apps, AI Solutions, SaaS, UI/UX, cloud solutions and digital transformation strategies globally.",
    keyword:
      "web development blog, ai blog, saas blog, mobile app development articles, ui ux tips, tech news",
    url: "https://www.cybomb.com/blog",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Blogbanner />
              <CybombBlog />
              <Blogcontent />
            </>
          }
        />

        {/* For Single Blog Post */}
        {/* <Route path="/:id" element={<BlogPost />} /> */}
      </Routes>
    </>
  );
}

export default Blog;
