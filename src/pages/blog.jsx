import { Routes, Route } from "react-router-dom";
import Blogbanner from "../component/blog/blog-banner";
import Blogcontent from "../component/blog/blog-content";
import CybombBlog from "../component/blog/cybomb-blog";
// import { BlogPost } from "../component/blog/cybomb-blog";

function Blog() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Blogbanner />
            <CybombBlog/>
            <Blogcontent />
          </>
        } 
      />
      {/* <Route path="/:id" element={<BlogPost />} /> */}
    </Routes>
  );
}

export default Blog;