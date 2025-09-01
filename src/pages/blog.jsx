import Blogbanner from "../component/blog/blog-banner";
import Blogcontent from "../component/blog/blog-content";
import CybombBlog from "../component/blog/cybomb-blog";

function Blog() {
  return (
    <>
      <Blogbanner />
      <CybombBlog/>
      <Blogcontent />
    </>
  );
}

export default Blog;
