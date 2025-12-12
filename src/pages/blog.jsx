import { Routes, Route } from "react-router-dom";
import Blogbanner from "../component/blog/blog-banner";
import Blogcontent from "../component/blog/blog-content";
import CybombBlog from "../component/blog/cybomb-blog";
// import { BlogPost } from "../component/blog/cybomb-blog";
import Metatags from "../SEO/meta-tags";


function Blog() {

  const metaPropsData = {
    title: "Latest Web Development & AI Insights | Cybomb Blog",
    description:
      "Explore Cybomb Technologies Blog – articles on web development, mobile apps, AI, SaaS, UI/UX, cloud solutions, and digital transformation for businesses worldwide.",
    keyword:
      "Cybomb Blog, Web Development Blog, AI Blog, SaaS Blog, Mobile App Development Articles, UI UX Tips, Tech News, Cybomb Technologies",
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
